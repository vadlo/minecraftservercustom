// AUTOMATIC I2JSP DATAGEN
// FOR INTERNAL USAGE FOR ELERION: STEEL 'N' BONES MODPACK

function restrict(event, itemNskillsame, requiredStage, requiredValue) {
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
    restrict(event, 'megacells:16m_crafting_storage', 'skills:technician', true);
    restrict(event, 'megacells:1m_crafting_storage', 'skills:technician', true);
    restrict(event, 'megacells:256m_crafting_storage', 'skills:technician', true);
    restrict(event, 'megacells:4m_crafting_storage', 'skills:technician', true);
    restrict(event, 'megacells:64m_crafting_storage', 'skills:technician', true);
    restrict(event, 'megacells:bulk_cell_component', 'skills:technician', true);
    restrict(event, 'megacells:bulk_item_cell', 'skills:technician', true);
    restrict(event, 'megacells:cable_mega_pattern_provider', 'skills:technician', true);
    restrict(event, 'megacells:cell_component_16m', 'skills:technician', true);
    restrict(event, 'megacells:cell_component_1m', 'skills:technician', true);
    restrict(event, 'megacells:cell_component_256m', 'skills:technician', true);
    restrict(event, 'megacells:cell_component_4m', 'skills:technician', true);
    restrict(event, 'megacells:cell_component_64m', 'skills:technician', true);
    restrict(event, 'megacells:compression_card', 'skills:technician', true);
    restrict(event, 'megacells:decompression_module', 'skills:technician', true);
    restrict(event, 'megacells:decompression_pattern', 'skills:technician', true);
    restrict(event, 'megacells:fluid_storage_cell_16m', 'skills:technician', true);
    restrict(event, 'megacells:fluid_storage_cell_1m', 'skills:technician', true);
    restrict(event, 'megacells:fluid_storage_cell_256m', 'skills:technician', true);
    restrict(event, 'megacells:fluid_storage_cell_4m', 'skills:technician', true);
    restrict(event, 'megacells:fluid_storage_cell_64m', 'skills:technician', true);
    restrict(event, 'megacells:greater_energy_card', 'skills:technician', true);
    restrict(event, 'megacells:item_storage_cell_16m', 'skills:technician', true);
    restrict(event, 'megacells:item_storage_cell_1m', 'skills:technician', true);
    restrict(event, 'megacells:item_storage_cell_256m', 'skills:technician', true);
    restrict(event, 'megacells:item_storage_cell_4m', 'skills:technician', true);
    restrict(event, 'megacells:item_storage_cell_64m', 'skills:technician', true);
    restrict(event, 'megacells:mega_crafting_accelerator', 'skills:technician', true);
    restrict(event, 'megacells:mega_crafting_monitor', 'skills:technician', true);
    restrict(event, 'megacells:mega_crafting_unit', 'skills:technician', true);
    restrict(event, 'megacells:mega_energy_cell', 'skills:technician', true);
    restrict(event, 'megacells:mega_fluid_cell_housing', 'skills:technician', true);
    restrict(event, 'megacells:mega_item_cell_housing', 'skills:technician', true);
    restrict(event, 'megacells:mega_pattern_provider', 'skills:technician', true);
    restrict(event, 'megacells:portable_fluid_cell_16m', 'skills:technician', true);
    restrict(event, 'megacells:portable_fluid_cell_1m', 'skills:technician', true);
    restrict(event, 'megacells:portable_fluid_cell_256m', 'skills:technician', true);
    restrict(event, 'megacells:portable_fluid_cell_4m', 'skills:technician', true);
    restrict(event, 'megacells:portable_fluid_cell_64m', 'skills:technician', true);
    restrict(event, 'megacells:portable_item_cell_16m', 'skills:technician', true);
    restrict(event, 'megacells:portable_item_cell_1m', 'skills:technician', true);
    restrict(event, 'megacells:portable_item_cell_256m', 'skills:technician', true);
    restrict(event, 'megacells:portable_item_cell_4m', 'skills:technician', true);
    restrict(event, 'megacells:portable_item_cell_64m', 'skills:technician', true);
});