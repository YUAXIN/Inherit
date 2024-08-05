ServerEvents.recipes(event => {
    // 锇锭
    event.custom({
        "type": "farmersdelight:cooking",
        "experience": 0.35,
        "cookingtime": 100,
        "ingredients": [
            {
                "item":'mekanism:dust_osmium'
            },
            {
                "item": 'thermal:steel_ingot'
            }
        ],
        "result": {
            "item": 'mekanism:ingot_osmium',
            "count": 4
        }
    })
    // 暗黑莲花
    event.custom({
        "type": "farmersdelight:cooking",
        "experience": 0.35,
        "cookingtime": 100,
        "ingredients": [
            {
                "item":'mysticalagriculture:mystical_flower_essence'
            },
            {
                "item":'malum:wicked_spirit'
            }
        ],
        "result": {
            "item": 'botania:blacker_lotus',
            "count": 8
        }
    })
     // 气精华基地
     event.custom({
        "type": "farmersdelight:cooking",
        "experience": 0.35,
        "cookingtime": 100,
        "ingredients": [
            {
                "item":'minecraft:dragon_breath'
            },
            {
                "item":'pneumaticcraft:ingot_iron_compressed'
            },
            {
                "item":'elementalcraft:pristine_air_gem'
            },
            {
                "item":'pneumaticcraft:ingot_iron_compressed'
            }
        ],
        "result": {
            "item":'kubejs:air_essence_base',
            "count": 8
        }
    })
})