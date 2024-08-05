ServerEvents.recipes(event => {
    const id_prefix ='inherit:recipes/minecraft/stonecutter/'
    /**
    {
     input:,
     output:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        //稀释魔力池
        {
            input:'kubejs:livingrock_mechanism',
            output:'botania:diluted_pool',
            id: `${id_prefix}diluted`
        },
        //花药台
        {
            input:'kubejs:livingrock_mechanism',
            output:'botania:apothecary_livingrock',
            id: `${id_prefix}apothecary`
        },
        // 压力室接口
        {
            input:'pneumaticcraft:pressure_chamber_wall',
            output:'pneumaticcraft:pressure_chamber_interface',
            id: `${id_prefix}interface`
        },
          // 压力室气阀
          {
            input:'pneumaticcraft:pressure_chamber_wall',
            output:'pneumaticcraft:pressure_chamber_valve',
            id: `${id_prefix}valve`
        },
         // 压力室玻璃
         {
            input:'pneumaticcraft:pressure_chamber_wall',
            output:'pneumaticcraft:pressure_chamber_glass',
            id: `${id_prefix}glass`
        },
         // 基座
         {
            input:'industrialforegoing:machine_frame_advanced',
            output:'industrialforegoing:laser_drill',
            id: `${id_prefix}drill`
        },
         // 基座
         {
            input:'thermal_extra:twinite_ingot',
            output:'thermal_extra:machine_speed_augment_4',
            id: `${id_prefix}agument`
        }
    ]

    recipes.forEach(recipe => {
        event.recipes.minecraft.stonecutting(recipe.output, recipe.input).id(recipe.id)
    })
})