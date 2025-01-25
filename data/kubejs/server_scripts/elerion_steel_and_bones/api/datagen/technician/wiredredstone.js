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
    restrict(event, 'wiredredstone:black_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:black_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:blue_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:blue_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:brown_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:brown_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:cyan_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:cyan_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:ender_redstone_mixture', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_and', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_diode', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_nand', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_nor', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_not', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_or', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_projector_simple', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_repeater', 'skills:technician', true);
    restrict(event, 'wiredredstone:gate_rs_latch', 'skills:technician', true);
    restrict(event, 'wiredredstone:gray_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:gray_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:green_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:green_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:light_blue_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:light_blue_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:light_gray_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:light_gray_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:lime_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:lime_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:magenta_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:magenta_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:obsidian_stick', 'skills:technician', true);
    restrict(event, 'wiredredstone:orange_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:orange_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:pink_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:pink_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:projection_viewer', 'skills:technician', true);
    restrict(event, 'wiredredstone:purple_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:purple_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:red_alloy_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:red_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:red_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_alloy_ingot', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_anode', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_assembler', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_cathode', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_delay_line', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_inverting_cathode', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_projector_cathode', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_projector_torch', 'skills:technician', true);
    restrict(event, 'wiredredstone:redstone_wire_plate', 'skills:technician', true);
    restrict(event, 'wiredredstone:stone_plate', 'skills:technician', true);
    restrict(event, 'wiredredstone:white_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:white_insulated_wire', 'skills:technician', true);
    restrict(event, 'wiredredstone:yellow_bundled_cable', 'skills:technician', true);
    restrict(event, 'wiredredstone:yellow_insulated_wire', 'skills:technician', true);
});