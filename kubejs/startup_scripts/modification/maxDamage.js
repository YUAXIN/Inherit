ItemEvents.modification(e => {
	let items = [
		['occultism:chalk_white', 0],
		['occultism:chalk_gold', 0],
		['occultism:chalk_purple', 0],
		['occultism:chalk_red', 0]
	]

	items.forEach(([name, number]) => {
		e.modify(name, item => { item.maxDamage = number })
	})
})