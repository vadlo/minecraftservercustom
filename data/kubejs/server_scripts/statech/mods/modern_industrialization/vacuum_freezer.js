// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/vacuum_freezer/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let vacuumFreezer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('vacuum_freezer'),
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

    // -- POLYTETRAFLUOROETHYLENE INGOT -- //
    vacuumFreezer(
        st('ptfe_ingot'),
        32,
        200,
        null,
        [ { amount: 1, item: mi('polytetrafluoroethylene_ingot') } ],
        [ { amount: 100, fluid: mi('polytetrafluoroethylene')}]
    );

    // -- TUNGSTENSTEEL INGOT -- //
    vacuumFreezer(
        st('tungstensteel_ingot'),
        64,
        600,
        [ { amount: 1, item: tr('hot_tungstensteel_ingot') } ],
        [ { amount: 1, item: tr('tungstensteel_ingot') } ],
        null,
        null
    );

    // -- NETHER STAR -- //
    vacuumFreezer(
        st('nether_star'),
        64,
        100,
        null,
        [ { amount: 1, item: mc('nether_star') } ],
        [ { amount: 500, fluid: mi('molten_nether_star') } ]
    );
});