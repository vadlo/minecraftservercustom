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
    restrict(event, 'wizards:arcane_robe_chest', 'skills:magician', true);
    restrict(event, 'wizards:arcane_robe_feet', 'skills:magician', true);
    restrict(event, 'wizards:arcane_robe_head', 'skills:magician', true);
    restrict(event, 'wizards:arcane_robe_legs', 'skills:magician', true);
    restrict(event, 'wizards:arcane_spell_book', 'skills:magician', true);
    restrict(event, 'wizards:fire_robe_chest', 'skills:magician', true);
    restrict(event, 'wizards:fire_robe_feet', 'skills:magician', true);
    restrict(event, 'wizards:fire_robe_head', 'skills:magician', true);
    restrict(event, 'wizards:fire_robe_legs', 'skills:magician', true);
    restrict(event, 'wizards:fire_spell_book', 'skills:magician', true);
    restrict(event, 'wizards:frost_robe_chest', 'skills:magician', true);
    restrict(event, 'wizards:frost_robe_feet', 'skills:magician', true);
    restrict(event, 'wizards:frost_robe_head', 'skills:magician', true);
    restrict(event, 'wizards:frost_robe_legs', 'skills:magician', true);
    restrict(event, 'wizards:frost_spell_book', 'skills:magician', true);
    restrict(event, 'wizards:staff_arcane', 'skills:magician', true);
    restrict(event, 'wizards:staff_crystal_arcane', 'skills:magician', true);
    restrict(event, 'wizards:staff_fire', 'skills:magician', true);
    restrict(event, 'wizards:staff_frost', 'skills:magician', true);
    restrict(event, 'wizards:staff_netherite_arcane', 'skills:magician', true);
    restrict(event, 'wizards:staff_netherite_fire', 'skills:magician', true);
    restrict(event, 'wizards:staff_netherite_frost', 'skills:magician', true);
    restrict(event, 'wizards:staff_ruby_fire', 'skills:magician', true);
    restrict(event, 'wizards:staff_smaragdant_frost', 'skills:magician', true);
    restrict(event, 'wizards:wand_arcane', 'skills:magician', true);
    restrict(event, 'wizards:wand_fire', 'skills:magician', true);
    restrict(event, 'wizards:wand_frost', 'skills:magician', true);
    restrict(event, 'wizards:wand_netherite_arcane', 'skills:magician', true);
    restrict(event, 'wizards:wand_netherite_fire', 'skills:magician', true);
    restrict(event, 'wizards:wand_netherite_frost', 'skills:magician', true);
    restrict(event, 'wizards:wand_novice', 'skills:magician', true);
    restrict(event, 'wizards:wizard_robe_chest', 'skills:magician', true);
    restrict(event, 'wizards:wizard_robe_feet', 'skills:magician', true);
    restrict(event, 'wizards:wizard_robe_head', 'skills:magician', true);
    restrict(event, 'wizards:wizard_robe_legs', 'skills:magician', true);
});