ServerEvents.recipes((event) => {
    // 粉碎轮
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "XXX",
            "XAX",
            "XXX"
        ],
        "key": {
            "X": {
                "item": 'botania:livingwood_planks'
            },
            "A": {
                "item": 'create:millstone'
            }
        },
        "result": {
            "item": 'create:crushing_wheel',
            "count": 2
        }
    }).id('create:mechanical_crafting/crushing_wheel')
    // 元素提取
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A ",
            " B ",
            "BAB"
        ],
        "key": {
            "A": {
                "item": 'elementalcraft:contained_crystal'
            },
            "B": {
                "item": 'botania:manasteel_ingot'
            }
        },
        "result": {
            "item": 'elementalcraft:extractor',
            "count": 1
        }
    }).id('elementalcraft:extractor')
    // 富集仓
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABA",
            "CDC",
            "EBE"
        ],
        "key": {
            "A": {
                "item": 'cyclic:peat_fuel_enriched'
            },
            "B": {
                "item": 'mekanism:basic_control_circuit'
            },
            "C": {
                "item": 'mekanism:advanced_control_circuit'
            },
            "D": {
                "item": 'mekanism:steel_casing'
            },
            "E": {
                "item": 'mekanism:elite_control_circuit'
            }
        },
        "result": {
            "item": 'mekanism:enrichment_chamber',
            "count": 1
        }
    }).id('mekanism:enrichment_chamber')
    // 自然祭坛
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABBCBBA",
            "ADEFEDA",
            "ACGHGCA",
            "ADEIEDA",
            "ABBCBBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": 'naturesaura:gold_leaf'
            },
            "B": {
                "item": 'botania:terrasteel_ingot'
            },
            "C": {
                "item": 'elementalcraft:pristine_earth_gem'
            },
            "D": {
                "item": 'naturesaura:token_euphoria'
            },
            "E": {
                "item": 'botania:rune_earth'
            },
            "F": {
                "item": 'mekanism:basic_control_circuit'
            },
            "G": {
                "item": 'elementalcraft:drenched_iron_block'
            },
            "H": {
                "item": 'avaritia:crystal_matrix'
            },
            "I": {
                "item": 'industrialforegoing:machine_frame_advanced'
            }
        },
        "result": {
            "item": 'naturesaura:nature_altar',
            "count": 1
        }
    })
    //终极锭
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AADDDDDBB",
            "AEFFFFFEB",
            "CEGGGGGEC",
            "CEGHIJGEC",
            "CEGKLMGEC",
            "CEGNOPGEC",
            "CEGGGGGEC",
            "BEFFFFFEA",
            "BBDDDDDAA",
        ],
        "key": {
            "A": {
                "item": 'ars_nouveau:abjuration_essence'
            },
            "B": {
                "item": 'ars_nouveau:conjuration_essence'
            },
            "C": {
                "item": 'ars_nouveau:air_essence'
            },
            "D": {
                "item": 'ars_nouveau:earth_essence'
            },
            "E": {
                "item": 'ars_nouveau:fire_essence'
            },
            "F": {
                "item": 'ars_nouveau:manipulation_essence'
            },
            "G": {
                "item": 'ars_nouveau:water_essence'
            },
            "H": {
                "item": 'create:andesite_alloy'
            },
            "I": {
                "item": 'thermal_extra:dragonsteel_ingot'
            },
            "J": {
                "item": 'mekanism:ingot_osmium'
            },
            "K": {
                "item": 'botania:gaia_ingot'
            },
            "L": {
                "item": 'mekanism:pellet_antimatter'
            },
            "M": {
                "item": 'botania:manasteel_ingot'
            },
            "N": {
                "item": 'create:brass_ingot'
            },
            "O": {
                "item": 'pneumaticcraft:ingot_iron_compressed'
            },
            "P": {
                "item": 'kubejs:crude_iron_ingot'
            },
        },
        "result": {
            "item": 'extendedcrafting:the_ultimate_ingot',
            "count": 3
        }
    })
})
