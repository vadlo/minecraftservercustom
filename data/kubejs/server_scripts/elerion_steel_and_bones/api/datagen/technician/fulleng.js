// AUTOMATIC I2JSP DATAGEN
// FOR INTERNAL USAGE FOR ELERION: STEEL 'N' BONES MODPACK

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
    restrict(event, 'fulleng:conversion_monitor', 'skills:technician', true);
    restrict(event, 'fulleng:crafting_terminal', 'skills:technician', true);
    restrict(event, 'fulleng:pattern_access_terminal', 'skills:technician', true);
    restrict(event, 'fulleng:pattern_encoding_terminal', 'skills:technician', true);
    restrict(event, 'fulleng:requester_terminal', 'skills:technician', true);
    restrict(event, 'fulleng:storage_monitor', 'skills:technician', true);
    restrict(event, 'fulleng:terminal', 'skills:technician', true);
});