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
    
    // -- ENDERIUM SHARDS -> MOLTEN ENDERIUM -- //
    blastFurnace(
        esnb('enderium_fix'),
        128,
        300,
        [ { amount: 1, item: mj('enderium_shard') } ],
        null,
        null,
        [ { amount: 1000, fluid: mi('molten_enderium') } ]
    );   

    // -- ENDERIUM SHARDS -> MOLTEN ENDERIUM -- //
    blastFurnace(
        esnb('enderium_fix_ingot'),
        128,
        300,
        [ { amount: 1, item: mj('enderium_ingot') } ],
        null,
        null,
        [ { amount: 6000, fluid: mi('molten_enderium') } ]
    );
});