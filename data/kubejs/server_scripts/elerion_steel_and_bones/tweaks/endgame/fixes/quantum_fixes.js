// priority: 10

ServerEvents.recipes(e => {
    e.remove({id: 'techreborn:crafting_table/parts/data_storage_chip'});
    
    e.shaped('2x techreborn:data_storage_chip', [
        'CBC',
        'BAB',
        'CBC'
    ],
    {
        A: 'modern_industrialization:iridium_plate',
        B: 'techreborn:data_storage_core',
        C: 'modern_industrialization:digital_circuit'
    })
    .id('elerion_steel_and_bones/tech/data_storage_chip');

    e.remove({id: 'techreborn:crafting_table/parts/energy_flow_chip'});
    
    e.shaped('3x techreborn:energy_flow_chip', [
        'CBC',
        'BAB',
        'CBC'
    ],
    {
        A: 'modern_industrialization:superconductor_plate',
        B: 'techreborn:lapotron_crystal',
        C: 'modern_industrialization:digital_circuit'
    })
    .id('elerion_steel_and_bones/tech/energy_flow_chip');
});