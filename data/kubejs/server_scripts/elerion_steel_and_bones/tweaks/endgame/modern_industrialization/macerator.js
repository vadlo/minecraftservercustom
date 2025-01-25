ServerEvents.recipes(e => {
    let macerator = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: "modern_industrialization:macerator",
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }

    macerator(
        "elerion_blood_and_steel:vanadium_dust",
        16,
        200,
        [ { amount: 1, item: 'chemlib:vanadium_ingot' } ],
        [ { amount: 1, item: 'chemlib:vanadium_dust' } ]
    );

    macerator(
        "elerion_blood_and_steel:cobalt_dust",
        16,
        200,
        [ { amount: 1, item: 'chemlib:cobalt_ingot' } ],
        [ { amount: 1, item: 'chemlib:cobalt_dust' } ]
    );

    macerator(
        "elerion_blood_and_steel:molybdenum_dust",
        16,
        200,
        [ { amount: 1, item: 'chemlib:molybdenum_ingot' } ],
        [ { amount: 1, item: 'chemlib:molybdenum_dust' } ]
    );

    macerator(
        "elerion_blood_and_steel:osmium_dust",
        16,
        200,
        [ { amount: 1, item: 'chemlib:osmium_ingot' } ],
        [ { amount: 1, item: 'chemlib:osmium_dust' } ]
    );
})