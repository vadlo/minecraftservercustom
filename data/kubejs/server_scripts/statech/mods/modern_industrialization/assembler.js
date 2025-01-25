// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/assembler/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ae = (id) => `ae2:${id}`;

    // -- ASSEMBLER REMOVED RECIPES -- //
    const REMOVED_RECIPE = [    
        mi('electric_age/component/assembler/qbit'),
        mi('assembler_generated/electric_age/component/craft/ultradense_metal_ball'),
        mi('assembler_generated/steam_age/bronze/furnace'),
        mi('assembler_generated/steam_age/bronze/boiler'),
        mi('assembler_generated/electric_age/component/craft/op_amp'),
        mi('assembler_generated/electric_age/battery/sodium_battery'),
        mi('assembler_generated/electric_age/battery/cadmium_battery'),
        mi('assembler_generated/electric_age/battery/plutonium_battery')
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

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

    // -- PISTON -- //
    assembler(
        st('piston'),
        8,
        200,
        [
            { amount: 4, tag: 'c:stones' },
            { amount: 3, tag: mc('wooden_slabs') },
            { amount: 1, tag: 'c:iron_rods' },
            { amount: 1, item: mc('redstone') }
        ],
        [ { amount: 1, item: mc('piston') } ]
    );

    // -- STICKY PISTON -- //
    assembler(
        st('sticky_piston'),
        8,
        20,
        [
            { amount: 1, item: mc('piston') },
            { amount: 1, item: mc('slime_ball') }
        ],
        [ { amount: 1, item: mc('sticky_piston') } ]
    );

    // -- STICKY PISTON ALT -- //
    assembler(
        st('sticky_piston_alt'),
        8,
        20,
        [ { amount: 1, item: mc('piston') } ],
        [ { amount: 1, item: mc('sticky_piston') } ],
        [ { amount: 10, fluid: mi('acrylic_glue') } ]
    );

    // -- ANNIHILATION CORE -- //
    assembler(
        st('annihilation_core'),
        8,
        200,
        [
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: ae('fluix_dust') },
            { amount: 1, item: ae('logic_processor') }
        ],
        [ { amount: 2, item: ae('annihilation_core') } ]
    );

    // -- FORMATION CORE -- // 
    assembler(
        st('formation_core'),
        8,
        200,
        [
            { amount: 1, tag: ae('all_certus_quartz') },
            { amount: 1, item: ae('fluix_dust') },
            { amount: 1, item: ae('logic_processor') }
        ],
        [ { amount: 2, item: ae('formation_core') } ]
    );

    // -- ME STORAGE BUS -- //
    assembler(
        st('storage_bus'),
        8,
        200,
        [
            { amount: 1, item: mc('sticky_piston') },
            { amount: 1, tag: ae('interface') },
            { amount: 1, item: mc('piston') }
        ],
        [ { amount: 1, item: ae('storage_bus') } ]
    );

    // -- ME IMPORT BUS -- //
    assembler(
        st('import_bus'),
        8,
        200,
        [
            { amount: 2, item: mi('aluminum_plate') },
            { amount: 1, item: mc('sticky_piston') },
            { amount: 1, item: ae('annihilation_core') }
        ],
        [ { amount: 1, item: ae('import_bus') } ]
    );

    // -- ME EXPORT BUS -- //
    assembler(
        st('export_bus'),
        8,
        200,
        [
            { amount: 2, item: mi('aluminum_plate') },
            { amount: 1, item: mc('piston') },
            { amount: 1, item: ae('formation_core') }
        ],
        [ { amount: 1, item: ae('export_bus') } ]
    );

    // -- SUPERCONDUCTOR -- //
    assembler(
        st('superconductor'),
        8,
        200,
        [
            { amount: 3, item: tr('helium_coolant_cell_60k') },
            { amount: 3, item: tr('energy_flow_chip') },
            { amount: 2, item: mi('tungsten_ingot') },
            { amount: 1, item: mi('quantum_circuit') }
        ],
        [ { amount: 4, item: tr('superconductor') } ]
    );

    // -- HELIUM COOLANT CELL 60K -- //
    assembler(
        st('helium_coolant_cell_60k'),
        8,
        200,
        [ { amount: 1, item: mi('tin_ingot') } ],
        [ { amount: 1, item: tr('helium_coolant_cell_60k') } ],
        [ { amount: 1000, fluid: mi('helium') } ]
    );

    // -- DIGITAL DISPLAY -- //
    assembler(
        st('digital_display'),
        8,
        200,
        [ 
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 3, item: mc('black_dye') },
            { amount: 1, item: mc('glass_pane') },
            { amount: 1, item: tr('advanced_circuit') }
        ],
        [ { amount: 1, item: tr('digital_display') } ]
    );

    // -- BASIC MACHINE FRAME -- // 
    assembler(
        st('basic_machine_frame'),
        8,
        200,
        [ { amount: 8, item: tr('refined_iron_ingot') } ],
        [ { amount: 1, item: tr('basic_machine_frame') } ]
    );

    // -- BASIC MACHINE FRAME ALT -- //
    assembler(
        st('basic_machine_frame_alt'),
        8,
        200,
        [ { amount: 8, item: tr('refined_iron_storage_block') } ],
        [ { amount: 9, item: tr('basic_machine_frame') } ]
    );

    // -- ADVANCED MACHINE FRAME -- //
    assembler(
        st('advanced_machine_frame'),
        8,
        200,
        [
            { amount: 2, item: tr('advanced_alloy_plate') },
            { amount: 2, item: mi('carbon_plate') },
            { amount: 1, item: tr('basic_machine_frame') }
        ],
        [ { amount: 1, item: tr('advanced_machine_frame') } ]
    );

    // -- INDUSTRIAL MACHINE FRAME -- //
    assembler(
        st('industrial_machine_frame'),
        8,
        200,
        [
            { amount: 4, item: mi('titanium_plate') },
            { amount: 4, item: mi('chromium_plate') },
            { amount: 1, item: tr('advanced_machine_frame') }
        ],
        [ { amount: 1, item: tr('industrial_machine_frame') } ]
    );

    // -- LAPOTRONIC ENERGY ORB -- //
    assembler(
        st('lapotronic_orb'),
        8,
        200, 
        [
            { amount: 1, item: tr('lapotron_crystal') },
            { amount: 1, item: tr('lapotron_crystal') },
            { amount: 1, item: tr('lapotron_crystal') },
            { amount: 1, item: tr('lapotron_crystal') },
            { amount: 1, item: mi('highly_advanced_machine_hull') },
            { amount: 1, item: tr('lapotron_crystal') },
            { amount: 1, item: tr('lapotron_crystal') },
            { amount: 1, item: tr('lapotron_crystal') },
            { amount: 1, item: tr('lapotron_crystal') }
        ],
        [ { amount: 1, item: tr('lapotronic_orb') } ]
    );

    // -- ADJUSTABLE SU -- //
    assembler(
        st('adjustable_su'),
        8,
        200,
        [
            { amount: 1, item: tr('lapotronic_orb') },
            { amount: 1, item: tr('lapotronic_orb') },
            { amount: 1, item: tr('lapotronic_orb') },
            { amount: 1, item: tr('lapotronic_orb') },
            { amount: 1, item: tr('energy_crystal') },
            { amount: 1, item: tr('lapotronic_orb') },
            { amount: 1, item: tr('lapotronic_orb') },
            { amount: 1, item: tr('lapotronic_orb') },
            { amount: 1, item: tr('lapotronic_orb') }
        ],
        [ { amount: 1, item: tr('adjustable_su') } ]
    );

    // -- 10K WATER COOLANT CELL -- //
    assembler(
        st('water_coolant_cell_10k'),
        8,
        200,
        [ { amount: 4, item: mi('tin_ingot') } ],
        [ { amount: 1, item: tr('water_coolant_cell_10k') } ],
        [ { amount: 1000, fluid: mc('water') } ]
    );

    // -- OVERCLOCKER UPGRADE -- //
    assembler(
        st('overclocker_upgrade'),
        8,
        200,
        [
            { amount: 3, item: tr('water_coolant_cell_10k') },
            { amount: 2, item: mi('copper_cable') },
            { amount: 1, item: mi('analog_circuit') }
        ],
        [ { amount: 1, item: tr('overclocker_upgrade') } ]
    );

    // -- SODIUM BATTERY -- //
    assembler(
        st('sodium_battery'),
        8,
        200,
        [
            { amount: 1, tag: 'c:battery_alloy_plates' },
            { amount: 2, item: mi('aluminum_cable') },
            { amount: 4, item: mi('battery_alloy_curved_plate') },
            { amount: 2, item: mi('sodium_dust') }
        ],
        [ { amount: 2, item: mi('sodium_battery') } ],
        [ { amount: 100, fluid: mi('lithium') } ]
    );

    // -- CADMIUM BATTERY -- //
    assembler(
        st('cadmium_battery'),
        8,
        200,
        [
            { amount: 1, tag: 'c:battery_alloy_plates' },
            { amount: 2, item: mi('annealed_copper_cable') },
            { amount: 4, item: mi('battery_alloy_curved_plate') },
            { amount: 2, item: mi('cadmium_dust') }
        ],
        [ { amount: 2, item: mi('cadmium_battery') } ],
        [ { amount: 100, fluid: mi('lithium') } ]
    );

    // -- PLUTONIUM BATTERY -- //
    assembler(
        st('plutonium_battery'),
        8,
        200,
        [
            { amount: 1, tag: 'c:battery_alloy_plates' },
            { amount: 2, item: mi('superconductor_cable') },
            { amount: 4, item: mi('battery_alloy_curved_plate') },
            { amount: 2, item: mi('plutonium_dust') }
        ],
        [ { amount: 2, item: mi('plutonium_battery') } ],
        [ { amount: 100, fluid: mi('lithium') } ]
    );

    // -- RED CELL BATTERY -- //
    assembler(
        st('red_cell_battery'),
        8,
        200,
        [
            { amount: 2, tag: 'c:lead_plates' },
            { amount: 2, item: mi('redstone_battery') },
            { amount: 1, item: mi('copper_cable') }
        ],
        [ { amount: 1, item: tr('red_cell_battery') } ]
    );

    // -- QUARTZ FIBER -- //
    assembler(
        st('quartz_fiber'),
        8,
        200,
        [
            { amount: 6, tag: 'c:glass' },
            { amount: 3, item: ae('certus_quartz_dust') }
        ],
        [ { amount: 3, item: ae('quartz_fiber') } ]
    );

    // -- END CRYSTAL -- //
    assembler(
        st('end_crystal'),
        16,
        200,
        [
            { amount: 7, item: mc('glass') },
            { amount: 1, item: mc('ender_eye') },
            { amount: 1, item: mc('ghast_tear') }
        ],
        [ { amount: 1, item: mc('end_crystal') } ]
    );

    // -- URANIUM ORE FROM UU -- //
    assembler(
        st('uranium_ore'),
        32,
        600,
        [ 
            { amount: 6, item: tr('uu_matter') },
            { amount: 1, item: mc('moss_block') }
        ],
        [ { amount: 1, item: mi('uranium_ore') } ],
        [ { amount: 15, fluid: mi('molten_nether_star') } ]
    );

    // -- IRIDIUM ORE FROM UU -- //
    assembler(
        st('iridium_ore'),
        32,
        600,
        [
            { amount: 6, item: tr('uu_matter') },
            { amount: 1, item: mc('stone') }
        ],
        [ { amount: 1, item: mi('iridium_ore') } ],
        [ { amount: 15, fluid: mi('molten_nether_star') } ]
    );

    // -- LV TO MV TRANSFORMER -- //
    assembler(
        st('lv_mv_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('lv_mv_transformer') } ],
        [
            { amount: 1, item: mi('basic_machine_hull') },
            { amount: 4, item: mi('tin_cable') },
            { amount: 1, item: mi('electrum_cable') }
        ]
    );

    // -- MV TO LV TRANSFORMER -- //
    assembler(
        st('mv_lv_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('mv_lv_transformer') } ],
        [
            { amount: 1, item: mi('basic_machine_hull') },
            { amount: 4, item: mi('tin_cable') },
            { amount: 1, item: mi('electrum_cable') }
        ]
    );

    // -- MV TO HV TRANSFORMER -- //
    assembler(
        st('mv_hv_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('mv_hv_transformer') } ],
        [
            { amount: 1, item: mi('advanced_machine_hull') },
            { amount: 4, item: mi('electrum_cable') },
            { amount: 1, item: mi('aluminum_cable') }
        ]
    );

    // -- HV TO MV TRANSFORMER -- //
    assembler(
        st('hv_mv_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('hv_mv_transformer') } ],
        [
            { amount: 1, item: mi('advanced_machine_hull') },
            { amount: 4, item: mi('electrum_cable') },
            { amount: 1, item: mi('aluminum_cable') }
        ]
    );

    // -- HV TO EV TRANSFORMER -- //
    assembler(
        st('hv_ev_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('hv_ev_transformer') } ],
        [ 
            { amount: 1, item: mi('turbo_machine_hull') },
            { amount: 4, item: mi('aluminum_cable') },
            { amount: 1, item: mi('annealed_copper_cable') }
        ]
    );

    // -- EV TO HV TRANSFORMER -- //
    assembler(
        st('ev_hv_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('ev_hv_transformer') } ],
        [
            { amount: 1, item: mi('turbo_machine_hull') },
            { amount: 4, item: mi('aluminum_cable') },
            { amount: 1, item: mi('annealed_copper_cable') }
        ]
    );

    // -- EV TO SUPERCONDUCTOR TRANSFORMER -- //
    assembler(
        st('ev_superconductor_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('ev_superconductor_transformer') } ],
        [ 
            { amount: 1, item: mi('highly_advanced_machine_hull') },
            { amount: 4, item: mi('annealed_copper_cable') },
            { amount: 1, item: mi('superconductor_cable') }
        ]
    );

    // -- SUPERCONDUCTOR TO EV TRANSFORMER -- //
    assembler(
        st('superconductor_ev_transformer'),
        8,
        200,
        [ { amount: 1, item: mi('superconductor_ev_transformer') } ],
        [
            { amount: 1, item: mi('highly_advanced_machine_hull') },
            { amount: 4, item: mi('annealed_copper_cable') },
            { amount: 1, item: mi('superconductor_cable') }
        ]
    );

    // -- BLOOD GENERATOR -- //
    assembler(
        st('blood_generator'),
        8,
        200,
        [
            { amount: 2, item: mi('advanced_pump') },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 2, item: mi('hv_steam_turbine') },
            { amount: 2, item: mi('stainless_steel_rotor') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mi('blood_generator') } ]
    );

    // -- ADVANCED CIRCUIT -- //
    assembler(
        st('advanced_circuit'),
        8,
        200,
        [
            { amount: 4, tag: 'c:redstone_dusts' },
            { amount: 2, tag: 'c:glowstone_dusts' },
            { amount: 2, tag: 'c:lapis_lazulis' },
            { amount: 1, item: mi('analog_circuit') }
        ],
        [ { amount: 1, item: tr('advanced_circuit') } ]
    );

    // -- PTFE MACHINE CASING -- //
    assembler(
        st('ptfe_machine_casing'),
        8,
        200,
        [
            { amount: 8, tag: 'c:polytetrafluoroethylene_plates' },
            { amount: 1, tag: 'c:polytetrafluoroethylene_gears' }
        ],
        [ { amount: 1, item: mi('chemically_inert_ptfe_casing') } ]
    );

    // -- PTFE PIPE CASING -- //
    assembler(
        st('ptfe_machine_casing_pipe'),
        8,
        200,
        [
            { amount: 1, item: mi('chemically_inert_ptfe_casing') },
            { amount: 6, item: mi('polytetrafluoroethylene_curved_plate') }
        ],
        [ { amount: 2, item: mi('polytetrafluoroethylene_machine_casing_pipe') } ]
    );
    
    // -- ALLOY SMELTER -- //
    assembler(
        st('alloy_smelter'),
        8,
        200,
        [
            { amount: 2, item: mi('analog_circuit') },
            { amount: 2, item: mi('inductor') },
            { amount: 2, item: mi('cupronickel_wire_magnetic') },
            { amount: 2, item: mi('tin_cable') },
            { amount: 1, item: mi('electric_furnace') }
        ],
        [ { amount: 1, item: mi('alloy_smelter') } ]
    );

    // -- LASER ENGRAVER -- //
    assembler(
        st('laser_engraver'),
        8,
        200,
        [
            { amount: 3, item: mi('cupronickel_wire_magnetic') },
            { amount: 2, item: mi('electronic_circuit') },
            { amount: 2, item: mi('large_motor') },
            { amount: 1, tag: 'c:glass_blocks' },
            { amount: 1, item: mi('basic_machine_hull') }
        ],
        [ { amount: 1, item: mi('laser_engraver') } ]
    );

    // -- PHOTOSYNTHETIC CHAMBER -- //
    assembler(
        st('photosynthetic_chamber'),
        8,
        200,
        [
            { amount: 2, item: mi('inductor') },
            { amount: 2, item: mi('motor') },
            { amount: 1, item: mi('pump') },
            { amount: 1, item: mi('steel_tank') },
            { amount: 1, item: mc('dirt') },
            { amount: 1, tag: 'c:glass_blocks' },
            { amount: 1, item: mi('basic_machine_hull') }
        ],
        [ { amount: 1, item: mi('photosynthetic_chamber') } ]
    );

    // -- ROCKET PART ASSEMBLER -- //
    assembler(
        st('rocket_part_assembler'),
        8,
        200,
        [
            { amount: 2, item: mi('robot_arm') },
            { amount: 2, tag: 'c:stainless_steel_gears' },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 1, item: mi('advanced_motor') },
            { amount: 1, item: mi('advanced_pump') },
            { amount: 1, item: mi('basic_machine_hull') }
        ],
        [ { amount: 1, item: mi('rocket_part_assembler') } ]
    );

    // -- CORE MINING DRILL -- //
    assembler(
        st('core_drill'),
        8,
        200,
        [
            { amount: 3, item: mi('clean_stainless_steel_machine_casing') },
            { amount: 2, item: mi('large_advanced_motor') },
            { amount: 2, item: mi('quantum_circuit') },
            { amount: 1, item: mi('desh_drill_head') },
            { amount: 1, item: mi('quantum_machine_hull') }
        ],
        [ { amount: 1, item: mi('core_drill') } ]
    );

    // -- INDUSTRIAL GREENHOUSE -- //
    assembler(
        st('industrial_greenhouse'),
        8,
        200,
        [ 
            { amount: 2, item: mi('motor') },
            { amount: 2, item: mi('analog_circuit') },
            { amount: 2, item: mi('pump') },
            { amount: 2, item: mi('tin_rotor') },
            { amount: 1, item: mi('basic_machine_hull') }
        ],
        [ { amount: 1, item: mi('greenhouse') } ]
    );

    // -- LARGE CHEMICAL REACTOR -- //
    assembler(
        st('large_chemical_reactor'),
        8,
        200,
        [ 
            { amount: 4, item: mi('polytetrafluoroethylene_plate') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 1, item: mi('digital_circuit') },
            { amount: 1, item: mi('chemical_reactor') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mi('large_chemical_reactor') } ]
    );

    // -- MEGA SMELTER -- //
    assembler(
        st('mega_smelter'),
        8,
        200,
        [
            { amount: 4, item: mi('cupronickel_wire_magnetic') },
            { amount: 2, item: mi('electronic_circuit') },
            { amount: 2, item: mi('electric_furnace') },
            { amount: 1, item: mi('advanced_machine_hull') }
        ],
        [ { amount: 1, item: mi('mega_smelter') } ]
    );

    // -- MOB CRUSHER -- //
    assembler(
        st('mob_crusher'),
        8,
        200,
        [
            { amount: 2, item: mi('invar_rotary_blade') },
            { amount: 2, item: mi('piston') },
            { amount: 2, item: mi('large_pump') },
            { amount: 2, item: mi('electronic_circuit') },
            { amount: 1, item: mi('steel_machine_casing') }
        ],
        [ { amount: 1, item: mi('mob_crusher') } ]
    );

    // -- PYROLYSE OVEN -- //
    assembler(
        st('pyrolyse_oven'),
        8,
        200,
        [
            { amount: 4, item: tr('cupronickel_heating_coil') },
            { amount: 3, item: mi('inductor') },
            { amount: 1, item: mi('analog_circuit') },
            { amount: 1, item: mi('basic_machine_hull') }
        ],
        [ { amount: 1, item: mi('pyrolyse_oven') } ]
    );

    // -- QUASI QUANTUM SINGULARITY FORGE -- //
    assembler(
        st('singularity_forge'),
        8,
        200,
        [
            { amount: 6, item: mi('plasma_handling_iridium_machine_casing') },
            { amount: 2, item: mi('quantum_circuit') },
            { amount: 1, item: mi('quantum_machine_hull') }
        ],
        [ { amount: 1, item: mi('singularity_forge') } ]
    );

    // -- SPACE PROBE LAUNCHER -- //
    assembler(
        st('space_probe_launcher'),
        8,
        200,
        [
            { amount: 2, item: mi('calorite_gear') },
            { amount: 2, item: mi('large_advanced_motor') },
            { amount: 2, item: mi('calorite_machine_casing_pipe') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: mi('calorite_machine_casing') },
            { amount: 1, item: mi('highly_advanced_machine_hull') }
        ],
        [ { amount: 1, item: mi('space_probe_launcher') } ]
    );

    // -- OP AMP -- //
    assembler(
        st('op_amp'),
        8,
        200,
        [
            { amount: 4, item: mi('resistor') },
            { amount: 4, item: mi('transistor') },
            { amount: 1, item: mi('diode') }
        ],
        [ { amount: 1, item: mi('op_amp') } ],
        [ { amount: 50, fluid: mi('polytetrafluoroethylene') } ]
    );

    // -- BASIC CARD -- //
    assembler(
        st('basic_card'),
        8,
        200,
        [ 
            { amount: 3, tag: 'c:aluminum_plates' },
            { amount: 2, tag: 'c:gold_ingots' },
            { amount: 1, item: ae('calculation_processor') }
        ],
        [ { amount: 2, item: ae('basic_card') } ],
        [ { amount: 100, fluid: mi('molten_redstone') } ]
    );

    // -- ADVANCED CARD -- //
    assembler(
        st('advanced_card'),
        8,
        200,
        [ 
            { amount: 3, tag: 'c:aluminum_plates' },
            { amount: 2, tag: 'c:diamonds' },
            { amount: 1, item: ae('calculation_processor') }
        ],
        [ { amount: 2, item: ae('advanced_card') } ],
        [ { amount: 100, fluid: mi('molten_redstone') } ]
    );

    // -- BRONZE BOILER -- //
    assembler(
        st('bronze_boiler'),
        8,
        200,
        [
            { amount: 4, tag: 'c:bronze_plates' },
            { amount: 1, item: mi('bronze_tank') },
            { amount: 1, item: mi('bronze_machine_casing') },
            { amount: 3, item: mi('fire_clay_bricks') }
        ],
        [ { amount: 1, item: mi('bronze_boiler') } ]
    );

    // -- BRONZE FURNACE -- /
    assembler(
        st('bronze_furnace'),
        8,
        200,
        [
            { amount: 7, tag: 'c:bronze_plates' },
            { amount: 1, item: mi('bronze_machine_casing') },
            { amount: 1, item: mc('furnace') }
        ],
        [ { amount: 1, item: mi('bronze_furnace') } ]
    );

    // -- CUPRONICKEL HEATING COIL -- //
    assembler(
        st('cupronickel_heating_coil'),
        4,
        400,
        [
            { amount: 4, item: mi('cupronickel_wire') },
            { amount: 1, item: mi('copper_ring') }
        ],
        [
            { amount: 1, item: tr('cupronickel_heating_coil') }
        ]
    );

    // -- ZINC DRILL -- //
    assembler(
        st('zinc_drill'),
        8,
        200,
        [ 
            { amount: 1, item: mi('zinc_drill_head') },
            { amount: 2, item: mi('iron_gear') },
            { amount: 1, item: 'create:electron_tube' },
            { amount: 1, tag: 'c:bronze_plates' }
        ],
        [ { amount: 4, item: mi('zinc_drill') } ]
    );

    // -- DESH DRILL -- //
    assembler(
        st('desh_drill'),
        16,
        200,
        [
            { amount: 1, item: mi('desh_drill_head') },
            { amount: 2, tag: 'modern_industrialization:item_pipes' },
            { amount: 2, tag: 'c:enderium_gears' },
            { amount: 2, item: mi('large_advanced_motor') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: mi('annealed_copper_wire') }
        ],
        [ { amount: 4, item: mi('desh_drill') } ]
    );

    // -- AUTO CRAFTING TABLE -- //
    assembler(
        st('auto_crafting_table'),
        16,
        600,
        [
            { amount: 4, item: mi('analog_circuit') },
            { amount: 2, tag: 'c:workbench' },
            { amount: 2, item: mi('robot_arm') },
            { amount: 2, item: mi('motor') }
        ],
        [ { amount: 1, item: tr('auto_crafting_table') } ]
    );

    // -- LITHIUM BATTERY -- //
    assembler(
        st('lithium_ion_battery'),
        16,
        300,
        [
            { amount: 1, item: tr('red_cell_battery') },
            { amount: 4, tag: 'c:aluminum_plates' }
        ],
        [ { amount: 1, item: tr('lithium_ion_battery') } ],
        [ { amount: 500, fluid: mi('lithium') } ]
    );

    // -- LITHIUM BATPACK -- //
    assembler(
        st('lithium_ion_batpack'),
        16,
        300,
        [
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, tag: 'c:aluminum_plates' }
        ],
        [ { amount: 1, item: tr('lithium_ion_batpack') } ],
        [ { amount: 1000, fluid: mi('acrylic_glue') } ]
    );

    // -- ENERGY CRYSTAL -- //
    assembler(
        st('energy_crystal'),
        80,
        300,
        [
            { amount: 2, tag: 'c:stainless_steel_plates' },
            { amount: 2, item: tr('synthetic_redstone_crystal') },
            { amount: 2, item: mi('digital_circuit') }
        ],
        [ { amount: 1, item: tr('energy_crystal') } ],
        [ { amount: 500, fluid: mi('polyethylene') } ]
    );

    // -- LAPOTRON CRYSTAL -- //
    assembler(
        st('lapotron_crystal'),
        128,
        800,
        [
            { amount: 4, item: tr('lazurite_plate') },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 2, item: mi('titanium_plate') },
            { amount: 1, item: tr('energy_crystal') }
        ],
        [ { amount: 1, item: tr('lapotron_crystal') } ],
        [ { amount: 500, fluid: mi('polyethylene') } ]
    );

    // -- QBIT -- //
    assembler(
        st('qbit'),
        20,
        6000,
        [
            { amount: 2, item: mi('arithmetic_logic_unit') },
            { amount: 2, tag: 'c:carbon_plates' },
            { amount: 2, tag: 'c:tungstensteel_plates' },
            { amount: 6, item: mi('superconductor_wire') }
        ],
        [ { amount: 1, item: mi('qbit') } ],
        [
            { amount: 250, fluid: mi('cryofluid') },
            { amount: 50, fluid: mi('tritium') }
        ]
    );

    // // -- ULTRADENSE METAL BALL -- //
    // assembler(
    //     st('ultradense_metal_ball'),
    //     512,
    //     600,
    //     [
    //         { amount: 4, item: mi('tungstensteel_large_plate') },
    //         { amount: 4, tag: 'c:lead_plates' },
    //         { amount: 1, tag: 'c:iridium_alloy_plates' }
    //     ],
    //     [ { amount: 1, item: mi('ultradense_metal_ball') } ],
    //     [ { amount: 1000, fluid: mi('neutronium') } ]
    // );

    // -- CALORITE MACHINE CASING -- //
    assembler(
        st('calorite_machine_casing'),
        16,
        200,
        [
            { amount: 8, tag: 'c:calorite_plates' },
            { amount: 1, tag: 'c:calorite_gears' }
        ],
        [ { amount: 1, item: mi('calorite_machine_casing') } ]
    );

    // -- CALORITE MACHINE PIPE CASING -- //
    assembler(
        st('calorite_machine_casing_pipe'),
        16,
        200,
        [
            { amount: 1, item: mi('calorite_machine_casing') },
            { amount: 6, item: mi('calorite_curved_plate')}
        ],
        [ { amount: 1, item: mi('calorite_machine_casing_pipe')} ]
    );

    // -- INDUSTRIAL CIRCUIT -- //
    assembler(
        st('industrial_circuit'),
        48,
        300,
        [
            { amount: 1, item: tr('advanced_circuit') },
            { amount: 2, tag: 'c:tungsten_plates' }
        ],
        [ { amount: 1, item:  tr('industrial_circuit') } ]
    );

    // -- REDSTONE REPEATER -- //
    assembler(
        st('repeater'),
        8,
        100,
        [ { amount: 3, tag: 'c:stone' } ],
        [ { amount: 1, item: mc('repeater') } ],
        [ { amount: 200, fluid: mi('molten_redstone') } ]
    );

    // -- REDSTONE COMPARATOR -- //
    assembler(
        st('comparator'),
        8,
        100, 
        [
            { amount: 1, item: mc('quartz') },
            { amount: 3, tag: 'c:stone' }
        ],
        [ { amount: 1, item: mc('comparator') } ],
        [ { amount: 200, fluid: mi('molten_redstone') } ]
    );

    // -- REDSTONE TORCH -- //
    assembler(
        st('redstone_torch'),
        8,
        100,
        [ { amount: 1, tag: 'c:wood_sticks' } ],
        [ { amount: 1, item: mc('redstone_torch') } ],
        [ { amount: 50, fluid: mi('molten_redstone') } ]
    );

    // -- DATA STORAGE ASSEMBLING -- //
    assembler(
        st('standard_handgun_cartridge'),
        8,
        200,
        [
            { amount: 1, item: tr('data_storage_core') },
            { amount: 1, item: mi('iridium_plate') },
            { amount: 2, item: mi('digital_circuit') }
        ],
        [ { amount: 8, item: 'anim_guns:standard_handgun_cartridge' } ]
    );

    // -- STANDARD HANDGUN CARTRIDGE -- //
    assembler(
        st('standard_handgun_cartridge'),
        8,
        200,
        [
            { amount: 1, tag: 'c:lead_ingots' },
            { amount: 1, item: mc('gunpowder') },
            { amount: 2, tag: 'c:brass_ingots' }
        ],
        [ { amount: 8, item: 'anim_guns:standard_handgun_cartridge' } ]
    );

    // -- HEAVY HANDGUN CARTRIDGE -- //
    assembler(
        st('heavy_handgun_cartridge'),
        8,
        200,
        [
            { amount: 1, tag: 'c:lead_ingots' },
            { amount: 1, item: mc('gunpowder') },
            { amount: 2, item: 'anim_guns:hardened_iron_ingot' }
        ],
        [ { amount: 8, item: 'anim_guns:heavy_handgun_cartridge' } ]
    );

    // -- STANDARD RIFLE CARTRIDGE -- //
    assembler(
        st('standard_rifle_cartridge'),
        8, 
        200,
        [
            { amount: 2, tag: 'c:lead_ingots' },
            { amount: 2, item: mc('gunpowder') },
            { amount: 4, tag: 'c:brass_ingots' }
        ],
        [ { amount: 8, item: 'anim_guns:standard_rifle_cartridge' } ]
    );

    // -- HEAVY RIFLE CARTRIDGE -- //
    assembler(
        st('heavy_rifle_cartridge'),
        8,
        200,
        [
            { amount: 2, tag: 'c:lead_ingots' },
            { amount: 2, item: mc('gunpowder') },
            { amount: 4, item: 'anim_guns:hardened_iron_ingot' }
        ], 
        [ { amount: 8, item: 'anim_guns:heavy_rifle_cartridge' } ]
    );

    // -- SHOTGUN SHELL -- //
    assembler(
        st('shotgun_shell'),
        8,
        200,
        [
            { amount: 18, tag: 'c:iron_nuggets' },
            { amount: 2, item: mc('gunpowder') },
            { amount: 2, item: mc('paper') },
            { amount: 1, item: 'anim_guns:plastic' }
        ],
        [ { amount: 8, item: 'anim_guns:shotgun_shell' } ]
    );

    // -- SPACE HELMET -- //
    assembler(
        st('space_helmet'),
        16,
        300,
        [
            { amount: 4, tag: 'c:steel_ingots' },
            { amount: 1, tag: 'c:glass_panes' },
            { amount: 1, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_helmet') } ]
    );

    // -- SPACE SUIT -- // 
    assembler(
        st('space_suit'),
        16,
        300,
        [
            { amount: 4, tag: 'c:steel_ingots' }, 
            { amount: 1, item: ad('oxygen_gear') },
            { amount: 1, item: ad('oxygen_tank') },
            { amount: 1, item: ad('oxygen_tank') },
            { amount: 2, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_suit') } ]
    );

    // -- SPACE PANTS -- //
    assembler(
        st('space_pants'),
        16,
        300,
        [
            { amount: 5, tag: 'c:steel_ingots' },
            { amount: 2, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_pants') } ]
    ) 

    // -- SPACE BOOTS -- //
    assembler(
        st('space_boots'),
        16,
        300,
        [
            { amount: 2, tag: 'c:steel_ingots' },
            { amount: 2, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_boots') } ]
    );
});