ServerEvents.recipes(event => {
    //粗锌
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": 'create:andesite_alloy'
            },
            "top": {
                "item": 'create:precision_mechanism'
            }
        },
        "mode": "press",
        "result": {
            "item": 'create:raw_zinc'
        }
    })
    // 未完成基础控制电路
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": 'malum:earthen_spirit'
            },
            "middle": {
                "item": 'kubejs:control_circuit'
            },
            "top": {
                "item": 'kubejs:pure_zinc_bucket'
            }
        },
        "mode": "press",
        "result": {
            "item": 'kubejs:undeveloped_basic_control_circuit'
        }
    })
    // 未完成基础控制电路2
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": 'malum:earthen_spirit'
            },
            "middle": {
                "item": 'kubejs:control_circuit'
            },
            "top": {
                "item": 'botania:terrasteel_nugget'
            }
        },
        "mode": "press",
        "result": {
            "item": 'kubejs:undeveloped_basic_control_circuit'
        }
    })
    // 钢制机壳
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": 'thermal:steel_ingot'
            },
            "middle": {
                "item": 'thermal:machine_frame'
            },
            "top": {
                "item": 'minecraft:netherite_ingot'
            }
        },
        "mode": "press",
        "result": {
            "item": 'mekanism:steel_casing'
        }
    }).id('mekanism:steel_casing')
    // 通量壳
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": 'immersiveengineering:insulating_glass'
            },
            "middle": {
                "item": 'thermal:energy_cell_frame'
            },
            "top": {
                "item": 'immersiveengineering:insulating_glass'
            }
        },
        "mode": "press",
        "result": {
            "item": 'powah:dielectric_casing'
        }
    }).id('powah:crafting/dielectric_casing')
})