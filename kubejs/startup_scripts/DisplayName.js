let displayName = [
	['kubejs', 'Inherit'],
	['inherit', 'Inherit']
]
displayName.forEach(([Mod_id, DisplayName]) => {
	Platform.getInfo(Mod_id).name = DisplayName
})