ServerEvents.recipes(event => {
    // 金叶灌注
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient":
                { "item": 'naturesaura:gold_powder' }
        },
        "output": { "amount": 20, "infuse_type": "kubejs:gold_leaf" }
    })
     // 基础灌注
     event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient":
                { "item": 'mekanism:basic_control_circuit'}
        },
        "output": { "amount": 80, "infuse_type": "kubejs:basic" }
    })
})