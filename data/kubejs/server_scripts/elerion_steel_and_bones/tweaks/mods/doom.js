ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let esnb = (id) => `elerion_blood_and_steel:doom/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let dm = (id) => `doom:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let pl = (id) => `paradise_lost:${id}`;

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
    
    // -- ARGENT PLATE -- //
    e.remove({id: 'doom:argent_plate'})

    blastFurnace(
        esnb('argent_plate'),
        256,
        1800,
        [ 
            { amount: 1, item: pl('cherine_block') },
            { amount: 1, item: dm('argent_energy') } 
        ],
        [ { amount: 1, item: dm('argent_plate') } ]
    );
    
    e.remove({id: 'doom:gun_table'})
    e.shaped(dm('gun_table'), [
        'ABA',
        'CDC',
        '   '
    ],
    {
        A: dm('argent_plate'),
        B: mi('robot_arm'),
        C: tr('iridium_reinforced_tungstensteel_storage_block'),
        D: mi('polytetrafluoroethylene_machine_casing_pipe'),
    });
});