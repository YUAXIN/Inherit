ServerEvents.recipes((event) => {
    // 充能钢
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": 'elementalcraft:swift_alloy_ingot' },
            { "item": 'thermal:steel_ingot' },
        ],
        "energy": 8000,
        "result": {
            "item": 'powah:steel_energized',
            "count": 4
        }
    }).id('powah:energizing/energized_steel')
    // 充能暗黑宝石
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": 'powah:steel_energized' },
            { "item": 'hexerei:blood_bucket' },
            { "item": 'evilcraft:dark_gem' }
        ],
        "energy": 8000,
        "result": {
            "item": 'evilcraft:dark_power_gem',
            "count": 4
        }
    })
    // 罐中奶牛
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": 'ars_nouveau:archwood_planks' },
            { "item": 'minecraft:milk_bucket' },
            { "item": 'minecraft:glass' }
        ],
        "energy": 8000,
        "result": {
            "item": 'cookingforblockheads:cow_jar',
            "count": 1
        }
    })
    // 烈焰晶体块
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": 'evilcraft:promise_acceptor_iron' },
            { "item": 'mysticalagriculture:blazing_crystal_essence' },
        ],
        "energy": 8000,
        "result": {
            "item": 'powah:blazing_crystal_block',
            "count": 2
        }
    })
    // 钻石晶体块
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": 'evilcraft:promise_acceptor_gold' },
            { "item": 'mysticalagriculture:niotic_crystal_essence' },
        ],
        "energy": 16000,
        "result": {
            "item": 'powah:niotic_crystal_block',
            "count": 2
        }
    })
    // 罐中奶牛
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": 'evilcraft:promise_acceptor_diamond' },
            { "item": 'mysticalagriculture:spirited_crystal_essence' },
        ],
        "energy": 24000,
        "result": {
            "item": 'powah:spirited_crystal_block',
            "count": 2
        }
    })
    // 损坏控制电路
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item":'evilcraft:dark_gem'},
            { "item":'moremekanismprocessing:draconium_ingot'},
            { "item":'kubejs:control_circuit'},
        ],
        "energy": 24000,
        "result": {
            "item": 'kubejs:undeveloped_ultimate_control_circuit',
            "count": 2
        }
    })
     // 至纯水晶
     event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item":'elementalcraft:inert_crystal'},
            { "item":'minecraft:diamond_block'},
            { "item":'mekanism:pellet_antimatter'},
        ],
        "energy": 20000,
        "result": {
            "item":'elementalcraft:purecrystal',
            "count":16
        }
    })
})