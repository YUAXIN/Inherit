ServerEvents.recipes(event => {
    const id_prefix = "inherit:recipes/create/mixing/"
    /**
    {
     output:,
     input:[],
     heated:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            output: 'create:turntable',
            input: ['create:andesite_alloy', 'kubejs:soul_steel_sheet'],
            heated: false,
            id: `${id_prefix}turntable`
        },
        {
            output: Fluid.of('minecraft:lava', 500),
            input: ['4x malum:infernal_spirit', Fluid.of('immersiveengineering:creosote', 500)],
            heated: false,
            id: `${id_prefix}lava`
        },
        {
            output: '4x create:andesite_alloy',
            input: ['malum:arcane_charcoal', 'malum:processed_soulstone'],
            heated: false,
            id: `${id_prefix}andesite_alloy`
        },
        {
            output: '5x create:zinc_ingot',
            input: ['create:raw_zinc', 'kubejs:crude_iron_ingot', 'projecte:dark_matter'],
            heated: 'heated',
            id: `${id_prefix}zinc`
        },
        {
            output: Fluid.of('kubejs:pure_zinc', 500),
            input: ['malum:aerial_spirit', Fluid.of('kubejs:dirty_zinc', 500)],
            heated: 'heated',
            id: `${id_prefix}pure_zinc`
        },
        {
            output: Fluid.of('ad_astra:cryo_fuel', 1000),
            input: ['minecraft:snowball', 'botania:rune_water'],
            heated: 'heated',
            id: `${id_prefix}cryo`
        },
        {
            output: '8x mysticalagriculture:dye_agglomeratio',
            input: ['kubejs:no_petal', 'extendedcrafting:luminessence', 'botania:life_essence'],
            heated: 'heated',
            id: `${id_prefix}dye_agglomeratio`
        },
        {
            output: Fluid.of('industrialforegoing:pink_slime', 1000),
            input: ['botania:white_petal', 'create:polished_rose_quartz'],
            heated: 'heated',
            id: `${id_prefix}pink_slime`
        },
        {
            output: [Fluid.of("hexerei:blood_fluid", 500), 'hexerei:blood_sigil'],
            input: ['hexerei:blood_sigil', Fluid.of('minecraft:milk', 500)],
            heated: 'heated',
            id: `${id_prefix}blood`
        },
        {
            output: '4x thermal_extra:twinite_ingot',
            input: ['mekanism:ingot_refined_glowstone','mekanism:ingot_refined_obsidian'],
            heated: 'heated',
            id: `${id_prefix}twinite`
        },
        {
            output: '8x malum:arcane_charcoal',
            input: ['immersiveengineering:coal_coke','malum:arcane_spirit'],
            heated: false,
            id: `${id_prefix}charcoal`
        },

    ]

    recipes.forEach(recipe => {
        if (recipe.heated == "superheated") {
            event.recipes.create.mixing(recipe.output, recipe.input).superheated().id(recipe.id)
        } else if (recipe.heated == 'heated') {
            event.recipes.create.mixing(recipe.output, recipe.input).heated().id(recipe.id)
        } else if (recipe.heated == false) {
            event.recipes.create.mixing(recipe.output, recipe.input).id(recipe.id)
        }
    })
})