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
    restrict(event, 'vitalize:experience', 'skills:magician', true);
    restrict(event, 'vitalize:experience_cubed', 'skills:magician', true);
    restrict(event, 'vitalize:experience_squared', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_base', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_beheading', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_efficiency', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_experience', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_flame', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_looting', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_recursive', 'skills:magician', true);
    restrict(event, 'vitalize:pylon_speed', 'skills:magician', true);
    restrict(event, 'vitalize:soul_revitalizer', 'skills:magician', true);
});