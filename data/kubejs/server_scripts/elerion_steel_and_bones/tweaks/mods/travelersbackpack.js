// priority: -1

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let esnb = (id) => `elerion_blood_and_steel:travelersbackpack/${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let bt = (id) => `botania:${id}`;
    let tb = (id) => `travelersbackpack:${id}`;

    // -- BACKPACK UPGRADES -- //
    e.remove({id: 'travelersbackpack:blank_upgrade'})
    e.remove({id: 'travelersbackpack:iron_tier_upgrade'})
    e.remove({id: 'travelersbackpack:gold_tier_upgrade'})
    e.remove({id: 'travelersbackpack:diamond_tier_upgrade'})
    e.remove({id: 'travelersbackpack:netherite_tier_upgrade'})

    e.shaped(tb('blank_upgrade'), [
        'LML',
        'TCT',
        'LML'
    ],
    {
        L: mc('leather'),
        T: tb('backpack_tank'),
        C: mc('chest'),
        M: bt('manasteel_ingot')
    }).id(esnb('mage/blank_upgrade'));

    e.shaped(tb('blank_upgrade'), [
        'LML',
        'TCT',
        'LML'
    ],
    {
        L: mc('leather'),
        T: tb('backpack_tank'),
        C: mc('chest'),
        M: '#c:steel_ingots'
    }).id(esnb('tech/blank_upgrade'));

    e.shaped(tb('iron_tier_upgrade'), [
        'CBC',
        'BUB',
        'CBC'
    ],
    {
        C: mc('chest'),
        B: mc('iron_block'),
        U: tb('blank_upgrade'),
    }).id(esnb('iron_tier_upgrade'));

    e.shaped(tb('gold_tier_upgrade'), [
        'CBC',
        'BUB',
        'CBC'
    ],
    {
        C: mc('chest'),
        B: mc('gold_block'),
        U: tb('blank_upgrade'),
    }).id(esnb('gold_tier_upgrade'));

    e.shaped(tb('diamond_tier_upgrade'), [
        'CBC',
        'BUB',
        'CBC'
    ],
    {
        C: mc('chest'),
        B: mc('diamond_block'),
        U: tb('blank_upgrade'),
    }).id(esnb('diamond_tier_upgrade'));

    e.shaped(tb('netherite_tier_upgrade'), [
        'CBC',
        'BUB',
        'CBC'
    ],
    {
        C: mc('chest'),
        B: mc('netherite_ingot'),
        U: tb('blank_upgrade'),
    }).id(esnb('netherite_tier_upgrade'));
});


