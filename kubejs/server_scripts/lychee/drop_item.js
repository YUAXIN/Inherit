ServerEvents.recipes((event) => {
    //青铜块
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "mekanism:block_bronze",
        },
        "block_in": {
            "blocks": ['minecraft:water'],
        },
        "post": [
            {
                "type": "drop_item",
                "item": 'minecraft:oxidized_copper'
            },
        ]
    })
    //灵气增长
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'avaritia:matter_cluster'
        },
        "block_in": {
            "blocks": ['minecraft:water'],
        },
        "post": [
            {
                "type": "drop_item",
                "item": 'powah:charged_snowball'
            },
            {
                "type": "place",
                "block": "minecraft:air"
            },
            {
                type: 'execute',
                command: 'naaura add 5000',
                hide: true
            }
        ]
    })
    //纸
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'thermal:sawdust',
        },
        "block_in": {
            "blocks": ['minecraft:water'],
        },
        "post": [
            {
                "type": "drop_item",
                "item": 'minecraft:paper'
            }
        ]
    }).id('mekanism:paper')
    // 浮空阿卡纳蔷薇
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'botania:rune_mana',
        },
        "block_in": {
            "blocks": ['botania:floating_endoflame'],
        },
        "post": [
            {
                "type": "drop_item",
                "item": 'botania:floating_rosa_arcana'
            },
            {
                "type": "place",
                "block": "minecraft:air"
            },
        ]
    }).id('botania:petal_apothecary/rosa_arcana')
    // 精灵钢机壳
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            {
                "item": 'industrialforegoing:machine_frame_simple'
            },
            {
                "item": 'mythicbotany:alfsteel_ingot'
            },
            {
                "item": 'mythicbotany:asgard_rune'
            },
        ],
        "block_in": {
            "blocks": ["create:chocolate"],
        },
        "post": [
            {
                "type": "drop_item",
                "item": 'kubejs:alfsteel_casing'
            }
        ]
    })
    // 合成核心
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            {
                "item": 'extendedcrafting:frame'
            },
            {
                "item": 'extendedcrafting:elite_catalyst'
            },
            {
                "item": 'extendedcrafting:black_iron_slate'
            },
            {
                "item": 'extendedcrafting:elite_component',
                "count": 2
            },
        ],
        "block_in": {
            "blocks": ["create:chocolate"],
        },
        "post": [
            {
                "type": "drop_item",
                "item": 'extendedcrafting:crafting_core'
            }
        ]
    }).id('extendedcrafting:crafting_core')
    // 治疗精华基底
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            {
                "item":'vintageimprovements:lumium_sheet'
            },
            {
                "item": 'evilcraft:dark_gem'
            },
            {
                "item":'mekanism:pellet_antimatter'
            },
        ],
        "block_in": {
            "blocks": ["create:chocolate"],
        },
        "post": [
            {
                "type": "drop_item",
                "item":'kubejs:treat_essence_base',
                "count":8
            }
        ]
    })
     //粘液球
     event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item":'mekanism:basic_control_circuit',
        },
        "block_in": {
            "blocks": ['minecraft:water'],
        },
        "post": [
            {
                "type": "drop_item",
                "item":'minecraft:slime_block'
            }
        ]
    })
})

