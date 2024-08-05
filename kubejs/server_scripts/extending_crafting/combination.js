ServerEvents.recipes(event => {
	// 奈老师
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 50000,
		"input": { "item": 'minecraft:cake' },
		"ingredients": [
			{ "item": 'farmersdelight:squid_ink_pasta' },
			{ "item": 'farmersdelight:pasta_with_mutton_chop' },
			{ "item": 'farmersdelight:shepherds_pie' },
			{ "item": 'farmersdelight:honey_glazed_ham' },
			{ "item": 'farmersdelight:mushroom_rice' },
			{ "item": 'farmersdelight:vegetable_noodles' },
			{ "item": 'farmersdelight:grilled_salmon' },
			{ "item": 'farmersdelight:stuffed_pumpkin' },
			{ "item": 'farmersdelight:roast_chicken' },
			{ "item": 'farmersdelight:roasted_mutton_chops' },
			{ "item": 'farmersdelight:pasta_with_meatballs' },
			{ "item": 'farmersdelight:baked_cod_stew' },
			{ "item": 'farmersdelight:pumpkin_soup' },
			{ "item": 'farmersdelight:chicken_soup' },
			{ "item": 'farmersdelight:vegetable_soup' },
			{ "item": 'farmersdelight:beef_stew' },
			{ "item": 'farmersdelight:steak_and_potatoes' },
			{ "item": 'farmersdelight:fried_rice' },
			{ "item": 'farmersdelight:fried_rice' },
			{ "item": 'farmersdelight:noodle_soup' },
		],
		"result": { "item": 'kubejs:huaqinaizi', "count": 64 }
	})
	// NASA工作台
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 50000,
		"input": { "item": 'extendedcrafting:elite_table' },
		"ingredients": [
			{ "item": 'botania:gaia_ingot' },
			{ "item": 'industrialforegoing:machine_frame_advanced' },
			{ "item": 'minecraft:redstone_block' },
			{ "item": 'thermal:steel_block' },
		],
		"result": { "item": 'ad_astra:nasa_workbench', "count": 1 }
	}).id('ad_astra:recipes/nasa_workbench')
	// 血能注入核心
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 50000,
		"input": { "item": 'evilcraft:dark_power_gem' },
		"ingredients": [
			{ "item": 'evilcraft:hardened_blood_shard' },
			{ "item": 'evilcraft:hardened_blood_shard' },
			{ "item": 'evilcraft:hardened_blood_shard' },
			{ "item": 'evilcraft:hardened_blood_shard' },
			{ "item": 'evilcraft:hardened_blood_shard' },
			{ "item": 'evilcraft:hardened_blood_shard' },
			{ "item": 'evilcraft:hardened_blood_shard' },
			{ "item": 'evilcraft:hardened_blood_shard' },
		],
		"result": { "item": 'evilcraft:blood_infusion_core', "count": 1 }
	}).id('evilcraft:crafting/blood_infusion_core')
	// 控制电路
	event.custom({
		"type": "extendedcrafting:combination",
		"powerCost": 50000,
		"input": { "item":'mekanism:ultimate_control_circuit' },
		"ingredients": [
			{ "item": 'thermal:lumium_ingot' },
			{ "item": 'thermal:lumium_ingot' },
			{ "item": 'thermal:lumium_ingot' },
			{ "item": 'thermal:lumium_ingot' },
			{ "item": 'thermal:lumium_ingot' },
			{ "item": 'thermal:lumium_ingot' },
			{ "item": 'thermal:lumium_ingot' },
			{ "item": 'thermal:lumium_ingot' },
		],
		"result": { "item":'mekaevolution:absolute_control_circuit', "count": 3 }
	}).id('mekaevolution:absolute_control_circuit')
})