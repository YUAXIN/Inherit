ServerEvents.recipes((event) => {
    // 铁诺言
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": 'naturesaura:infused_iron',
        "fluid": {
            "fluid": "evilcraft:blood",
            "amount": 1000
        },
        "result": {
            "item": 'evilcraft:promise_acceptor_iron'
        },
        "duration": 100,
        "xp": 0,
        "tier": 0
    })
    // 金诺言
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": 'createaddition:electrum_ingot',
        "fluid": {
            "fluid": "evilcraft:blood",
            "amount": 1000
        },
        "result": {
            "item": 'evilcraft:promise_acceptor_gold'
        },
        "duration": 100,
        "xp": 0,
        "tier": 0
    })
    // 钻石诺言
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": 'minecraft:diamond',
        "fluid": {
            "fluid": "evilcraft:blood",
            "amount": 1000
        },
        "result": {
            "item": 'evilcraft:promise_acceptor_diamond'
        },
        "duration": 100,
        "xp": 0,
        "tier": 0
    })
    // 未绑定火灵
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": 'occultism:book_of_binding_djinni',
        "fluid": {
            "fluid": "evilcraft:blood",
            "amount": 1000
        },
        "result": {
            "item": 'occultism:book_of_binding_afrit'
        },
        "duration": 100,
        "xp": 0,
        "tier": 3
    }).id('occultism:crafting/book_of_binding_afrit')
})