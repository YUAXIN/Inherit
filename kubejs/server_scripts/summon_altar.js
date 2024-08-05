ServerEvents.recipes(event => {
	// 烈焰人燃烧室
	event.custom({
        "type": "summoningrituals:altar",
    "catalyst": { "item": "malum:infernal_spirit" },
    "outputs": [
        { "item": 'create:blaze_burner' },
    ],
    "inputs": [
        { "ingredient": { "item":'minecraft:blaze_rod' }, "count": 3 },
        { "ingredient": { "item":'mysticalagriculture:machine_frame' }, "count":1 },
        { "ingredient": { "item":'minecraft:lava_bucket' }, "count":1 },
        { "ingredient": { "item":'projecte:alchemical_coal' }, "count":2 },
        { "ingredient": { "item":'mekanism:ingot_bronze' }, "count":4 },
    ],
    "recipe_time": 100
})
})