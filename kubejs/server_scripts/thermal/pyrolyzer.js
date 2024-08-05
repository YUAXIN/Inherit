ServerEvents.recipes(event => {
    // 焦煤
    event.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
            "item": 'kubejs:psi_coal'
        },
        "result": [
            {
                "item": 'immersiveengineering:coke'
            },
            {
                "fluid":'immersiveengineering:creosote',
                "amount": 1000
            }
        ],
        "energy": 4000,
        "experience": 0.01
    })
})