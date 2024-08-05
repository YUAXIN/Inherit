ServerEvents.recipes(event => {
    // 碧水精魄
    event.custom({
        "type": "mekanism:enriching",
        "input": { "ingredient": { "item": 'malum:aerial_spirit' } },
        "output": { "item": 'malum:aqueous_spirit' }
    })
    // 富集钻石
    event.custom({
        "type": "mekanism:enriching",
        "input": { "ingredient": { "item": 'botania:mana_diamond' } },
        "output": { "item": 'mekanism:enriched_diamond' }
    }).id('mekanism:enriching/enriched/diamond')
    // 下届合金小刀
    event.custom({
        "type": "mekanism:enriching",
        "input": { "ingredient": { "item": 'minecraft:netherite_block' } },
        "output": { "item": 'farmersdelight:netherite_knife' }
    }).id('farmersdelight:netherite_knife_smithing')
    // 龙锭
    event.custom({
        "type": "mekanism:enriching",
        "input": { "ingredient": { "item":'moremekanismprocessing:dust_draconium'} },
        "output": { "item": 'moremekanismprocessing:draconium_ingot' }
    })
})


