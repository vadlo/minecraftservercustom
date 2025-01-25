ServerEvents.recipes(e => {
    let assembler = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: "modern_industrialization:assembler",
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- PISTON -- //
    assembler(
        "elerion_blood_and_steel:assembler/advanced_crafting_table",
        2048,
        3950,
        [
            { amount: 64, item: 'avaritia:double_compressed_crafting_table' },
            { amount: 64, item: 'modern_industrialization:robot_arm' },
            { amount: 4, item: 'modern_industrialization:quantum_circuit' },
            { amount: 16, item: 'techreborn:superconductor' },
            { amount: 16, item: 'ae2:molecular_assembler' },
            { amount: 4, item: 'ad_astra:ostrum_plate' },
            { amount: 4, item: 'modern_industrialization:tungstensteel_rod' },
            { amount: 4, item: 'ae2:pattern_provider' },
            { amount: 1, item: 'ae2:item_storage_cell_64k' },
        ],  
        [ { amount: 1, item: 'artis:advanced_crafting_table' } ]
    );
});