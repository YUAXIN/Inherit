ServerEvents.recipes(event => {
	// 安山机壳
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'industrialforegoing:machine_frame_pity' },
			{ "item": "create:andesite_alloy" }
		],
		"results": [{ "item": "create:andesite_casing" }]
	})
	// ME控制器
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'kubejs:controller_casing' },
			{ "item": 'mekanism:basic_control_circuit' }
		],
		"results": [{ "item": 'ae2:controller' }]
	}).id('ae2:network/blocks/controller')
	// ME驱动
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'kubejs:controller_casing' },
			{ "item": 'ae2:item_cell_housing' }
		],
		"results": [{ "item": 'ae2:drive' }]
	}).id('ae2:network/blocks/storage_drive')
	// 窑砖
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'minecraft:sandstone' },
			{ "item": 'malum:earthen_spirit' }
		],
		"results": [{ "item": 'immersiveengineering:alloybrick' }]
	}).id('immersiveengineering:crafting/alloybrick')
	// 红石工程块
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'kubejs:module_processor' },
			{ "item": 'minecraft:redstone' }
		],
		"results": [{ "item": 'immersiveengineering:rs_engineering' }]
	}).id('immersiveengineering:crafting/rs_engineering')
	// 铜机壳
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'minecraft:oxidized_copper' },
			{ "item": 'create:precision_mechanism' }
		],
		"results": [{ "item": 'create:copper_casing' }]
	})
	// 炼金煤炭块
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'malum:block_of_arcane_charcoal' },
			{ "item": 'kubejs:hard_source' }
		],
		"results": [{ "item": 'projecte:alchemical_coal_block' }]
	})
	// 黄铜机壳
	event.custom({
		"type": "create:item_application",
		"ingredients": [
			{ "item": 'immersiveengineering:heavy_engineering' },
			{ "item": 'create:brass_ingot' }
		],
		"results": [{ "item": 'create:brass_casing' }]
	})
})