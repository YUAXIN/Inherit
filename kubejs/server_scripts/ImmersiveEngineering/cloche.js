function items(item, count, nbt) {
    count = typeof count != "undefined" ? count : false
    nbt = typeof nbt != "undefined" ? nbt : false

    let count_form_key = {}
    let nbt_form_key = {}
    let nbt_type_form_key = {}

    if (count != false) {
        count_form_key = "count"
    }

    if (nbt != false) {
        nbt_form_key = "nbt"
        nbt_type_form_key = "type"
    }

    let items = {
        "item": item
    }

    Object.defineProperty(items, count_form_key, { value: count, writable: true, enumerable: true, configurable: true })
    Object.defineProperty(items, nbt_form_key, { value: nbt, writable: true, enumerable: true, configurable: true })
    Object.defineProperty(items, nbt_type_form_key, { value: "forge:nbt", writable: true, enumerable: true, configurable: true })

    return items
}
function clocheRecipe(input, output, render_type, type_block, soil) {
    this.type = "immersiveengineering:cloche"
    this.input = { "item": input }
    this.results = output
    this.render = { "type": render_type, "block": type_block } //"stem","generic","crop","stacking"
    this.soil = { "item": soil }
}

clocheRecipe.prototype = {
    time: function (time) {
        this.time = time
        return this
    }
}

ServerEvents.recipes(event => {
    const id_prefix = "inherit/cloche/"

    function clocheRecipeSchema(RecipeSchema, id) {
        event.custom(RecipeSchema).id(`${id_prefix}${id}`)
    }

    clocheRecipeSchema(new clocheRecipe('thermal_extra:amethyst_dust', [items('ae2:fluix_block',3)], "generic", 'ae2:fluix_block', 'projectexpansion:purple_fuel_block').time(100), 'fluix_block'),
    clocheRecipeSchema(new clocheRecipe('minecraft:diamond', [items('mysticalagriculture:prosperity_gemstone', 3)], "generic", 'mysticalagriculture:prosperity_gemstone_block', 'mysticalagriculture:prosperity_gemstone_block').time(100), 'prosperity_gemstone_block')

})