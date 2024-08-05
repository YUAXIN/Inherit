ServerEvents.recipes(event => {
    // 盖亚精华
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": 'botania:gaia_ingot'
            }
        ],
        "result": [
            {
                "count": 4,
                "item": 'botania:life_essence'
            }
        ],
        "tool": {
            "item": 'farmersdelight:netherite_knife'
        }
    })
    // 厨锅
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": 'ad_astra:desh_block'
            }
        ],
        "result": [
            {
                "count": 1,
                "item": 'farmersdelight:cooking_pot'
            }
        ],
        "tool": {
            "item": 'minecraft:water_bucket'
        }
    }).id('farmersdelight:cooking_pot')
})