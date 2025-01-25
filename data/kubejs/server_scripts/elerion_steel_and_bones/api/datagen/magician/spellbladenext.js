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
    restrict(event, 'spellbladenext:acrobat_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:aetherfire_chest', 'skills:magician', true);
    restrict(event, 'spellbladenext:aetherfire_feet', 'skills:magician', true);
    restrict(event, 'spellbladenext:aetherfire_head', 'skills:magician', true);
    restrict(event, 'spellbladenext:aetherfire_legs', 'skills:magician', true);
    restrict(event, 'spellbladenext:assassin_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:blade_arcane', 'skills:magician', true);
    restrict(event, 'spellbladenext:blade_fire', 'skills:magician', true);
    restrict(event, 'spellbladenext:blade_frost', 'skills:magician', true);
    restrict(event, 'spellbladenext:claymore_arcane', 'skills:magician', true);
    restrict(event, 'spellbladenext:claymore_fire', 'skills:magician', true);
    restrict(event, 'spellbladenext:claymore_frost', 'skills:magician', true);
    restrict(event, 'spellbladenext:deathchill_chest', 'skills:magician', true);
    restrict(event, 'spellbladenext:deathchill_feet', 'skills:magician', true);
    restrict(event, 'spellbladenext:deathchill_head', 'skills:magician', true);
    restrict(event, 'spellbladenext:deathchill_legs', 'skills:magician', true);
    restrict(event, 'spellbladenext:debug', 'skills:magician', true);
    restrict(event, 'spellbladenext:duelist_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:explosion', 'skills:magician', true);
    restrict(event, 'spellbladenext:firestarter', 'skills:magician', true);
    restrict(event, 'spellbladenext:frostblade', 'skills:magician', true);
    restrict(event, 'spellbladenext:frostborn_gavel', 'skills:magician', true);
    restrict(event, 'spellbladenext:hexblade', 'skills:magician', true);
    restrict(event, 'spellbladenext:holysymbol', 'skills:magician', true);
    restrict(event, 'spellbladenext:icicle', 'skills:magician', true);
    restrict(event, 'spellbladenext:icicle2', 'skills:magician', true);
    restrict(event, 'spellbladenext:juggtwo_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:laser_arrow', 'skills:magician', true);
    restrict(event, 'spellbladenext:laser_bow', 'skills:magician', true);
    restrict(event, 'spellbladenext:magus_chest', 'skills:magician', true);
    restrict(event, 'spellbladenext:magus_feet', 'skills:magician', true);
    restrict(event, 'spellbladenext:magus_head', 'skills:magician', true);
    restrict(event, 'spellbladenext:magus_legs', 'skills:magician', true);
    restrict(event, 'spellbladenext:monkeystaff', 'skills:magician', true);
    restrict(event, 'spellbladenext:mulberry', 'skills:magician', true);
    restrict(event, 'spellbladenext:null', 'skills:magician', true);
    restrict(event, 'spellbladenext:nullifying_arcane_totem', 'skills:magician', true);
    restrict(event, 'spellbladenext:nullifying_fire_totem', 'skills:magician', true);
    restrict(event, 'spellbladenext:nullifying_frost_totem', 'skills:magician', true);
    restrict(event, 'spellbladenext:offering', 'skills:magician', true);
    restrict(event, 'spellbladenext:orb_arcane', 'skills:magician', true);
    restrict(event, 'spellbladenext:orb_arcane_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:orb_fire', 'skills:magician', true);
    restrict(event, 'spellbladenext:orb_fire_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:orb_frost', 'skills:magician', true);
    restrict(event, 'spellbladenext:orb_frost_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:prismaticeffigy', 'skills:magician', true);
    restrict(event, 'spellbladenext:realexplosion', 'skills:magician', true);
    restrict(event, 'spellbladenext:rimeblaze_chest', 'skills:magician', true);
    restrict(event, 'spellbladenext:rimeblaze_feet', 'skills:magician', true);
    restrict(event, 'spellbladenext:rimeblaze_head', 'skills:magician', true);
    restrict(event, 'spellbladenext:rimeblaze_legs', 'skills:magician', true);
    restrict(event, 'spellbladenext:rune_dagger', 'skills:magician', true);
    restrict(event, 'spellbladenext:runeblazing_chest', 'skills:magician', true);
    restrict(event, 'spellbladenext:runeblazing_feet', 'skills:magician', true);
    restrict(event, 'spellbladenext:runeblazing_head', 'skills:magician', true);
    restrict(event, 'spellbladenext:runeblazing_ingot', 'skills:magician', true);
    restrict(event, 'spellbladenext:runeblazing_legs', 'skills:magician', true);
    restrict(event, 'spellbladenext:runefrosted_chest', 'skills:magician', true);
    restrict(event, 'spellbladenext:runefrosted_feet', 'skills:magician', true);
    restrict(event, 'spellbladenext:runefrosted_head', 'skills:magician', true);
    restrict(event, 'spellbladenext:runefrosted_ingot', 'skills:magician', true);
    restrict(event, 'spellbladenext:runefrosted_legs', 'skills:magician', true);
    restrict(event, 'spellbladenext:runegleaming_chest', 'skills:magician', true);
    restrict(event, 'spellbladenext:runegleaming_feet', 'skills:magician', true);
    restrict(event, 'spellbladenext:runegleaming_head', 'skills:magician', true);
    restrict(event, 'spellbladenext:runegleaming_ingot', 'skills:magician', true);
    restrict(event, 'spellbladenext:runegleaming_legs', 'skills:magician', true);
    restrict(event, 'spellbladenext:spellblade', 'skills:magician', true);
    restrict(event, 'spellbladenext:spellblade_arcane_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:spellblade_fire_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:spellblade_frost_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:starforge', 'skills:magician', true);
    restrict(event, 'spellbladenext:unarmed', 'skills:magician', true);
    restrict(event, 'spellbladenext:void', 'skills:magician', true);
    restrict(event, 'spellbladenext:warriorpolearm_spell_book', 'skills:magician', true);
    restrict(event, 'spellbladenext:warriortwo_spell_book', 'skills:magician', true);
});