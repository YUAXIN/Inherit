ServerEvents.recipes(event => {
    //高炉升级
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "blast",
        "inputs": [{
            "item": 'mekanism:ingot_bronze',
            count: 3
        },
        {
            "item": "kubejs:blast_curnace_star",
            count: 1
        },
        {
            "item": "immersiveengineering:coke",
            count: 5
        },
        ],
        "result": { "item": "ironfurnaces:augment_blasting" }
    }).id('ironfurnaces:augments/augment_blasting')
    //高炉核心
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "blast",
        "inputs": [{
            "item": 'create:andesite_alloy',
            count: 3
        },
        {
            "item": 'create:precision_mechanism',
            count: 1
        },
        {
            "item": "immersiveengineering:coke",
            count: 1
        },
        ],
        "result": { "item": 'kubejs:blast_curnace_star' }
    })
    //处理器模块
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "module",
        "inputs": [{
            "item": 'create:andesite_alloy',
            count: 4
        },
        {
            "item": 'malum:processed_soulstone',
            count: 2
        },
        {
            "item": 'psi:psidust',
            count: 1
        },
        ],
        "result": {
            "item": 'kubejs:module_processor',
            'count': 3
        }
    })
    // 精密构件
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "module",
        "inputs": [{
            "item": 'mekanism:ingot_bronze',
            count: 2
        },
        {
            "item": 'malum:infernal_spirit',
            count: 2
        },
        {
            "item": 'kubejs:soul_steel_sheet',
            count: 1
        },
        {
            "item": 'projecte:dark_matter',
            count: 1
        },
        ],
        "result": {
            "item": 'create:precision_mechanism',
            'count': 1
        }
    })
    // 带窑
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "module",
        "inputs": [{
            "item": 'create:andesite_alloy',
            count: 2
        }
        ],
        "result": {
            "item": 'hexerei:pestle_and_mortar',
            'count': 1
        }
    }).id('hexerei:pestle_and_mortar_from_mixing_cauldron')
    // 神龛核心
    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "module",
        "inputs": [{
            "item": 'ae2:fluix_pearl',
            count: 1
        },
        {
            "item": 'mythicbotany:alfsteel_ingot',
            count: 2
        },
        {
            "item": 'elementalcraft:swift_alloy_ingot',
            count: 1
        },
        {
            "item": 'elementalcraft:strongly_contained_crystal',
            count: 1
        }
        ],
        "result": {
            "item": 'elementalcraft:shrine_upgrade_core',
            'count': 1
        }
    }).id('elementalcraft:shrine_upgrade_core')
})