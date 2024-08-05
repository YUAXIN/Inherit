ServerEvents.recipes(event => {
    // 粗制灵魂石
    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [],
        "input": {
            "count": 4,
            "item": "minecraft:cobblestone"
        },
        "output": {
            "count": 4,
            "item": 'malum:raw_soulstone'
        },
        "spirits": [
            {
                "type": "arcane",
                "count": 1
            }
        ]
    }),
        // 镰刀（不可摧毁）
        event.custom({
            "type": "malum:spirit_infusion",
            "extra_items": [],
            "input": {
                "item": 'malum:crude_scythe'
            },
            "output": {
                "item": 'malum:crude_scythe',
                "nbt": '{Damage:0,Unbreakable:1b}'
            },
            "spirits": [
                {
                    "type": "arcane",
                    "count": 4
                },
                {
                    "type": "infernal",
                    "count": 4
                },
                {
                    "type": "earthen",
                    "count": 4
                },
                {
                    "type": "aerial",
                    "count": 4
                },
                {
                    "type": "aqueous",
                    "count": 4
                }
            ]
        }),
        // 灵魂沙
        event.custom({
            "type": "malum:spirit_infusion",
            "extra_items": [],
            "input": {
                "count": 4,
                "item": "minecraft:gravel"
            },
            "output": {
                "count": 1,
                "item": 'minecraft:soul_sand'
            },
            "spirits": [
                {
                    "type": "arcane",
                    "count": 2
                }
            ]
        })
    // 固态魔源
    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [],
        "input": {
            "count": 2,
            "item": 'projecte:dark_matter'
        },
        "output": {
            "count": 1,
            "item": 'kubejs:hard_source'
        },
        "spirits": [
            {
                "type": "arcane",
                "count": 4
            },
            {
                "type": "infernal",
                "count": 4
            },
            {
                "type": "earthen",
                "count": 4
            }
        ]
    })
    // 水元素磨盘
    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "item": 'create:crushing_wheel',
                "count": 2
            }
        ],
        "input": {
            "count": 1,
            "item": 'elementalcraft:small_container'
        },
        "output": {
            "count": 1,
            "item": 'elementalcraft:water_mill_wood_saw'
        },
        "spirits": [
            {
                "type": "sacred",
                "count": 8
            },
            {
                "type": "infernal",
                "count": 8
            },
            {
                "type": "earthen",
                "count": 8
            },
            {
                "type": "arcane",
                "count": 8
            }, {
                "type": "aerial",
                "count": 8
            }
        ]
    })
})