ServerEvents.recipes(event => {
    // 逻辑电路板
    event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead": 'ae2:logic_processor_press',
        "ingredients": [
            {
                "item": 'elementalcraft:swift_alloy_ingot'
            }
        ],
        "results": [
            {
                "item": 'ae2:printed_logic_processor'
            }
        ]
    })
    //工程电路板
     event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead": 'ae2:engineering_processor_press',
        "ingredients": [
            {
                "item":'botania:mana_diamond'
            }
        ],
        "results": [
            {
                "item": 'ae2:printed_engineering_processor'
            }
        ]
    })
     // 运算电路板
     event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead": 'ae2:calculation_processor_press',
        "ingredients": [
            {
                "item": 'ae2:charged_certus_quartz_crystal'
            }
        ],
        "results": [
            {
                "item": 'ae2:printed_calculation_processor'
            }
        ]
    })
     // 硅板
     event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead": 'ae2:silicon_press',
        "ingredients": [
            {
                "item": 'ae2:silicon'
            }
        ],
        "results": [
            {
                "item": 'ae2:printed_silicon'
            }
        ]
    })
     // 烈焰晶体精华
     event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead":'avaritia:crystal_matrix_ingot',
        "ingredients": [
            {
                "item": 'minecraft:blaze_rod',
                "count":4
            }
        ],
        "results": [
            {
                "item":'mysticalagriculture:blazing_crystal_essence'
            }
        ]
    })
     // 钻石晶体精华
     event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead": 'avaritia:crystal_matrix_ingot',
        "ingredients": [
            {
                "item":'minecraft:diamond'
            }
        ],
        "results": [
            {
                "item": 'mysticalagriculture:niotic_crystal_essence',
                "count":4
            }
        ]
    })
     // 富生晶体精华
     event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead":  'avaritia:crystal_matrix_ingot',
        "ingredients": [
            {
                "item": 'minecraft:emerald'
            }
        ],
        "results": [
            {
                "item":'mysticalagriculture:spirited_crystal_essence'
            }
        ]
    })
})