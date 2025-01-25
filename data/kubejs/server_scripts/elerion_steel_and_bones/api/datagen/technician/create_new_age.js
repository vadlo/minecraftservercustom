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
    restrict(event, 'create_new_age:advanced_motor', 'skills:technician', true);
    restrict(event, 'create_new_age:advanced_solar_heating_plate', 'skills:technician', true);
    restrict(event, 'create_new_age:basic_motor', 'skills:technician', true);
    restrict(event, 'create_new_age:basic_solar_heating_plate', 'skills:technician', true);
    restrict(event, 'create_new_age:carbon_brushes', 'skills:technician', true);
    restrict(event, 'create_new_age:copper_wire', 'skills:technician', true);
    restrict(event, 'create_new_age:corium', 'skills:technician', true);
    restrict(event, 'create_new_age:electrical_connector', 'skills:technician', true);
    restrict(event, 'create_new_age:energiser_t1', 'skills:technician', true);
    restrict(event, 'create_new_age:energiser_t2', 'skills:technician', true);
    restrict(event, 'create_new_age:energiser_t3', 'skills:technician', true);
    restrict(event, 'create_new_age:fluxuated_magnetite', 'skills:technician', true);
    restrict(event, 'create_new_age:generator_coil', 'skills:technician', true);
    restrict(event, 'create_new_age:heat_pipe', 'skills:technician', true);
    restrict(event, 'create_new_age:heat_pump', 'skills:technician', true);
    restrict(event, 'create_new_age:heater', 'skills:technician', true);
    restrict(event, 'create_new_age:incomplete_casing', 'skills:technician', true);
    restrict(event, 'create_new_age:incomplete_enchanted_golden_apple', 'skills:technician', true);
    restrict(event, 'create_new_age:incomplete_fuel', 'skills:technician', true);
    restrict(event, 'create_new_age:incomplete_wire', 'skills:technician', true);
    restrict(event, 'create_new_age:layered_magnet', 'skills:technician', true);
    restrict(event, 'create_new_age:magnetite_block', 'skills:technician', true);
    restrict(event, 'create_new_age:netherite_magnet', 'skills:technician', true);
    restrict(event, 'create_new_age:nuclear_fuel', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_diamond', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_diamond_wire', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_gold', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_golden_sheet', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_golden_wire', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_iron', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_iron_sheet', 'skills:technician', true);
    restrict(event, 'create_new_age:overcharged_iron_wire', 'skills:technician', true);
    restrict(event, 'create_new_age:radioactive_thorium', 'skills:technician', true);
    restrict(event, 'create_new_age:reactor_casing', 'skills:technician', true);
    restrict(event, 'create_new_age:reactor_fuel_acceptor', 'skills:technician', true);
    restrict(event, 'create_new_age:reactor_glass', 'skills:technician', true);
    restrict(event, 'create_new_age:reactor_heat_vent', 'skills:technician', true);
    restrict(event, 'create_new_age:reactor_rod', 'skills:technician', true);
    restrict(event, 'create_new_age:redstone_magnet', 'skills:technician', true);
    restrict(event, 'create_new_age:reinforced_motor', 'skills:technician', true);
    restrict(event, 'create_new_age:solid_corium', 'skills:technician', true);
    restrict(event, 'create_new_age:stirling_engine', 'skills:technician', true);
});