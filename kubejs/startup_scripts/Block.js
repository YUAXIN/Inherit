StartupEvents.registry('block', e => {
	// 工具类型
	const Tool_Type = {
		pickaxe: 'minecraft:mineable/pickaxe',
		shovel: 'minecraft:mineable/shovel',
		axe: 'minecraft:mineable/axe',
		sword: 'minecraft:mineable/sword',
		hoe: 'minecraft:mineable/hoe'
	}
	// 挖掘等级
	const Minin_Glevel = {
		wooden: 'minecraft:needs_wooden_tool',
		stone: 'minecraft:needs_stone_tool',
		iron: 'minecraft:needs_iron_tool',
		gold: 'minecraft:needs_gold_tool',
		nether: 'forge:needs_netherite_tool'
	}

	// 定义方块
	let Block = [
		// 机器核心
		['machine_core', 'cardinal', 'metal', 5, 5, 'pickaxe', 'stone', true],
		// 花瓣块
		['petal_block', 'basic', 'wool', 5, 5, 'hoe', 'wooden', false],
		// 精灵钢核心外壳
		['elemrntium_casing', 'basic', 'metal', 5, 5, 'pickaxe', 'stone', true],
		// 源质钢机壳
		['alfsteel_casing', 'basic', 'metal', 5, 5, 'pickaxe', 'stone', true],
		// ME机壳
		['controller_casing', 'basic', 'metal', 5, 5, 'pickaxe', 'stone', true]
	]

	// 循环
	Block.forEach(([Name, Type, SoundType, Hardness, ResisTance, Tool, Grade, RequiresTool]) => {
		e.create(Name, Type)
			.soundType(SoundType)
			.hardness(Hardness)
			.resistance(ResisTance)
			.tagBlock(Tool_Type[Tool])
			.tagBlock(Minin_Glevel[Grade])
			.requiresTool(RequiresTool)
	})
})