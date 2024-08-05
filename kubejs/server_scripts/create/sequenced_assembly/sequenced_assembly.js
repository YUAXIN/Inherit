ServerEvents.recipes(event => {
	const { sequenced_assembly,
		deploying,
		compacting,
		crushing,
		cutting,
		emptying,
		filling,
		haunting,
		mechanical_crafting,
		milling,
		mixing,
		pressing,
		sandpaper_polishing, } = event.recipes.create

	//Y_xiao
	sequenced_assembly(
		'kubejs:xiao',
		'create:andesite_alloy',
		[
			deploying('create:andesite_alloy', [
				'create:andesite_alloy',
				'create:andesite_casing'
			]),
			deploying('create:andesite_alloy', [
				'create:andesite_alloy',
				'create:copper_casing'
			]),
			deploying('create:andesite_alloy', [
				'create:andesite_alloy',
				'create:brass_casing'
			]),
			deploying('create:andesite_alloy', [
				'create:andesite_alloy',
				'create:railway_casing'
			]),
			deploying('create:andesite_alloy', [
				'create:andesite_alloy',
				'create:sand_paper'
			]),
			deploying('create:andesite_alloy', [
				'create:andesite_alloy',
				'kubejs:antimatter_wand'
			]),
			deploying('create:andesite_alloy', [
				'create:andesite_alloy',
				'create:creative_motor'
			]),
		]
	).loops(1).transitionalItem('create:andesite_alloy')
})