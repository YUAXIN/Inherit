ServerEvents.recipes(event => {
    // 书与笔
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": 'tconstruct:pattern'
        },
        "output": {
            "item": 'minecraft:writable_book'
        },
        "aura": 800,
        "time": 80
    })
    // 绿宝石
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": 'botania:terrasteel_ingot'
        },
        "output": {
            "item": 'minecraft:emerald'
        },
        "aura": 800,
        "time": 80
    })
    //琥珀金
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": 'malum:hallowed_gold_ingot'
        },
        "output": {
            "item": 'createaddition:electrum_ingot',
            "count": 4
        },
        "catalyst": {
            "item": 'kubejs:elemrntium_casing'
        },
        "aura": 5000,
        "time": 60
    })
    //魔灵同调
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": 'minecraft:diamond'
        },
        "output": {
            "item": 'occultism:spirit_attuned_gem',
            "count": 2
        },
        "catalyst": {
            "item": 'kubejs:elemrntium_casing'
        },
        "aura": 5000,
        "time": 25
    })
    //物质球
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": 'ae2:black_paint_ball'
        },
        "output": {
            "item": 'avaritia:matter_cluster',
            "count": 1
        },
        "catalyst": {
            "item": 'projecte:dark_matter_block'
        },
        "aura": 100,
        "time": 25
    })
    //龙息
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "type": "forge:nbt",
            "item": "naturesaura:aura_bottle",
            "count": 1,
            "nbt": "{stored_type:\"naturesaura:end\"}"
        },
        "output": {
            "item": "minecraft:dragon_breath",
            "count": 4
        },
        "catalyst": {
            "item": 'minecraft:end_portal_frame'
        },
        "aura": 8000,
        "time": 80
    }).id('naturesaura:altar/breath')
    // 血夜桶
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "type": "forge:nbt",
            "item":'hexerei:blood_bucket',
            "count": 1,
        },
        "output": {
            "item": 'evilcraft:bucket_blood',
            "count":1
        },
        "catalyst": {
            "item": 'quark:dusky_myalite'
        },
        "aura": 8000,
        "time": 80
    })
})