ServerEvents.recipes(event => {
    //含有盖亚的收容
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'ars_nouveau:archwood_planks',
                "count": 1
            },
            {
                "item": 'botania:mana_diamond',
                "count": 3
            }, {
                "item": 'botania:terrasteel_ingot',
                "count": 1
            },
        ],
        "result": [
            {
                "item": 'ars_nouveau:mob_jar',
                'nbt': '{BlockEntityTag:{entityId:"botania:doppleganger",entityTag:{id:"botania:doppleganger"}}}',
                "count": 1
            }
        ],
        "energy": 3200,
    })
    // 焦铁
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'create:andesite_alloy',
                "count": 1
            },
            {
                "item": 'immersiveengineering:coal_coke',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'kubejs:crude_iron_ingot',
                "count": 3
            }
        ],
        "energy": 1600,
    })
    // 焦铁
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'botania:grass_seeds',
                "count": 1
            },
            {
                "item": 'quark:blank_rune',
                "count": 1
            },
            {
                "item": 'mythicbotany:gjallar_horn_full',
                "count": 1
            },
        ],
        "result": [
            {
                "item": 'mythicbotany:petrunia_floating',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('mythicbotany:petrunia_petal_apothecary')
    // 煤炭奇点
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'minecraft:coal_block',
                "count": 1
            },
            {
                "item": 'ae2:singularity',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'industrialforegoing:laser_lens15',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens15')
    // 透镜白
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'powah:charged_snowball',
                "count": 1
            },
            {
                "item": 'botania:white_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'industrialforegoing:laser_lens0',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens0')
    // 透镜紫
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'malum:soul_stained_steel_ingot',
                "count": 1
            },
            {
                "item": 'botania:purple_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'industrialforegoing:laser_lens10',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens10')
    // 透镜红
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'mekanism:advanced_control_circuit',
                "count": 1
            },
            {
                "item": 'botania:red_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'industrialforegoing:laser_lens6',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens6')
    // 瓶装黑暗
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'malum:wicked_spirit',
                "count": 1
            },
            {
                "item": 'naturesaura:bottle_two_the_rebottling',
                "count": 1
            },
            {
                "item": 'minecraft:end_stone',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'naturesaura:aura_bottle',
                "nbt": '{stored_type:"naturesaura:end"}',
                "count": 1
            }
        ],
        "energy": 1600,
    })
    // 紫色粉笔
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'occultism:chalk_white_impure',
                "count": 1
            },
            {
                "item": 'minecraft:dragon_breath',
                "count": 1
            },
            {
                "item": 'evilcraft:dark_gem_crushed',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'occultism:chalk_purple_impure',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('occultism:crafting/chalk_purple_impure')
    // 透镜绿
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'naturesaura:infused_iron_block',
                "count": 1
            },
            {
                "item": 'botania:green_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'industrialforegoing:laser_lens13',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens13')
    // 凋零骷髅刷怪蛋
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'powah:crystal_nitro',
                "count": 1
            },
            {
                "type": "forge:nbt",
                "item": "naturesaura:aura_bottle",
                "nbt": {
                    "stored_type": "naturesaura:nether"
                },
                "count": 1
            },
            {
                "item": 'minecraft:egg',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'minecraft:wither_skeleton_spawn_egg',
                "count": 1
            }
        ],
        "energy": 1600,
    })
    // 透镜蓝
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item":'powah:niotic_crystal_block',
                "count": 1
            },
            {
                "item": 'botania:blue_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'industrialforegoing:laser_lens11',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens11')
    // 透镜黄
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item": 'malum:hallowed_gold_ingot',
                "count": 1
            },
            {
                "item": 'botania:yellow_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item": 'industrialforegoing:laser_lens4',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens4')
     // 透镜橙
     event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item":'powah:blazing_crystal_block',
                "count": 1
            },
            {
                "item": 'botania:orange_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item":'industrialforegoing:laser_lens1',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens1')
     // 透镜淡灰
     event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
                "item":'kubejs:control_circuit',
                "count": 1
            },
            {
                "item":'botania:light_gray_mystical_flower',
                "count": 1
            },
            {
                "item": 'minecraft:glass',
                "count": 1
            }
        ],
        "result": [
            {
                "item":'industrialforegoing:laser_lens8',
                "count": 1
            }
        ],
        "energy": 1600,
    }).id('industrialforegoing:dissolution_chamber/laser_lens8')
})
