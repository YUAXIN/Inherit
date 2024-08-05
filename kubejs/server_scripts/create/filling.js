ServerEvents.recipes(event => {
    // 微光活木
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": 'botania:livingwood_log'
            },
            {
                "amount": 333,
                "fluid": 'kubejs:pure_zinc',
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": 'botania:glimmering_livingwood_log'
            }
        ]
    })
    // 反物质
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item":'projecte:dark_matter'
            },
            {
                "amount": 10,
                "fluid": "industrialforegoing:ether_gas",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": 'mekanism:pellet_antimatter'
            }
        ]
    })
})