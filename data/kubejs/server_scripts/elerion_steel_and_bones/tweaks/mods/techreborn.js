ServerEvents.recipes(e => {
        // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
        let esnb = (id) => `elerion_blood_n_steel:modern_industrialization/cutting_machine/${id}`;
        let mi = (id) => `modern_industrialization:${id}`;
    
        // -- CUTTING MACHINE VARIABLE CONSTANTS -- //
        const lubricantAmount = 10;
        const gsonJsonArray = Java.loadClass('com.google.gson.JsonArray');
    
        // -- CUSTOM RECIPE UTILITY FUNCTION -- //
        let cuttingMachine = (id, eu, duration, item_inputs, item_outputs) => {
            let newRecipe = {
                type: mi('cutting_machine'),
                eu: eu,
                duration: duration,
                fluid_inputs: [
                    { amount: lubricantAmount, fluid: mi('lubricant') }
                ]
            }
    
            if (item_inputs)
                newRecipe['item_inputs'] = item_inputs;
            if (item_outputs)
                newRecipe['item_outputs'] = item_outputs;
            
            e.custom(newRecipe).id(id);
        }
    
        let recipesToRemove = [];
        e.forEachRecipe( { type: mi('cutting_machine') }, recipe => {
            recipesToRemove.push(recipe.getId());
    
            let recipeJson = recipe.json;
            let inputs = recipeJson.get('fluid_inputs');
            let amount;
            if (inputs.getClass() === gsonJsonArray) {
                amount = inputs.get(0).get('amount');
                if (amount == 1) {
                    recipeJson.get('fluid_inputs').get(0).add('amount', lubricantAmount);
                }
            } else {
                amount = inputs.get('amount');
                if (amount == 1) {
                    recipeJson.get('fluid_inputs').add('amount', lubricantAmount);
                }
            }
            e.custom(recipeJson).id(esnb(recipe.getPath()));
        });
    
        recipesToRemove.forEach(id => e.remove({id: id}));

    // -- FLINT AND STEEL -- //
    e.remove({id: 'techreborn:crafting_table/parts/carbon_fiber_from_cells'})
    e.remove({id: 'techreborn:crafting_table/parts/carbon_fiber'})

    cuttingMachine(
        esnb('fiber'),
        2,
        100,
        [ { amount: 1, tag: 'c:carbon_plates' } ],
        [ { amount: 1, item: 'techreborn:carbon_fiber' } ]
    );
});

