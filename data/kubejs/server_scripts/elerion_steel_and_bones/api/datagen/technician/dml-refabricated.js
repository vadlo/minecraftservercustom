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
    restrict(event, 'dml-refabricated:cafeteria', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_end', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_ghost', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_illager', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_nether', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_ocean', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_overworld', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_skeleton', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_slimy', 'skills:technician', true);
    restrict(event, 'dml-refabricated:data_model_zombie', 'skills:technician', true);
    restrict(event, 'dml-refabricated:deep_learner', 'skills:technician', true);
    restrict(event, 'dml-refabricated:dml-refabricated', 'skills:technician', true);
    restrict(event, 'dml-refabricated:emeritus_hat', 'skills:technician', true);
    restrict(event, 'dml-refabricated:extraterrestrial_matter', 'skills:technician', true);
    restrict(event, 'dml-refabricated:glitch_boots', 'skills:technician', true);
    restrict(event, 'dml-refabricated:glitch_chestplate', 'skills:technician', true);
    restrict(event, 'dml-refabricated:glitch_helmet', 'skills:technician', true);
    restrict(event, 'dml-refabricated:glitch_ingot', 'skills:technician', true);
    restrict(event, 'dml-refabricated:glitch_leggings', 'skills:technician', true);
    restrict(event, 'dml-refabricated:hellish_matter', 'skills:technician', true);
    restrict(event, 'dml-refabricated:loot_fabricator', 'skills:technician', true);
    restrict(event, 'dml-refabricated:machine_casing', 'skills:technician', true);
    restrict(event, 'dml-refabricated:matter_condenser', 'skills:technician', true);
    restrict(event, 'dml-refabricated:overworld_matter', 'skills:technician', true);
    restrict(event, 'dml-refabricated:physically_condensed_matrix_fragment', 'skills:technician', true);
    restrict(event, 'dml-refabricated:polymer_clay', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_end', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_ghost', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_illager', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_nether', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_ocean', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_overworld', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_skeleton', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_slimy', 'skills:technician', true);
    restrict(event, 'dml-refabricated:pristine_matter_zombie', 'skills:technician', true);
    restrict(event, 'dml-refabricated:simulation_chamber', 'skills:technician', true);
    restrict(event, 'dml-refabricated:soot_plate', 'skills:technician', true);
    restrict(event, 'dml-refabricated:soot_redstone', 'skills:technician', true);
    restrict(event, 'dml-refabricated:trial_key', 'skills:technician', true);
    restrict(event, 'dml-refabricated:trial_keystone', 'skills:technician', true);
});