ServerEvents.recipes(event => {
    // 浸润铁块
    event.custom({
        "type": "elementalcraft:binding",
        "element_amount": 5000,
        "element_type": "water",
        "ingredients": [
            {
                "item": 'thermal:steel_block'
            },
            {
                "item": 'botania:rune_water'
            },
            {
                "item": 'elementalcraft:pristine_water_gem'
            },
        ],
        "output": {
            "item": 'elementalcraft:drenched_iron_block',
            "count": 3
        }
    }).id('elementalcraft:infusion/drenched_iron_ingot')
    // 高级机器框架
    event.custom({
        "type": "elementalcraft:binding",
        "element_amount": 5000,
        "element_type": "earth",
        "ingredients": [
            {
                "item": 'industrialforegoing:machine_frame_simple'
            },
            {
                "item": 'mekanism:elite_control_circuit'
            },
            {
                "item": 'minecraft:diamond_block'
            },
        ],
        "output": {
            "item": 'industrialforegoing:machine_frame_advanced',
            "count": 3
        }
    }).id('industrialforegoing:dissolution_chamber/advanced_machine_frame')
    // 源质钢机壳
    event.custom({
        "type": "elementalcraft:binding",
        "element_amount": 5000,
        "element_type": "fire",
        "ingredients": [
            {
                "item": 'kubejs:alfsteel_casing'
            },
            {
                "item": 'botania:elementium_ingot'
            },
            {
                "item": 'ars_nouveau:source_gem'
            },
        ],
        "output": {
            "item": 'kubejs:elemrntium_casing',
            "count": 1
        }
    })
    // 水精华基地
    event.custom({
        "type": "elementalcraft:binding",
        "element_amount": 5000,
        "element_type": "water",
        "ingredients": [
            {
                "item": 'botania:rune_water'
            },
            {
                "item": 'botania:mana_diamond'
            },
            {
                "item":'vintageimprovements:lumium_sheet'
            },
        ],
        "output": {
            "item":'kubejs:water_essence_base',
            "count": 8
        }
    })
    // 至尊
    event.custom({
        "type": "elementalcraft:binding",
        "element_amount": 5000,
        "element_type": "fire",
        "ingredients": [
            {
                "item": 'mekaevolution:absolute_control_circuit'
            },
            {
                "item": 'ars_nouveau:fire_essence'
            },
            {
                "item":'occultism:afrit_essence'
            },
        ],
        "output": {
            "item":'mekaevolution:supreme_control_circuit',
            "count": 1
        }
    }).id('mekaevolution:supreme_control_circuit')
})