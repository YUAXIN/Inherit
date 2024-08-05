ServerEvents.recipes(event => {
    // 魔力钢
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'mysticalagriculture:prosperity_ingot'
        },
        "mana": 200,
        "output": {
            "count": 1,
            "item": 'botania:manasteel_ingot'
        }
    }).id('botania:mana_infusion/manasteel')
    //魔力发射器
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'botania:livingwood_log'
        },
        "mana": 100,
        "output": {
            "count": 1,
            "item": 'botania:mana_spreader'
        }
    }).id('botania:mana_spreader')
    // 瓶装魔力
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'naturesaura:bottle_two_the_rebottling'
        },
        "mana": 1000,
        "output": {
            "count": 1,
            "item": 'botania:mana_bottle'
        }
    }).id('botania:mana_infusion/mana_bottle')
    // 元素管道
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'pipez:fluid_pipe'
        },
        "mana": 100,
        "output": {
            "count": 8,
            "item": 'elementalcraft:elementpipe_impaired'
        }
    }).id('elementalcraft:elementpipe_impaired')
    //钢板
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": 'immersiveengineering:coke'
        },
        "input": {
            "item": 'kubejs:soul_steel_sheet'
        },
        "mana": 2000,
        "output": {
            "count": 1,
            "item": 'thermal:steel_plate'
        }
    })
    // 魔符（空白
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": 'ars_nouveau:source_gem_block'
        },
        "input": {
            "item": 'minecraft:paper'
        },
        "mana": 2000,
        "output": {
            "count": 1,
            "item": 'ars_nouveau:blank_glyph'
        }
    })
    // 袋装可可豆
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": 'ars_nouveau:source_gem_block'
        },
        "input": {
            "item": 'immersiveengineering:treated_wood_horizontal'
        },
        "mana": 2000,
        "output": {
            "count": 1,
            "item": 'quark:cocoa_beans_sack'
        }
    })
    // 草地之钟
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'botania:terrasteel_ingot'
        },
        "mana": 10000,
        "output": {
            "count": 1,
            "item": 'botania:grass_seeds'
        }
    }).id('botania:mana_infusion/grass_seeds')
    // 萤石粉
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": 'ars_nouveau:source_gem_block'
        },
        "input": {
            "item": 'naturesaura:gold_powder'
        },
        "mana": 2000,
        "output": {
            "count": 1,
            "item": 'minecraft:glowstone_dust'
        }
    })
    // 魔力珍珠
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'cyclic:ender_eye_reuse'
        },
        "mana": 2000,
        "output": {
            "count": 1,
            "item": 'botania:mana_pearl'
        }
    }).id('botania:mana_infusion/mana_pearl')
    // 末影之眼
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": 'powah:blazing_crystal_block'
        },
        "input": {
            "item": 'minecraft:ender_pearl'
        },
        "mana": 500,
        "output": {
            "count": 1,
            "item": 'minecraft:ender_eye'
        }
    }).id('tconstruct:smeltery/casting/ender/eye')
    // 富集泥潭
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'cyclic:peat_fuel'
        },
        "mana": 500,
        "output": {
            "count": 1,
            "item": 'cyclic:peat_fuel_enriched'
        }
    })
    // 暗黑宝石
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'evilcraft:dark_gem_crushed'
        },
        "mana": 500,
        "output": {
            "count": 1,
            "item": 'evilcraft:dark_gem'
        }
    })
     // 经验
     event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item":'malum:earthen_spirit'
        },
        "mana": 500,
        "output": {
            "count": 2,
            "item":'ars_nouveau:experience_gem'
        }
    })
     // 火药
     event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item":'minecraft:light_gray_dye'
        },
        "mana": 200,
        "output": {
            "count":64,
            "item":'minecraft:gunpowder'
        }
    })
     // 石英
     event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item":'minecraft:amethyst_shard'
        },
        "mana": 200,
        "output": {
            "count":1,
            "item":'minecraft:quartz_block'
        }
    })
})