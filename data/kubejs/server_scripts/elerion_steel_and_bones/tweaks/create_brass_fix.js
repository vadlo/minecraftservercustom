// priority: -1

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let esnb = (id) => `elerion_blood_and_steel:modern_industrialization/mixer/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let mixer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('mixer'),
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

    // -- BRASS DUST -- //
    mixer(
        esnb('create_brass_dust_fix'),
        2,
        200,
        [
            { amount: 1, item: tr('zinc_dust') },
            { amount: 1, item: mi('copper_dust') }
        ],
        [ { amount: 2, item: tr('brass_dust') } ]
    );

});