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
    restrict(event, 'jewelry:citrine', 'skills:magician', true);
    restrict(event, 'jewelry:citrine_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:citrine_ring', 'skills:magician', true);
    restrict(event, 'jewelry:copper_ring', 'skills:magician', true);
    restrict(event, 'jewelry:deepslate_gem_vein', 'skills:magician', true);
    restrict(event, 'jewelry:diamond_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:emerald_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:gem_vein', 'skills:magician', true);
    restrict(event, 'jewelry:gold_ring', 'skills:magician', true);
    restrict(event, 'jewelry:iron_ring', 'skills:magician', true);
    restrict(event, 'jewelry:jade_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:jade_ring', 'skills:magician', true);
    restrict(event, 'jewelry:jewelers_kit', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_citrine_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_citrine_ring', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_jade_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_jade_ring', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_ruby_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_ruby_ring', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_sapphire_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_sapphire_ring', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_tanzanite_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_tanzanite_ring', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_topaz_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:netherite_topaz_ring', 'skills:magician', true);
    restrict(event, 'jewelry:ruby_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:ruby_ring', 'skills:magician', true);
    restrict(event, 'jewelry:sapphire_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:sapphire_ring', 'skills:magician', true);
    restrict(event, 'jewelry:tanzanite_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:tanzanite_ring', 'skills:magician', true);
    restrict(event, 'jewelry:topaz_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:topaz_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_arcane_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_arcane_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_archer_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_archer_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_attack_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_attack_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_dex_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_dex_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_fire_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_fire_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_frost_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_frost_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_healing_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_healing_ring', 'skills:magician', true);
    restrict(event, 'jewelry:unique_tank_necklace', 'skills:magician', true);
    restrict(event, 'jewelry:unique_tank_ring', 'skills:magician', true);
});