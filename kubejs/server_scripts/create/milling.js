ServerEvents.recipes(e => {
    // Create
    const {
        milling
    } = e.recipes.create

    milling([
        Item.of('malum:earthen_spirit').withChance(1)
    ], 'malum:arcane_spirit')
    milling([
        Item.of('minecraft:sand').withChance(1)
    ], 'minecraft:gravel')
})
