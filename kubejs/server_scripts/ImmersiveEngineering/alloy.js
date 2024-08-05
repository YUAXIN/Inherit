ServerEvents.recipes(event => {
    // 焦黑砖
    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "item": 'tconstruct:grout',
            "count": 8
        },
        "input1": { "item": 'malum:processed_soulstone' }
        , "result": { "base_ingredient": { "item": 'tconstruct:seared_brick' }, "count": 8 },
        "time": 200
    })
    // 炼金煤炭
    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "item": 'kubejs:psi_coal',
            "count": 4
        },
        "input1": { "item": 'malum:infernal_spirit' }
        , "result": { "base_ingredient": { "item": 'projecte:alchemical_coal' }, "count": 1 },
        "time": 150
    })
    // 精英催化剂
    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "item": 'extendedcrafting:elite_component',
            "count": 4
        },
        "input1": { "item": 'ae2:cell_component_1k' }
        , "result": { "base_ingredient": { "item": 'extendedcrafting:elite_catalyst' }, "count": 1 },
        "time": 150
    }).id('extendedcrafting:elite_catalyst')
})