ServerEvents.recipes((event) => {
    //安山合金
    event.custom({
        type: "hexerei:mixingcauldron",
        liquid: {
            fluid: "tconstruct:molten_iron",
        },
        ingredients: [
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:arcane_charcoal',
            },
            {
                item: 'spirit:soul_crystal_shard',
            }
        ],
        output: {
            item: 'create:andesite_alloy',
            count: 6
        },
        liquidOutput: {
            fluid: "tconstruct:molten_glass",
        },
        fluidLevelsConsumed: 1000,
        heatRequirement: "heated",
    })
    // 符文木炭
    event.custom({
        type: "hexerei:mixingcauldron",
        liquid: {
            fluid: "minecraft:water",
        },
        ingredients: [
            {
                item: 'kubejs:soul_steel_sheet',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:processed_soulstone',
            },
            {
                item: 'malum:runewood_log',
            },
            {
                item: 'malum:runewood_log',
            },
            {
                item: 'malum:runewood_log',
            },
            {
                item: 'malum:runewood_log',
            }
        ],
        output: {
            item: 'malum:arcane_charcoal'
        },
        liquidOutput: {
            fluid: "tconstruct:molten_iron"
        },
        fluidLevelsConsumed: 1000,
        heatRequirement: "heated",
    })
    // 化学溶解室
    event.custom({
        type: "hexerei:mixingcauldron",
        liquid: {
            fluid: "tconstruct:molten_iron",
        },
        ingredients: [
            {
                item: 'kubejs:soul_steel_sheet',
            },
            {
                item: 'kubejs:soul_steel_sheet',
            },
            {
                item: 'kubejs:soul_steel_sheet',
            },
            {
                item: 'kubejs:soul_steel_sheet',
            },
            {
                item: 'industrialforegoing:machine_frame_pity',
            },
            {
                item: 'malum:runewood_item_pedestal',
            },
            {
                item: 'malum:runewood_item_pedestal',
            },
            {
                item: 'malum:runewood_item_pedestal',
            }
        ],
        output: {
            item: 'industrialforegoing:dissolution_chamber'
        },
        liquidOutput: {
            fluid: "minecraft:water",
        },
        fluidLevelsConsumed: 1000,
        heatRequirement: "heated",
    })
    // 夸克符文
    event.custom({
        type: "hexerei:mixingcauldron",
        liquid: {
            fluid: "hexerei:blood_fluid",
        },
        ingredients: [
            {
                item: 'ars_nouveau:sourcestone',
            },
            {
                item: 'ars_nouveau:sourcestone',
            },
            {
                item: 'ars_nouveau:sourcestone',
            },
            {
                item: 'ars_nouveau:sourcestone',
            },
            {
                item: 'ars_nouveau:sourcestone',
            },
            {
                item: 'ars_nouveau:sourcestone',
            },
            {
                item: 'ars_nouveau:sourcestone',
            },
            {
                item: 'ars_nouveau:sourcestone',
            }
        ],
        output: {
            item: 'quark:blank_rune',
            count: 3
        },
        liquidOutput: {
            fluid: "hexerei:blood_fluid",
        },
        fluidLevelsConsumed: 1000,
        heatRequirement: "heated",
    })
     // 精灵钢
     event.custom({
        type: "hexerei:mixingcauldron",
        liquid: {
            fluid: "kubejs:gaia_essence",
        },
        ingredients: [
            {
                item:'botania:mana_powder',
            },
            {
                item: 'botania:mana_powder',
            },
            {
                item: 'botania:mana_powder',
            },
            {
                item:'botania:manasteel_ingot',
            },
            {
                item: 'botania:manasteel_ingot',
            },
            {
                item:'botania:manasteel_ingot',
            },
            {
                item:'pneumaticcraft:ingot_iron_compressed',
            },
            {
                item:'malum:hallowed_gold_ingot',
            }
        ],
        output: {
            item: 'mythicbotany:alfsteel_ingot',
            count: 8
        },
        liquidOutput: {
            fluid:"kubejs:gaia_essence",
        },
        fluidLevelsConsumed: 500,
        heatRequirement: "heated",
    }).id('mythicbotany:mythicbotany_infusion/alfsteel_ingot')
     // 地之精华
     event.custom({
        type: "hexerei:mixingcauldron",
        liquid: {
            fluid: "kubejs:gaia_essence",
        },
        ingredients: [
            {
                item:'occultism:otherstone',
            },
            {
                item:'occultism:otherstone',
            },
            {
                item:'occultism:otherstone',
            },
            {
                item:'powah:crystal_spirited',
            },
            {
                item:'powah:crystal_spirited',
            },
            {
                item:'botania:rune_earth',
            },
            {
                item:'occultism:spirit_attuned_gem',
            },
            {
                item:'vintageimprovements:lumium_sheet',
            }
        ],
        output: {
            item: 'kubejs:earth_essence_base',
            count: 8
        },
        liquidOutput: {
            fluid:"kubejs:gaia_essence",
        },
        fluidLevelsConsumed: 500,
        heatRequirement: "heated",
    })
})