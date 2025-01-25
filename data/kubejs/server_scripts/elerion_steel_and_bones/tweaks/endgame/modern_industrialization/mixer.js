ServerEvents.recipes(e => {
    let mixer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: "modern_industrialization:mixer",
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

    mixer(
        "elerion_blood_and_steel:mixer/hssg",
        8,
        200,
        [ 
            { amount: 5, tag: 'c:tungsten_dusts' },
            { amount: 2, item: 'chemlib:molybdenum_dust' },
            { amount: 1, tag: 'c:chromium_dusts' },
            { amount: 1, item: 'chemlib:vanadium_dust' }
        ],
        [ { amount: 9, item: 'modern_industrialization:hssg_dust' } ],
    );

    mixer(
        "elerion_blood_and_steel:mixer/hsss",
        8,
        200,
        [ 
            { amount: 6, item: 'modern_industrialization:hssg_dust' },
            { amount: 2, tag: 'c:iridium_dusts' },
            { amount: 1, item: 'chemlib:osmium_dust' }
        ],
        [ { amount: 9, item: 'modern_industrialization:hsss_dust' } ],
    );

    mixer(
        "elerion_blood_and_steel:mixer/hsse",
        8,
        200,
        [ 
            { amount: 6, tag: 'c:hssg_dusts' },
            { amount: 1, item: 'chemlib:cobalt_dust' },
            { amount: 1, tag: 'c:manganese_dusts' },
            { amount: 1, tag: 'c:silicon_dusts' }
        ],
        [ { amount: 9, item: 'modern_industrialization:hsse_dust' } ],
    );
})