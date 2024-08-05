ServerEvents.recipes(event => {
    // 下界水晶
    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": 'minecraft:nether_star'
        },
        "start_item": {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "nbt": {
                "stored_type": "naturesaura:nether"
            }
        },
        "output": {
            "item": 'powah:crystal_nitro',
            "count": 16
        }
    }).id('powah:energizing/nitro_crystal')
    // 苍穹锭
    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": 'malum:hallowed_gold_ingot'
        },
        "start_item": {
            "item": 'botania:mana_powder',
        },
        "output": {
            "item": 'naturesaura:sky_ingot',
            "count": 1
        }
    })
})