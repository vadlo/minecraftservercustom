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
    restrict(event, 'advancedgenetics:antiplasmid', 'skills:technician', true);
    restrict(event, 'advancedgenetics:bat_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:bat_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:bee_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:bee_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:blaze_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:blaze_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:blood_purifier', 'skills:technician', true);
    restrict(event, 'advancedgenetics:cat_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:cat_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:cave_spider_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:cave_spider_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:cell_analyzer', 'skills:technician', true);
    restrict(event, 'advancedgenetics:chicken_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:chicken_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:cow_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:cow_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:creeper_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:creeper_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:crowbar', 'skills:technician', true);
    restrict(event, 'advancedgenetics:diamond_scalpel', 'skills:technician', true);
    restrict(event, 'advancedgenetics:dna_decrypter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:dna_extractor', 'skills:technician', true);
    restrict(event, 'advancedgenetics:dna_helix', 'skills:technician', true);
    restrict(event, 'advancedgenetics:dragon_health_crystal', 'skills:technician', true);
    restrict(event, 'advancedgenetics:drowned_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:drowned_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:ender_dragon_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:ender_dragon_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:enderman_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:enderman_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:frog_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:frog_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:ghast_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:ghast_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:guardian_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:guardian_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:horse_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:horse_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:husk_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:husk_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:iron_golem_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:iron_golem_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:magma_cube_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:magma_cube_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:metal_scalpel', 'skills:technician', true);
    restrict(event, 'advancedgenetics:mooshroom_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:mooshroom_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:netherite_scalpel', 'skills:technician', true);
    restrict(event, 'advancedgenetics:ocelot_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:ocelot_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:overclocker', 'skills:technician', true);
    restrict(event, 'advancedgenetics:panda_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:panda_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:phantom_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:phantom_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:pig_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:pig_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:plasmid', 'skills:technician', true);
    restrict(event, 'advancedgenetics:plasmid_infuser', 'skills:technician', true);
    restrict(event, 'advancedgenetics:plasmid_injector', 'skills:technician', true);
    restrict(event, 'advancedgenetics:polar_bear_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:polar_bear_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:rabbit_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:rabbit_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:sheep_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:sheep_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:shulker_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:shulker_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:silverfish_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:silverfish_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:skeleton_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:skeleton_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:slime_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:slime_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:spider_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:spider_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:squid_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:squid_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:stray_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:stray_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:syringe', 'skills:technician', true);
    restrict(event, 'advancedgenetics:villager_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:villager_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:warden_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:warden_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:wither_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:wither_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:wither_skeleton_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:wither_skeleton_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:wolf_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:wolf_matter', 'skills:technician', true);
    restrict(event, 'advancedgenetics:zombie_cell', 'skills:technician', true);
    restrict(event, 'advancedgenetics:zombie_matter', 'skills:technician', true);
});