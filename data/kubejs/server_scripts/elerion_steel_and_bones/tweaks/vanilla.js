// priority: -1

ServerEvents.recipes(e => {
    // -- FLINT AND STEEL -- //
    e.remove({id: 'minecraft:flint_and_steel'})
    e.remove({id: 'byg:therium_shard_and_steel'})
    e.remove({id: 'ad_astra:recipes/flint_and_steel'})

    e.shaped('minecraft:flint_and_steel', [
        'S  ',
        ' F ',
        '   '
    ],
    {
        S: '#c:steel_ingots',
        F: 'minecraft:flint'
    })
    .id('elerion_steel_and_bones/tech/flint_and_steel');
    e.shaped('minecraft:flint_and_steel', [
        'S  ',
        ' F ',
        '   '
    ],
    {
        S: 'botania:terrasteel_ingot',
        F: 'minecraft:flint'
    })
    .id('elerion_steel_and_bones/mage/flint_and_steel');

    // -- PISTON -- //
    e.shaped('minecraft:piston', [
        'SSS',
        'CMC',
        'CPC'
    ],
    {
        S: '#minecraft:wooden_slabs',
        C: 'compressor:compressed_cobblestone',
        P: 'botania:mana_powder',
        M: 'botania:manasteel_ingot'
    }).id('elerion_steel_and_bones/mage/piston');
});