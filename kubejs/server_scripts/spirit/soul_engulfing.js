ServerEvents.recipes(event => {
    // 微型灵魂容器
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'malum:arcane_spirit'
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ",
                        " @ ",
                        "   "
                    ],
                    [
                        " S ",
                        "S&S",
                        " S "
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'malum:exposed_runewood_log'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'spirit:soul_crystal_shard'
    })
    // 灵魂石
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'minecraft:cobblestone'
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ",
                        " @ ",
                        "   "
                    ],
                    [
                        " S ",
                        "S&S",
                        " S "
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'malum:exposed_runewood_log'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'spirit:soul_slate',
        "outputAmount": 1
    })
    // 精致灵魂石
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'malum:raw_soulstone'
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ",
                        " @ ",
                        "   "
                    ],
                    [
                        " S ",
                        "S&S",
                        " S "
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'malum:exposed_runewood_log'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'malum:processed_soulstone',
        "outputAmount": 1
    })
    // 中型灵魂容器
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'spirit:soul_crystal_shard'
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ",
                        " @ ",
                        "   "
                    ],
                    [
                        "KSK",
                        "S&S",
                        "KSK"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'spirit:crude_soul_crystal',
        "outputAmount": 1
    })
    // 大型灵魂容器
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'spirit:crude_soul_crystal'
            },
            "multiblock": {
                "pattern": [
                    [
                        "B   B",
                        "     ",
                        "  @  ",
                        "     ",
                        "B   B"
                    ],
                    [
                        "A   A",
                        " KSK ",
                        " S&S ",
                        " KSK ",
                        "A   A"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    },
                    "A": {
                        "block": 'create:andesite_alloy_block'
                    },
                    "B": {
                        "block": 'spirit:soul_glass'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'spirit:soul_crystal',
        "outputAmount": 1
    })
    // 灵魂玻璃
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'minecraft:glass'
            },
            "multiblock": {
                "pattern": [
                    [
                        "   ",
                        " @ ",
                        "   "
                    ],
                    [
                        "KSK",
                        "S&S",
                        "KSK"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'spirit:soul_glass',
        "outputAmount": 1
    })
    // 灵魂钢
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'create:andesite_alloy'
            },
            "multiblock": {
                "pattern": [
                    [
                        "B   B",
                        "     ",
                        "  @  ",
                        "     ",
                        "B   B"
                    ],
                    [
                        "A   A",
                        " KSK ",
                        " S&S ",
                        " KSK ",
                        "A   A"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    },
                    "A": {
                        "block": 'create:andesite_alloy_block'
                    },
                    "B": {
                        "block": 'spirit:soul_glass'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'spirit:soul_steel_ingot',
        "outputAmount": 1
    })
    // 灵魂尘
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'malum:alchemical_calx'
            },
            "multiblock": {
                "pattern": [
                    [
                        "B   B",
                        "     ",
                        "  @  ",
                        "     ",
                        "B   B"
                    ],
                    [
                        "A   A",
                        " KSK ",
                        " S&S ",
                        " KSK ",
                        "A   A"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    },
                    "A": {
                        "block": 'create:andesite_alloy_block'
                    },
                    "B": {
                        "block": 'spirit:soul_glass'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'spirit:soul_powder',
        "outputAmount": 2
    })
     // 乌金色物质
     event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'immersiveengineering:coal_coke'
            },
            "multiblock": {
                "pattern": [
                    [
                        "B   B",
                        "     ",
                        "  @  ",
                        "     ",
                        "B   B"
                    ],
                    [
                        "A   A",
                        " KSK ",
                        " S&S ",
                        " KSK ",
                        "A   A"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    },
                    "A": {
                        "block": 'create:andesite_alloy_block'
                    },
                    "B": {
                        "block": 'spirit:soul_glass'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'psi:ebony_substance',
        "outputAmount": 3
    }).id('psi:ebony_substance')
    // 轻型工程块
    event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'kubejs:module_processor'
            },
            "multiblock": {
                "pattern": [
                    [
                        "B   B",
                        "     ",
                        "  @  ",
                        "     ",
                        "B   B"
                    ],
                    [
                        "A   A",
                        " KSK ",
                        " S&S ",
                        " KSK ",
                        "A   A"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    },
                    "A": {
                        "block": 'create:andesite_alloy_block'
                    },
                    "B": {
                        "block": 'spirit:soul_glass'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'immersiveengineering:light_engineering',
        "outputAmount": 1
    })
     // 线
     event.custom({
        "type": "spirit:soul_engulfing",
        "input": {
            "ingredient": {
                "item": 'minecraft:white_dye'
            },
            "multiblock": {
                "pattern": [
                    [
                        "B   B",
                        "     ",
                        "  @  ",
                        "     ",
                        "B   B"
                    ],
                    [
                        "A   A",
                        " KSK ",
                        " S&S ",
                        " KSK ",
                        "A   A"
                    ]
                ],
                "keys": {
                    "S": {
                        "block": 'spirit:soul_slate'
                    },
                    "K": {
                        "block": 'malum:block_of_soulstone'
                    },
                    "A": {
                        "block": 'create:andesite_alloy_block'
                    },
                    "B": {
                        "block": 'spirit:soul_glass'
                    }
                }
            }
        },
        "duration": 1,
        "destroysStructure": false,
        "outputItem": 'minecraft:string',
        "outputAmount": 64
    })
})