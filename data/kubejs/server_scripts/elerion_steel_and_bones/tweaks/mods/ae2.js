// priority: -1

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ae2 = (id) => `ae2:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let alloySmelter = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('alloy_smelter'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe).id(id);
    }

    e.remove({id: 'ae2:decorative/quartz_glass'})

    // -- QUARTZ GLASS -- //
    alloySmelter(
        'esnb:ae2/quartz_glass',
        16,
        200,
        [
            { amount: 2, tag: 'c:quartz_dusts' },
            { amount: 1, tag: 'c:colorless_sand' }
        ],
        [ { amount: 1, item: ae2('quartz_glass') } ]
    );

    // -- QUARTZ GLASS -- //
    alloySmelter(
        'esnb:ae2/certus_quartz_glass',
        16,
        200,
        [
            { amount: 2, tag: 'c:certus_quartz_dusts' },
            { amount: 1, tag: 'c:colorless_sand' }
        ],
        [ { amount: 1, item: ae2('quartz_glass') } ]
    );
});

