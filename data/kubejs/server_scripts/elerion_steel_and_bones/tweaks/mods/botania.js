// priority: -1

ServerEvents.recipes(e => {
    // -- MANASTEEL -- //
    e.remove({id: 'botania:mana_infusion/manasteel'})
    e.remove({id: 'botania:mana_infusion/manasteel_block'})

    e.remove({id: 'botania:terra_plate/terrasteel_ingot'})

    e.recipes.botania.mana_infusion("botania:manasteel_ingot", "wetlands:bog_iron_ingot", 500)

    e.recipes.botania.mana_infusion("spectrum:mermaids_gem", "botania:mana_diamond", 300, "minecraft:ice")

    e.recipes.botania.terra_plate("botania:terrasteel_ingot", ["botania:manasteel_ingot", "botania:mana_pearl", "botania:mana_diamond", "botania:mana_string", "botania:manaweave_cloth", "botania:mana_powder", "botania:quartz_mana", "spectrum:vegetal", "spectrum:vegetal", "spectrum:vegetal", "spectrum:vegetal", "spectrum:vegetal", "spectrum:vegetal", "spectrum:vegetal", "spectrum:vegetal"], 100000)
});