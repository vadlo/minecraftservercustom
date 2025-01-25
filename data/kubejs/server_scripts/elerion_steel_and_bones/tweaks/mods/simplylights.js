// priority: -1 

ServerEvents.recipes(e => {
    let esnb = (id) => `elerion_steel_and_bones:simplylight/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    e.remove({id: 'simplylight:illuminant_block'});
    e.remove({id: 'simplylight:illuminant_block_on'});
    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let assembler = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('assembler'),
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

    assembler(
        esnb('illuminant_block_on'),
        8,
        100,
        [
            { amount: 1, tag: 'c:glowstone_blocks' },
            { amount: 1, tag: 'c:iron_plates' },
            { amount: 1, item: 'ae2:quartz_glass' }
        ],
        [ { amount: 1, item: 'simplylight:illuminant_block' } ]
    );

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
    
    e.remove({id: 'simplylight:illuminant_slab'})
    cuttingMachine(
        esnb('lamp_slab'),
        2,
        60,
        [ { amount: 1, item: 'simplylight:illuminant_block_on' } ],
        [ { amount: 2, item: 'simplylight:illuminant_slab' } ]
    );

    e.remove({id: 'simplylight:illuminant_panel'})
    cuttingMachine(
        esnb('lamp_panel'),
        2,
        60,
        [ { amount: 1, item: 'simplylight:illuminant_slab' } ],
        [ { amount: 2, item: 'simplylight:illuminant_panel' } ]
    );

    e.remove({id: 'simplylight:walllamp'})
    cuttingMachine(
        esnb('lamp_wall_lamp'),
        2,
        60,
        [ { amount: 1, item: 'simplylight:illuminant_panel' } ],
        [ { amount: 2, item: 'simplylight:wall_lamp' } ]
    );

    e.remove({id: 'simplylight:edge_light'})
    cuttingMachine(
        esnb('lamp_edge_light'),
        2,
        60,
        [ { amount: 1, item: 'simplylight:wall_lamp' } ],
        [ { amount: 2, item: 'simplylight:edge_light' } ]
    );

    e.remove({id: 'simplylight:rodlamp'})
    assembler(
        esnb('illuminant_rod'),
        2,
        60,
        [
            { amount: 2, item: 'simplylight:edge_light' }
        ],
        [ { amount: 1, item: 'simplylight:rodlamp' } ]
    );

    e.remove({id: 'simplylight:bulb'})
    cuttingMachine(
        esnb('lamp_bulb'),
        2,
        60,
        [ { amount: 1, item: 'simplylight:rodlamp' } ],
        [ { amount: 4, item: 'simplylight:lightbulb' } ]
    );

});