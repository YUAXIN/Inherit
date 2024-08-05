StartupEvents.registry('fluid', e => {
	let Fluid = [
		// 自然精华
		['nature_fluid', 0x686E70],
		// 融化锌精华
		['dirty_zinc', 0x4E946C],
		// 液态石英
		['molten_quartz', 0xF6F1F1],
		// 融熔红石
		['molten_redstone', 0xD20103],
		//纯净锌浆液
		['pure_zinc',0xBDB76B],
		//液态盖亚精华
		['gaia_essence',0xFFF0F5]
	]
	Fluid.forEach(([Name, Color]) => {
		e.create(Name)
			.thickTexture(Color)
			.bucketColor(Color)
			.flowingTexture('kubejs:block/flowing')
			.stillTexture('kubejs:block/still')
	})

	// 特殊注册(这里用于注册特殊的Fluid,例如独立贴图,没有桶之类的)
})