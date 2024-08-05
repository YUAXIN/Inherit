ServerEvents.recipes((event) => {
    //生铁锭
    event.custom({
        "type": "minecraft:campfire_cooking",
        "cookingtime": 100,
        "ingredient": {
            "item": 'botania:manasteel_ingot'
        },
        "result": {
            "count": 1,
            "item": 'pneumaticcraft:ingot_iron_compressed'
        }
    })
})