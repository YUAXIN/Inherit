ServerEvents.recipes(event => {
    // Yxiao233
    event.custom({
        "type": "extendedcrafting:compressor",
        "nbt":"{SkullOwner:\"Y_Xiao233\"}",
        "powerCost": 5000,
        "inputCount": 100,
        "powerRate": 200,
        "ingredient": {
            "item": 'create:andesite_alloy'
        },
        "catalyst": {
            "item": 'create:creative_motor'
        },
        "result": {
            "item": "minecraft:player_head",
            "nbt": { "SkullOwner": "Y_Xiao233" }
        }
    })
})