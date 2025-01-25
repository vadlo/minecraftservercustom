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
    restrict(event, 'morewizardsmod:lightning_staff', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t1_chest', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t1_feet', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t1_head', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t1_legs', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t2_chest', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t2_feet', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t2_head', 'skills:magician', true);
    restrict(event, 'morewizardsmod:lightning_wizard_armor_t2_legs', 'skills:magician', true);
    restrict(event, 'morewizardsmod:more_wizards_lightning_spell_book', 'skills:magician', true);
    restrict(event, 'morewizardsmod:more_wizards_soul_spell_book', 'skills:magician', true);
    restrict(event, 'morewizardsmod:netherite_lightning_staff', 'skills:magician', true);
    restrict(event, 'morewizardsmod:netherite_soul_staff', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_staff', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t1_chest', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t1_feet', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t1_head', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t1_legs', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t2_chest', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t2_feet', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t2_head', 'skills:magician', true);
    restrict(event, 'morewizardsmod:soul_wizard_armor_t2_legs', 'skills:magician', true);
    restrict(event, 'morewizardsmod:starforged_lightning_staff', 'skills:magician', true);
    restrict(event, 'morewizardsmod:starforged_soul_staff', 'skills:magician', true);
});