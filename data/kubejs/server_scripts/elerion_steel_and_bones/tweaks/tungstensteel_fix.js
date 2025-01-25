ServerEvents.recipes(e => {
    e.remove({id: 'chemlib:tungsten_ingot_from_smelting_tungsten_dust'});
    e.remove({id: 'chemlib:tungsten_ingot_from_smelting_tungsten_dust_exported_mi_furnace'});
    e.remove({id: 'chemlib:tungsten_ingot_from_blasting_tungsten_dust'});

    e.remove({id: 'modern_industrialization:materials/iridium/smelting/raw_metal_to_ingot_smelting'});
    e.remove({id: 'modern_industrialization:materials/iridium/smelting/raw_metal_to_ingot_blasting'});

    e.remove({id: 'modern_industrialization:materials/iridium/smelting/ore_deepslate_to_ingot_smelting'});
    e.remove({id: 'modern_industrialization:materials/iridium/smelting/ore_deepslate_to_ingot_blasting'});
    e.remove({id: 'modern_industrialization:materials/iridium/smelting/iridium_ingot_from_smelting_iridium_dust'});
    e.remove({id: 'modern_industrialization:materials/iridium/smelting/iridium_ingot_from_blasting_iridium_dust'});

    e.remove({id: 'modern_industrialization:materials/iridium/smelting/ore_deepslate_to_ingot_smelting_exported_mi_furnace'});
    e.remove({id: 'modern_industrialization:materials/iridium/smelting/iridium_ingot_from_smelting_iridium_dust_exported_mi_furnace'});

    e.remove({id: 'chemlib:iridium_ingot_from_smelting_iridium_dust'});
    e.remove({id: 'chemlib:iridium_ingot_from_smelting_iridium_dust_exported_mi_furnace'});

    e.remove({id: 'chemlib:iridium_ingot_from_blasting_iridium_dust'});
});