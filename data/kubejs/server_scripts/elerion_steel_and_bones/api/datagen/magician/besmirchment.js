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
    restrict(event, 'besmirchment:beelzebub_spawn_egg', 'skills:magician', true);
    restrict(event, 'besmirchment:demonic_deed', 'skills:magician', true);
    restrict(event, 'besmirchment:elite_coffin', 'skills:magician', true);
    restrict(event, 'besmirchment:final_broom', 'skills:magician', true);
    restrict(event, 'besmirchment:lich_gem', 'skills:magician', true);
    restrict(event, 'besmirchment:phylactery', 'skills:magician', true);
    restrict(event, 'besmirchment:scroll_of_torment', 'skills:magician', true);
    restrict(event, 'besmirchment:vampire_sunscreen', 'skills:magician', true);
    restrict(event, 'besmirchment:werepyre_spawn_egg', 'skills:magician', true);
    restrict(event, 'besmirchment:witchy_dye', 'skills:magician', true);
});