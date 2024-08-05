ServerEvents.recipes(event => {
    // 钢块
    event.custom({
        "type": "mythicbotany:rune_ritual",
        "center": {
            "item": 'kubejs:crude_iron_ingot'
        },
        "group": "rune_rituals",
        "inputs": [
            {
                "item": 'botania:gaia_ingot'
            },
            {
                "item": 'botania:terrasteel_block'
            },
            {
                "item": 'botania:manasteel_block'
            },
        ],
        "mana": 6000,
        "outputs": [
            {
                "count": 3,
                "item": 'thermal:steel_block'
            }
        ],
        "runes": [
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": -2,
                "z": -2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": -2,
                "z": 2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 2,
                "z": -2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 2,
                "z": 2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": -3,
                "z": 0
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 3,
                "z": 0
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 0,
                "z": -3
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 0,
                "z": 3
            }
        ],
        "ticks": 100
    })
    // 粗锇
    event.custom({
        "type": "mythicbotany:rune_ritual",
        "center": {
            "item": 'ad_astra:raw_desh'
        },
        "group": "rune_rituals",
        "inputs": [
            {
                "item": 'elementalcraft:pristine_water_gem'
            },
            {
                "item": 'botania:rune_water'
            },
            {
                "item": 'elementalcraft:drenched_iron_ingot'
            },
        ],
        "mana": 8000,
        "outputs": [
            {
                "count": 8,
                "item": 'mekanism:raw_osmium'
            }
        ],
        "runes": [
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": -2,
                "z": -2
            },
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": -2,
                "z": 2
            },
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": 2,
                "z": -2
            },
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": 2,
                "z": 2
            },
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": -3,
                "z": 0
            },
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": 3,
                "z": 0
            },
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": 0,
                "z": -3
            },
            {
                "consume": true,
                "rune": {
                    "item": 'mythicbotany:niflheim_rune'
                },
                "x": 0,
                "z": 3
            }
        ],
        "ticks": 60
    }).id('industrialforegoing:laser_drill_ore/raw_materials/osmium')
    // 控制精华
    event.custom({
        "type": "mythicbotany:rune_ritual",
        "center": {
            "item": 'vintageimprovements:lumium_sheet'
        },
        "group": "rune_rituals",
        "inputs": [
            {
                "item": 'minecraft:redstone_block'
            },
            {
                "item": "minecraft:clock"
            },
            {
                "item": 'minecraft:lever'
            },
        ],
        "mana": 6000,
        "outputs": [
            {
                "count": 8,
                "item": 'kubejs:control_essence_base'
            }
        ],
        "runes": [
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": -2,
                "z": -2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": -2,
                "z": 2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 2,
                "z": -2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 2,
                "z": 2
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": -3,
                "z": 0
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 3,
                "z": 0
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 0,
                "z": -3
            },
            {
                "consume": false,
                "rune": {
                    "item": 'mythicbotany:nidavellir_rune'
                },
                "x": 0,
                "z": 3
            }
        ],
        "ticks": 100
    })
})