// 石头精华
BlockEvents.rightClicked(event => {
	const { block, hand, item, world, player } = event
	if (hand.name() != "MAIN_HAND") return

	if (event.block.id == 'minecraft:bedrock' && event.item.id == 'minecraft:air' && (player.isCrouching() || player.isFake())) {
		let itemEntity = event.block.createEntity("item")
		itemEntity.item = 'mysticalagriculture:stone_essence'
		itemEntity.x += 0.5
		itemEntity.y += 1
		itemEntity.z += 0.5
		if (Math.random() < 0.99) {
			itemEntity.spawn()
		}
	}
	if (event.block.id == 'projectexpansion:purple_fuel_block' && event.item.id == 'minecraft:air' && (player.isCrouching() || player.isFake())) {
		let itemEntity = event.block.createEntity("item")
		itemEntity.item = 'malum:arcane_spirit'
		itemEntity.x += 0.5
		itemEntity.y += 1
		itemEntity.z += 0.5
		if (Math.random() < 0.99) {
			itemEntity.spawn()
		}
	}
})