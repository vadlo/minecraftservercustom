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
    restrict(event, 'orpheus:apollos_son', 'skills:magician', true);
    restrict(event, 'orpheus:aristotles_nicomachean_ethics_scroll_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:brotoi_nectar', 'skills:magician', true);
    restrict(event, 'orpheus:brotoi_palladium', 'skills:magician', true);
    restrict(event, 'orpheus:calliope_poem_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:calliopes_love', 'skills:magician', true);
    restrict(event, 'orpheus:clean_cow_gut', 'skills:magician', true);
    restrict(event, 'orpheus:cooked_cow_gut', 'skills:magician', true);
    restrict(event, 'orpheus:cow_gut', 'skills:magician', true);
    restrict(event, 'orpheus:deepslate_tears_of_hades_ore', 'skills:magician', true);
    restrict(event, 'orpheus:epiphany_table', 'skills:magician', true);
    restrict(event, 'orpheus:hellenic_codex', 'skills:magician', true);
    restrict(event, 'orpheus:hephaestus_armor_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:hephaestus_boots', 'skills:magician', true);
    restrict(event, 'orpheus:hephaestus_chestplate', 'skills:magician', true);
    restrict(event, 'orpheus:hephaestus_helmet', 'skills:magician', true);
    restrict(event, 'orpheus:hephaestus_leggings', 'skills:magician', true);
    restrict(event, 'orpheus:heraclitian_flux_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:heraclitian_flux_potion', 'skills:magician', true);
    restrict(event, 'orpheus:homers_the_iliad_scroll_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:homers_the_odyssey_scroll_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:lyre', 'skills:magician', true);
    restrict(event, 'orpheus:moly_herb', 'skills:magician', true);
    restrict(event, 'orpheus:mythos_block', 'skills:magician', true);
    restrict(event, 'orpheus:nectar_seed', 'skills:magician', true);
    restrict(event, 'orpheus:orpheus_lyre', 'skills:magician', true);
    restrict(event, 'orpheus:palladium_wooden_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:pandoras_pithos', 'skills:magician', true);
    restrict(event, 'orpheus:pegasus_feather', 'skills:magician', true);
    restrict(event, 'orpheus:pegasus_feathers_block', 'skills:magician', true);
    restrict(event, 'orpheus:plain_string', 'skills:magician', true);
    restrict(event, 'orpheus:platos_republic_scroll_fragment', 'skills:magician', true);
    restrict(event, 'orpheus:stoic_meditative_stone', 'skills:magician', true);
    restrict(event, 'orpheus:tears_bow', 'skills:magician', true);
    restrict(event, 'orpheus:tears_of_hades', 'skills:magician', true);
    restrict(event, 'orpheus:tears_of_hades_block', 'skills:magician', true);
    restrict(event, 'orpheus:tears_of_hades_ore', 'skills:magician', true);
    restrict(event, 'orpheus:thucydides_peloponnesian_war_scroll_fragment', 'skills:magician', true);
});