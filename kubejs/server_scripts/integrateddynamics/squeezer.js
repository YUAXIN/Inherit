ServerEvents.recipes((event) => {
    // 盖亚精华
    event.custom({
        "type": "integrateddynamics:squeezer",
        "item": 'botania:gaia_ingot',
        "result": {
            "fluid": {
                "fluid": "kubejs:gaia_essence",
                "amount": 250
            },
        }
    })
    //卷簧
    event.custom({
        "type": "integrateddynamics:squeezer",
        "item": 'thermal:steel_block',
        "result": {
            "items": [
                {
                    "item": 'vintageimprovements:spring_coiling_machine_wheel'
                }
            ]
        }
    }).id('vintageimprovements:craft/spring_coiling_machine_wheel')
})