StartupEvents.registry('item', e => {
	e.create('qi_month')
		.rarity('epic')
		.glow(true)
		.food(food => {
			food.hunger(10)
			food.saturation(10)
			food.eaten(blessin => {
				const { player, server } = blessin
				player.setAttributeBaseValue('generic.attack_damage', 5)
				server.runCommandSilent(`say 恭喜${blessin.player.username}得到柒月老师的祝福`)
				server.runCommandSilent(`say 攻击力得到提升!`)
			})
		})
})