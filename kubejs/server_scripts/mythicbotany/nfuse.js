ServerEvents.recipes(event => {
    // 泰拉钢
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 3398912,
        "group": "infuser",
        "ingredients": [
            {
                "item": 'botania:gaia_ingot'
            },
            {
                "item": 'botania:mana_diamond'
            },
            {
                "item": 'mythicbotany:alfsteel_ingot'
            }
        ],
        "mana": 100000,
        "output": {
            "count": 8,
            "item": 'botania:terrasteel_ingot'
        },
        "toColor": 65280
    })
    // 神秘花精华
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 3398912,
        "group": "infuser",
        "ingredients": [
            {
                "item": 'botania:life_essence'
            },
            {
                "item": 'extendedcrafting:luminessence'
            },
            {
                "item": 'kubejs:no_petal'
            }
        ],
        "mana": 5000,
        "output": {
            "count": 16,
            "item": 'mysticalagriculture:mystical_flower_essence'
        },
        "toColor": 65280
    })
    // 龙钢
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 3398912,
        "group": "infuser",
        "ingredients": [
            {
                "item": 'powah:steel_energized'
            },
            {
                "item":'moremekanismprocessing:draconium_ingot'
            },
            {
                "item": 'minecraft:netherite_ingot'
            }
        ],
        "mana": 5000,
        "output": {
            "count": 8,
            "item": 'thermal_extra:dragonsteel_ingot'
        },
        "toColor": 65280
    }).id('thermal_extra:machine/smelter/dragonsteel_ingot')
     // 火元素基地
     event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 3398912,
        "group": "infuser",
        "ingredients": [
            {
                "item":'botania:rune_fire'
            },
            {
                "item":'vintageimprovements:lumium_sheet'
            },
            {
                "item":'minecraft:blaze_rod'
            }
        ],
        "mana": 5000,
        "output": {
            "count": 8,
            "item": 'kubejs:fire_essence_base'
        },
        "toColor": 65280
    })
})