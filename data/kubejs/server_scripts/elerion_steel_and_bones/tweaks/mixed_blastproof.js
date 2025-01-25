// priority: -1

ServerEvents.recipes(e => {
    // -- MIXED BLASTPROOF ALLOY -- //
    e.shaped('3x modern_industrialization:mixed_ingot_blastproof', [
        'CCC',
        'BBB',
        'AAA'
    ],
    {
        A: '#c:stainless_steel_ingots',
        B: '#c:titanium_ingots',
        C: '#c:tungsten_ingots'
    }).id('elerion_steel_and_bones/tech/mixed_ingot_blastproof');
});


