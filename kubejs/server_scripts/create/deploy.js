ServerEvents.recipes(event => {
    const id_prefix = 'inherit:recipes/create/deploying/'
    /**
    {
     output:,
     input:,
     hand_item:,
     keepHeldItem:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            output: '2x minecraft:end_stone',
            input: 'ars_nouveau:sourcestone',
            hand_item: 'kubejs:un_twig_wand',
            keepHeldItem: true,
            id: `${id_prefix}end_stone`
        },
        {
            output: 'pneumaticcraft:air_compressor',
            input: 'industrialforegoing:machine_frame_simple',
            hand_item: 'kubejs:compressed_iron_sheet',
            keepHeldItem: false,
            id: `${id_prefix}compressor`
        },
        {
            output: 'elementalcraft:infuser',
            input: 'ars_nouveau:imbuement_chamber',
            hand_item: 'elementalcraft:contained_crystal',
            keepHeldItem: false,
            id: `${id_prefix}infuse`
        },
        {
            output: 'create:chocolate_bucket',
            input: 'minecraft:milk_bucket',
            hand_item: 'minecraft:cocoa_beans',
            keepHeldItem: false,
            id: `${id_prefix}choco`
        },
        {
            output: 'ae2:fluix_pearl',
            input: 'botania:mana_pearl',
            hand_item: 'ae2:fluix_crystal',
            keepHeldItem: false,
            id: `${id_prefix}fluixpearl`
        },
        {
            output: '8x minecraft:black_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item: 'industrialforegoing:laser_lens15',
            keepHeldItem: true,
            id: `${id_prefix}black_dye`
        },
        {
            output: '8x minecraft:white_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item: 'industrialforegoing:laser_lens0',
            keepHeldItem: true,
            id: `${id_prefix}white_dye`
        },
        {
            output: 'elementalcraft:container',
            input: 'elementalcraft:small_container',
            hand_item: 'elementalcraft:purecrystal',
            keepHeldItem: false,
            id: `${id_prefix}container`
        },
        {
            output: 'elementalcraft:binder',
            input: 'elementalcraft:infuser',
            hand_item: 'elementalcraft:purecrystal',
            keepHeldItem: false,
            id: `${id_prefix}binder`
        },
        {
            output: '8x minecraft:purple_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item: 'industrialforegoing:laser_lens10',
            keepHeldItem: true,
            id: `${id_prefix}purple_dye`
        },
        {
            output: '8x create:powdered_obsidian',
            input: 'ae2:sky_dust',
            hand_item: 'industrialforegoing:laser_lens15',
            keepHeldItem: true,
            id: `${id_prefix}powdered_obsidian`
        },
        {
            output: '8x minecraft:red_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item: 'industrialforegoing:laser_lens6',
            keepHeldItem: true,
            id: `${id_prefix}red_dye`
        },
        {
            output: '8x minecraft:green_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item: 'industrialforegoing:laser_lens13',
            keepHeldItem: true,
            id: `${id_prefix}green_dye`
        },
        {
            output: 'immersiveengineering:insulating_glass',
            input: 'minecraft:glass',
            hand_item: 'powah:dielectric_paste',
            keepHeldItem: false,
            id: `${id_prefix}insulating_glass`
        },
        {
            output: '8x minecraft:yellow_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item: 'industrialforegoing:laser_lens4',
            keepHeldItem: true,
            id: `${id_prefix}yellow_dye`
        },
        {
            output: '8x minecraft:blue_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item: 'industrialforegoing:laser_lens11',
            keepHeldItem: true,
            id: `${id_prefix}blue_dye`
        },
        {
            output: '8x minecraft:orange_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item:'industrialforegoing:laser_lens1',
            keepHeldItem: true,
            id: `${id_prefix}orange_dye`
        },
        {
            output: 'modularrouters:fluid_module',
            input:'modularrouters:blank_module',
            hand_item:'minecraft:bucket',
            keepHeldItem: true,
            id: `${id_prefix}fluid_module`
        },
        {
            output:'8x minecraft:light_gray_dye',
            input: 'mysticalagriculture:dye_agglomeratio',
            hand_item:'industrialforegoing:laser_lens8',
            keepHeldItem: true,
            id: `${id_prefix}light_gray_dye`
        },
        {
            output:'modularrouters:stack_upgrade',
            input:'modularrouters:blank_upgrade',
            hand_item:'functionalstorage:oak_1',
            keepHeldItem: true,
            id: `${id_prefix}stack_upgrade`
        },]

    recipes.forEach(recipe => {
        if (recipe.keepHeldItem == false) {
            event.recipes.create.deploying(recipe.output, [recipe.input, recipe.hand_item]).id(recipe.id)
        } else {
            event.recipes.create.deploying(recipe.output, [recipe.input, recipe.hand_item]).id(recipe.id).keepHeldItem()
        }
    })
})