ServerEvents.recipes((event) => {
    // 紫水晶
    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_iron"
        },
        "input": {
            "item": 'malum:processed_soulstone'
        },
        "output": {
            "item": 'minecraft:amethyst_shard'
        }
    })
    // PSI灵魂钢
    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_iron"
        },
        "input": {
            "item": 'spirit:soul_steel_ingot'
        },
        "output": {
            "item": 'kubejs:psi_soul_ingot'
        }
    })
    // PSI炭
    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_iron"
        },
        "input": {
            "item": 'malum:arcane_charcoal'
        },
        "output": {
            "item": 'kubejs:psi_coal'
        }
    })
    // PSI粉尘
    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_iron"
        },
        "input": {
            "item": 'spirit:soul_powder'
        },
        "output": {
            "item": 'psi:psidust'
        }
    })
    // PSI粉尘
    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_iron"
        },
        "input": {
            "item": 'malum:infernal_spirit'
        },
        "output": {
            "item": 'malum:copper_node'
        }
    })
})