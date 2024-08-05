ServerEvents.recipes(event => {
    const id_prefix = 'compact_world:recipes/elementalcraft/sawing/'

    /**
    {
     element_amount:,
     input:,
     luck_ratio:,
     output:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            element_amount: 200,
            input: items('botania:livingwood_log'),
            luck_ratio: 0,
            output: items('ars_nouveau:archwood_planks'),
            id: `${id_prefix}archwood_planks`
        },
        {
            element_amount: 200,
            input: items('botania:mana_powder'),
            luck_ratio: 0,
            output: items('tconstruct:sky_slime_ball'),
            id: `${id_prefix}sky_slime_ball`
        },
        {
            element_amount: 200,
            input: items('ae2:fluix_block'),
            luck_ratio: 0,
            output: items('ae2:quartz_block'),
            id: `${id_prefix}quartz_block`
        },
        {
            element_amount: 200,
            input: items('mekanism:enriched_diamond'),
            luck_ratio: 0,
            output: items('minecraft:diamond'),
            id: `${id_prefix}diamond`
        },
        {
            element_amount: 200,
            input: items('avaritia:crystal_matrix'),
            luck_ratio: 0,
            output: items('avaritia:crystal_matrix_ingot'),
            id: `${id_prefix}matrix`
        }
    ]

    recipes.forEach(recipe => {
        event.custom({
            "type": "elementalcraft:sawing",
            "element_amount": recipe.element_amount,
            "input": recipe.input,
            "luck_ratio": recipe.luck_ratio,
            "output": recipe.output
        }).id(recipe.id)
    })
})