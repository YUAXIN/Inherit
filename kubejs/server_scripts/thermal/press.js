ServerEvents.recipes((event) => {
    // 符文杖
    event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
                "item": 'minecraft:netherite_block',
            },
            {
                "item": 'mythicbotany:nidavellir_rune'
            }
        ],
        "result": [
            {
                "item": 'mythicbotany:rune_holder',
                "count": 9
            }
        ],
        "energy": 4000,
    }).id('mythicbotany:rune_holder')
    // 铁弹簧
    event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
                "item": 'kubejs:crude_iron_ingot',
            },
            {
                "item": 'vintageimprovements:spring_coiling_machine_wheel'
            }
        ],
        "result": [
            {
                "item": 'vintageimprovements:small_iron_spring'

            }
        ],
        "energy": 4000,
    }).id('vintageimprovements:coiling/iron_wire')
    // 魔灵同调水晶
    event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
                "item": 'occultism:spirit_attuned_gem'
            },
            {
                "item": 'ae2:fluix_crystal'
            }
        ],
        "result": [
            {
                "item": 'occultism:spirit_attuned_crystal'

            }
        ],
        "energy": 4000,
    }).id('occultism:crafting/spirit_attuned_crystal')
})