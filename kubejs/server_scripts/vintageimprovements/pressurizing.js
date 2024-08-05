ServerEvents.recipes(event => {
    // 陨石粉
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "ingredients": [
            {
                "item": 'ae2:certus_quartz_dust'
            },
            {
                "fluid": "minecraft:water",
                "amount": 200
            },
            {
                "item": 'thermal_extra:amethyst_dust'
            }
        ],
        "results": [
            {
                "item": 'ae2:sky_dust',
                "count":8
            }
        ],
        "processingTime": 120
    })
    // 流明精华
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "ingredients": [
            {
                "item": 'minecraft:glowstone_dust'
            },
            {
                "fluid":"kubejs:gaia_essence",
                "amount": 250
            },
            {
                "item":'minecraft:redstone'
            },
        ],
        "results": [
            {
                "item":'extendedcrafting:luminessence',
                "count":16
            }
        ],
        "processingTime": 120
    }).id('extendedcrafting:luminessence')
})