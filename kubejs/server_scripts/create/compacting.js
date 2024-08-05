ServerEvents.recipes(e => {
    const {
        compacting
    } = e.recipes.create
    // 玻璃
    compacting('minecraft:glass', [
		Fluid.of('tconstruct:molten_glass',1000)
	])
})