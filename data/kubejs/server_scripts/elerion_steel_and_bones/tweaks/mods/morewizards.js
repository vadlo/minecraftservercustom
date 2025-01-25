// priority: -1

ServerEvents.recipes(e => {
    let esnb = (id) => `elerion_blood_and_steel:morewizards/${id}`;    
    let bt = (id) => `botania:${id}`;
    let wz = (id) => `wizards:${id}`;
    let mwz = (id) => `morewizardsmod:${id}`;
    let mc = (id) => `minecraft:${id}`;

    e.remove({id: "morewizardsmod:lightning_wizard_armor_t1_head"});
    e.remove({id: "morewizardsmod:lightning_wizard_armor_t1_chest"});
    e.remove({id: "morewizardsmod:lightning_wizard_armor_t1_legs"});
    e.remove({id: "morewizardsmod:lightning_wizard_armor_t1_feet"});

    e.shaped(mwz('lightning_wizard_armor_t1_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/lightning_wizard_armor_t1_head'));

    e.shaped(mwz('lightning_wizard_armor_t1_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/dark_fire_wizard_armor_t1_chest'));

    e.shaped(mwz('lightning_wizard_armor_t1_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/lightning_wizard_armor_t1_legs'));

    e.shaped(mwz('lightning_wizard_armor_t1_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/lightning_wizard_armor_t1_feet'));

    e.remove({id: "morewizardsmod:lightning_wizard_armor_t2_head"});
    e.remove({id: "morewizardsmod:lightning_wizard_armor_t2_chest"});
    e.remove({id: "morewizardsmod:lightning_wizard_armor_t2_legs"});
    e.remove({id: "morewizardsmod:lightning_wizard_armor_t2_feet"});

    e.shaped(mwz('lightning_wizard_armor_t2_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/lightning_wizard_armor_t2_head'));

    e.shaped(mwz('lightning_wizard_armor_t2_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/lightning_wizard_armor_t2_chest'));

    e.shaped(mwz('lightning_wizard_armor_t2_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/lightning_wizard_armor_t2_legs'));

    e.shaped(mwz('lightning_wizard_armor_t2_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/lightning_wizard_armor_t2_feet'));

    e.remove({id: "morewizardsmod:soul_wizard_armor_t1_head"});
    e.remove({id: "morewizardsmod:soul_wizard_armor_t1_chest"});
    e.remove({id: "morewizardsmod:soul_wizard_armor_t1_legs"});
    e.remove({id: "morewizardsmod:soul_wizard_armor_t1_feet"});

    e.shaped(mwz('soul_wizard_armor_t1_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('black_wool')
    }).id(esnb('mage/soul_wizard_armor_t1_head'));

    e.shaped(mwz('soul_wizard_armor_t1_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('black_wool')
    }).id(esnb('mage/soul_wizard_armor_t1_chest'));

    e.shaped(mwz('soul_wizard_armor_t1_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('black_wool')
    }).id(esnb('mage/soul_wizard_armor_t1_legs'));

    e.shaped(mwz('soul_wizard_armor_t1_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('black_wool')
    }).id(esnb('mage/soul_wizard_armor_t1_feet'));

    e.remove({id: "morewizardsmod:soul_wizard_armor_t2_head"});
    e.remove({id: "morewizardsmod:soul_wizard_armor_t2_chest"});
    e.remove({id: "morewizardsmod:soul_wizard_armor_t2_legs"});
    e.remove({id: "morewizardsmod:soul_wizard_armor_t2_feet"});

    e.shaped(mwz('soul_wizard_armor_t2_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('cyan_wool')
    }).id(esnb('mage/soul_wizard_armor_t2_head'));

    e.shaped(mwz('soul_wizard_armor_t2_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('cyan_wool')
    }).id(esnb('mage/soul_wizard_armor_t2_chest'));

    e.shaped(mwz('soul_wizard_armor_t2_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('cyan_wool')
    }).id(esnb('mage/soul_wizard_armor_t2_legs'));

    e.shaped(mwz('soul_wizard_armor_t2_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('cyan_wool')
    }).id(esnb('mage/soul_wizard_armor_t2_feet'));

    e.remove({id: "morewizardsmod:lightning_staff"});
    e.remove({id: "morewizardsmod:soul_staff"});
});

