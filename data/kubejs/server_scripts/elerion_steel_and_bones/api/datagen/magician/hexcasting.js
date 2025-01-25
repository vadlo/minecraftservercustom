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
    restrict(event, 'hexcasting:abacus', 'skills:magician', true);
    restrict(event, 'hexcasting:acacia_staff', 'skills:magician', true);
    restrict(event, 'hexcasting:akashic_bookshelf', 'skills:magician', true);
    restrict(event, 'hexcasting:akashic_connector', 'skills:magician', true);
    restrict(event, 'hexcasting:akashic_record', 'skills:magician', true);
    restrict(event, 'hexcasting:amethyst_dust', 'skills:magician', true);
    restrict(event, 'hexcasting:amethyst_dust_block', 'skills:magician', true);
    restrict(event, 'hexcasting:amethyst_edified_leaves', 'skills:magician', true);
    restrict(event, 'hexcasting:amethyst_sconce', 'skills:magician', true);
    restrict(event, 'hexcasting:amethyst_tiles', 'skills:magician', true);
    restrict(event, 'hexcasting:ancient_scroll_paper', 'skills:magician', true);
    restrict(event, 'hexcasting:ancient_scroll_paper_lantern', 'skills:magician', true);
    restrict(event, 'hexcasting:artifact', 'skills:magician', true);
    restrict(event, 'hexcasting:aventurine_edified_leaves', 'skills:magician', true);
    restrict(event, 'hexcasting:battery', 'skills:magician', true);
    restrict(event, 'hexcasting:birch_staff', 'skills:magician', true);
    restrict(event, 'hexcasting:charged_amethyst', 'skills:magician', true);
    restrict(event, 'hexcasting:citrine_edified_leaves', 'skills:magician', true);
    restrict(event, 'hexcasting:conjured', 'skills:magician', true);
    restrict(event, 'hexcasting:conjured_block', 'skills:magician', true);
    restrict(event, 'hexcasting:creative_unlocker', 'skills:magician', true);
    restrict(event, 'hexcasting:crimson_staff', 'skills:magician', true);
    restrict(event, 'hexcasting:cypher', 'skills:magician', true);
    restrict(event, 'hexcasting:dark_oak_staff', 'skills:magician', true);
    restrict(event, 'hexcasting:directrix_redstone', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_black', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_blue', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_brown', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_cyan', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_gray', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_green', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_light_blue', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_light_gray', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_lime', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_magenta', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_orange', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_pink', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_purple', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_red', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_white', 'skills:magician', true);
    restrict(event, 'hexcasting:dye_colorizer_yellow', 'skills:magician', true);
    restrict(event, 'hexcasting:empty_directrix', 'skills:magician', true);
    restrict(event, 'hexcasting:empty_impetus', 'skills:magician', true);
    restrict(event, 'hexcasting:focus', 'skills:magician', true);
    restrict(event, 'hexcasting:impetus_look', 'skills:magician', true);
    restrict(event, 'hexcasting:impetus_rightclick', 'skills:magician', true);
    restrict(event, 'hexcasting:impetus_storedplayer', 'skills:magician', true);
    restrict(event, 'hexcasting:jeweler_hammer', 'skills:magician', true);
    restrict(event, 'hexcasting:jungle_staff', 'skills:magician', true);
    restrict(event, 'hexcasting:lens', 'skills:magician', true);
    restrict(event, 'hexcasting:lore_fragment', 'skills:magician', true);
    restrict(event, 'hexcasting:oak_staff', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_agender', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_aroace', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_aromantic', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_asexual', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_bisexual', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_demiboy', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_demigirl', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_gay', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_genderfluid', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_genderqueer', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_intersex', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_lesbian', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_nonbinary', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_pansexual', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_plural', 'skills:magician', true);
    restrict(event, 'hexcasting:pride_colorizer_transgender', 'skills:magician', true);
    restrict(event, 'hexcasting:scroll', 'skills:magician', true);
    restrict(event, 'hexcasting:scroll_medium', 'skills:magician', true);
    restrict(event, 'hexcasting:scroll_paper', 'skills:magician', true);
    restrict(event, 'hexcasting:scroll_paper_lantern', 'skills:magician', true);
    restrict(event, 'hexcasting:scroll_small', 'skills:magician', true);
    restrict(event, 'hexcasting:slate', 'skills:magician', true);
    restrict(event, 'hexcasting:slate_block', 'skills:magician', true);
    restrict(event, 'hexcasting:spellbook', 'skills:magician', true);
    restrict(event, 'hexcasting:spruce_staff', 'skills:magician', true);
    restrict(event, 'hexcasting:sub_sandwich', 'skills:magician', true);
    restrict(event, 'hexcasting:trinket', 'skills:magician', true);
    restrict(event, 'hexcasting:uuid_colorizer', 'skills:magician', true);
    restrict(event, 'hexcasting:warped_staff', 'skills:magician', true);
});