const $InfuseType = Java.loadClass("mekanism.api.chemical.infuse.InfuseType")
const $InfuseTypeBuilder = Java.loadClass("mekanism.api.chemical.infuse.InfuseTypeBuilder")

StartupEvents.registry("mekanism:infuse_type", e => {
	const infuse = [
		{ id: 'basic', color: 0x24E845 },
		{ id: 'gold_leaf', color: 0xFFD700 }
	]

	infuse.forEach(infuses => {
		e.createCustom(infuses.id, () =>
			$InfuseType($InfuseTypeBuilder
				.builder()
				.color(infuses.color)
			)
		)
	})
})