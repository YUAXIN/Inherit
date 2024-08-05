ServerEvents.recipes(event => {
    // 神圣金顶
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'malum:sacred_spirit' } },
        "mainInput": { "ingredient": { "item": 'elementalcraft:swift_alloy_ingot' } },
        "output": { "item": 'malum:hallowed_gold_ingot' }
    }).id('malum:spirit_infusion/hallowed_gold_ingot')
    //  感应炉
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'industrialforegoing:machine_frame_simple' } },
        "mainInput": {
            "ingredient": { "item": 'immersiveengineering:blastbrick_reinforced' },
        },
        "output": { "item": 'thermal:machine_smelter' }
    }).id('thermal:machine_smelter')
    // 急速冷冻机
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'powah:charged_snowball' } },
        "mainInput": { "ingredient": { "item": 'industrialforegoing:machine_frame_simple' } },
        "output": { "item": 'thermal:machine_chiller' }
    }).id('thermal:machine_chiller')
    // 结晶器
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'cyclic:solidifier' } },
        "mainInput": { "ingredient": { "item": 'thermal:machine_frame' } },
        "output": { "item": 'thermal:machine_crystallizer' }
    }).id('thermal:machine_crystallizer')
    // 特斯拉线圈
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'kubejs:alfsteel_casing' } },
        "mainInput": { "ingredient": { "item": 'ae2:charger' } },
        "output": { "item": 'createaddition:tesla_coil' }
    }).id('createaddition:mechanical_crafting/tesla_coil')
    // 多驱冲压机
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'thermal:machine_frame' } },
        "mainInput": { "ingredient": { "item": 'create:mechanical_press' } },
        "output": { "item": 'thermal:machine_press' }
    }).id('thermal:machine_press')
    // 熔岩
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'thermal:machine_frame' } },
        "mainInput": { "ingredient": { "item": 'cyclic:melter' } },
        "output": { "item": 'thermal:machine_crucible' }
    }).id('thermal:machine_crucible')
    // 热解炉
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'thermal:machine_frame' } },
        "mainInput": {
            "ingredient": { "item": 'immersiveengineering:cokebrick' },
            "count": 27
        },
        "output": { "item": 'thermal:machine_pyrolyzer' }
    }).id('thermal:machine_pyrolyzer')
    // 离心机
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'thermal:machine_frame' } },
        "mainInput": {
            "ingredient": { "item": 'vintageimprovements:centrifuge' },
        },
        "output": { "item": 'thermal:machine_centrifuge' }
    }).id('thermal:machine_centrifuge')
    // 红石通量
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'minecraft:redstone_block' } },
        "mainInput": {
            "ingredient": { "item": 'thermal:machine_frame' },
        },
        "output": { "item": 'thermal:energy_cell_frame' }
    }).id('thermal:energy_cell_frame')
    // 虞美人
    event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item": 'minecraft:redstone_block' } },
        "mainInput": {
            "ingredient": { "item": 'thermal:machine_frame' },
        },
        "output": { "item": 'thermal:energy_cell_frame' }
    })
     // 反物质合成
     event.custom({
        "type": "mekanism:combining",
        "extraInput": { "ingredient": { "item":'mekanism:pellet_antimatter' } },
        "mainInput": {
            "ingredient": { "item": 'industrialforegoing:machine_frame_supreme'},
        },
        "output": { "item":'mekanism:antiprotonic_nucleosynthesizer' }
    }).id('mekanism:antiprotonic_nucleosynthesizer')
})