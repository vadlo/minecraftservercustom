// priority: -1

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let esnb = (id) => `elerion_blood_and_steel:deepmoblearning/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let dml = (id) => `dml-refabricated:${id}`;
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


    // -- SOOT PLATE -- //
    e.remove({id: 'dml-refabricated:soot_plate'})

    laserEngraver(
        esnb('soot_plate'),
        32,
        1200,
        [
            { amount: 1, item: mc('obsidian')},
            { amount: 1, item: dml('soot_redstone')}
        ],
        [ { amount: 1, item: dml('soot_plate') } ]
    );

    // -- SOOT MACHINE CASING -- //
    e.remove({id: 'dml-refabricated:machine_casing'})

    assembler(
        esnb('soot_machine_frame'),
        32,
        600,
        [
            { amount: 6, item: dml('soot_plate') },
            { amount: 6, item: mi('polytetrafluoroethylene_plate') },
            { amount: 8, item: mi('steel_rod_magnetic') },
            { amount: 12, item: dml('soot_redstone') }
        ],
        [ { amount: 1, item: dml('machine_casing') } ]
    );

    // -- GLITCH INGOT -- //
    e.remove({id: 'dml-refabricated:glitch_ingot'})

    blastFurnace(
        esnb('glitch_ingot'),
        128,
        1800,
        [ 
            { amount: 16, item: dml('physically_condensed_matrix_fragment') },
            { amount: 1, item: mi('polytetrafluoroethylene_ingot') }
        ],
        [ { amount: 1, item: dml('glitch_ingot') } ]
    );

    // -- TRIAL KEY -- //
    e.remove({id: 'dml-refabricated:trial_key'})

    e.shaped(dml('trial_key'), [
        ' A ',
        'DBB',
        '  C'
    ],
    {
        A: dml('soot_plate'),
        B: mi('polytetrafluoroethylene_plate'),
        C: mi('gold_curved_plate'),
        D: 'minecraft:ender_pearl'
    })
    .id(esnb('trial_key'));

    // -- TRIAL KEYSTONE -- //
    e.remove({id: 'dml-refabricated:trial_keystone'})

    e.shaped(dml('trial_keystone'), [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        A: dml('soot_plate'),
        B: dml('trial_key'),
        C: mi('polytetrafluoroethylene_plate'),
        D: dml('machine_casing')
    })
    .id(esnb('trial_keystone'));

    // -- SIMULATION CHAMBER -- //
    e.remove({id: 'dml-refabricated:simulation_chamber'})

    e.shaped(dml('simulation_chamber'), [
        'ACA',
        'DED',
        'CBC'
    ],
    {
        A: dml('soot_plate'),
        B: mi('redstone_battery'),
        C: mi('polytetrafluoroethylene_plate'),
        D: 'minecraft:ender_pearl',
        E: dml('machine_casing')
    })
    .id(esnb('simulation_chamber'));

    // -- POLYMER CLAY -- //
    e.remove({id: 'dml-refabricated:polymer_clay'})

    mixer(
        esnb('polymer_clay_fix'),
        64,
        600,
        [ 
            { amount: 4, item: mi('fire_clay_dust') },
            { amount: 4, item: mi('gold_dust') },
            { amount: 16, item: mi('lapis_dust') },
            { amount: 8, item: mi('steel_dust') }
        ],
        [ { amount: 16, item: dml('polymer_clay') } ],
        [ { amount: 100, fluid: mi('concrete') } ]
    );

    // -- BLANK DATA MODEL -- //
    e.remove({id: 'dml-refabricated:data_model/data_model'})

    e.shaped(dml('data_model'), [
        'ABA',
        'DED',
        'ACA'
    ],
    {
        A: dml('soot_plate'),
        B: 'minecraft:ender_pearl',
        C: 'minecraft:repeater',
        D: dml('soot_redstone'),
        E: mi('lapis_plate')
    }).id(esnb('data_model'));
});


