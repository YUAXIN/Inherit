ServerEvents.recipes((event) => {
    // 紫物质
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'malum:processed_soulstone'
            },
            {
                "item": 'malum:processed_soulstone'
            },
            {
                "item": 'malum:processed_soulstone'
            },
            {
                "item": 'malum:processed_soulstone'
            },
            {
                "item": 'spirit:soul_crystal_shard'
            },
            {
                "item": 'malum:arcane_spirit'
            },
            {
                "item": 'spirit:soul_slate'
            },
            {
                "item": 'spirit:soul_slate'
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"tconstruct:molten_amethyst\"}",
        "output": {
            "count": 1,
            "item": 'projectexpansion:purple_fuel_block'
        },
        "processingTime": 100
    }).id('projectexpansion:fuel/block/purple')
    // 低级机器框架
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'spirit:soul_slate'
            },
            {
                "item": 'spirit:soul_slate'
            },
            {
                "item": 'spirit:soul_slate'
            },
            {
                "item": 'spirit:soul_slate'
            },
            {
                "tag": 'minecraft:logs'
            },
            {
                "tag": 'minecraft:logs'
            },
            {
                "tag": 'minecraft:logs'
            },
            {
                "tag": 'minecraft:logs'
            }
        ],
        "inputFluid": "{Amount:0,FluidName:\"minecraft:water\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:machine_frame_pity'
        },
        "processingTime": 100
    })
    // 搅拌机
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'create:whisk'
            },
            {
                "item": 'create:andesite_casing'
            },
            {
                "item": 'create:cogwheel'
            },
            {
                "item": 'create:shaft'
            },
            {
                "item": 'create:shaft'
            },
            {
                "item": 'create:shaft'
            },
            {
                "item": 'create:shaft'
            }
        ],
        "inputFluid": "{Amount:0,FluidName:\"minecraft:water\"}",
        "output": {
            "count": 1,
            "item": 'create:mechanical_mixer'
        },
        "processingTime": 100
    }).id('create:crafting/kinetics/mechanical_mixer')
    // 动力收割机
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'create:andesite_alloy'
            },
            {
                "item": 'create:andesite_alloy'
            },
            {
                "item": 'create:andesite_alloy'
            },
            {
                "item": 'create:andesite_alloy'
            },
            {
                "item": 'kubejs:soul_steel_sheet'
            },
            {
                "item": 'create:andesite_casing'
            },
            {
                "item": 'create:shaft'
            },
            {
                "item": 'create:shaft'
            }
        ],
        "inputFluid": "{Amount:0,FluidName:\"minecraft:water\"}",
        "output": {
            "count": 1,
            "item": 'create:mechanical_harvester'
        },
        "processingTime": 100
    }).id('create:crafting/kinetics/mechanical_harvester')
    // 动力犁
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'create:andesite_alloy'
            },
            {
                "item": 'create:andesite_alloy'
            },
            {
                "item": 'kubejs:soul_steel_sheet'
            },
            {
                "item": 'kubejs:soul_steel_sheet'
            },
            {
                "item": 'kubejs:soul_steel_sheet'
            },
            {
                "item": 'create:andesite_casing'
            },
            {
                "item": 'create:andesite_alloy'
            }
        ],
        "inputFluid": "{Amount:0,FluidName:\"minecraft:water\"}",
        "output": {
            "count": 1,
            "item": 'create:mechanical_plough'
        },
        "processingTime": 100
    }).id('create:crafting/kinetics/mechanical_plough')
    //动力锯
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'kubejs:soul_steel_sheet'
            },
            {
                "item": 'kubejs:soul_steel_sheet'
            },
            {
                "item": 'kubejs:soul_steel_sheet'
            },
            {
                "item": 'create:andesite_casing'
            },
            {
                "item":'create:andesite_alloy'
            }
        ],
        "inputFluid": "{Amount:0,FluidName:\"minecraft:water\"}",
        "output": {
            "count": 1,
            "item": 'create:mechanical_saw'
        },
        "processingTime": 100
    }).id('create:crafting/kinetics/mechanical_saw')
})