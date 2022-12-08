const datatransfer = {
    vers: 0.01,
    config: {
        currencies: ["USD"],
        valueColumns: ["pricing"],
        rate: "perGB",
        regions: [{
            region: "us-east-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "us-east-2",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "us-east-2",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "us-east-1",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "us-west-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "us-west-2",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "ap-south-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.086"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.1093"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.082"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.080"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "ap-northeast-3",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.140"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.135"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.130"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.120"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "ap-northeast-2",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.080"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.126"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.122"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.117"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.108"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "ap-southeast-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.120"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.082"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.080"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "ap-southeast-2",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.140"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.140"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.135"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.130"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.120"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "ap-northeast-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.140"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.135"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.130"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.120"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "ca-central-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "eu-central-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "eu-west-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "eu-west-2",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "eu-west-3",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.020"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.085"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.070"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.050"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "sa-east-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.160"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.250"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.230"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.210"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.190"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }, {
            region: "us-gov-west-1",
            types: [{
                name: "dataXferInEC2",
                tiers: [{
                    name: "Internet",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherRegion",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "anotherService",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZText",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIP",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIP",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZ",
                    prices: {
                        USD: "0.010"
                    }
                }]
            }, {
                name: "dataXferOutEC2",
                tiers: [{
                    name: "anotherServiceOut",
                    prices: {
                        USD: "0.030"
                    }
                }, {
                    name: "sameAZTextOut",
                    prices: {
                        USD: ""
                    }
                }, {
                    name: "sameAZprivateIPOut",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "sameAZpublicIPOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "usingIPv6AddressWithinSameVPC",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "usingIPv6AddressFromDifferentVPC",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossAZOut",
                    prices: {
                        USD: "0.010"
                    }
                }, {
                    name: "crossRegion",
                    prices: {
                        USD: "0.030"
                    }
                }, {
                    name: "Amazon CloudFront",
                    prices: {
                        USD: "0.000"
                    }
                }]
            }, {
                name: "dataXferOutInternet",
                tiers: [{
                    name: "firstGBout",
                    prices: {
                        USD: "0.000"
                    }
                }, {
                    name: "upTo10TBout",
                    prices: {
                        USD: "0.155"
                    }
                }, {
                    name: "next40TBout",
                    prices: {
                        USD: "0.115"
                    }
                }, {
                    name: "next100TBout",
                    prices: {
                        USD: "0.090"
                    }
                }, {
                    name: "next350TBout",
                    prices: {
                        USD: "0.065"
                    }
                }, {
                    name: "next05PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "next4PBout",
                    prices: {
                        USD: "contactus"
                    }
                }, {
                    name: "greater5PBout",
                    prices: {
                        USD: "contactus"
                    }
                }]
            }]
        }]
    }
};