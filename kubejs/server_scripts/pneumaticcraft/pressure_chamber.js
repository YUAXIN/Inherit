ServerEvents.recipes(event => {
    // 瓶与塞
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": 'minecraft:glass_bottle'
            },
            {
                "item": 'botania:livingwood_planks'
            },
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": 'naturesaura:bottle_two_the_rebottling'
            }
        ]
    }).id('naturesaura:bottle_two_the_rebottling')
    // 水晶
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": 'ars_nouveau:source_gem'
            },
        ],
        "pressure": 1.6,
        "results": [
            {
                "item": 'elementalcraft:inert_crystal',
                "count":8
            }
        ]
    })
    // 嗜血符文
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": 'botania:dreadthorn'
            },
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'pneumaticcraft:compressed_stone'
            },
            {
                "item": 'pneumaticcraft:compressed_stone'
            },
            {
                "item": 'pneumaticcraft:compressed_stone'
            },
            {
                "item": 'pneumaticcraft:compressed_stone'
            }
        ],
        "pressure": 3.0,
        "results": [
            {
                "item": 'hexerei:blood_sigil'
            }
        ]
    }).id('hexerei:blood_sigil_from_mixing_cauldron')
    // 通量压缩机
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": 'kubejs:rune'
            },
            {
                "item": 'industrialforegoing:machine_frame_simple'
            },
            {
                "item": 'powah:charged_snowball'
            },
        ],
        "pressure": 3.0,
        "results": [
            {
                "item": 'pneumaticcraft:flux_compressor'
            }
        ]
    }).id('pneumaticcraft:flux_compressor')
    // 下界合金
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": 'malum:hallowed_gold_ingot',
            },
            {
                "item": 'malum:hallowed_gold_ingot',
            },
            {
                "item": 'malum:hallowed_gold_ingot',
            },
            {
                "item": 'malum:hallowed_gold_ingot',
            },
            {
                "item": 'psi:ebony_substance'
            },
        ],
        "pressure": 3.0,
        "results": [
            {
                "item": 'minecraft:netherite_ingot',
                "count": 4
            }
        ]
    }).id('thermal:machines/smelter/smelter_alloy_netherite')
    // 烈焰晶体块
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": 'botania:blaze_block',
            },
            {
                "item": 'botania:blaze_block',
            },
            {
                "item": 'botania:blaze_block',
            },
            {
                "item": 'botania:blaze_block',
            },
            {
                "item": 'botania:blaze_block'
            },
            {
                "item": 'botania:blaze_block',
            },
            {
                "item": 'botania:blaze_block',
            },
            {
                "item": 'botania:blaze_block',
            },
            {
                "item": 'botania:blaze_block',
            },
        ],
        "pressure": 2.5,
        "results": [
            {
                "item": 'powah:blazing_crystal_block',
                "count": 2
            }
        ]
    })
    // 精英工作台
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": 'extendedcrafting:basic_table',
            },
            {
                "item": 'mekanism:elite_control_circuit',
            },
            {
                "item": 'mekanism:elite_control_circuit',
            },
            {
                "item": 'extendedcrafting:elite_catalyst',
            },
            {
                "item": 'extendedcrafting:elite_component'
            },
            {
                "item": 'extendedcrafting:elite_component'
            },
        ],
        "pressure": 3.0,
        "results": [
            {
                "item": 'extendedcrafting:elite_table',
                "count": 1
            }
        ]
    }).id('extendedcrafting:elite_table')
      // 诺言3
      event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item":'evilcraft:promise_acceptor_diamond'
            },
            {
                "item":'evilcraft:blood_orb_empty'
            },
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": 'evilcraft:promise_tier_3'
            }
        ]
    }).id('evilcraft:crafting/promise_tier_3')
})