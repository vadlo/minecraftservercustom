ServerEvents.recipes(e => {
        // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
        let esnb = (id) => `elerion_blood_and_steel:blast_furnace/${id}`;
        let mi = (id) => `modern_industrialization:${id}`;
        let mj = (id) => `majruszsdifficulty:${id}`;
    
        // -- CUSTOM RECIPE UTILITY FUNCTION -- //
        let blastFurnace = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
            let newRecipe = {
                type: mi('blast_furnace'),
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

    e.remove({id: 'chemlib:uranium_ingot_from_smelting_uranium_dust'});
    e.remove({id: 'chemlib:uranium_ingot_from_smelting_uranium_dust_exported_mi_furnace'});
    e.remove({id: 'chemlib:uranium_ingot_from_blasting_uranium_dust'});
    e.remove({id: 'modern_industrialization:materials/uranium/blast_furnace/dust'});

    blastFurnace(
        esnb('uranium_fix'),
        256,
        1200,
        [ { amount: 1, item: mi('uranium_dust') } ],
        [ { amount: 1, item: mi('uranium_ingot') } ]
    );   

    blastFurnace(
        esnb('he_uranium_fix'),
        256,
        1200,   
        [ { amount: 1, item: mi('he_uranium_dust') } ],
        [ { amount: 1, item: mi('he_uranium_ingot') } ]
    );  

    blastFurnace(
        esnb('le_uranium_fix'),
        256,
        1200,
        [ { amount: 1, item: mi('le_uranium_dust') } ],
        [ { amount: 1, item: mi('le_uranium_ingot') } ]
    );  

    blastFurnace(
        esnb('uranium_235_fix'),
        256,
        1200,
        [ { amount: 1, item: mi('uranium_235_dust') } ],
        [ { amount: 1, item: mi('uranium_235_ingot') } ]
    );  
});