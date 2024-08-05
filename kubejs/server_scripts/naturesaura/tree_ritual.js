ServerEvents.recipes((event) => {
    // 花肥
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": 'naturesaura:token_euphoria'
            },
            {
                "item": 'malum:earthen_spirit'
            },
            {
                "item": 'kubejs:hard_source'
            },
            {
                "item": 'mysticalagriculture:prosperity_ingot'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item": 'naturesaura:gold_fiber'
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": 'botania:fertilizer',
            "count": 16
        },
        "time": 20
    })
    // 基础工作台
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item":'projecte:dark_matter'
            },
            {
                "item": 'projecte:dark_matter'
            },
            {
                "item":'projecte:dark_matter'
            },
            {
                "item":'projecte:dark_matter'
            },
            {
                "item":'projecte:dark_matter'
            },
            {
                "item":'minecraft:crafting_table'
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": 'extendedcrafting:basic_table',
            "count": 1
        },
        "time": 20
    }).id('extendedcrafting:basic_table')
    // 末影珍珠
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item":'minecraft:end_stone'
            },
            {
                "item": 'minecraft:end_stone'
            },
            {
                "item": 'minecraft:end_stone'
            },
            {
                "item": 'minecraft:end_stone'
            },
            {
                "item": 'minecraft:end_stone'
            },
            {
                "item": 'minecraft:end_stone'
            },
            {
                "item": 'minecraft:end_stone'
            },
            {
                "item": 'minecraft:end_stone'
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item":'minecraft:ender_pearl',
            "count": 4
        },
        "time": 20
    })
     // 精灵门核心
     event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": 'botania:mana_diamond'
            },
            {
                "item": 'botania:mana_diamond'
            },
            {
                "item": 'botania:manasteel_ingot'
            },
            {
                "item": 'botania:manasteel_ingot'
            },
            {
                "item": 'mekanism:basic_control_circuit'
            },
            {
                "item":'elementalcraft:inert_crystal'
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": 'botania:alfheim_portal',
            "count": 1
        },
        "time": 20
    }).id('botania:alfheim_portal')
})