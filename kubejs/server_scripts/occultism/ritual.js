ServerEvents.recipes((event) => {
    //召唤魔灵
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:summon_foliot",
        "duration": 60,
        "spirit_max_age": 32400,
        "spirit_job_type": "occultism:crush_tier1",
        "entity_to_summon": "occultism:foliot",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_foliot_crusher"
        },
        "ingredients": [
            {
                "item": 'ad_astra:desh_ingot'
            },
            {
                "item": 'elementalcraft:drenched_iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'extendedcrafting:black_iron_ingot'
            },
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/summon_foliot_crusher')
    //魔灵寄宿在锇压缩机钟
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 60,
        "ritual_dummy": {
            "item": 'mekanism:osmium_compressor'
        },
        "ingredients": [
            {
                "item": 'mekanism:steel_casing'
            },
            {
                "item": 'occultism:spirit_attuned_crystal'
            },
            {
                "item": 'mekanism:ingot_osmium'
            },
            {
                "item": 'mekanism:ingot_osmium'
            },
            {
                "item": 'occultism:chalk_gold'
            },
        ],
        "result": {
            "item": 'mekanism:osmium_compressor'
        }
    }).id('mekanism:osmium_compressor')
    //暗物质方块
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 60,
        "ritual_dummy": {
            "item": 'projecte:dark_matter_block'
        },
        "ingredients": [
            {
                "item": 'cyclic:gem_obsidian'
            },
            {
                "item": 'occultism:spirit_attuned_crystal'
            },
            {
                "item": 'projecte:dark_matter'
            },
            {
                "item": 'mekanism:ingot_refined_obsidian'
            },
            {
                "item": 'projecte:red_matter_block'
            },
        ],
        "result": {
            "item": 'projecte:dark_matter_block'
        }
    })
    // 粘土物质
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_with_spirit_name",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 60,
        "ritual_dummy": {
            "item":'projectexpansion:white_matter'
        },
        "ingredients": [
            {
                "item": 'minecraft:clay'
            },
            {
                "item": 'minecraft:clay'
            },
            {
                "item": 'ae2:matter_ball'
            },
            {
                "item": 'projecte:dark_matter'
            },
            {
                "item": 'projecte:dark_matter'
            },

        ],
        "result": {
            "item": 'projectexpansion:white_matter'
        }
    }).id('projectexpansion:matter/white_alt')
    // 火灵灵燧
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_with_spirit_name",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_afrit"
        },
        "pentacle_id": "occultism:summon_afrit",
        "duration": 60,
        "ritual_dummy": {
            "item": 'occultism:afrit_essence'
        },
        "ingredients": [
            {
                "item": 'powah:blazing_crystal_block'
            },
            {
                "item": 'minecraft:lava_bucket'
            },
            {
                "item": 'botania:rune_fire'
            }

        ],
        "result": {
            "item": 'occultism:afrit_essence'
        }
    }).id('occultism:ritual/summon_wild_afrit')
    // 超级机器框架
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_with_spirit_name",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_marid"
        },
        "pentacle_id": "occultism:craft_marid",
        "duration": 60,
        "ritual_dummy": {
            "item": 'industrialforegoing:machine_frame_supreme'
        },
        "ingredients": [
            {
                "item": 'minecraft:netherite_ingot'
            },
            {
                "item": 'industrialforegoing:machine_frame_advanced'
            },
            {
                "item": 'starbunclemania:source_fluid_bucket'
            },
            {
                "item": 'avaritia:crystal_matrix_ingot'
            },
            {
                "item": 'industrialforegoing:diamond_gear'
            }

        ],
        "result": {
            "item": 'industrialforegoing:machine_frame_supreme'
        }
    }).id('industrialforegoing:dissolution_chamber/supreme_machine_frame')
    // 收容罐（火灵
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_with_spirit_name",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_afrit"
        },
        "pentacle_id": "occultism:summon_afrit",
        "duration": 60,
        "ritual_dummy": {
            "item": 'ars_nouveau:mob_jar',
            'nbt': '{BlockEntityTag:{entityId:"occultism:afrit",entityTag:{id:"occultism:afrit"}}}',
        },
        "ingredients": [
            {
                "item": 'powah:blazing_crystal_block'
            },
            {
                "item": 'occultism:afrit_essence'
            },
            {
                "item": 'botania:rune_fire'
            },
            {
                "item":'minecraft:glass'
            },

        ],
        "result": {
            "item": 'ars_nouveau:mob_jar',
            'nbt': '{BlockEntityTag:{entityId:"occultism:afrit",entityTag:{id:"occultism:afrit"}}}',
            "count": 1
        }
    })
})