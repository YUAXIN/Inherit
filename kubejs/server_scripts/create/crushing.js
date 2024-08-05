ServerEvents.recipes(event => {
    const id_prefix = "inherit:recipes/create/crushing/"

    /**
    {
     output:[],
     input:,
     time:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            output: ['kubejs:undeveloped_advanced_control_circuit'],
            input: Item.of('kubejs:control_circuit', '{SequencedAssembly:{Progress:0.5f,Step:1,id:"minecraft:inherit/undeveloped"}}').weakNBT(),
            time: 10,
            id: `${id_prefix}undeveloped_advanced`
        },
        {
            output: ['minecraft:lapis_lazuli', 'ars_nouveau:source_gem'],
            input: 'botania:manasteel_ingot',
            time: 10,
            id: `${id_prefix}mana_steel`
        },
        {
            output: ['4x botania:mana_powder'],
            input: 'botania:mana_bottle',
            time: 30,
            id: `${id_prefix}mana_powder`
        },
        {
            output: ['4x thermal:sawdust'],
            input: 'minecraft:oak_log',
            time: 50,
            id: `${id_prefix}sawdust`
        },
        {
            output: ['4x thermal_extra:amethyst_dust'],
            input: 'minecraft:amethyst_shard',
            time: 50,
            id: `${id_prefix}amethyst`
        },
        {
            output: ['9x cyclic:peat_fuel'],
            input:'cyclic:peat_baked',
            time: 50,
            id: `${id_prefix}peat_fuel`
        },
        {
            output: ['16x evilcraft:dark_gem_crushed'],
            input: Item.of('ars_nouveau:source_gem', '{SequencedAssembly:{Progress:0.5f,Step:1,id:"minecraft:inherit/gem_crushed"}}').weakNBT(),
            time: 10,
            id: `${id_prefix}gem_crushed`
        },
        {
            output: ['9x evilcraft:hardened_blood_shard'],
            input:'evilcraft:hardened_blood',
            time: 60,
            id: `${id_prefix}blood_shard`
        },]

    recipes.forEach(recipe => {
        event.recipes.create.crushing(recipe.output, recipe.input, recipe.time).id(recipe.id)
    })
})