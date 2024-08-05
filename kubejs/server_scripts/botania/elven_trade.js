ServerEvents.recipes(event => {
    // 紊乱花瓣块
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": 'botania:gray_petal_block'
            },
            {
                "item": 'botania:cyan_petal_block'
            },
            {
                "item": 'botania:blue_petal_block'
            },
            {
                "item": 'botania:purple_petal_block'
            },
            {
                "item": 'botania:brown_petal_block'
            },
            {
                "item": 'botania:green_petal_block'
            },
            {
                "item": 'botania:red_petal_block'
            },
            {
                "item": 'botania:black_petal_block'
            },
            {
                "item": 'botania:white_petal_block'
            },
            {
                "item": 'botania:orange_petal_block'
            },
            {
                "item": 'botania:magenta_petal_block'
            },
            {
                "item": 'botania:light_blue_petal_block'
            },
            {
                "item": 'botania:lime_petal_block'
            },
            {
                "item": 'botania:light_gray_petal_block'
            },
            {
                "item": 'botania:pink_petal_block'
            },
            {
                "item": 'botania:yellow_petal_block'
            },
        ],
        "output": [
            {
                "item": 'kubejs:petal_block',
                "count": 16
            }
        ]
    })
    //神圣精魄
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": 'malum:arcane_spirit'
            },
        ],
        "output": [
            {
                "item": 'malum:sacred_spirit',
                "count": 2
            }
        ]
    })
    // 泰拉钢（繁琐）
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": 'elementalcraft:earthcrystal_block'
            },
            {
                "item": 'elementalcraft:watercrystal_block'
            },
            {
                "item": 'elementalcraft:firecrystal_block'
            },
            {
                "item": 'botania:manasteel_block'
            },
            {
                "item": 'elementalcraft:aircrystal_block'
            },
            {
                "item": 'malum:block_of_hallowed_gold'
            },
            {
                "item": 'botania:mana_diamond_block'
            },
        ],
        "output": [
            {
                "item": 'botania:terrasteel_ingot',
                "count": 2
            }
        ]
    }).id('mythicbotany:mythicbotany_infusion/terrasteel_ingot')
    // 阿斯加德1符文
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": 'botania:rune_mana'
            },
        ],
        "output": [
            {
                "item": 'mythicbotany:asgard_rune',
                "count": 1
            }
        ]
    }).id('mythicbotany:asgard_rune_runic_altar')
    // 世界树枝干
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": 'botania:livingwood_log'
            },
            {
                "item": 'mythicbotany:asgard_rune'
            },
            {
                "item": 'kubejs:gaia_essence_bucket'
            },
        ],
        "output": [
            {
                "item": 'mythicbotany:yggdrasil_branch',
                "count": 1
            },
            {
                "item": 'minecraft:bucket',
                "count": 1
            }
        ]
    }).id('mythicbotany:yggdrasil_branch')
    // 分红粘液桶
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": 'kubejs:gaia_essence_bucket'
            },
            {
                "item": 'malum:soul_stained_steel_ingot'
            },
        ],
        "output": [
            {
                "item": 'industrialforegoing:pink_slime_bucket',
                "count": 1
            },
        ]
    }).id('create:fill_minecraft_bucket_with_industrialforegoing_pink_slime')
     // 精灵石英
     event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item":'ae2:charged_certus_quartz_crystal'
            }
        ],
        "output": [
            {
                "item": 'botania:quartz_elven',
                "count": 4
            },
        ]
    }).id('botania:elven_trade/elf_quartz')
})