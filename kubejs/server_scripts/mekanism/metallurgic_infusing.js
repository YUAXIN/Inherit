ServerEvents.recipes(event => {
    //磨制玫瑰石英
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 20, "tag": "mekanism:redstone" },
        "itemInput": { "ingredient": { "item": 'mysticalagriculture:prosperity_shard' } },
        "output": { "item": 'create:polished_rose_quartz' }
    })
    //木基座
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 20, "infuse_type": "kubejs:gold_leaf" },
        "itemInput": { "ingredient": { "item": 'occultism:otherworld_log' } },
        "output": { "item": 'naturesaura:wood_stand' }
    }).id('naturesaura:wood_stand')
    // 橡树树苗
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 20, "infuse_type": "kubejs:basic" },
        "itemInput": { "ingredient": { "item": 'malum:runewood_sapling' } },
        "output": { "item": 'minecraft:oak_sapling' }
    })
    // 浮空白雏菊
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 40, "infuse_type": "kubejs:basic" },
        "itemInput": { "ingredient": { "item": 'botania:white_mystical_flower' } },
        "output": { "item": 'botania:floating_pure_daisy' }
    }).id('botania:floating_pure_daisy')
    // 稳定水晶
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 20, "infuse_type": "kubejs:gold_leaf" },
        "itemInput": { "ingredient": { "item": 'elementalcraft:inert_crystal' } },
        "output": { "item": 'elementalcraft:contained_crystal' }
    }).id('elementalcraft:contained_crystal')
    //  金锭
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 20, "infuse_type": "kubejs:gold_leaf" },
        "itemInput": { "ingredient": { "item": 'mysticalagriculture:prosperity_ingot' } },
        "output": { "item": 'minecraft:gold_ingot' }
    })
    //  煤炭快
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": { "amount": 5, "infuse_type": "mekanism:diamond" },
        "itemInput": { "ingredient": { "item": 'projecte:alchemical_coal_block'} },
        "output": { "item":'minecraft:coal_block'}
    })
})