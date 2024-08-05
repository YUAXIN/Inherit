ServerEvents.recipes(event => {
  // 猪排
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 64,
    "input": {
      "item": "kubejs:xx"
    },
    "output": "minecraft:cooked_porkchop",
    "pedestalItems": [],
    "source": 500
  })
  //精密构件
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'mekanism:ingot_bronze'
    },
    "output": 'create:precision_mechanism',
    "pedestalItems": [
      {
        "item": {
          "item": 'malum:infernal_spirit'
        }
      },
      {
        "item": {
          "item": 'projecte:dark_matter'
        }
      },
      {
        "item": {
          "item": 'immersiveengineering:coal_coke'
        }
      }
    ],
    "source": 100
  })
  // 固态魔源1
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 2,
    "input": {
      "item": 'psi:ebony_substance'
    },
    "output": 'kubejs:hard_source',
    "pedestalItems": [],
    "source": 100
  })
  //魔源石
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'minecraft:stone'
    },
    "output": 'ars_nouveau:sourcestone',
    "pedestalItems": [
      {
        "item": {
          "item": 'malum:spectral_lens'
        }
      }
    ],
    "source": 100
  })
  //粗灵魂石块
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'minecraft:cobblestone'
    },
    "output": 'malum:block_of_raw_soulstone',
    "pedestalItems": [
      {
        "item": {
          "item": 'ars_nouveau:source_gem_block'
        }
      }
    ],
    "source": 100
  })
  // 强化稳定水晶
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'elementalcraft:contained_crystal'
    },
    "output": 'elementalcraft:strongly_contained_crystal',
    "pedestalItems": [
      {
        "item": {
          "item": 'elementalcraft:swift_alloy_ingot'
        }
      }, {
        "item": {
          "item": 'mysticalagriculture:prosperity_shard'
        }
      }
    ],
    "source": 1500
  }).id('elementalcraft:strongly_contained_crystal')
  // 不完整精英控制电路
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'kubejs:control_circuit'
    },
    "output": 'kubejs:undeveloped_elite_control_circuit',
    "pedestalItems": [
      {
        "item": {
          "item": 'mythicbotany:niflheim_rune'
        }
      }
    ],
    "source": 1500
  })
  // 盖亚魂锭
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'botania:manasteel_ingot'
    },
    "output": 'botania:gaia_ingot',
    "pedestalItems": [
      {
        "item": {
          "type": "forge:nbt",
          "item": 'ars_nouveau:mob_jar',
          'nbt': '{BlockEntityTag:{entityId:"botania:doppleganger",entityTag:{id:"botania:doppleganger"}}}',
        }
      },
      {
        "item": {
          "item": 'botania:rune_mana'
        }
      },
      {
        "item": {
          "item": 'ars_nouveau:source_gem_block'
        }
      }
    ],
    "source": 1500
  })
  // 不完整精英控制电路
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 9,
    "input": {
      "item": 'kubejs:petal_block'
    },
    "output": 'kubejs:no_petal',
    "pedestalItems": [
      {
        "item": {
          "item": 'quark:blank_rune'
        }
      },
      {
        "item": {
          "item": 'kubejs:rune'
        }
      },
      {
        "item": {
          "item": 'botania:fertilizer'
        }
      }
    ],
    "source": 1500
  })
  // 精英合成组件
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'extendedcrafting:black_iron_slate'
    },
    "output": 'extendedcrafting:elite_component',
    "pedestalItems": [
      {
        "item": {
          "item": 'elementalcraft:pristine_water_gem'
        }
      },
      {
        "item": {
          "item": 'elementalcraft:drenched_iron_ingot'
        }
      },
      {
        "item": {
          "item": 'ae2:singularity'
        }
      }
    ],
    "source": 1500
  }).id('extendedcrafting:elite_component')
  // 魔源宝石块
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'minecraft:emerald'
    },
    "output": 'ars_nouveau:source_gem_block',
    "pedestalItems": [
      {
        "item": {
          "item": 'minecraft:purple_dye'
        }
      },
      {
        "item": {
          "item": 'botania:rune_mana'
        }
      },
      {
        "item": {
          "item": 'elementalcraft:purecrystal'
        }
      }
    ],
    "source": 1500
  })
  // 物质球
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 8,
    "input": {
      "item": 'minecraft:snowball'
    },
    "output": 'ae2:black_paint_ball',
    "pedestalItems": [
      {
        "item": {
          "item": 'projecte:dark_matter'
        }
      },
      {
        "item": {
          "item": 'industrialforegoing:laser_lens15'
        }
      },
      {
        "item": {
          "item": 'elementalcraft:purecrystal'
        }
      }
    ],
    "source": 1500
  })
  // 绝缘浮层
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 8,
    "input": {
      "item": 'minecraft:clay_ball'
    },
    "output": 'powah:dielectric_paste',
    "pedestalItems": [
      {
        "item": {
          "item":'projectexpansion:white_matter'
        }
      },
      {
        "item": {
          "item": 'minecraft:blaze_powder'
        }
      },
      {
        "item": {
          "item": 'immersiveengineering:coal_coke'
        }
      }
    ],
    "source": 1500
  })
  // 火之符文
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'kubejs:fire_essence_base'
    },
    "output": 'ars_nouveau:fire_essence',
    "pedestalItems": [
      {
        "item": {
          "type": "forge:nbt",
          "item": 'ars_nouveau:mob_jar',
          'nbt': '{BlockEntityTag:{entityId:"occultism:afrit",entityTag:{id:"occultism:afrit"}}}',
        }
      },
      {
        "item": {
          "item": 'botania:rune_fire'
        }
      },
      {
        "item": {
          "item": 'ars_nouveau:source_gem_block'
        }
      }
    ],
    "source": 1500
  }).id('ars_nouveau:imbuement_fire_essence')
  // 水精华
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'kubejs:water_essence_base'
    },
    "output": 'ars_nouveau:water_essence',
    "pedestalItems": [
      {
        "item": {
          "item": 'elementalcraft:pristine_water_gem'
        }
      },
      {
        "item": {
          "item": 'thermal_extra:dragonsteel_ingot'
        }
      },
      {
        "item": {
          "item": 'avaritia:crystal_matrix_ingot'
        }
      }
    ],
    "source": 1500
  }).id('ars_nouveau:imbuement_water_essence')
  // 土精华
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'kubejs:earth_essence_base'
    },
    "output": 'ars_nouveau:earth_essence',
    "pedestalItems": [
      {
        "item": {
          "item": 'elementalcraft:pristine_earth_gem'
        }
      },
      {
        "item": {
          "item": 'botania:terrasteel_ingot'
        }
      },
      {
        "item": {
          "item": 'botania:rune_earth'
        }
      }
    ],
    "source": 1500
  }).id('ars_nouveau:imbuement_earth_essence')
  // 气精华
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'kubejs:air_essence_base'
    },
    "output": 'ars_nouveau:air_essence',
    "pedestalItems": [
      {
        "item": {
          "item": 'elementalcraft:pristine_air_gem'
        }
      },
      {
        "item": {
          "item": 'botania:rune_air'
        }
      },
      {
        "item": {
          "item": 'botania:life_essence'
        }
      }
    ],
    "source": 1500
  }).id('ars_nouveau:imbuement_air_essence')
  // 操纵精华
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": 'kubejs:control_essence_base'
    },
    "output": 'ars_nouveau:manipulation_essence',
    "pedestalItems": [
      {
        "item": {
          "item": 'minecraft:stone_button'
        }
      },
      {
        "item": {
          "item": 'minecraft:wither_skeleton_skull'
        }
      },
      {
        "item": {
          "item": 'minecraft:redstone_block'
        }
      }
    ],
    "source": 1500
  }).id('ars_nouveau:imbuement_manipulation_essence')
  // 治疗精华
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item":'kubejs:treat_essence_base'
    },
    "output": 'ars_nouveau:abjuration_essence',
    "pedestalItems": [
      {
        "item": {
          "item":'naturesaura:token_euphoria'
        }
      },
      {
        "item": {
          "item":'ad_astra:cheese'
        }
      },
      {
        "item": {
          "item":'minecraft:milk_bucket'
        }
      }
    ],
    "source": 1500
  }).id('ars_nouveau:imbuement_abjuration_essence')
  // 操纵精华
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item":'kubejs:summon_essence_base'
    },
    "output":'ars_nouveau:conjuration_essence',
    "pedestalItems": [
      {
        "item": {
          "item":'minecraft:wither_skeleton_skull'
        }
      },
      {
        "item": {
          "item":'minecraft:book'
        }
      },
      {
        "item": {
          "item":'ars_nouveau:source_gem_block'
        }
      }
    ],
    "source": 1500
  }).id('ars_nouveau:imbuement_conjuration_essence')
  // 流体2
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item":'modularrouters:fluid_module'
    },
    "output":'modularrouters:fluid_module_2',
    "pedestalItems": [
      {
        "item": {
          "item":'minecraft:prismarine'
        }
      },
      {
        "item": {
          "item":'botania:rune_water'
        }
      },
      {
        "item": {
          "item":'minecraft:sea_lantern'
        }
      }
    ],
    "source": 1500
  }).id('modularrouters:fluid_module_2_x4')
})