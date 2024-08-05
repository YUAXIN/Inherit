ServerEvents.recipes(event => {
    // 冬之符文
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
            {
                "fluid": "ad_astra:cryo_fuel",
                "amount": 250
            },
            {
                "item": 'botania:rune_water'
            }
        ],
        "result": [
            {
                "item": 'botania:rune_winter',
                "count": 1
            }
        ],
        "energy": 5000
    }).id('botania:runic_altar/winter')
    // 秋之符文
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
            {
                "fluid": "thermal:glowstone",
                "amount": 250
            },
            {
                "item": 'botania:rune_air'
            }
        ],
        "result": [
            {
                "item": 'botania:rune_autumn',
                "count": 1
            }
        ],
        "energy": 5000
    }).id('botania:runic_altar/autumn')
    // 夏之符文
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
            {
                "fluid": "tconstruct:sky_slime",
                "amount": 250
            },
            {
                "item": 'botania:rune_fire'
            }
        ],
        "result": [
            {
                "item": 'botania:rune_summer',
                "count": 1
            }
        ],
        "energy": 5000
    }).id('botania:runic_altar/summer')
    // 春之符文
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
            {
                "fluid": 'industrialforegoing:pink_slime',
                "amount": 250
            },
            {
                "item": 'botania:rune_earth'
            }
        ],
        "result": [
            {
                "item": 'botania:rune_spring',
                "count": 1
            }
        ],
        "energy": 5000
    }).id('botania:runic_altar/spring')
    // 尼福
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
            {
                "fluid": "ad_astra:cryo_fuel",
                "amount": 250
            },
            {
                "item": 'kubejs:rune'
            }
        ],
        "result": [
            {
                "item": 'mythicbotany:niflheim_rune',
                "count": 1
            }
        ],
        "energy": 5000
    }).id('mythicbotany:niflheim_rune_runic_altar')
})