ServerEvents.recipes((event) => {
    // 青铜锭
    event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "item": 'psi:ebony_substance'
            },
            {
                "item": 'psi:ebony_substance'
            },
            {
                "item": 'psi:ebony_substance'
            },
            {
                "item": 'psi:ebony_substance'
            },
            {
                "item": 'malum:copper_node'
            }
        ],
        "output": {
            "item": 'mekanism:ingot_bronze',
            "count": 3
        },
        "grindingTime": 120
    })
    // 澄空精魄
    event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "item": 'psi:psidust'
            },
            {
                "item": 'psi:psidust'
            },
            {
                "item": 'psi:psidust'
            },
            {
                "item": 'malum:earthen_spirit'
            },
            {
                "item": 'malum:earthen_spirit'
            }
        ],
        "output": {
            "item": 'malum:aerial_spirit',
            "count": 3
        },
        "grindingTime": 60
    })
    // 空白控制电路
    event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "item": 'mysticalagriculture:prosperity_shard'
            },
            {
                "item": 'mysticalagriculture:prosperity_shard'
            },
            {
                "item": 'mysticalagriculture:stone_essence'
            },
            {
                "item":'mysticalagriculture:stone_essence'
            },
            {
                "item": 'malum:earthen_spirit'
            }
        ],
        "output": {
            "item": 'kubejs:control_circuit',
            "count": 2
        },
        "grindingTime": 15
    })
     // 黄金叶
     event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "item":'naturesaura:gold_fiber'
            },
            {
                "item": 'naturesaura:gold_fiber'
            },
            {
                "item":'naturesaura:gold_fiber'
            },
            {
                "item":'naturesaura:gold_fiber'
            },
            {
                "item":'naturesaura:gold_fiber'
            }
        ],
        "output": {
            "item": 'naturesaura:gold_leaf',
            "count":16
        },
        "grindingTime": 15
    })
     //红石精华
     event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "item":'projecte:alchemical_coal'
            },
            {
                "item": 'projecte:alchemical_coal'
            },
            {
                "item":'projecte:alchemical_coal'
            },
            {
                "item":'projecte:alchemical_coal'
            },
            {
                "item":'projecte:alchemical_coal'
            }
        ],
        "output": {
            "item": 'mysticalagriculture:redstone_essence',
            "count":8
        },
        "grindingTime": 100
    })
    //红石精华
    event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "item":'minecraft:nether_star'
            },
            {
                "item":'minecraft:ender_pearl'
            },
            {
                "item":'minecraft:ender_pearl'
            },
            {
                "item":'occultism:burnt_otherstone'
            },
            {
                "item":'occultism:burnt_otherstone'
            }
        ],
        "output": {
            "item": 'kubejs:summon_essence_base',
            "count":8
        },
        "grindingTime":80
    })
})