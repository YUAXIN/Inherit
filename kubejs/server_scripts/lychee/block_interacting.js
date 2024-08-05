ServerEvents.recipes((event) => {
    const id_prefix = 'inherit/lychee/block_interacting/';

    const recipes = [
        //炼金矿尘
        {
            item_in: { item: 'malum:crude_scythe' },
            block_in: 'malum:exposed_runewood_log',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'malum:block_of_alchemical_calx',
                }],
            id: `${id_prefix}block_of_alchemical_calx`
        },
        //灵火
        {
            item_in: { item: 'kubejs:source_gem_precision_mechanism' },
            block_in: 'projectexpansion:purple_fuel_block',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'occultism:spirit_fire',
                }],
            id: `${id_prefix}spirit_fire`
        },
        // 魔源罐
        {
            item_in: { item: 'kubejs:source_gem_precision_mechanism' },
            block_in: 'minecraft:glass',
            post: [
                {
                    type: 'place',
                    block: 'ars_nouveau:source_jar',
                }],
            id: `${id_prefix}source_jar`
        },
        // 黄金纤维
        {
            item_in: { item: 'naturesaura:token_euphoria' },
            block_in: 'malum:runewood_leaves',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'naturesaura:gold_fiber',
                },
                {
                    "type": "place",
                    "block": "minecraft:air"
                }
            ],
            id: `${id_prefix}gold_fiber`
        },
        // 黄金纤维2
        {
            item_in: { item: 'naturesaura:token_euphoria' },
            block_in: 'malum:block_of_hallowed_gold',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'naturesaura:gold_fiber',
                },
            ],
            id: `${id_prefix}gold_fiber_two`
        },
        // 活石构件
        {
            item_in: { item: 'kubejs:source_gem_precision_mechanism' },
            block_in: 'botania:livingrock',
            post: [
                {
                    type: 'drop_item',
                    item: 'kubejs:livingrock_mechanism',
                },
                {
                    "type": "place",
                    "block": "minecraft:air"
                }
            ],
            id: `${id_prefix}livingrock_mechanism`
        },
        // 魔力池
        {
            item_in: { item: 'botania:manasteel_ingot' },
            block_in: 'botania:diluted_pool',
            post: [
                {
                    type: 'place',
                    block: 'botania:mana_pool',
                }],
            id: `${id_prefix}mana_pool`
        },
        // 末地石
        {
            item_in: { item: 'kubejs:un_twig_wand' },
            block_in: 'ars_nouveau:sourcestone',
            post: [
                {
                    type: 'place',
                    block: 'minecraft:end_stone',
                }],
            id: `${id_prefix}end_stone`
        },
        // 炉灶
        {
            item_in: { item: 'farmersdelight:skillet' },
            block_in: 'minecraft:campfire',
            post: [
                {
                    type: 'place',
                    block: 'farmersdelight:stove',
                }],
            id: `${id_prefix}stove`
        },
        // 符文祭坛
        {
            item_in: { item: 'kubejs:livingrock_mechanism' },
            block_in: 'botania:mana_diamond_block',
            post: [
                {
                    type: 'place',
                    block: 'botania:runic_altar',
                }],
            id: `${id_prefix}altar`
        },
        // 大法师的法术书
        {
            item_in: { item: 'botania:rune_mana' },
            block_in: 'minecraft:bookshelf',
            post: [
                {
                    type: 'drop_item',
                    item: 'ars_nouveau:archmage_spell_book',
                }],
            id: `${id_prefix}archmage_spell_book`
        },
        // 结晶器
        {
            item_in: { item: 'botania:rune_winter' },
            block_in: 'mysticalagriculture:machine_frame',
            post: [
                {
                    type: 'place',
                    block: 'cyclic:solidifier',
                }],
            id: `${id_prefix}solidifier`
        },
        // 融化（循环
        {
            item_in: { item: 'botania:rune_fire' },
            block_in: 'tconstruct:smeltery_controller',
            post: [
                {
                    type: 'place',
                    block: 'cyclic:melter',
                }],
            id: `${id_prefix}melter`
        },
        // 园艺玻璃罩
        {
            item_in: { item:'botania:rune_earth' },
            block_in:'mysticalagriculture:machine_frame',
            post: [
                {
                    type: 'place',
                    block:'immersiveengineering:cloche',
                }],
            id: `${id_prefix}cloche`
        },
        // 嬗变催化器
        {
            item_in: { item:'elementalcraft:shrine_upgrade_core' },
            block_in:'botania:alchemy_catalyst',
            post: [
                {
                    type: 'place',
                    block:'naturesaura:conversion_catalyst',
                }],
            id: `${id_prefix}catalyst`
        }
    ]
    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
})