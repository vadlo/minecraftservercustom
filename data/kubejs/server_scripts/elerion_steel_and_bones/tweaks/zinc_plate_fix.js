ServerEvents.recipes(e => {
    let compressor = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: 'modern_industrialization:compressor',
            eu: eu,
            duration: duration
        }

        if (item_inputs) 
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // -- ZINC PLATE -- //
    compressor(
        'elerion_blood_and_steel:fixes/zinc_plate',
        16,
        200,
        [ { amount: 1, item: 'create:zinc_ingot' } ],
        [ { amount: 1, item: 'modern_industrialization:zinc_plate' } ]
    )
})