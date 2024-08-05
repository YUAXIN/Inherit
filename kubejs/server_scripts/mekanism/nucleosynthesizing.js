ServerEvents.recipes(event => {
    // 寰宇控制电路
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "duration": 1,
        "gasInput": { "amount": 1, "gas": "mekanism:antimatter" },
        "itemInput": { "ingredient": { "type": "forge:nbt", "count": 1, "item":'mekaevolution:supreme_control_circuit'} },
        "output": { "item":'mekaevolution:cosmic_control_circuit' }
    }).id('mekaevolution:cosmic_control_circuit')
})