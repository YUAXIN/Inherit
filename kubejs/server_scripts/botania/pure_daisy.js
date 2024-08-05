ServerEvents.recipes(event => {
  // 活石
  event.custom({
    "type": "botania:pure_daisy",
    "input": {
      "type": "block",
      "block": 'ars_nouveau:smooth_sourcestone_large_bricks'
    },
    "output": {
      "name": 'botania:livingrock'
    }
  }).id('botania:pure_daisy/livingrock')
  //浮空或红莲
  event.custom({
    "type": "botania:pure_daisy",
    "input": {
      "type": "block",
      "block":'botania:red_mystical_flower'
    },
    "output": {
      "name":'botania:floating_endoflame'
    }
  }).id('botania:floating_endoflame')
   //活木
   event.custom({
    "type": "botania:pure_daisy",
    "input": {
      "type": "block",
      "block":'minecraft:oak_log'
    },
    "output": {
      "name":'botania:livingwood_log'
    }
  }).id('botania:pure_daisy/livingwood')
})