ServerEvents.recipes(event => {
    // 逻辑处理器
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 500,
        "element_type": "air",
        "input": {
            "item": 'ae2:printed_logic_processor'
        },
        "output": {
            "item": 'ae2:logic_processor'
        }
    })
    // 运算处理器
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 500,
        "element_type": "water",
        "input": {
            "item": 'ae2:printed_calculation_processor'
        },
        "output": {
            "item": 'ae2:calculation_processor'
        }
    })
    // 工程处理器
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 500,
        "element_type": "earth",
        "input": {
            "item": 'ae2:printed_engineering_processor'
        },
        "output": {
            "item": 'ae2:engineering_processor'
        }
    })
    // 迅金锭
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 500,
        "element_type": "fire",
        "input": {
            "item": 'minecraft:gold_ingot'
        },
        "output": {
            "item": 'elementalcraft:swift_alloy_ingot'
        }
    }).id('elementalcraft:binding/swift_alloy_ingot')
    // 魔力钻石块
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 5000,
        "element_type": "water",
        "input": {
            "item": 'mysticalagriculture:prosperity_gemstone_block'
        },
        "output": {
            "item": 'botania:mana_diamond_block'
        }
    })
    // 魔力钻石
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 500,
        "element_type": "water",
        "input": {
            "item": 'mysticalagriculture:prosperity_gemstone'
        },
        "output": {
            "item": 'botania:mana_diamond'
        }
    })
    // 铜借点2
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 500,
        "element_type": "air",
        "input": {
            "item": 'malum:infernal_spirit'
        },
        "output": {
            "item": 'malum:copper_node'
        }
    })
    // psi粉2
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 20,
        "element_type": "water",
        "input": {
            "item": 'spirit:soul_powder'
        },
        "output": {
            "item": 'psi:psidust'
        }
    })
    // 自然水晶
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 600,
        "element_type": "earth",
        "input": {
            "item": 'botania:mana_pylon'
        },
        "output": {
            "item": 'botania:natura_pylon'
        }
    }).id('botania:natura_pylon')
    // psi煤炭
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 20,
        "element_type": "water",
        "input": {
            "item": 'malum:arcane_charcoal'
        },
        "output": {
            "item": 'kubejs:psi_coal'
        }
    })
    // 火之符文
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "fire",
        "input": {
            "item": 'kubejs:rune'
        },
        "output": {
            "item": 'botania:rune_fire'
        }
    }).id('botania:runic_altar/fire')
    // 水之符文
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "water",
        "input": {
            "item": 'kubejs:rune'
        },
        "output": {
            "item": 'botania:rune_water'
        }
    }).id('botania:runic_altar/water')
    // 气之符文
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "air",
        "input": {
            "item": 'kubejs:rune'
        },
        "output": {
            "item": 'botania:rune_air'
        }
    }).id('botania:runic_altar/air')
    // 地之符文
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "earth",
        "input": {
            "item": 'kubejs:rune'
        },
        "output": {
            "item": 'botania:rune_earth'
        }
    }).id('botania:runic_altar/earth')
    // 火元素水晶
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "fire",
        "input": {
            "item": 'elementalcraft:strongly_contained_crystal'
        },
        "output": {
            "item": 'elementalcraft:firecrystal'
        }
    }).id('elementalcraft:infusion/firecrystal')
    // 地元素水晶
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "earth",
        "input": {
            "item": 'elementalcraft:strongly_contained_crystal'
        },
        "output": {
            "item": 'elementalcraft:earthcrystal'
        }
    }).id('elementalcraft:infusion/earthcrystal')
    // 气元素水晶
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "air",
        "input": {
            "item": 'elementalcraft:strongly_contained_crystal'
        },
        "output": {
            "item": 'elementalcraft:aircrystal'
        }
    }).id('elementalcraft:infusion/watercrystal')
    // 水元素水晶
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 1000,
        "element_type": "water",
        "input": {
            "item": 'elementalcraft:strongly_contained_crystal'
        },
        "output": {
            "item": 'elementalcraft:watercrystal'
        }
    }).id('elementalcraft:aircrystal')
    // 紫水晶
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 10,
        "element_type": "earth",
        "input": {
            "item": 'malum:processed_soulstone'
        },
        "output": {
            "item": 'minecraft:amethyst_shard'
        }
    })
    // 紫水晶
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 100,
        "element_type": "water",
        "input": {
            "item": 'mekanism:ingot_refined_obsidian'
        },
        "output": {
            "item": 'malum:wicked_spirit',
            "count": 8
        }
    })
    // 植物学家之搞
    event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 100,
        "element_type": "earth",
        "input": {
            "item": 'naturesaura:sky_pickaxe'
        },
        "output": {
            "item": 'naturesaura:infused_iron_pickaxe',
            "count": 1
        }
    })
      // 基座
      event.custom({
        "type": "elementalcraft:infusion",
        "element_amount": 100,
        "element_type": "earth",
        "input": {
            "item":'industrialforegoing:fluid_laser_base'
        },
        "output": {
            "item": 'industrialforegoing:ore_laser_base',
            "count": 1
        }
    })
})