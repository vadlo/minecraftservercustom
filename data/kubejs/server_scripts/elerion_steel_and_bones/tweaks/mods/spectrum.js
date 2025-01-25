// priority: -1

ServerEvents.recipes(e => {
    let esnb = (id) => `elerion_blood_and_steel:spectrum/${id}`;

    e.remove({id: 'spectrum:crafting_table/gem_blocks/amethyst_storage_block'})
    e.shaped('spectrum:amethyst_storage_block', [
        'AAA',
        'A A',
        'AAA'
    ],
    {
        A: '#c:amethyst'
    }).id(esnb('amethyst_storage'));
});