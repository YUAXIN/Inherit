ServerEvents.recipes(event => {
    // 烈焰血
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "malum:infernal_spirit"
        },
        "result": {
            "amount": 100,
            "fluid": "tconstruct:blazing_blood"
        },
        "temperature": 500,
        "time": 130
    })
    // 液态魔源
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'kubejs:hard_source'
        },
        "result": {
            "amount": 200,
            "fluid": 'starbunclemania:source_fluid'
        },
        "temperature": 1100,
        "time":20
    })
      // mothane gas
      event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'malum:soul_stained_steel_ingot'
        },
        "result": {
            "amount": 200,
            "fluid": 'cofh_core:potion'
        },
        "temperature": 1100,
        "time":20
    })
     // 融化红石1
     event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": 'minecraft:redstone'
        },
        "result": {
            "amount": 100,
            "fluid": 'kubejs:molten_redstone'
        },
        "temperature": 500,
        "time": 60
    })
      // 融化经验
      event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item":'ars_nouveau:experience_gem'
        },
        "result": {
            "amount": 1000,
            "fluid": 'cyclic:xpjuice'
        },
        "temperature": 500,
        "time": 20
    })
})