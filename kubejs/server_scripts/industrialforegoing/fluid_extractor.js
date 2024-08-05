ServerEvents.recipes((event) => {
    // 污浊锌浆液
    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": 'create:zinc_block'
        },
        "output": "{Amount:100,FluidName:\"kubejs:dirty_zinc\"}",
        "result": 'create:zinc_ore'
    })
    // 液态魔源
    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.2,
        "defaultRecipe": false,
        "input": {
            "item": 'ars_nouveau:source_gem_block'
        },
        "output": "{Amount:40,FluidName:\"starbunclemania:source_fluid\"}",
        "result": 'mysticalagriculture:prosperity_gemstone_block'
    })
})