ServerEvents.recipes(event => {
    //焦煤块
    event.custom(
        {
            "type": "immersiveengineering:coke_oven",
            "creosote": 1000,
            "input": { "item": 'kubejs:psi_coal' },
            "result": { "item": 'immersiveengineering:coke' },
            "time": 50
        }).id('immersiveengineering:cokeoven/charcoal')
})