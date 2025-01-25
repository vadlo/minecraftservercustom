ServerEvents.recipes(e => {

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let blastFurnace = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: "modern_industrialization:blast_furnace",
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
    
    blastFurnace(
        "elerion_blood_and_steel:chemically_inert_hssg",
        256,
        600,
        [ { amount: 16, item: 'modern_industrialization:hssg_plate' } ],
        [ { amount: 1, item: 'modern_industrialization:chemically_inert_hssg_casing' } ],
        [ { amount: 32000, fluid: 'modern_industrialization:argon' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:chemically_inert_hsse",
        1024,
        600,
        [ { amount: 16, item: 'modern_industrialization:hsse_plate' } ],
        [ { amount: 1, item: 'modern_industrialization:chemically_inert_hsse_casing' } ],
        [ { amount: 32000, fluid: 'chemlib:chlorine_source' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:chemically_inert_hsss",
        512,
        600,
        [ { amount: 16, item: 'modern_industrialization:hsss_plate' } ],
        [ { amount: 1, item: 'modern_industrialization:chemically_inert_hsss_casing' } ],
        [ { amount: 32000, fluid: 'chemlib:neon_source' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:vanadium",
        512,
        1800,
        [ { amount: 64, item: 'chemlib:vanadium' } ],
        [ { amount: 1, item: 'chemlib:vanadium_ingot' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:cobalt",
        512,
        1800,
        [ { amount: 64, item: 'chemlib:cobalt' } ],
        [ { amount: 1, item: 'chemlib:cobalt_ingot' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:molybdenum",
        512,
        1800,
        [ { amount: 64, item: 'chemlib:molybdenum' } ],
        [ { amount: 1, item: 'chemlib:molybdenum_ingot' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:osmium",
        512,
        1800,
        [ { amount: 64, item: 'chemlib:osmium' } ],
        [ { amount: 1, item: 'chemlib:osmium_ingot' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:hsse_hot_ingot",
        1024,
        3600,
        [ { amount: 1, item: 'modern_industrialization:hsse_dust' } ],
        [ { amount: 1, item: 'modern_industrialization:hsse_hot_ingot' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:hssg_hot_ingot",
        1024,
        3600,
        [ { amount: 1, item: 'modern_industrialization:hssg_dust' } ],
        [ { amount: 1, item: 'modern_industrialization:hssg_hot_ingot' } ]
    );

    blastFurnace(
        "elerion_blood_and_steel:hsss_hot_ingot",
        1024,
        3600,
        [ { amount: 1, item: 'modern_industrialization:hsss_dust' } ],
        [ { amount: 1, item: 'modern_industrialization:hsss_hot_ingot' } ]
    );
});