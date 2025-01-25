ServerEvents.recipes(e => {
    e.remove({id: 'chunkloaders:basic_chunk_loader'})
    e.remove({id: 'chunkloaders:advanced_chunk_loader'})
    e.remove({id: 'chunkloaders:ultimate_chunk_loader'})

    e.shaped('chunkloaders:basic_chunk_loader', [
        ' A ',
        'DCD',
        ' B '
    ],
    {
        A: 'techreborn:basic_solar_panel',
        B: 'modern_industrialization:chromium_plate',
        C: 'modern_industrialization:basic_machine_hull',
        D: 'modern_industrialization:advanced_upgrade'
    })
    .id('elerion_blood_and_steel:chunkloader/technician/basic_chunk_loader');

    e.shaped('chunkloaders:basic_chunk_loader', [
        ' A ',
        'CDC',
        ' B '
    ],
    {
        A: 'botania:mana_pearl',
        B: 'botania:gaia_ingot',
        C: 'spectrum:shimmerstone_gem',
        D: 'botania:dark_quartz'
    })
    .id('elerion_blood_and_steel:chunkloader/magician/basic_chunk_loader');
})