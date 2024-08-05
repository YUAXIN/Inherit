ServerEvents.recipes(event => {
    //海带
    event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": 'malum:earthen_spirit'
        },
        "result": {
            "item": 'minecraft:kelp'
        }
    })
    //活化水晶碎片
    event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": 'mysticalagriculture:stone_essence'
        },
        "result": {
            "item":'mysticalagriculture:prosperity_block',
        }
    })
    // 铁板
    event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": 'kubejs:crude_iron_ingot'
        },
        "result": {
            "item":'create:iron_sheet'
        }
    })
})