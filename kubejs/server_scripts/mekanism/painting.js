ServerEvents.recipes(event => {
    // 黑铁块
    event.custom({
        "type": "mekanism:painting",
        "chemicalInput": { "amount": 256, "pigment": "mekanism:black" },
        "itemInput": { "ingredient": { "item": 'elementalcraft:drenched_iron_block' } },
        "output": { "item": 'extendedcrafting:black_iron_block' }
    })
    //铁块
    event.custom({
        "type": "mekanism:painting",
        "chemicalInput": { "amount": 256, "pigment": "mekanism:white" },
        "itemInput": { "ingredient": { "item": 'elementalcraft:drenched_iron_block' } },
        "output": { "item": 'minecraft:iron_block' }
    })
    // 红物质
    event.custom({
        "type": "mekanism:painting",
        "chemicalInput": { "amount": 256, "pigment": "mekanism:red" },
        "itemInput": { "ingredient": { "item":'projecte:dark_matter' } },
        "output": { "item":'projecte:red_matter' }
    })
    // 虞美人
    event.custom({
        "type": "mekanism:painting",
        "chemicalInput": { "amount": 256, "pigment": "mekanism:red" },
        "itemInput": { "ingredient": { "item":'mysticalagriculture:mystical_flower_essence' } },
        "output": { "item":'minecraft:poppy',
            "count":16
         }
    })
     // 骷髅头
     event.custom({
        "type": "mekanism:painting",
        "chemicalInput": { "amount": 256, "pigment": "mekanism:white" },
        "itemInput": { "ingredient": { "item":'minecraft:wither_skeleton_skull'} },
        "output": { "item":'minecraft:skeleton_skull'}
    })
     // 镭射基座
     event.custom({
        "type": "mekanism:painting",
        "chemicalInput": { "amount": 256, "pigment": "mekanism:white" },
        "itemInput": { "ingredient": { "item":'minecraft:wither_skeleton_skull'} },
        "output": { "item":'minecraft:skeleton_skull'}
    })
})