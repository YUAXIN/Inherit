ServerEvents.recipes((event) => {
    //精魄（基础）
    event.custom({
        "type": "minecraft:smelting",
        "cookingtime": 100,
        "experience": 0.25,
        "ingredient": {
            "item": 'malum:block_of_alchemical_calx'
        },
        "result": {
            "count": 4,
            "item": 'malum:arcane_spirit'
        }
    })
    //精魄（烈焰）
    event.custom({
        "type": "minecraft:smelting",
        "cookingtime": 100,
        "experience": 0.25,
        "ingredient": {
            "item": 'malum:earthen_spirit'
        },
        "result": {
            "count": 4,
            "item": 'malum:infernal_spirit'
        }
    })
    //异界石粉
    event.custom({
        "type": "minecraft:smelting",
        "cookingtime": 50,
        "experience": 0.25,
        "ingredient": {
            "item": 'occultism:otherstone_tablet'
        },
        "result": {
            "count": 9,
            "item": 'occultism:burnt_otherstone'
        }
    }).id('occultism:smelting/burnt_otherstone')
})