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
    restrict(event, 'fallenwizardsmod:dark_arcane_staff', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t1_chest', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t1_feet', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t1_head', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t1_legs', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t2_chest', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t2_feet', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t2_head', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_arcane_wizard_armor_t2_legs', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_staff', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t1_chest', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t1_feet', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t1_head', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t1_legs', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t2_chest', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t2_feet', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t2_head', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_fire_wizard_armor_t2_legs', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_staff', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t1_chest', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t1_feet', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t1_head', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t1_legs', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t2_chest', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t2_feet', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t2_head', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:dark_frost_wizard_armor_t2_legs', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:fallen_wizards_arcane_spell_book', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:fallen_wizards_fire_spell_book', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:fallen_wizards_frost_spell_book', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:netherite_dark_arcane_staff', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:netherite_dark_fire_staff', 'skills:magician', true);
    restrict(event, 'fallenwizardsmod:netherite_dark_frost_staff', 'skills:magician', true);
});