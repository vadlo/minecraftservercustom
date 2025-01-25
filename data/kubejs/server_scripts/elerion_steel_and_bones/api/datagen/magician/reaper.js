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
    restrict(event, 'reaper:reaper_generator', 'skills:magician', true);
    restrict(event, 'reaper:rune_block_beastia', 'skills:magician', true);
    restrict(event, 'reaper:rune_block_dilato', 'skills:magician', true);
    restrict(event, 'reaper:rune_block_duplici', 'skills:magician', true);
    restrict(event, 'reaper:rune_block_efficacia', 'skills:magician', true);
    restrict(event, 'reaper:rune_block_hostilis', 'skills:magician', true);
    restrict(event, 'reaper:rune_block_possessio', 'skills:magician', true);
    restrict(event, 'reaper:rune_dilato', 'skills:magician', true);
    restrict(event, 'reaper:rune_humano', 'skills:magician', true);
    restrict(event, 'reaper:rune_obitus', 'skills:magician', true);
    restrict(event, 'reaper:rune_reficiat', 'skills:magician', true);
    restrict(event, 'reaper:rune_spiritus', 'skills:magician', true);
    restrict(event, 'reaper:rune_velocitas', 'skills:magician', true);
    restrict(event, 'reaper:soul_beacon', 'skills:magician', true);
    restrict(event, 'reaper:soul_catalyst', 'skills:magician', true);
});