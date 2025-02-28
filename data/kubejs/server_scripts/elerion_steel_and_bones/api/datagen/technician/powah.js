// AUTOMATIC I2JSP DATAGEN
// FOR INTERNAL USAGE IN ELERION: STEEL 'N' BONES MODPACK

function restrict(event, itemName, requiredStage, requiredValue) {
    event.restrict(itemName, restrict => {
      restrict.everything().if(player => player.cannot(requiredStage, requiredValue));
    });
  }

function restrictFluid(event, fluid, requiredStage, requiredValue) {
    event.restrict(fluid, restrict => {
      restrict.everything().if(player => player.cannot(requiredStage, requiredValue));
    });
  }

ItemSkillEvents.register(event => {
    restrict(event, 'powah:aerial_pearl', 'skills:later_content', true);
    restrict(event, 'powah:battery_basic', 'skills:later_content', true);
    restrict(event, 'powah:battery_blazing', 'skills:later_content', true);
    restrict(event, 'powah:battery_hardened', 'skills:later_content', true);
    restrict(event, 'powah:battery_niotic', 'skills:later_content', true);
    restrict(event, 'powah:battery_nitro', 'skills:later_content', true);
    restrict(event, 'powah:battery_spirited', 'skills:later_content', true);
    restrict(event, 'powah:battery_starter', 'skills:later_content', true);
    restrict(event, 'powah:binding_card', 'skills:later_content', true);
    restrict(event, 'powah:binding_card_dim', 'skills:later_content', true);
    restrict(event, 'powah:blank_card', 'skills:later_content', true);
    restrict(event, 'powah:blazing_crystal_block', 'skills:later_content', true);
    restrict(event, 'powah:book', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_basic', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_basic_large', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_basic_tiny', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_blazing', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_hardened', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_niotic', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_nitro', 'skills:later_content', true);
    restrict(event, 'powah:capacitor_spirited', 'skills:later_content', true);
    restrict(event, 'powah:charged_snowball', 'skills:later_content', true);
    restrict(event, 'powah:crystal_blazing', 'skills:later_content', true);
    restrict(event, 'powah:crystal_niotic', 'skills:later_content', true);
    restrict(event, 'powah:crystal_nitro', 'skills:later_content', true);
    restrict(event, 'powah:crystal_spirited', 'skills:later_content', true);
    restrict(event, 'powah:dielectric_casing', 'skills:later_content', true);
    restrict(event, 'powah:dielectric_paste', 'skills:later_content', true);
    restrict(event, 'powah:dielectric_rod', 'skills:later_content', true);
    restrict(event, 'powah:dielectric_rod_horizontal', 'skills:later_content', true);
    restrict(event, 'powah:dry_ice', 'skills:later_content', true);
    restrict(event, 'powah:ender_cell_basic', 'skills:later_content', true);
    restrict(event, 'powah:ender_cell_blazing', 'skills:later_content', true);
    restrict(event, 'powah:ender_cell_hardened', 'skills:later_content', true);
    restrict(event, 'powah:ender_cell_niotic', 'skills:later_content', true);
    restrict(event, 'powah:ender_cell_nitro', 'skills:later_content', true);
    restrict(event, 'powah:ender_cell_spirited', 'skills:later_content', true);
    restrict(event, 'powah:ender_cell_starter', 'skills:later_content', true);
    restrict(event, 'powah:ender_core', 'skills:later_content', true);
    restrict(event, 'powah:ender_gate_basic', 'skills:later_content', true);
    restrict(event, 'powah:ender_gate_blazing', 'skills:later_content', true);
    restrict(event, 'powah:ender_gate_hardened', 'skills:later_content', true);
    restrict(event, 'powah:ender_gate_niotic', 'skills:later_content', true);
    restrict(event, 'powah:ender_gate_nitro', 'skills:later_content', true);
    restrict(event, 'powah:ender_gate_spirited', 'skills:later_content', true);
    restrict(event, 'powah:ender_gate_starter', 'skills:later_content', true);
    restrict(event, 'powah:energized_steel_block', 'skills:later_content', true);
    restrict(event, 'powah:energizing_orb', 'skills:later_content', true);
    restrict(event, 'powah:energizing_rod_basic', 'skills:later_content', true);
    restrict(event, 'powah:energizing_rod_blazing', 'skills:later_content', true);
    restrict(event, 'powah:energizing_rod_hardened', 'skills:later_content', true);
    restrict(event, 'powah:energizing_rod_niotic', 'skills:later_content', true);
    restrict(event, 'powah:energizing_rod_nitro', 'skills:later_content', true);
    restrict(event, 'powah:energizing_rod_spirited', 'skills:later_content', true);
    restrict(event, 'powah:energizing_rod_starter', 'skills:later_content', true);
    restrict(event, 'powah:energy_cable_basic', 'skills:later_content', true);
    restrict(event, 'powah:energy_cable_blazing', 'skills:later_content', true);
    restrict(event, 'powah:energy_cable_hardened', 'skills:later_content', true);
    restrict(event, 'powah:energy_cable_niotic', 'skills:later_content', true);
    restrict(event, 'powah:energy_cable_nitro', 'skills:later_content', true);
    restrict(event, 'powah:energy_cable_spirited', 'skills:later_content', true);
    restrict(event, 'powah:energy_cable_starter', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_basic', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_blazing', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_creative', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_hardened', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_niotic', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_nitro', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_spirited', 'skills:later_content', true);
    restrict(event, 'powah:energy_cell_starter', 'skills:later_content', true);
    restrict(event, 'powah:energy_discharger_basic', 'skills:later_content', true);
    restrict(event, 'powah:energy_discharger_blazing', 'skills:later_content', true);
    restrict(event, 'powah:energy_discharger_hardened', 'skills:later_content', true);
    restrict(event, 'powah:energy_discharger_niotic', 'skills:later_content', true);
    restrict(event, 'powah:energy_discharger_nitro', 'skills:later_content', true);
    restrict(event, 'powah:energy_discharger_spirited', 'skills:later_content', true);
    restrict(event, 'powah:energy_discharger_starter', 'skills:later_content', true);
    restrict(event, 'powah:energy_hopper_basic', 'skills:later_content', true);
    restrict(event, 'powah:energy_hopper_blazing', 'skills:later_content', true);
    restrict(event, 'powah:energy_hopper_hardened', 'skills:later_content', true);
    restrict(event, 'powah:energy_hopper_niotic', 'skills:later_content', true);
    restrict(event, 'powah:energy_hopper_nitro', 'skills:later_content', true);
    restrict(event, 'powah:energy_hopper_spirited', 'skills:later_content', true);
    restrict(event, 'powah:energy_hopper_starter', 'skills:later_content', true);
    restrict(event, 'powah:furnator_basic', 'skills:later_content', true);
    restrict(event, 'powah:furnator_blazing', 'skills:later_content', true);
    restrict(event, 'powah:furnator_hardened', 'skills:later_content', true);
    restrict(event, 'powah:furnator_niotic', 'skills:later_content', true);
    restrict(event, 'powah:furnator_nitro', 'skills:later_content', true);
    restrict(event, 'powah:furnator_spirited', 'skills:later_content', true);
    restrict(event, 'powah:furnator_starter', 'skills:later_content', true);
    restrict(event, 'powah:lens_of_ender', 'skills:later_content', true);
    restrict(event, 'powah:magmator_basic', 'skills:later_content', true);
    restrict(event, 'powah:magmator_blazing', 'skills:later_content', true);
    restrict(event, 'powah:magmator_hardened', 'skills:later_content', true);
    restrict(event, 'powah:magmator_niotic', 'skills:later_content', true);
    restrict(event, 'powah:magmator_nitro', 'skills:later_content', true);
    restrict(event, 'powah:magmator_spirited', 'skills:later_content', true);
    restrict(event, 'powah:magmator_starter', 'skills:later_content', true);
    restrict(event, 'powah:niotic_crystal_block', 'skills:later_content', true);
    restrict(event, 'powah:nitro_crystal_block', 'skills:later_content', true);
    restrict(event, 'powah:photoelectric_pane', 'skills:later_content', true);
    restrict(event, 'powah:player_aerial_pearl', 'skills:later_content', true);
    restrict(event, 'powah:player_transmitter_basic', 'skills:later_content', true);
    restrict(event, 'powah:player_transmitter_blazing', 'skills:later_content', true);
    restrict(event, 'powah:player_transmitter_hardened', 'skills:later_content', true);
    restrict(event, 'powah:player_transmitter_niotic', 'skills:later_content', true);
    restrict(event, 'powah:player_transmitter_nitro', 'skills:later_content', true);
    restrict(event, 'powah:player_transmitter_spirited', 'skills:later_content', true);
    restrict(event, 'powah:player_transmitter_starter', 'skills:later_content', true);
    restrict(event, 'powah:reactor_basic', 'skills:later_content', true);
    restrict(event, 'powah:reactor_blazing', 'skills:later_content', true);
    restrict(event, 'powah:reactor_hardened', 'skills:later_content', true);
    restrict(event, 'powah:reactor_niotic', 'skills:later_content', true);
    restrict(event, 'powah:reactor_nitro', 'skills:later_content', true);
    restrict(event, 'powah:reactor_spirited', 'skills:later_content', true);
    restrict(event, 'powah:reactor_starter', 'skills:later_content', true);
    restrict(event, 'powah:solar_panel_basic', 'skills:later_content', true);
    restrict(event, 'powah:solar_panel_blazing', 'skills:later_content', true);
    restrict(event, 'powah:solar_panel_hardened', 'skills:later_content', true);
    restrict(event, 'powah:solar_panel_niotic', 'skills:later_content', true);
    restrict(event, 'powah:solar_panel_nitro', 'skills:later_content', true);
    restrict(event, 'powah:solar_panel_spirited', 'skills:later_content', true);
    restrict(event, 'powah:solar_panel_starter', 'skills:later_content', true);
    restrict(event, 'powah:spirited_crystal_block', 'skills:later_content', true);
    restrict(event, 'powah:steel_energized', 'skills:later_content', true);
    restrict(event, 'powah:thermo_generator_basic', 'skills:later_content', true);
    restrict(event, 'powah:thermo_generator_blazing', 'skills:later_content', true);
    restrict(event, 'powah:thermo_generator_hardened', 'skills:later_content', true);
    restrict(event, 'powah:thermo_generator_niotic', 'skills:later_content', true);
    restrict(event, 'powah:thermo_generator_nitro', 'skills:later_content', true);
    restrict(event, 'powah:thermo_generator_spirited', 'skills:later_content', true);
    restrict(event, 'powah:thermo_generator_starter', 'skills:later_content', true);
    restrict(event, 'powah:thermoelectric_plate', 'skills:later_content', true);
    restrict(event, 'powah:wrench', 'skills:later_content', true);
});