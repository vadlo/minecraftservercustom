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
    restrict(event, 'alchemistry:atomizer', 'skills:technician', true);
    restrict(event, 'alchemistry:combiner', 'skills:technician', true);
    restrict(event, 'alchemistry:compactor', 'skills:technician', true);
    restrict(event, 'alchemistry:dissolver', 'skills:technician', true);
    restrict(event, 'alchemistry:fission_chamber_controller', 'skills:technician', true);
    restrict(event, 'alchemistry:fission_core', 'skills:technician', true);
    restrict(event, 'alchemistry:fusion_chamber_controller', 'skills:technician', true);
    restrict(event, 'alchemistry:fusion_core', 'skills:technician', true);
    restrict(event, 'alchemistry:liquifier', 'skills:technician', true);
    restrict(event, 'alchemistry:reactor_casing', 'skills:technician', true);
    restrict(event, 'alchemistry:reactor_energy', 'skills:technician', true);
    restrict(event, 'alchemistry:reactor_glass', 'skills:technician', true);
    restrict(event, 'alchemistry:reactor_input', 'skills:technician', true);
    restrict(event, 'alchemistry:reactor_output', 'skills:technician', true);
});