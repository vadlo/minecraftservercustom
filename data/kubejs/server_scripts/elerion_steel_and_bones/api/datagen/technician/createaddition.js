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
    restrict(event, 'createaddition:accumulator', 'skills:technician', true);
    restrict(event, 'createaddition:alternator', 'skills:technician', true);
    restrict(event, 'createaddition:barbed_wire', 'skills:technician', true);
    restrict(event, 'createaddition:biomass_pellet', 'skills:technician', true);
    restrict(event, 'createaddition:biomass_pellet_block', 'skills:technician', true);
    restrict(event, 'createaddition:cake_base', 'skills:technician', true);
    restrict(event, 'createaddition:cake_base_baked', 'skills:technician', true);
    restrict(event, 'createaddition:capacitor', 'skills:technician', true);
    restrict(event, 'createaddition:chocolate_cake', 'skills:technician', true);
    restrict(event, 'createaddition:connector', 'skills:technician', true);
    restrict(event, 'createaddition:copper_spool', 'skills:technician', true);
    restrict(event, 'createaddition:creative_energy', 'skills:technician', true);
    restrict(event, 'createaddition:diamond_grit', 'skills:technician', true);
    restrict(event, 'createaddition:diamond_grit_sandpaper', 'skills:technician', true);
    restrict(event, 'createaddition:digital_adapter', 'skills:technician', true);
    restrict(event, 'createaddition:electric_motor', 'skills:technician', true);
    restrict(event, 'createaddition:electrum_amulet', 'skills:technician', true);
    restrict(event, 'createaddition:electrum_spool', 'skills:technician', true);
    restrict(event, 'createaddition:festive_spool', 'skills:technician', true);
    restrict(event, 'createaddition:gold_spool', 'skills:technician', true);
    restrict(event, 'createaddition:honey_cake', 'skills:technician', true);
    restrict(event, 'createaddition:large_connector', 'skills:technician', true);
    restrict(event, 'createaddition:modular_accumulator', 'skills:technician', true);
    restrict(event, 'createaddition:portable_energy_interface', 'skills:technician', true);
    restrict(event, 'createaddition:redstone_relay', 'skills:technician', true);
    restrict(event, 'createaddition:rolling_mill', 'skills:technician', true);
    restrict(event, 'createaddition:seed_oil_bucket', 'skills:technician', true);
    restrict(event, 'createaddition:small_light_connector', 'skills:technician', true);
    restrict(event, 'createaddition:spool', 'skills:technician', true);
    restrict(event, 'createaddition:straw', 'skills:technician', true);
    restrict(event, 'createaddition:tesla_coil', 'skills:technician', true);
});