Ponder.tags(e => {
	const ie = 'immersiveengineering:'
	const StructuresArray = [
		'advanced_blast_furnace',
		'alloy_smelter',
		'arc_furnace',
		'assembler',
		'auto_workbench',
		'blast_furnace',
		'bottling_machine',
		'crusher',
		'fermenter',
		'metal_press',
		'mixer',
		'refinery',
		'sawmill',
		'squeezer',
		'coke_oven',
		'diesel_generator'
	]
	e.createTag(`${ie}structure`, `${ie}hammer`, '结构', '多方块机器',
		StructuresArray.map(Structures => `${ie}${Structures}`)
	)

	// 熔铸炉
	e.createTag('kubejs:tcon_scorched', 'tconstruct:smeltery_controller', '结构', '多方块熔炉', [
		'tconstruct:foundry_controller',
		'tconstruct:scorched_bricks',
		'tconstruct:scorched_drain',
		'tconstruct:scorched_faucet',
		'tconstruct:scorched_basin',
		'tconstruct:scorched_table',
		'tconstruct:scorched_fuel_tank',

		'tconstruct:smeltery_controller',
		'tconstruct:seared_bricks',
		'tconstruct:seared_drain',
		'tconstruct:seared_faucet',
		'tconstruct:seared_basin',
		'tconstruct:seared_table',
		'tconstruct:seared_fuel_tank',
	])
})