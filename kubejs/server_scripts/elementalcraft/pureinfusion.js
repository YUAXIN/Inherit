ServerEvents.recipes(event => {
    // 未绑定魔王
    event.custom({
        "type": "elementalcraft:pureinfusion",
        "element_amount": 100000,
        "ingredients": [
            {
                "item":'minecraft:writable_book'
            },
            {
                "item":'mekanism:pellet_antimatter'
            },
            {
                "item":'minecraft:purple_dye'
            },
            {
                "item": 'minecraft:orange_dye'
            },
            {
                "item":'minecraft:nether_star'
            }
        ],
        "output": {
            "item":'occultism:book_of_binding_marid'
        }
    }).id('occultism:crafting/book_of_binding_marid')
     // 四象阵盘
     event.custom({
        "type": "elementalcraft:pureinfusion",
        "element_amount": 100000,
        "ingredients": [
            {
                "item":'extendedcrafting:the_ultimate_block'
            },
            {
                "item":'mekaevolution:infinite_control_circuit'
            },
            {
                "item":'minecraft:nether_star'
            },
            {
                "item":'avaritia:crystal_matrix_ingot'
            },
            {
                "item":'spirit:crude_soul_crystal'
            }
        ],
        "output": {
            "item":'kubejs:four_elephant_arrays'
        }
    })
})