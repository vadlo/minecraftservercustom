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
    restrict(event, 'bwplus:black_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:black_dog_spawn_egg', 'skills:magician', true);
    restrict(event, 'bwplus:black_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:black_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:bloodroot_item', 'skills:magician', true);
    restrict(event, 'bwplus:blue_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:blue_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:blue_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:brown_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:brown_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:brown_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:cambion_spawn_egg', 'skills:magician', true);
    restrict(event, 'bwplus:cut_silver_block', 'skills:magician', true);
    restrict(event, 'bwplus:cut_silver_slab', 'skills:magician', true);
    restrict(event, 'bwplus:cut_silver_stairs', 'skills:magician', true);
    restrict(event, 'bwplus:cyan_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:cyan_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:cyan_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:deaths_footwear', 'skills:magician', true);
    restrict(event, 'bwplus:deaths_hood', 'skills:magician', true);
    restrict(event, 'bwplus:deaths_robes', 'skills:magician', true);
    restrict(event, 'bwplus:dragonblood_staff', 'skills:magician', true);
    restrict(event, 'bwplus:dragonfruit', 'skills:magician', true);
    restrict(event, 'bwplus:embergrass', 'skills:magician', true);
    restrict(event, 'bwplus:gold_goblet', 'skills:magician', true);
    restrict(event, 'bwplus:gold_standing_candelabra', 'skills:magician', true);
    restrict(event, 'bwplus:gray_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:gray_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:gray_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:green_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:green_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:green_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:leshon_skull', 'skills:magician', true);
    restrict(event, 'bwplus:light_blue_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:light_blue_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:light_blue_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:light_gray_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:light_gray_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:light_gray_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:lime_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:lime_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:lime_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:magenta_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:magenta_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:magenta_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:mimic_chest', 'skills:magician', true);
    restrict(event, 'bwplus:moonlight_infusion', 'skills:magician', true);
    restrict(event, 'bwplus:mutandis', 'skills:magician', true);
    restrict(event, 'bwplus:mutandis_brew', 'skills:magician', true);
    restrict(event, 'bwplus:netherite_goblet', 'skills:magician', true);
    restrict(event, 'bwplus:netherite_standing_candelabra', 'skills:magician', true);
    restrict(event, 'bwplus:niffler_spawn_egg', 'skills:magician', true);
    restrict(event, 'bwplus:orange_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:orange_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:orange_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:phoenix_spawn_egg', 'skills:magician', true);
    restrict(event, 'bwplus:pink_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:pink_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:pink_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:purple_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:purple_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:purple_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:red_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:red_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:red_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:rgb_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:rgb_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:silver_goblet', 'skills:magician', true);
    restrict(event, 'bwplus:silver_slab', 'skills:magician', true);
    restrict(event, 'bwplus:silver_stairs', 'skills:magician', true);
    restrict(event, 'bwplus:silver_standing_candelabra', 'skills:magician', true);
    restrict(event, 'bwplus:soul', 'skills:magician', true);
    restrict(event, 'bwplus:statue_baphomet_blackstone', 'skills:magician', true);
    restrict(event, 'bwplus:statue_baphomet_gold', 'skills:magician', true);
    restrict(event, 'bwplus:statue_baphomet_netherbrick', 'skills:magician', true);
    restrict(event, 'bwplus:statue_herne_blackstone', 'skills:magician', true);
    restrict(event, 'bwplus:statue_herne_gold', 'skills:magician', true);
    restrict(event, 'bwplus:statue_herne_netherbrick', 'skills:magician', true);
    restrict(event, 'bwplus:statue_leonard_blackstone', 'skills:magician', true);
    restrict(event, 'bwplus:statue_leonard_gold', 'skills:magician', true);
    restrict(event, 'bwplus:statue_leonard_netherbrick', 'skills:magician', true);
    restrict(event, 'bwplus:statue_lilith_blackstone', 'skills:magician', true);
    restrict(event, 'bwplus:statue_lilith_gold', 'skills:magician', true);
    restrict(event, 'bwplus:statue_lilith_netherbrick', 'skills:magician', true);
    restrict(event, 'bwplus:unicorn_blood', 'skills:magician', true);
    restrict(event, 'bwplus:unicorn_spawn_egg', 'skills:magician', true);
    restrict(event, 'bwplus:vampire_knife', 'skills:magician', true);
    restrict(event, 'bwplus:white_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:white_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:white_witch_wool_carpet', 'skills:magician', true);
    restrict(event, 'bwplus:yellow_blackstone_coffin', 'skills:magician', true);
    restrict(event, 'bwplus:yellow_witch_wool', 'skills:magician', true);
    restrict(event, 'bwplus:yellow_witch_wool_carpet', 'skills:magician', true);
});