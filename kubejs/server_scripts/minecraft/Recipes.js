ServerEvents.recipes(e => {
	// KubeJS
	const {
		shaped,
		shapeless
	} = e.recipes.kubejs
	// 符文工作台
	shaped('malum:spirit_altar', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'malum:runewood_planks',
		B: "minecraft:crafting_table"
	}).id('malum:spirit_altar')
	// 富脂符文木
	shaped('malum:exposed_runewood_log', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'malum:runewood_log',
		B: 'mysticalagriculture:stone_essence'
	})
	// 熔炉
	shaped('minecraft:furnace', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'quark:sturdy_stone'
	})
	// 石头
	shaped('16x minecraft:stone', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'mysticalagriculture:stone_essence',
		B: 'malum:runewood_log'
	}).id('mysticalagriculture:essence/minecraft/stone')
	// 沙砾
	shaped('4x minecraft:gravel', [
		'ABA',
		'B B',
		'ABA'
	], {
		A: 'mysticalagriculture:stone_essence',
		B: 'malum:alchemical_calx'
	})
	//打火石
	shaped('minecraft:flint_and_steel', [
		'A  ',
		' B ',
		'   '
	], {
		A: 'malum:raw_soulstone',
		B: 'minecraft:flint'
	})
	// 低级机器框架
	shaped('industrialforegoing:machine_frame_pity', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#minecraft:logs',
		B: 'spirit:soul_slate',
		C: 'spirit:soul_crystal_shard'
	}).id('industrialforegoing:machine_frame_pity')
	// 混合符
	shaped('hexerei:mixing_cauldron', [
		'A A',
		'ACA',
		'ABA'
	], {
		A: 'spirit:soul_slate',
		B: 'spirit:pedestal',
		C: 'industrialforegoing:machine_frame_pity'
	}).id('hexerei:mixing_cauldron')
	// 手摇曲柄
	shaped('create:hand_crank', [
		'   ',
		'AAA',
		'  B'
	], {
		A: 'spirit:soul_slate',
		B: 'malum:processed_soulstone'
	}).id('create:crafting/kinetics/hand_crank')
	// 滚压机
	shaped('create:mechanical_press', [
		' B ',
		' A ',
		' C '
	], {
		A: 'industrialforegoing:machine_frame_pity',
		B: 'spirit:soul_crystal_shard',
		C: 'malum:block_of_soulstone'
	}).id('create:crafting/kinetics/mechanical_press')
	//木质燃烧发电
	shaped('industrialforegoing:pitiful_generator', [
		'ABA',
		'EDE',
		'ACA'
	], {
		A: 'spirit:soul_slate',
		B: 'spirit:crude_soul_crystal',
		C: 'minecraft:furnace',
		D: 'industrialforegoing:machine_frame_pity',
		E: '#minecraft:logs'
	}).id('industrialforegoing:pitiful_generator')
	// 铁制psi
	shaped('psi:cad_assembly_iron', [
		'   ',
		'AAA',
		'  A'
	], {
		A: 'create:andesite_alloy',
	}).id('psi:cad_assembly_iron')
	//搅拌器
	shaped('create:whisk', [
		' B ',
		'ABA',
		'AAA'
	], {
		A: 'kubejs:soul_steel_sheet',
		B: 'create:andesite_alloy'
	})
	// psi装配
	shaped('psi:cad_assembler', [
		'ABA',
		'A A',
		' A '
	], {
		A: 'spirit:soul_slate',
		B: 'spirit:soul_crystal'
	})

	//灵魂营火
	shaped('minecraft:soul_campfire', [
		' A ',
		'ACA',
		'BBB'
	], {
		A: 'minecraft:stick',
		B: '#minecraft:logs',
		C: 'malum:processed_soulstone'
	})
	//矿尘
	shaped('16x malum:alchemical_calx', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'mysticalagriculture:stone_essence',
		B: 'minecraft:sand',
		C: 'malum:arcane_spirit'
	})
	//传动杆
	shaped('8x create:shaft', [
		' A ',
		' B ',
		' A '
	], {
		A: 'create:andesite_alloy',
		B: 'psi:psidust'
	}).id('create:crafting/kinetics/shaft')
	// 石磨
	shaped('create:millstone', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:cogwheel',
		B: 'create:andesite_casing',
		C: 'create:turntable'
	}).id('create:crafting/kinetics/millstone')
	// 砖泥
	shaped('4x tconstruct:grout', [
		'AAA',
		'BBB',
		'CCD'
	], {
		A: 'minecraft:sand',
		B: 'minecraft:gravel',
		C: 'malum:earthen_spirit',
		D: 'psi:psidust'
	}).id('tconstruct:smeltery/seared/grout_multiple')
	// 焦炉砖
	shaped('3x immersiveengineering:cokebrick', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'spirit:soul_slate',
		B: 'kubejs:soul_steel_sheet',
		C: 'immersiveengineering:coal_coke'
	}).id('immersiveengineering:crafting/cokebrick')
	// 暗物质
	shaped('projecte:dark_matter', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: 'psi:ebony_substance',
		B: 'projecte:alchemical_coal',
		C: 'immersiveengineering:coal_coke'
	}).id('emcbaubles:shaped/make_dark_matter_1')
	// 防腐木板
	shaped('4x immersiveengineering:treated_wood_horizontal', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'psi:ebony_substance',
		B: '#minecraft:planks',
		C: 'immersiveengineering:creosote_bucket'
	}).id('immersiveengineering:crafting/treated_wood_horizontal')
	// 模板
	shaped('8x tconstruct:pattern', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'immersiveengineering:treated_wood_horizontal',
		B: 'projecte:dark_matter'
	}).id('tconstruct:tables/pattern')
	//灌注室
	shaped('ars_nouveau:imbuement_chamber', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: 'mekanism:ingot_bronze',
		B: 'kubejs:hard_source',
		C: 'create:precision_mechanism'
	}).id('ars_nouveau:imbuement_chamber')
	// 工程师工作台
	shaped('immersiveengineering:craftingtable', [
		'   ',
		'AA ',
		'BB '
	], {
		A: 'tconstruct:pattern',
		B: 'immersiveengineering:treated_wood_horizontal',
	}).id('immersiveengineering:crafting/craftingtable')
	// 工程师装配
	shaped('immersiveengineering:workbench', [
		'   ',
		'ABB',
		'C D'
	], {
		A: 'create:andesite_alloy',
		B: 'immersiveengineering:slab_treated_wood_horizontal',
		C: 'immersiveengineering:craftingtable',
		D: 'immersiveengineering:treated_fence'
	}).id('immersiveengineering:crafting/workbench')
	// 高炉砖
	shaped('9x immersiveengineering:blastbrick', [
		'ADA',
		'CBC',
		'ADA'
	], {
		A: 'mekanism:ingot_bronze',
		B: "kubejs:blast_curnace_star",
		C: 'immersiveengineering:light_engineering',
		D: 'projecte:dark_matter'
	}).id('immersiveengineering:crafting/blastbrick')
	// 机器外壳
	shaped('2x mysticalagriculture:machine_frame', [
		'ADA',
		'CBC',
		'ADA'
	], {
		A: 'mekanism:ingot_bronze',
		B: 'create:precision_mechanism',
		C: 'immersiveengineering:light_engineering',
		D: 'kubejs:crude_iron_ingot'
	}).id('mysticalagriculture:machine_frame')
	// 压印器
	shaped('ae2:inscriber', [
		'ABB',
		'C  ',
		'ABB'
	], {
		A: 'create:precision_mechanism',
		B: 'create:andesite_alloy',
		C: 'mysticalagriculture:machine_frame',
	}).id('ae2:network/blocks/inscribers')
	// 压印器
	shaped('summoningrituals:altar', [
		'DAD',
		' B ',
		'CCC'
	], {
		A: 'projecte:dark_matter',
		B: 'mysticalagriculture:machine_frame',
		C: 'mekanism:ingot_bronze',
		D: 'create:precision_mechanism'
	})
	// 桶
	shaped('minecraft:bucket', [
		'   ',
		'A A',
		' A '
	], {
		A: 'create:andesite_alloy'
	}).id('minecraft:bucket')
	// 充能器
	shaped('ae2:charger', [
		'AAA',
		'B  ',
		'AAA'
	], {
		A: 'create:andesite_alloy',
		B: 'create:precision_mechanism'
	}).id('ae2:network/blocks/crystal_processing_charger')
	//树液提取机
	shaped('industrialforegoing:fluid_extractor', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: 'malum:aerial_spirit',
		B: 'create:precision_mechanism',
		C: 'mysticalagriculture:machine_frame'
	}).id('industrialforegoing:fluid_extractor')
	// 灵魂透镜
	shaped('malum:spectral_lens', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'spirit:soul_glass',
		B: 'create:brass_ingot'
	})
	// 魔源构件
	shaped('kubejs:source_gem_precision_mechanism', [
		'CAC',
		'ABA',
		'CAC'
	], {
		A: 'ars_nouveau:sourcestone',
		B: 'create:precision_mechanism',
		C: 'kubejs:hard_source'
	})
	// 附魔装置
	shaped('ars_nouveau:enchanting_apparatus', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'create:brass_nugget',
		B: 'ars_nouveau:sourcestone',
		C: 'create:brass_ingot',
		D: 'kubejs:source_gem_precision_mechanism'
	}).id('ars_nouveau:enchanting_apparatus')
	//奥术核心
	shaped('ars_nouveau:arcane_core', [
		'AAA',
		'CDC',
		'AAA'
	], {
		A: 'ars_nouveau:sourcestone',
		C: 'create:brass_ingot',
		D: 'kubejs:source_gem_precision_mechanism'
	}).id('ars_nouveau:arcane_core')
	//奥术基座
	shaped('ars_nouveau:arcane_pedestal', [
		'BAB',
		'CBC',
		'CBC'
	], {
		A: 'kubejs:source_gem_precision_mechanism',
		C: 'create:brass_nugget',
		B: 'ars_nouveau:sourcestone'
	}).id('ars_nouveau:arcane_pedestal')
	// 冶金灌注机
	shaped('mekanism:metallurgic_infuser', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'kubejs:crude_iron_ingot',
		C: 'minecraft:redstone',
		B: 'minecraft:furnace',
		D: 'mekanism:basic_control_circuit'
	}).id('mekanism:metallurgic_infuser')
	// 液态魔源通道
	shaped('starbunclemania:fluid_sourcelink', [
		' A ',
		'BCB',
		' A '
	], {
		A: 'kubejs:source_gem_precision_mechanism',
		B: 'create:brass_ingot',
		C: 'starbunclemania:source_fluid_bucket'
	}).id('starbunclemania:fluid_sourcelink')
	// 未完成逻辑芯片
	shaped('4x laserio:logic_chip_raw', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'mysticalagriculture:stone_essence',
		B: 'mysticalagriculture:redstone_essence',
	}).id('laserio:logic_chip_raw')
	// 激光扳手
	shaped(Item.of('laserio:laser_wrench'), [
		'A A',
		' B ',
		' A '
	], {
		A: 'kubejs:crude_iron_ingot',
		B: 'laserio:logic_chip_raw',
	}).id('laserio:laser_wrench')
	// 物品卡
	shaped(Item.of('laserio:card_item'), [
		'A A',
		'DBD',
		'CCC'
	], {
		A: 'minecraft:redstone',
		B: 'laserio:logic_chip_raw',
		C: '#forge:nuggets/bronze',
		D: 'minecraft:chest'
	}).id('laserio:card_item')
	// 流体卡
	shaped(Item.of('laserio:card_fluid'), [
		'A A',
		'DBD',
		'CCC'
	], {
		A: 'minecraft:redstone',
		B: 'laserio:logic_chip_raw',
		C: '#forge:nuggets/bronze',
		D: 'minecraft:bucket'
	}).id('laserio:card_fluid')
	// 侦测器
	shaped(Item.of('minecraft:observer'), [
		'AAA',
		'BBC',
		'AAA'
	], {
		A: 'minecraft:cobblestone',
		B: 'minecraft:redstone',
		C: 'malum:earthen_spirit'
	}).id('minecraft:observer')
	//切石机
	shaped(Item.of('minecraft:stonecutter'), [
		'   ',
		' B ',
		'ACA'
	], {
		A: 'ars_nouveau:sourcestone',
		B: 'mysticalagriculture:prosperity_ingot',
		C: 'kubejs:source_gem_precision_mechanism'
	}).id('minecraft:stonecutter')
	//泥土
	shaped(Item.of('8x minecraft:dirt'), [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'malum:runewood_sapling',
		B: 'mysticalagriculture:stone_essence'
	})
	//精妙存储木桶
	shaped(Item.of('sophisticatedstorage:barrel', '{woodType:"spruce"}'), [
		'BBB',
		'CAC',
		'CCC'
	], {
		A: 'immersiveengineering:wooden_barrel',
		B: 'botania:livingwood_planks_slab',
		C: 'botania:livingwood_planks'
	}).id('sophisticatedstorage:spruce_barrel')
	// 源点
	shaped(Item.of('16x elementalcraft:source'), [
		'BCB',
		'CAC',
		'BCB'
	], {
		A: 'ars_nouveau:source_gem',
		B: 'mysticalagriculture:prosperity_shard',
		C: 'botania:mana_powder'
	})
	// 流体管道
	shaped(Item.of('6x pipez:fluid_pipe'), [
		'BBB',
		' A ',
		'BBB'
	], {
		A: 'create:fluid_pipe',
		B: 'botania:manasteel_ingot',
	}).id('pipez:fluid_pipe')
	// 元素容器
	shaped(Item.of('elementalcraft:small_container'), [
		' B ',
		'BAB',
		' B '
	], {
		A: 'elementalcraft:contained_crystal',
		B: 'spirit:soul_glass',
	}).id('elementalcraft:small_container')
	// 融合机
	shaped(Item.of('mekanism:combiner'), [
		'DAD',
		'DBD',
		'DCD'
	], {
		A: 'mekanism:metallurgic_infuser',
		B: 'industrialforegoing:machine_frame_simple',
		C: 'ars_nouveau:imbuement_chamber',
		D: '#forge:plates/steel'
	}).id('mekanism:combiner')
	// 激光节点
	shaped(Item.of('laserio:laser_node'), [
		'BAB',
		'ACA',
		'BAB'
	], {
		A: 'minecraft:glass_pane',
		B: 'tconstruct:seared_brick',
		C: 'laserio:logic_chip_raw',
	}).id('laserio:laser_node')
	// 激光链接器
	shaped(Item.of('laserio:laser_connector'), [
		' A ',
		'BCB',
		'AAA'
	], {
		A: 'tconstruct:seared_brick',
		B: 'minecraft:redstone',
		C: 'laserio:logic_chip_raw',
	}).id('laserio:laser_connector')
	// 魔力水晶
	shaped(Item.of('botania:mana_pylon'), [
		' A ',
		'BCB',
		' A '
	], {
		A: 'elementalcraft:swift_alloy_ingot',
		B: 'botania:mana_diamond',
		C: 'elementalcraft:contained_crystal',
	}).id('botania:mana_pylon')
	// 激光链接器
	shaped(Item.of('botania:redstone_root'), [
		'BA ',
		'   ',
		'   '
	], {
		A: 'botania:livingwood_twig',
		B: 'minecraft:redstone',
	}).id('botania:redstone_root')
	// 雷电法杖
	shaped(Item.of('cyclic:lightning_scepter'), [
		'BAB',
		'BCB',
		' C '
	], {
		A: 'minecraft:lightning_rod',
		B: 'minecraft:ender_pearl',
		C: 'botania:livingwood_twig'
	}).id('cyclic:lightning_scepter')
	// 高级压力管道
	shaped(Item.of('8x pneumaticcraft:advanced_pressure_tube'), [
		'   ',
		'ABA',
		'   '
	], {
		A: 'botania:manasteel_ingot',
		B: 'pneumaticcraft:pressure_chamber_valve',
	}).id('pneumaticcraft:assembly/advanced_pressure_tube')
	// 挤压机
	shaped(Item.of('integrateddynamics:squeezer'), [
		'ABA',
		'A A',
		'CDC'
	], {
		A: 'minecraft:stick',
		B: 'botania:manasteel_ingot',
		C: '#minecraft:planks',
		D: 'botania:manasteel_block'
	}).id('integrateddynamics:crafting/squeezer')
	// 圆形模板
	shaped(Item.of('thermal:chiller_ball_cast'), [
		' A ',
		'ABA',
		' A '
	], {
		A: 'mythicbotany:alfsteel_ingot',
		B: 'powah:charged_snowball',
	}).id('thermal:chiller_ball_cast')
	// 注魔板
	shaped(Item.of('mythicbotany:mana_infuser'), [
		'AAA',
		'BCD',
		'EFG'
	], {
		A: 'botania:elementium_ingot',
		B: 'botania:rune_spring',
		C: 'kubejs:alfsteel_casing',
		D: 'botania:rune_summer',
		E: 'botania:rune_autumn',
		F: 'botania:rune_winter',
		G: 'botania:rune_mana'
	}).id('mythicbotany:mana_infuser')
	// 压缩机
	shaped('vintageimprovements:vacuum_chamber', [
		'   ',
		'ABA',
		'CDC'
	], {
		A: 'vintageimprovements:steel_spring',
		B: 'create:copper_casing',
		C: 'create:andesite_alloy',
		D: 'create:mechanical_pump'
	}).id('vintageimprovements:craft/vacuum_chamber')
	// 离心机
	shaped('vintageimprovements:centrifuge', [
		'A A',
		'BCB',
		'ADA'
	], {
		A: 'vintageimprovements:steel_spring',
		B: '#minecraft:logs',
		C: 'create:shaft',
		D: 'create:andesite_casing'
	}).id('vintageimprovements:craft/centrifuge')
	// 颜料提取机
	shaped('mekanism:pigment_extractor', [
		'A A',
		'DBD',
		'ACA'
	], {
		A: 'mysticalagriculture:dye_agglomeratio',
		B: 'mekanism:steel_casing',
		C: 'industrialforegoing:fluid_extractor',
		D: 'minecraft:diamond'
	}).id('mekanism:pigment_extractor')
	//上色
	shaped('mekanism:painting_machine', [
		'A A',
		'DBD',
		'ACA'
	], {
		A: 'mysticalagriculture:dye_agglomeratio',
		B: 'mekanism:steel_casing',
		C: 'mekanism:combiner',
		D: 'minecraft:diamond'
	}).id('mekanism:painting_machine')
	// 蜡烛
	shaped('9x occultism:candle_white', [
		' C ',
		' A ',
		' B '
	], {
		A: 'botania:life_essence',
		B: 'ad_astra:cheese',
		C: 'minecraft:string',
	}).id('occultism:crafting/candle')
	//水晶矩阵
	shaped('avaritia:crystal_matrix', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'mekanism:elite_control_circuit',
		B: 'elementalcraft:drenched_iron_ingot',
		C: 'elementalcraft:purecrystal',
	}).id('avaritia:crystal_matrix')
	// 含杂金色粉笔
	shaped('occultism:chalk_gold_impure', [
		'ABC',
		'ABC',
		'ABC',
	], {
		A: 'occultism:burnt_otherstone',
		B: 'occultism:otherworld_ashes',
		C: 'thermal:electrum_dust',
	}).id('occultism:crafting/chalk_gold_impure')
	// 末地传送门框架
	shaped('minecraft:end_portal_frame', [
		'BCB',
		'ADA',
		'AEA',
	], {
		A: 'minecraft:end_stone',
		B: 'extendedcrafting:ender_ingot',
		C: 'evilcraft:dark_gem',
		D: 'cyclic:ender_eye_reuse',
		E: 'naturesaura:conversion_catalyst'
	})
	// 龙粉
	shaped('4x moremekanismprocessing:dust_draconium', [
		'AB ',
		'BA ',
		'   ',
	], {
		A: 'mekanism:dust_osmium',
		B: 'minecraft:dragon_breath',
	})
	// 学能注入器
	shaped('evilcraft:blood_infuser', [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'pneumaticcraft:compressed_stone',
		B: 'evilcraft:blood_infusion_core',
	}).id('evilcraft:crafting/blood_infuser')
	// 祭祀台
	shaped('naturesaura:offering_table', [
		'BCB',
		' A ',
		'AAA',
	], {
		A: 'minecraft:oak_planks',
		B: 'naturesaura:infused_stone',
		C: 'minecraft:nether_star'
	}).id('naturesaura:offering_table')
	// 刷怪笼
	shaped('minecraft:spawner', [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'minecraft:iron_bars',
		B: 'minecraft:nether_star'
	})
	// 谈天
	shaped('naturesaura:sky_pickaxe', [
		'AAA',
		' B ',
		' B ',
	], {
		A: 'naturesaura:sky_ingot',
		B: 'botania:livingwood_twig'
	}).id('naturesaura:sky_pickaxe')
	// 流体镭射钻基座
	shaped('industrialforegoing:fluid_laser_base', [
		'ABA',
		'CDC',
		'EFE',
	], {
		A: 'powah:crystal_spirited',
		B: 'naturesaura:infused_iron_pickaxe',
		C: 'naturesaura:color_changer',
		D: 'industrialforegoing:machine_frame_advanced',
		E: 'mekanism:ultimate_control_circuit',
		F: 'occultism:afrit_essence',
	}).id('industrialforegoing:fluid_laser_base')
	// 至纯能量灌注
	shaped('elementalcraft:pureinfuser', [
		'FBF',
		'CDC',
		'AEA',
	], {
		A: 'elementalcraft:whiterock',
		B: 'elementalcraft:infuser',
		C: 'elementalcraft:purecrystal',
		D: 'industrialforegoing:machine_frame_advanced',
		E: 'mekanism:metallurgic_infuser',
		F: 'mekanism:pellet_antimatter'
	}).id('elementalcraft:pureinfuser')
	// 精英工作台
	shaped('extendedcrafting:ultimate_table', [
		'BAB',
		'ADA',
		'AEA',
	], {
		A: 'botania:terrasteel_ingot',
		B: 'mekanism:ultimate_control_circuit',
		D: 'extendedcrafting:elite_table',
		E: 'industrialforegoing:machine_frame_supreme',
	}).id('extendedcrafting:ultimate_table')
	// 流明锭
	shaped('thermal:lumium_ingot', [
		'AB ',
		'B  ',
		'   ',
	], {
		A: 'avaritia:crystal_matrix_ingot',
		B: 'extendedcrafting:luminessence',
	}).id('thermal:fire_charge/lumium_ingot_4')
	// 1级存储流体
	shaped('mekanism:basic_fluid_tank', [
		' B ',
		'BAB',
		' B ',
	], {
		A: 'minecraft:bucket',
		B: 'kubejs:soul_steel_sheet',
	}).id('mekanism:fluid_tank/basic')
	//2级存储流体
	shaped('mekanism:advanced_fluid_tank', [
		'CBC',
		'BAB',
		'CBC',
	], {
		A: 'mekanism:basic_fluid_tank',
		B: 'mysticalagriculture:redstone_essence',
		C: 'malum:earthen_spirit'
	}).id('mekanism:fluid_tank/advanced')
	// 3级存储流体
	shaped('mekanism:ultimate_fluid_tank', [
		'CBC',
		'BAB',
		'CBC',
	], {
		A: 'mekanism:advanced_fluid_tank',
		B: 'create:polished_rose_quartz',
		C: 'create:brass_ingot'
	}).id('mekanism:fluid_tank/ultimate')
	// 云杉木铁通
	shaped(Item.of('sophisticatedstorage:iron_barrel', '{woodType:"spruce"}'), [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'create:andesite_alloy',
		B: 'sophisticatedstorage:barrel',
	}).id('sophisticatedstorage:tier_upgrade_barrel_woodtype__spruce__')
	// 漏斗
	shaped('minecraft:hopper', [
		'A A',
		'ABA',
		' A ',
	], {
		A: 'create:andesite_alloy',
		B: '#forge:chests',
	}).id('minecraft:hopper'),
		// 模块化路由器
		shaped('modularrouters:modular_router', [
			'ABA',
			'BCB',
			'ABA',
		], {
			A: 'create:andesite_alloy',
			B: 'minecraft:ender_pearl',
			C: 'botania:livingrock'
		}).id('modularrouters:modular_router')
	// 活塞
	shaped('minecraft:piston', [
		'AAA',
		'BCB',
		'BDB',
	], {
		A: '#minecraft:planks',
		B: 'minecraft:cobblestone',
		C: 'minecraft:redstone',
		D: 'create:andesite_alloy'
	}).id('minecraft:piston')
	// ME机壳
	shaped('kubejs:controller_casing', [
		'AAA',
		'ABA',
		'AAA',
	], {
		A: 'pneumaticcraft:compressed_stone',
		B: 'ae2:fluix_crystal',
	})
})