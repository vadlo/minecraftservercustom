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
    restrict(event, 'hexlink:big_bag', 'skills:magician', true);
    restrict(event, 'hexlink:big_tablet', 'skills:magician', true);
    restrict(event, 'hexlink:crystal', 'skills:magician', true);
    restrict(event, 'hexlink:focus_collar', 'skills:magician', true);
    restrict(event, 'hexlink:haunted_crystal', 'skills:magician', true);
    restrict(event, 'hexlink:medium_bag', 'skills:magician', true);
    restrict(event, 'hexlink:mixed_pigment', 'skills:magician', true);
    restrict(event, 'hexlink:philosophical_crystal', 'skills:magician', true);
    restrict(event, 'hexlink:small_bag', 'skills:magician', true);
    restrict(event, 'hexlink:special_staff', 'skills:magician', true);
    restrict(event, 'hexlink:spirit', 'skills:magician', true);
    restrict(event, 'hexlink:tablet', 'skills:magician', true);
    restrict(event, 'hexlink:upgraded_book', 'skills:magician', true);
    restrict(event, 'hexlink:vortex', 'skills:magician', true);
});