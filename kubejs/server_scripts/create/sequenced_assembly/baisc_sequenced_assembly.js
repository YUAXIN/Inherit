ServerEvents.recipes(event => {
    const id_prefix = 'inherit/'
    const { mixing, milling, emptying, crushing, } = event.recipes.create
    function all_sequenced_assembly(input, transitionalItem, output, loops, id, main) {
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": [input],
            "loops": loops,
            "results": [output],
            "sequence": main,
            "transitionalItem": transitionalItem
        }).id(id)

        return all_sequenced_assembly
    }


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

    function tags(tag, count, nbt) {
        count = typeof count != "undefined" ? count : false
        nbt = typeof nbt != "undefined" ? nbt : false

        let count_form_key = {}
        let nbt_form_key = {}

        if (count != false) {
            count_form_key = "count"
        }

        if (nbt != false) {
            nbt_form_key = "nbt"
        }

        let tags = {
            "tag": tag
        }

        Object.defineProperty(tags, count_form_key, { value: count, writable: true, enumerable: true, configurable: true })
        Object.defineProperty(tags, nbt_form_key, { value: nbt, writable: true, enumerable: true, configurable: true })

        return tags
    }

    function fluids(fluid, amount, nbt) {
        amount = typeof amount != "undefined" ? amount : 1000
        nbt = typeof nbt != "undefined" ? nbt : false

        let nbt_form_key = {}

        if (nbt != false) {
            nbt_form_key = "nbt"
        }

        let fluids = {
            "fluid": fluid,
            "amount": amount
        }

        Object.defineProperty(fluids, nbt_form_key, { value: nbt, writable: true, enumerable: true, configurable: true })

        return fluids
    }


    function sequenced_assembly_type(type, output, original_input, extra_input, energy, time, heat) {
        extra_input = typeof extra_input != "undefined" ? extra_input : false
        time = typeof time != "undefined" ? time : false
        heat = typeof heat != "undefined" ? heat : false
        energy = typeof energy != "undefined" ? energy : false

        let types = {}
        let heated = {}

        if (type == "deploying") {
            types = {
                "type": "create:deploying",
                "ingredients": [original_input, extra_input],
                "results": [output]
            }
        } else if (type == "pressing") {
            types = {
                "type": "create:pressing",
                "ingredients": [original_input],
                "results": [output]
            }
        } else if (type == "cutting") {
            types = {
                "type": "create:cutting",
                "ingredients": [original_input],
                "processingTime": time,
                "results": [output]
            }
        } else if (type == "mixing") {
            if (heat == false) {
                heated = "不需要加热"
            } else if (heat == "heated") {
                heated = "需要加热"
            } else if (heat == "superheated") {
                heated = "需要超级加热"
            }

            types = {
                "type": "create:deploying",
                "ingredients": [original_input, items('create:mechanical_mixer', 1, `{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"text\":\"动力搅拌器搅拌-\u00a7c${heated}\"}'}}`)],
                "results": [output]
            }
        } else if (type == "filling") {
            types = {
                "type": "create:filling",
                "ingredients": [original_input, extra_input],
                "results": [output]
            }
        } else if (type == "milling") {
            types = {
                "type": "create:deploying",
                "ingredients": [original_input, items('create:millstone', 1, `{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"text\":\"石磨粉碎(该步骤也可以使用粉碎轮)-\u00a7c需要${time}tick\"}'}}`)],
                "results": [output]
            }
        } else if (type == "emptying") {
            types = {
                "type": "create:deploying",
                "ingredients": [original_input, items('create:item_drain', 1, `{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"text\":\"分液池分液\"}'}}`)],
                "results": [output]
            }
        } else if (type == "crushing") {
            types = {
                "type": "create:deploying",
                "ingredients": [original_input, items('create:crushing_wheel', 1, `{Enchantments:[{id:vanishing_curse,lvl:1s}],display:{Name:'{\"text\":\"粉碎轮粉碎(该步骤不可以使用石磨)-\u00a7c需要${time}tick\"}'}}`)],
                "results": [output]
            }
        }

        return types
    }

    function other_sequenced_assembly(total_steps, current_steps, recipe_id, type, input, output, extra_output, heat, time) {

        extra_output = typeof extra_output != "undefined" ? extra_output : false
        heat = typeof heat != "undefined" ? heat : false
        time = typeof time != "undefined" ? time : false

        const { mixing, milling, emptying, crushing, } = event.recipes.create
        let id = `${recipe_id}/step${current_steps}`

        let others = {}

        if (type == "mixing") {
            if (heat == "heated") {
                others = mixing(Item.of(output, `{SequencedAssembly:{Progress:${(current_steps + 1) / total_steps}f,Step:${current_steps + 1},id:"${recipe_id}"}}`).weakNBT(), [Item.of(input, `{SequencedAssembly:{Progress:${current_steps / total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()]).heated().id(id)
            } else if (heat == "superheated") {
                others = mixing(Item.of(output, `{SequencedAssembly:{Progress:${(current_steps + 1) / total_steps}f,Step:${current_steps + 1},id:"${recipe_id}"}}`).weakNBT(), [Item.of(input, `{SequencedAssembly:{Progress:${current_steps / total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()]).superheated().id(id)
            } else if (heat == false) {
                others = mixing(Item.of(output, `{SequencedAssembly:{Progress:${(current_steps + 1) / total_steps}f,Step:${current_steps + 1},id:"${recipe_id}"}}`).weakNBT(), [Item.of(input, `{SequencedAssembly:{Progress:${current_steps / total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()], time).id(id)
            }
        } else if (type == "milling") {
            others = milling(Item.of(output, `{SequencedAssembly:{Progress:${(current_steps + 1) / total_steps}f,Step:${current_steps + 1},id:"${recipe_id}"}}`).weakNBT(), [Item.of(input, `{SequencedAssembly:{Progress:${current_steps / total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()]).id(id)
        } else if (type = "emptying") {
            others = emptying([extra_output, Item.of(input, `{SequencedAssembly:{Progress:${(current_steps + 1) / total_steps}f,Step:${current_steps + 1},id:"${recipe_id}"}}`).weakNBT()], Item.of(input, `{SequencedAssembly:{Progress:${current_steps / total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT()).id(id)
        } else if (type = "crushing") {
            others = crushing([Item.of(output, `{SequencedAssembly:{Progress:${(current_steps + 1) / total_steps}f,Step:${current_steps + 1},id:"${recipe_id}"}}`).weakNBT()], Item.of(input, `{SequencedAssembly:{Progress:${current_steps / total_steps}f,Step:${current_steps},id:"${recipe_id}"}}`).weakNBT(), time).id(id)
        }

        return others
    }


    all_sequenced_assembly(
        items('minecraft:cobblestone'), items('minecraft:cobblestone'), items('minecraft:stone'), 1, `${id_prefix}test`, [
        sequenced_assembly_type("deploying", items('minecraft:cobblestone'), items('minecraft:cobblestone'), items('minecraft:granite')),
        sequenced_assembly_type("pressing", items('minecraft:cobblestone'), items('minecraft:cobblestone')),
        sequenced_assembly_type("cutting", items('minecraft:cobblestone'), items('minecraft:cobblestone'), false, false, 20),
        sequenced_assembly_type("mixing", items('minecraft:cobblestone'), items('minecraft:cobblestone'), false, false, false, "heated", false),
        sequenced_assembly_type("filling", items('minecraft:cobblestone'), items('minecraft:cobblestone'), fluids('minecraft:water')),
        sequenced_assembly_type("milling", items('minecraft:cobblestone'), items('minecraft:cobblestone'), false, false, 20),
        sequenced_assembly_type("emptying", items('minecraft:cobblestone'), items('minecraft:cobblestone')),
        sequenced_assembly_type("crushing", items('minecraft:cobblestone'), items('minecraft:cobblestone'), false, false, 40)
    ]
    )

    other_sequenced_assembly(9, 3, `${id_prefix}test`, 'mixing', 'minecraft:cobblestone', 'minecraft:cobblestone', false, "heated")
    other_sequenced_assembly(9, 5, `${id_prefix}test`, 'milling', 'minecraft:cobblestone', 'minecraft:cobblestone', false, false, 20)
    other_sequenced_assembly(9, 6, `${id_prefix}test`, 'emptying', 'minecraft:cobblestone', 'minecraft:cobblestone', Fluid.of('minecraft:water', 1000))
    //other_sequenced_assembly(9,7,`${id_prefix}test`,'crushing','minecraft:cobblestone','minecraft:cobblestone',false,false,40)

    crushing([Item.of('minecraft:cobblestone', '{SequencedAssembly:{Progress:0.999f,Step:8,id:"test:recipes/test"}}').weakNBT()], Item.of('minecraft:cobblestone', '{SequencedAssembly:{Progress:0.888f,Step:7,id:"test:recipes/test"}}').weakNBT(), 10)
    //黄铜
    all_sequenced_assembly(
        items('minecraft:copper_block'), items('minecraft:copper_block'), items('8x create:brass_ingot'), 1, `${id_prefix}brass`, [
        sequenced_assembly_type("pressing", items('minecraft:copper_block'), items('minecraft:copper_block')),
        sequenced_assembly_type("filling", items('minecraft:copper_block'), items('minecraft:copper_block'), fluids('kubejs:pure_zinc')),
        sequenced_assembly_type("deploying", items('minecraft:copper_block'), items('minecraft:copper_block'), items('kubejs:hard_source')),
    ]
    )
    //不完整高级控制电路
    all_sequenced_assembly(
        items('kubejs:control_circuit'), items('kubejs:control_circuit'), items('kubejs:undeveloped_advanced_control_circuit'), 1, `${id_prefix}undeveloped`, [
        sequenced_assembly_type("filling", items('kubejs:control_circuit'), items('kubejs:control_circuit'), fluids('kubejs:molten_redstone')),
        sequenced_assembly_type("crushing", items('kubejs:control_circuit'), items('kubejs:undeveloped_advanced_control_circuit'), true, false, 100)
    ]
    )
    // 原处符文
    all_sequenced_assembly(
        items('quark:blank_rune'), items('quark:blank_rune'), items('2x kubejs:rune'), 1, `${id_prefix}rune`, [
        sequenced_assembly_type("deploying", items('quark:blank_rune'), items('quark:blank_rune'), items('botania:livingrock')),
        sequenced_assembly_type("deploying", items('quark:blank_rune'), items('quark:blank_rune'), items('elementalcraft:inert_crystal')),
    ])
    // 铜块
    all_sequenced_assembly(
        items('minecraft:oxidized_copper'), items('minecraft:oxidized_copper'), items('minecraft:copper_block'), 1, `${id_prefix}copper_block`, [
        sequenced_assembly_type("deploying", items('minecraft:oxidized_copper'), items('minecraft:oxidized_copper'), items('minecraft:netherite_axe')),
        sequenced_assembly_type("deploying", items('minecraft:oxidized_copper'), items('minecraft:oxidized_copper'), items('minecraft:netherite_axe')),
        sequenced_assembly_type("deploying", items('minecraft:oxidized_copper'), items('minecraft:oxidized_copper'), items('minecraft:netherite_axe')),
    ])
    // 异界石板
    all_sequenced_assembly(
        items('thermal:steel_ingot'), items('thermal:steel_ingot'), items('occultism:otherstone_tablet'), 1, `${id_prefix}otherstone_tablet`, [
        sequenced_assembly_type("pressing", items('thermal:steel_ingot'), items('thermal:steel_ingot')),
        sequenced_assembly_type("deploying", items('thermal:steel_ingot'), items('thermal:steel_ingot'), items('occultism:otherstone')),
    ])
    // 暗黑宝石粉
    all_sequenced_assembly(
        items('ars_nouveau:source_gem'), items('ars_nouveau:source_gem'), items('16x evilcraft:dark_gem_crushed'), 1, `${id_prefix}gem_crushed`, [
        sequenced_assembly_type("deploying", items('ars_nouveau:source_gem'), items('ars_nouveau:source_gem'), items('botania:blacker_lotus')),
        sequenced_assembly_type("crushing", items('ars_nouveau:source_gem'), items('evilcraft:dark_gem_crushed'), true, false, 100)
    ]
    )
})