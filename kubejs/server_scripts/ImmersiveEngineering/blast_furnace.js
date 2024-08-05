ServerEvents.recipes(event => {
    //焦铁
    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": { "item": 'kubejs:psi_soul_ingot' },
        "result": { "item": "kubejs:crude_iron_ingot" },
        "time": 300
    }).id('immersiveengineering:blastfurnace/steel')
    //重型工程块
    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": { "item": 'kubejs:module_processor' },
        "result": {
            "item": 'immersiveengineering:heavy_engineering',
            "count": 3
        },
        "time": 200
    }).id('immersiveengineering:crafting/heavy_engineering')
})