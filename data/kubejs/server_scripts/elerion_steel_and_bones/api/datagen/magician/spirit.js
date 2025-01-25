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
    restrict(event, 'spirit:broken_spawner', 'skills:magician', true);
    restrict(event, 'spirit:compressed_soul_powder_block', 'skills:magician', true);
    restrict(event, 'spirit:compressed_soul_sand', 'skills:magician', true);
    restrict(event, 'spirit:crude_soul_crystal', 'skills:magician', true);
    restrict(event, 'spirit:crystal_pedestal', 'skills:magician', true);
    restrict(event, 'spirit:pedestal', 'skills:magician', true);
    restrict(event, 'spirit:soul_cage', 'skills:magician', true);
    restrict(event, 'spirit:soul_crystal', 'skills:magician', true);
    restrict(event, 'spirit:soul_crystal_shard', 'skills:magician', true);
    restrict(event, 'spirit:soul_pedestal', 'skills:magician', true);
    restrict(event, 'spirit:soul_powder', 'skills:magician', true);
    restrict(event, 'spirit:soul_powder_block', 'skills:magician', true);
    restrict(event, 'spirit:soul_slate', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_axe', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_block', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_bow', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_hoe', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_ingot', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_pickaxe', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_shovel', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_sword', 'skills:magician', true);
    restrict(event, 'spirit:soul_steel_wand', 'skills:magician', true);
});