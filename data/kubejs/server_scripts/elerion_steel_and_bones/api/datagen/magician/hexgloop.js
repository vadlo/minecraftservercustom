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
    restrict(event, 'hexgloop:accelerator', 'skills:magician', true);
    restrict(event, 'hexgloop:bee_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:blaze_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:bone_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:candy_cane_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:carrot_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:casters_coin', 'skills:magician', true);
    restrict(event, 'hexgloop:casting_frog', 'skills:magician', true);
    restrict(event, 'hexgloop:casting_potion', 'skills:magician', true);
    restrict(event, 'hexgloop:casting_ring', 'skills:magician', true);
    restrict(event, 'hexgloop:celestial_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:charged_amethyst_block', 'skills:magician', true);
    restrict(event, 'hexgloop:christmas_tree_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:conjured_redstone', 'skills:magician', true);
    restrict(event, 'hexgloop:coping_saw', 'skills:magician', true);
    restrict(event, 'hexgloop:copper_pen_fidget', 'skills:magician', true);
    restrict(event, 'hexgloop:cosmetic_energizer', 'skills:magician', true);
    restrict(event, 'hexgloop:covered_spellbook', 'skills:magician', true);
    restrict(event, 'hexgloop:dreidel_fidget', 'skills:magician', true);
    restrict(event, 'hexgloop:empty_jar', 'skills:magician', true);
    restrict(event, 'hexgloop:enlightenment_bridge', 'skills:magician', true);
    restrict(event, 'hexgloop:enlightenment_gate', 'skills:magician', true);
    restrict(event, 'hexgloop:essence_stone', 'skills:magician', true);
    restrict(event, 'hexgloop:fake_spellbook_for_rei', 'skills:magician', true);
    restrict(event, 'hexgloop:focal_pendant', 'skills:magician', true);
    restrict(event, 'hexgloop:focal_ring', 'skills:magician', true);
    restrict(event, 'hexgloop:ghost_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:gloop', 'skills:magician', true);
    restrict(event, 'hexgloop:gloop_dye', 'skills:magician', true);
    restrict(event, 'hexgloop:gloop_energizer', 'skills:magician', true);
    restrict(event, 'hexgloop:gloopifact', 'skills:magician', true);
    restrict(event, 'hexgloop:gloopy_slate_chest', 'skills:magician', true);
    restrict(event, 'hexgloop:hand_mirror', 'skills:magician', true);
    restrict(event, 'hexgloop:heart_pigment', 'skills:magician', true);
    restrict(event, 'hexgloop:hex_blade', 'skills:magician', true);
    restrict(event, 'hexgloop:hex_pickaxe', 'skills:magician', true);
    restrict(event, 'hexgloop:hex_snack', 'skills:magician', true);
    restrict(event, 'hexgloop:hexxy_plush', 'skills:magician', true);
    restrict(event, 'hexgloop:hexxyos', 'skills:magician', true);
    restrict(event, 'hexgloop:ice_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:inventorty', 'skills:magician', true);
    restrict(event, 'hexgloop:library_card', 'skills:magician', true);
    restrict(event, 'hexgloop:longinus_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:lovely_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:menorah_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:mept_log', 'skills:magician', true);
    restrict(event, 'hexgloop:mind_jar', 'skills:magician', true);
    restrict(event, 'hexgloop:mind_pedestal', 'skills:magician', true);
    restrict(event, 'hexgloop:mirror_pedestal', 'skills:magician', true);
    restrict(event, 'hexgloop:multi_focus', 'skills:magician', true);
    restrict(event, 'hexgloop:owl_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:pedestal', 'skills:magician', true);
    restrict(event, 'hexgloop:pumpkin_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:quartz_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:rainbow_amogus_fidget', 'skills:magician', true);
    restrict(event, 'hexgloop:rod_staff', 'skills:magician', true);
    restrict(event, 'hexgloop:script', 'skills:magician', true);
    restrict(event, 'hexgloop:sentinel_bed', 'skills:magician', true);
    restrict(event, 'hexgloop:slate_bowl', 'skills:magician', true);
    restrict(event, 'hexgloop:slate_chest', 'skills:magician', true);
    restrict(event, 'hexgloop:slate_lamp', 'skills:magician', true);
    restrict(event, 'hexgloop:slate_loader', 'skills:magician', true);
    restrict(event, 'hexgloop:syncetrix', 'skills:magician', true);
    restrict(event, 'hexgloop:synchronous_gloop', 'skills:magician', true);
    restrict(event, 'hexgloop:thinking_carpet', 'skills:magician', true);
    restrict(event, 'hexgloop:wave_locus', 'skills:magician', true);
    restrict(event, 'hexgloop:wither_staff', 'skills:magician', true);
});