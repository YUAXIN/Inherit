StartupEvents.registry('item', e => {
	let Item = [
		// 星星
		['xx', 'common', false],
		// 未完成进阶电路板
		['undeveloped_advanced_control_circuit', 'uncommon', false],
		// undeveloped_basic_control_circuit
		['undeveloped_basic_control_circuit', 'uncommon', false],
		// undeveloped_elite_control_circuit
		['undeveloped_elite_control_circuit', 'uncommon', false],
		// undeveloped_ultimate_control_circuit
		['undeveloped_ultimate_control_circuit', 'uncommon', false],
		// light_redstone
		['light_redstone', 'uncommon', false],
		// uncovered_pellet_polonium
		['uncovered_pellet_polonium', 'uncommon', false],
		// infused_lapis_lazuli
		['infused_lapis_lazuli', 'common', false],
		// dark_diamond
		['dark_diamond', 'uncommon', false],
		// infused_copper_ingot
		['infused_copper_ingot', 'common', false],
		// soul_steel_sheet
		['soul_steel_sheet', 'uncommon', false],
		// redstone_plate
		['redstone_plate', 'common', false],
		// enriched_soul_steel
		['enriched_soul_steel', 'uncommon', false],
		// control_circuit
		['control_circuit', 'epic', false],
		// hard_source
		['hard_source', 'common', false],
		// infused_iron_gear
		['infused_iron_gear', 'common', false],
		// livingrock_mechanism
		['livingrock_mechanism', 'common', false],
		// source_gem_precision_mechanism
		['source_gem_precision_mechanism', 'common', false],
		// no_petal
		['no_petal', 'common', false],
		// newprint
		['newprint', 'common', false],
		// crude_iron_ingot
		['crude_iron_ingot', 'common', false],
		// rune
		['rune', 'common', false],
		// blast_curnace_star
		['blast_curnace_star', 'common', false],
		// un_twig_wand
		['un_twig_wand', 'common', false],
		// huaqinaizi
		['huaqinaizi', 'common', false],
		// moshede
		['moshede', 'common', false],
		// xiao
		['xiao', 'common', false],
		// chuan
		['chuan', 'common', false],
		// maomaozi
		['maomaozi', 'common', false],
		// fish
		['fish', 'common', false],
		//反物质手杖
		['antimatter_wand', 'epic', false],
		// 压缩铁板
		['compressed_iron_sheet', 'epic', false],
		//psi灵魂锭
		['psi_soul_ingot', 'common', false],
		//psi煤
		['psi_coal', 'common', false],
		//128k存储元件
		['128k_memory_elements', 'common', false],
		//灵魂电路板
		['soul_circuit_board', 'common', false],
		//四象阵盘
		['four_elephant_arrays', 'common', false],
		//处理器模块
		['module_processor', 'common', false],
		// 火精华基底
		['fire_essence_base', 'common', false],
		// 水精华基底
		['water_essence_base', 'common', false],
		// 气精华基底
		['air_essence_base', 'common', false],
		// 地精华基底
		['earth_essence_base', 'common', false],
		// 操纵精华基底
		['control_essence_base', 'common', false],
		// 治疗精华基底
		['treat_essence_base', 'common', false],
		// 召唤精华基底
		['summon_essence_base', 'common', false],
	]
	Item.forEach(([Name, Rarity, Glow]) => {
		e.create(Name)
			.rarity(Rarity)
			.glow(Glow)
	})

	// 特殊注册
})