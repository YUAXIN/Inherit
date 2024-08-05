ServerEvents.recipes(event => {
    // 冬之符文
    event.custom({
        "type": "lychee:item_exploding",
        "item_in": [{ "item": 'minecraft:lapis_lazuli' }, { "item": 'projecte:dark_matter' }],
        "post": [
            {
                "type": "drop_item",
                "item": 'ae2:singularity'
            },
        ]
    })
})