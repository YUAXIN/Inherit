ServerEvents.recipes((event) => {
    // 机器框架
    event.custom({
        "type": "lychee:lightning_channeling",
        "post": [{ "type": "drop_item", "item": 'thermal:machine_frame' }],
        "item_in": [{ "item": 'spirit:soul_crystal' }, { "item": 'botania:gaia_ingot' }, { "item":'industrialforegoing:machine_frame_simple' }, { "item":'malum:block_of_soulstone' }]
    })
    // 带电雪球
    event.custom({
        "type": "lychee:lightning_channeling",
        "post": [{ "type": "drop_item", "item":'powah:charged_snowball' }],
        "item_in": [{ "item":'elementalcraft:source' }]
    })
})