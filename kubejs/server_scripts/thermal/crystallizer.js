ServerEvents.recipes(event => {
    // 号角
    event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": 'kubejs:gaia_essence',
                "amount":250
            },
            {
                "item":'botania:livingwood_log'
            }
        ],
        "result": [
            {
                "item":'mythicbotany:gjallar_horn_empty'
            }
        ]
    }).id('mythicbotany:gjallar_horn_empty_mana_infusion')
     // 黑曜石结晶
     event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": 'kubejs:gaia_essence',
                "amount":1000
            },
            {
                "item":'minecraft:obsidian'
            }
        ],
        "result": [
            {
                "item":'cyclic:gem_obsidian'
            }
        ]
    }).id('cyclic:solidifier/solidifier_obsflower')
})