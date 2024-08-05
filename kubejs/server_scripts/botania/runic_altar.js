ServerEvents.recipes(event => {
    // 元素管道
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "botania:rune_fire"
            },
            {
                "item": "botania:rune_air"
            },
            {
                "item": 'elementalcraft:elementpipe_impaired'
            },
            {
                "item": 'botania:rune_earth'
            },
            {
                "item": 'botania:rune_water'
            },
        ],
        "mana": 2000,
        "output": {
            "item": 'elementalcraft:elementpipe_improved',
            "count": 8
        }
    })
        // 魔力符文
        event.custom({
            "type": "botania:runic_altar",
            "ingredients": [
                {
                    "item": "botania:rune_fire"
                },
                {
                    "item": "botania:rune_air"
                },
                {
                    "item": 'botania:manasteel_ingot'
                },
                {
                    "item": 'botania:rune_earth'
                },
                {
                    "item": 'botania:rune_water'
                },
                {
                    "item":'botania:mana_powder'
                },
                {
                    "item": 'botania:mana_diamond'
                },
            ],
            "mana": 2000,
            "output": {
                "item": 'botania:rune_mana',
                "count": 1
            }
        }).id('botania:runic_altar/mana')
         // 尼德威阿尔
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "botania:rune_fire"
            },
            {
                "item": 'botania:rune_earth'
            },
            {
                "item":'minecraft:netherite_ingot'
            },
    
        ],
        "mana": 2000,
        "output": {
            "item": 'mythicbotany:nidavellir_rune',
            "count": 2
        }
    }).id('mythicbotany:nidavellir_rune_runic_altar')
})