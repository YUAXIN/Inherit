ServerEvents.recipes(e => {
  const {
    pressing
  } = e.recipes.create
  //灵魂钢板
  pressing('kubejs:soul_steel_sheet', [
    Item.of('spirit:crude_soul_crystal')
  ])
  //压缩铁板
  pressing('kubejs:compressed_iron_sheet', [
    Item.of('pneumaticcraft:compressed_iron_block')
  ])
  // 1k存储
  pressing('ae2:cell_component_1k', [
    Item.of('ae2:calculation_processor')
  ])
})