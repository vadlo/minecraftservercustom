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
    restrict(event, 'rootsclassic:acacia_bark', 'skills:magician', true);
    restrict(event, 'rootsclassic:accelerator_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:aesthetic_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:altar', 'skills:magician', true);
    restrict(event, 'rootsclassic:attuned_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:bark_knife', 'skills:magician', true);
    restrict(event, 'rootsclassic:birch_bark', 'skills:magician', true);
    restrict(event, 'rootsclassic:blackcurrant', 'skills:magician', true);
    restrict(event, 'rootsclassic:brazier', 'skills:magician', true);
    restrict(event, 'rootsclassic:charged_runic_focus', 'skills:magician', true);
    restrict(event, 'rootsclassic:crystal_staff', 'skills:magician', true);
    restrict(event, 'rootsclassic:dark_oak_bark', 'skills:magician', true);
    restrict(event, 'rootsclassic:dragons_eye', 'skills:magician', true);
    restrict(event, 'rootsclassic:elderberry', 'skills:magician', true);
    restrict(event, 'rootsclassic:engraved_blade', 'skills:magician', true);
    restrict(event, 'rootsclassic:entangler_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:flare_orchid', 'skills:magician', true);
    restrict(event, 'rootsclassic:fruit_salad', 'skills:magician', true);
    restrict(event, 'rootsclassic:grower_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:growth_powder', 'skills:magician', true);
    restrict(event, 'rootsclassic:healer_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:healing_poultice', 'skills:magician', true);
    restrict(event, 'rootsclassic:igniter_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:imbuer', 'skills:magician', true);
    restrict(event, 'rootsclassic:infernal_bulb', 'skills:magician', true);
    restrict(event, 'rootsclassic:jungle_bark', 'skills:magician', true);
    restrict(event, 'rootsclassic:living_axe', 'skills:magician', true);
    restrict(event, 'rootsclassic:living_hoe', 'skills:magician', true);
    restrict(event, 'rootsclassic:living_pickaxe', 'skills:magician', true);
    restrict(event, 'rootsclassic:living_shovel', 'skills:magician', true);
    restrict(event, 'rootsclassic:living_sword', 'skills:magician', true);
    restrict(event, 'rootsclassic:mana_research_icon', 'skills:magician', true);
    restrict(event, 'rootsclassic:midnight_bloom', 'skills:magician', true);
    restrict(event, 'rootsclassic:mortar', 'skills:magician', true);
    restrict(event, 'rootsclassic:mundane_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:mutating_powder', 'skills:magician', true);
    restrict(event, 'rootsclassic:nightshade', 'skills:magician', true);
    restrict(event, 'rootsclassic:oak_bark', 'skills:magician', true);
    restrict(event, 'rootsclassic:old_root', 'skills:magician', true);
    restrict(event, 'rootsclassic:pestle', 'skills:magician', true);
    restrict(event, 'rootsclassic:radiant_daisy', 'skills:magician', true);
    restrict(event, 'rootsclassic:redcurrant', 'skills:magician', true);
    restrict(event, 'rootsclassic:repulsor_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:rooty_stew', 'skills:magician', true);
    restrict(event, 'rootsclassic:runic_focus', 'skills:magician', true);
    restrict(event, 'rootsclassic:runic_tablet', 'skills:magician', true);
    restrict(event, 'rootsclassic:spell_powder', 'skills:magician', true);
    restrict(event, 'rootsclassic:spruce_bark', 'skills:magician', true);
    restrict(event, 'rootsclassic:staff', 'skills:magician', true);
    restrict(event, 'rootsclassic:sylvan_boots', 'skills:magician', true);
    restrict(event, 'rootsclassic:sylvan_hood', 'skills:magician', true);
    restrict(event, 'rootsclassic:sylvan_robe', 'skills:magician', true);
    restrict(event, 'rootsclassic:sylvan_tunic', 'skills:magician', true);
    restrict(event, 'rootsclassic:vacuum_standing_stone', 'skills:magician', true);
    restrict(event, 'rootsclassic:verdant_sprig', 'skills:magician', true);
    restrict(event, 'rootsclassic:whitecurrant', 'skills:magician', true);
    restrict(event, 'rootsclassic:wildwood_boots', 'skills:magician', true);
    restrict(event, 'rootsclassic:wildwood_leggings', 'skills:magician', true);
    restrict(event, 'rootsclassic:wildwood_mask', 'skills:magician', true);
    restrict(event, 'rootsclassic:wildwood_plate', 'skills:magician', true);
});