// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/laser_engraver/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ae = (id) => `ae2:${id}`;
    let tr = (id) => `techreborn:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let laserEngraver = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('laser_engraver'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)    
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe).id(id);
    }
    
    // -- PRINTED SILICON -- //
    laserEngraver(
        st('circuit_silicon'),
        32,
        200,
        [
            { amount: 1, item: ae('silicon_press'), probability: 0.0 },
            { amount: 1, item: ae('silicon') }
        ],
        [ { amount: 1, item: ae('printed_silicon') } ]
    );
    laserEngraver(
        st('silicon_press_alt'),
        32,
        200,
        [
            { amount: 1, item: ae('silicon_press'), probability: 0.0 },
            { amount: 1, item: mi('silicon_ingot') }
        ],
        [ { amount: 1, item: ae('printed_silicon') } ]
    );

    // -- PRINTED CALCULATION CIRCUIT -- //
    laserEngraver(
        st('circuit_calculation'),
        32,
        200,
        [
            { amount: 1, item: ae('calculation_processor_press'), probability: 0.0 },
            { amount: 1, item: ae('certus_quartz_crystal') }
        ],
        [ { amount: 1, item: ae('printed_calculation_processor') } ]
    );

    // -- PRINTED ENGINEERING CIRCUIT -- //
    laserEngraver(
        st('circuit_engineering'),
        32,
        200,
        [
            { amount: 1, item: ae('engineering_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('diamond') }
        ],
        [ { amount: 1, item: ae('printed_engineering_processor') } ]
    );

    // -- PRINTED LOGIC CIRCUIT -- //
    laserEngraver(
        st('circuit_logic'),
        32,
        200,
        [
            { amount: 1, item: ae('logic_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('gold_ingot') }
        ],
        [ { amount: 1, item: ae('printed_logic_processor') } ]
    );

    // -- SILICON PRESS -- //
    laserEngraver(
        st('dupe_silicon_press'),
        32,
        200,
        [
            { amount: 1, item: ae('silicon_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('silicon_press') } ]
    );

    // -- CALCULATION PRESS -- //
    laserEngraver(
        st('dupe_calculation_press'),
        32,
        200,
        [
            { amount: 1, item: ae('calculation_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('calculation_processor_press') } ]
    );

    // -- ENGINEERING PRESS -- //
    laserEngraver(
        st('dupe_engineering_press'),
        32,
        200,
        [
            { amount: 1, item: ae('engineering_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('engineering_processor_press') } ]
    );

    // -- LOGIC PRESS -- //
    laserEngraver(
        st('dupe_logic_press'),
        32,
        200,
        [
            { amount: 1, item: ae('logic_processor_press'), probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [ { amount: 1, item: ae('logic_processor_press') } ]
    );

    laserEngraver(
        st('data_storage_core'),
        256,
        3600,
        [
            { amount: 1, item: mi('digital_circuit') },
            { amount: 2, tag: 'c:emerald_plates' }
        ],
        [ { amount: 1, item: tr('data_storage_core') } ]
    );

    laserEngraver(
        st('data_storage_core_alt'),
        256,
        3600,
        [
            { amount: 1, item: mi('digital_circuit') },
            { amount: 2, tag: 'c:peridot_plates' }
        ],
        [ { amount: 1, item: tr('data_storage_core') } ]
    );
});