ServerEvents.recipes((event) => {
    //基础控制电路
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'kubejs:undeveloped_basic_control_circuit'
        },
        "result": {
            "item": 'mekanism:basic_control_circuit'
        }
    }).id('mekanism:control_circuit/basic')
    // 异界原木
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'malum:runewood_log'
        },
        "result": {
            "item": 'occultism:otherworld_log'
        }
    })
    // 魂染钢锭
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'spirit:soul_steel_ingot'
        },
        "result": {
            "item": 'malum:soul_stained_steel_ingot'
        }
    })
    //高级控制电路
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'kubejs:undeveloped_advanced_control_circuit'
        },
        "result": {
            "item": 'mekanism:advanced_control_circuit'
        }
    }).id('mekanism:control_circuit/advanced')
    // 失活法杖
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'botania:twig_wand',
        },
        "result": {
            "item": 'kubejs:un_twig_wand'
        }
    })
    // 精英电路板
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'kubejs:undeveloped_elite_control_circuit',
        },
        "result": {
            "item": 'mekanism:elite_control_circuit'
        }
    }).id('mekanism:control_circuit/elite')
    // 牛奶桶
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'kubejs:gaia_essence_bucket',
        },
        "result": {
            "item": 'minecraft:milk_bucket'
        }
    })
    // 异界石
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'ae2:sky_dust',
        },
        "result": {
            "item": 'occultism:otherstone'
        }
    }).id('occultism:spirit_fire/otherstone')
    // 饱和泥炭
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'minecraft:dirt',
        },
        "result": {
            "item": 'cyclic:peat_baked'
        }
    })
    // 异界灰烬
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'ad_astra:moon_sand',
        },
        "result": {
            "item": 'occultism:otherworld_ashes'
        }
    }).id('occultism:spirit_fire/otherworld_ashes')
    // 终极控制电路
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'kubejs:undeveloped_ultimate_control_circuit',
        },
        "result": {
            "item": 'mekanism:ultimate_control_circuit'
        }
    }).id('mekanism:control_circuit/ultimate')
    // 神秘方块
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": 'kubejs:controller_casing',
        },
        "result": {
            "item": 'ae2:mysterious_cube'
        }
    })
    event.replaceInput({ input: 'minecraft:iron_ingot' }, 'minecraft:iron_ingot', 'create:andesite_alloy')
})