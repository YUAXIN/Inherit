ServerEvents.recipes(event => {
    //活化水晶锭
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'mysticalagriculture:prosperity_shard'
            },
            "B": {
                "item": 'create:brass_ingot'
            }
        },
        "pattern": [
            " A ",
            "ABA",
            " A "
        ],
        "result": {
            "item": 'mysticalagriculture:prosperity_ingot'
        }
    })
})