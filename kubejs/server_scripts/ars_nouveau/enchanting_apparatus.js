ServerEvents.recipes((event) => {
    // 愉悦印记
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'naturesaura:token_euphoria'
        },
        "pedestalItems": [
            { item: 'minecraft:blaze_rod' }
        ],
        "reagent": [
            {
                "item": 'create:precision_mechanism'
            }
        ],
        "sourceCost": 500
    })
    // 中级机器框架
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'industrialforegoing:machine_frame_simple'
        },
        "pedestalItems": [
            { item: 'ars_nouveau:source_gem' },
            { item: 'mekanism:advanced_control_circuit' }
        ],
        "reagent": [
            {
                "item": 'industrialforegoing:machine_frame_pity'
            },
        ],
        "sourceCost": 1000
    }).id('industrialforegoing:dissolution_chamber/simple_machine_frame')
    // 压缩石
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'pneumaticcraft:reinforced_stone',
            "count": 8
        },
        "pedestalItems": [
            { item: 'ars_nouveau:sourcestone_large_bricks' },
            { item: 'ars_nouveau:sourcestone_large_bricks' },
            { item: 'ars_nouveau:sourcestone_large_bricks' },
            { item: 'ars_nouveau:sourcestone_large_bricks' },
            { item: 'ars_nouveau:sourcestone_large_bricks' },
            { item: 'ars_nouveau:sourcestone_large_bricks' },
            { item: 'ars_nouveau:sourcestone_large_bricks' },
            { item: 'ars_nouveau:sourcestone_large_bricks' },
        ],
        "reagent": [
            {
                "item": 'pneumaticcraft:ingot_iron_compressed'
            },
        ],
        "sourceCost": 500
    }).id('pneumaticcraft:reinforced_stone')
    // 雷电符文
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'ars_nouveau:glyph_lightning'
        },
        "pedestalItems": [
            { item: 'cyclic:lightning_scepter' },
            { item: 'botania:rune_air' },
        ],
        "reagent": [
            {
                "item": 'ars_nouveau:blank_glyph'
            }
        ],
        "sourceCost": 500
    }).id('ars_nouveau:glyph_lightning')
    // 大师符文支架
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'mythicbotany:central_rune_holder'
        },
        "pedestalItems": [
            { item: 'botania:terrasteel_ingot' },
            { item: 'botania:rune_earth' },
        ],
        "reagent": [
            {
                "item": 'mythicbotany:rune_holder'
            }
        ],
        "sourceCost": 5000
    }).id('mythicbotany:central_rune_holder')
    // 至纯水晶
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'elementalcraft:purecrystal'
        },
        "pedestalItems": [
            { item: 'elementalcraft:firecrystal' },
            { item: 'elementalcraft:watercrystal' },
            { item: 'elementalcraft:earthcrystal' },
            { item: 'elementalcraft:aircrystal' },
            { item: 'elementalcraft:strongly_contained_crystal' },
            { item: 'elementalcraft:strongly_contained_crystal' },
            { item: 'elementalcraft:strongly_contained_crystal' },
            { item: 'elementalcraft:strongly_contained_crystal' },
        ],
        "reagent": [
            {
                "item": 'minecraft:diamond_block'
            }
        ],
        "sourceCost": 500
    })
    // 黑铁框架
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'extendedcrafting:frame'
        },
        "pedestalItems": [
            { item: 'kubejs:alfsteel_casing' },
            { item: 'thermal:machine_frame' },
            { item: 'industrialforegoing:machine_frame_simple' },
            { item: 'industrialforegoing:machine_frame_advanced' },
        ],
        "reagent": [
            {
                "item": 'extendedcrafting:black_iron_block'
            }
        ],
        "sourceCost": 5000
    }).id('extendedcrafting:frame')
    // 暗环境石
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'quark:dusky_myalite'
        },
        "pedestalItems": [
            { item: 'malum:wicked_spirit'},
            { item:'malum:aqueous_spirit'},
        ],
        "reagent": [
            {
                "item":'naturesaura:infused_stone'
            }
        ],
        "sourceCost": 5000
    })
     // 下界之星
     event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": 'minecraft:nether_star'
        },
        "pedestalItems": [
            { item:'powah:crystal_blazing'},
            { item:'powah:crystal_niotic'},
            { item:'powah:crystal_spirited'},
        ],
        "reagent": [
            {
                "item":'evilcraft:blood_infusion_core'
            }
        ],
        "sourceCost": 5000
    })
})