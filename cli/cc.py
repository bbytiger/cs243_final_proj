import datetime
import pathlib

import click
import tabulate

import typelayer
import serializer

class CliManager:
    def __init__(self, parent_dir):
        self.path = pathlib.Path(parent_dir)
        self.pipelines = self.load()

    def pipeline_exists(self, pipeline_name: str):
        for pipeline in self.pipelines:
            if pipeline.name == pipeline_name:
                return True
        return False

    def append_pipeline(self, pipeline: typelayer.Pipeline):
        self.pipelines.append(pipeline.transform())
        uuid_path = self.path / pipeline.uuid
        serializer.Serializer.write_pyobj(pipeline, uuid_path)

    def remove_pipeline(self, pipeline_name: str):
        uuid_path = None
        for pipeline in self.pipelines:
            if pipeline.name == pipeline_name:
                uuid_path = self.path / pipeline.uuid
                self.pipelines.remove(pipeline)
        if not uuid_path is None:
            serializer.Serializer.remove_pyobj(uuid_path)

    def sync(self):
        # write to pipeline config file
        config = self.path / 'config'
        serializer.Serializer.write_pyobj(self.pipelines, config)

    def load(self):
        # load from config file
        config = self.path / 'config'
        if config.exists():
            self.pipelines = serializer.Serializer.read_pyobj(config)
        else:
            self.pipelines = []

class CliUtils:

    @classmethod
    def prompt_until_success(message, process_f):
        while 1:
            try:
                user_input = click.prompt(message)
                return process_f(user_input)
            except Exception as e:
                click.echo(e)
                click.echo("Please try again.")

    @classmethod
    def validate_path(path):
        if pathlib.Path(path).exists():
            return path
        else:
            raise Exception("Path does not exist.")

@click.group()
@click.option('--clidata_path', default="./cache")
@click.option('--verbose/--quiet', default=False)
@click.pass_context
def cli(ctx, clidata_path, debug):
    if debug:
        click.echo('Debug mode is on')
        click.echo('Config path set to {}'.format(clidata_path))
    ctx.ensure_object(dict)
    ctx.object['DEBUG'] = debug
    ctx.object['MANAGER'] = CliManager(clidata_path)

@cli.command()
@click.pass_context
def list_pipelines(ctx):
    click.echo(
        tabulate.tabulate(
            ctx.object['MANAGER'].pipelines, 
            headers=["NAME", "STAGE COUNT", "CREATED AT", "ID"]
        )
    )

@cli.command()
@click.option('--name', required=True)
@click.option('--stagecount', default=1)
@click.pass_context
def create_pipeline(ctx, name, stagecount):

    def create_stage(pipeline_name, index):
        # TODO: run some optimizations to give user suggestions
        stage_type = CliUtils.prompt_until_success(
            "Choose stage type: (PREPROCESSING / TRAINING / DATA_TRANSFER)", 
            lambda user_inp: typelayer.StageType[str(user_inp).upper()])
        machine_type = click.prompt(
            'Enter your preferred machine type: ', default="a1.medium"
        )
        script_path = CliUtils.prompt_until_success(
            "Enter script path: ",
            lambda user_inp: CliUtils.validate_path(user_inp)
        )
        source_data = CliUtils.prompt_until_success(
            "Enter source data path: ",
            lambda user_inp: CliUtils.validate_path(user_inp)
        ) # TODO: allow better way for user to specify data location
        dst_path = CliUtils.prompt_until_success(
            "Enter destination path: (RETURN if none)",
            lambda user_inp: None if user_inp == "" else CliUtils.validate_path(user_inp)
        ) 
        location_constraint = CliUtils.prompt_until_success(
            "Enter location constraint: (RETURN if none)",
            lambda user_inp: (
                None if user_inp == "" else user_inp
            )
        )
        provider = CliUtils.prompt_until_success(
            "Enter provider preference: (AWS/GCP, RETURN if none)", 
            lambda user_inp: (
                None if user_inp == "" 
                else typelayer.ProviderType[str(user_inp).upper()]
            )
        )
        return typelayer.Stage(
            pipeline_name=pipeline_name,
            index=index,
            hardware=machine_type, 
            script_path=script_path,
            src_data_path=source_data,
            dst_data_path=dst_path,
            type=stage_type,
            region=location_constraint, 
            provider=provider
        )

    initial_location = click.prompt("Enter an initial location: ")
    pipeline = typelayer.Pipeline(stagecount, name, initial_location, datetime.datetime.now())
    for i in range(stagecount):
        pipeline.add_stage(create_stage(name, i))
    ctx.object['MANAGER'].append_pipeline(pipeline)
    ctx.object['MANAGER'].sync()
    click.echo("Successfully created pipeline.")

@cli.command()
@click.option('--name', required=True)
@click.pass_context
def remove_pipeline(ctx, name):
    if not ctx.object['MANAGER'].pipeline_exists(name):
        click.echo("No pipeline found with specified name.")
    else:
        ctx.object['MANAGER'].remove_pipeline(name)
        click.echo("Successfully removed pipeline.")

@cli.command()
@click.option('--name', required=True)
@click.pass_context
def run_pipeline(ctx, name):
    # will need to have reporting metrics here
    pass

if __name__ == "__main__":
    cli()