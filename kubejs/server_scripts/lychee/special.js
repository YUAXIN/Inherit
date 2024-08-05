ServerEvents.recipes((event) => {
    //有100魔力的魔力池
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'botania:blacker_lotus',
        },
        "block_in": {
            "blocks": ['botania:diluted_pool'],
        },
        "post": [
            {
                "type": "place",
                "block": "minecraft:air"
            },
            {
                "type": 'execute',
                "command": 'give @s botania:diluted_pool{BlockEntityTag:{mana:100}}',
                hide: true
            }
        ]
    })
})