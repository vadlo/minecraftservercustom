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
    restrict(event, 'tech_enhanced:electric_hoe', 'skills:technician', true);
    restrict(event, 'tech_enhanced:electric_wrench', 'skills:technician', true);
    restrict(event, 'tech_enhanced:nano_boots', 'skills:technician', true);
    restrict(event, 'tech_enhanced:nano_chestplate', 'skills:technician', true);
    restrict(event, 'tech_enhanced:nano_helmet', 'skills:technician', true);
    restrict(event, 'tech_enhanced:nano_leggings', 'skills:technician', true);
});