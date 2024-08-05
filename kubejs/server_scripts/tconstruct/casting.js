ServerEvents.recipes(event => {
    // 焦煤
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'projecte:alchemical_coal'
        },
        "cast_consumed": true,
        "cooling_time": 50,
        "fluid": {
            "amount": 1000,
            "tag": "tconstruct:seared_stone"
        },
        "result": 'immersiveengineering:coal_coke'
    })
    // 烈焰棒
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'kubejs:hard_source'
        },
        "cast_consumed": true,
        "cooling_time": 50,
        "fluid": {
            "amount": 200,
            "tag": 'tconstruct:blazing_blood'
        },
        "result": 'minecraft:blaze_rod'
    })
    // 逻辑芯片
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'laserio:logic_chip_raw'
        },
        "cast_consumed": true,
        "cooling_time": 50,
        "fluid": {
            "amount": 50,
            "fluid": 'cofh_core:potion'
        },
        "result": 'laserio:logic_chip'
    })
    // 钢弹簧
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'vintageimprovements:small_iron_spring'
        },
        "cast_consumed": false,
        "cooling_time": 40,
        "fluid": {
            "amount": 250,
            "fluid": 'tconstruct:molten_steel'
        },
        "result": 'vintageimprovements:steel_spring'
    })
     // 瓶装末地空气
     event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item":'minecraft:glass_bottle'
        },
        "cast_consumed":true,
        "cooling_time": 40,
        "fluid": {
            "amount": 250,
            "fluid": 'tconstruct:molten_ender'
        },
        "result":'botania:ender_air_bottle'
    })
     // 末影锭
     event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item":'naturesaura:infused_iron'
        },
        "cast_consumed":true,
        "cooling_time": 40,
        "fluid": {
            "amount": 250,
            "fluid": 'tconstruct:molten_ender'
        },
        "result":'extendedcrafting:ender_ingot'
    }).id('extendedcrafting:ender_ingot')
})