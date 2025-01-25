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
    restrict(event, 'arachnids:762', 'skills:technician', true);
    restrict(event, 'arachnids:arkellian_spawn_egg', 'skills:technician', true);
    restrict(event, 'arachnids:brainbug_spawn_egg', 'skills:technician', true);
    restrict(event, 'arachnids:flare', 'skills:technician', true);
    restrict(event, 'arachnids:hooper_spawn_egg', 'skills:technician', true);
    restrict(event, 'arachnids:m55', 'skills:technician', true);
    restrict(event, 'arachnids:mar1', 'skills:technician', true);
    restrict(event, 'arachnids:mar2', 'skills:technician', true);
    restrict(event, 'arachnids:miarmor_boots', 'skills:technician', true);
    restrict(event, 'arachnids:miarmor_chestplate', 'skills:technician', true);
    restrict(event, 'arachnids:miarmor_helmet', 'skills:technician', true);
    restrict(event, 'arachnids:miarmor_leggings', 'skills:technician', true);
    restrict(event, 'arachnids:mz90', 'skills:technician', true);
    restrict(event, 'arachnids:plasma_spawn_egg', 'skills:technician', true);
    restrict(event, 'arachnids:scorpion_spawn_egg', 'skills:technician', true);
    restrict(event, 'arachnids:tanker_spawn_egg', 'skills:technician', true);
    restrict(event, 'arachnids:ton', 'skills:technician', true);
    restrict(event, 'arachnids:warrior_spawn_egg', 'skills:technician', true);
    restrict(event, 'arachnids:worker_spawn_egg', 'skills:technician', true);
});