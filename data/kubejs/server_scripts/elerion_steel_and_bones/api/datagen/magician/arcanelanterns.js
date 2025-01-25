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
    restrict(event, 'arcanelanterns:boreal_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:briliant_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:cloud_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:containing_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:feral_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:lantern_maker', 'skills:magician', true);
    restrict(event, 'arcanelanterns:life_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:love_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:wailing_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:warding_lantern', 'skills:magician', true);
    restrict(event, 'arcanelanterns:withering_lantern', 'skills:magician', true);
});