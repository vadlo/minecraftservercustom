// priority: -1

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let esnb = (id) => `elerion_blood_and_steel:wizards/${id}`;
    let bt = (id) => `botania:${id}`;
    let wz = (id) => `wizards:${id}`;
    let fwz = (id) => `fallenwizardsmod:${id}`;
    let mc = (id) => `minecraft:${id}`;

    e.remove({id: fwz('dark_fire_wizard_armor_t1_head')});
    e.remove({id: fwz('dark_fire_wizard_armor_t1_chest')});
    e.remove({id: fwz('dark_fire_wizard_armor_t1_legs')});
    e.remove({id: fwz('dark_fire_wizard_armor_t1_feet')});

    e.shaped(fwz('dark_fire_wizard_armor_t1_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('orange_wool')
    }).id(esnb('mage/dark_fire_wizard_armor_t1_head'));

    e.shaped(fwz('dark_fire_wizard_armor_t1_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('orange_wool')
    }).id(esnb('mage/dark_fire_wizard_armor_t1_chest'));

    e.shaped(fwz('dark_fire_wizard_armor_t1_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('orange_wool')
    }).id(esnb('mage/dark_fire_wizard_armor_t1_legs'));

    e.shaped(fwz('dark_fire_wizard_armor_t1_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('orange_wool')
    }).id(esnb('mage/dark_fire_wizard_armor_t1_feet'));

    e.remove({id: fwz('dark_fire_wizard_armor_t2_head')});
    e.remove({id: fwz('dark_fire_wizard_armor_t2_chest')});
    e.remove({id: fwz('dark_fire_wizard_armor_t2_legs')});
    e.remove({id: fwz('dark_fire_wizard_armor_t2_feet')});

    e.shaped(fwz('dark_fire_wizard_armor_t2_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blaze_powder')
    }).id(esnb('mage/dark_fire_wizard_armor_t2_head'));

    e.shaped(fwz('dark_fire_wizard_armor_t2_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blaze_powder')
    }).id(esnb('mage/dark_fire_wizard_armor_t2_chest'));

    e.shaped(fwz('dark_fire_wizard_armor_t2_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blaze_powder')
    }).id(esnb('mage/dark_fire_wizard_armor_t2_legs'));

    e.shaped(fwz('dark_fire_wizard_armor_t2_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blaze_powder')
    }).id(esnb('mage/dark_fire_wizard_armor_t2_feet'));

    e.remove({id: fwz('dark_frost_wizard_armor_t1_head')});
    e.remove({id: fwz('dark_frost_wizard_armor_t1_chest')});
    e.remove({id: fwz('dark_frost_wizard_armor_t1_legs')});
    e.remove({id: fwz('dark_frost_wizard_armor_t1_feet')});

    e.shaped(fwz('dark_frost_wizard_armor_t1_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/dark_frost_wizard_armor_t1_head'));

    e.shaped(fwz('dark_frost_wizard_armor_t1_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/dark_frost_wizard_armor_t1_chest'));

    e.shaped(fwz('dark_frost_wizard_armor_t1_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/dark_frost_wizard_armor_t1_legs'));

    e.shaped(fwz('dark_frost_wizard_armor_t1_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('blue_wool')
    }).id(esnb('mage/dark_frost_wizard_armor_t1_feet'));

    e.remove({id: fwz('dark_frost_wizard_armor_t2_head')});
    e.remove({id: fwz('dark_frost_wizard_armor_t2_chest')});
    e.remove({id: fwz('dark_frost_wizard_armor_t2_legs')});
    e.remove({id: fwz('dark_frost_wizard_armor_t2_feet')});

    e.shaped(fwz('dark_frost_wizard_armor_t2_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('prismarine_crystals')
    }).id(esnb('mage/dark_frost_wizard_armor_t2_head'));

    e.shaped(fwz('dark_frost_wizard_armor_t2_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('prismarine_crystals')
    }).id(esnb('mage/dark_frost_wizard_armor_t2_chest'));

    e.shaped(fwz('dark_frost_wizard_armor_t2_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('prismarine_crystals')
    }).id(esnb('mage/dark_frost_wizard_armor_t2_legs'));

    e.shaped(fwz('dark_frost_wizard_armor_t2_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('prismarine_crystals')
    }).id(esnb('mage/dark_frost_wizard_armor_t2_feet'));

    e.remove({id: fwz('dark_arcane_wizard_armor_t1_head')});
    e.remove({id: fwz('dark_arcane_wizard_armor_t1_chest')});
    e.remove({id: fwz('dark_arcane_wizard_armor_t1_legs')});
    e.remove({id: fwz('dark_arcane_wizard_armor_t1_feet')});

    e.shaped(fwz('dark_arcane_wizard_armor_t1_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/dark_arcane_wizard_armor_t1_head'));

    e.shaped(fwz('dark_arcane_wizard_armor_t1_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/dark_arcane_wizard_armor_t1_chest'));

    e.shaped(fwz('dark_arcane_wizard_armor_t1_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/dark_arcane_wizard_armor_t1_legs'));

    e.shaped(fwz('dark_arcane_wizard_armor_t1_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('magenta_wool')
    }).id(esnb('mage/dark_arcane_wizard_armor_t1_feet'));

    e.remove({id: fwz('dark_arcane_wizard_armor_t2_head')});
    e.remove({id: fwz('dark_arcane_wizard_armor_t2_chest')});
    e.remove({id: fwz('dark_arcane_wizard_armor_t2_legs')});
    e.remove({id: fwz('dark_arcane_wizard_armor_t2_feet')});

    e.shaped(fwz('dark_arcane_wizard_armor_t2_head'), [
        'CWC',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('ender_pearl')
    }).id(esnb('mage/dark_arcane_wizard_armor_t2_head'));

    e.shaped(fwz('dark_arcane_wizard_armor_t2_chest'), [
        'C C',
        'CWC',
        'CCC'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('ender_pearl')
    }).id(esnb('mage/dark_arcane_wizard_armor_t2_chest'));

    e.shaped(fwz('dark_arcane_wizard_armor_t2_legs'), [
        'CWC',
        'C C',
        'C C'
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('ender_pearl')
    }).id(esnb('mage/dark_arcane_wizard_armor_t2_legs'));

    e.shaped(fwz('dark_arcane_wizard_armor_t2_feet'), [
        'W W',
        'C C',
        '   '
    ],
    {
        C: bt('manaweave_cloth'),
        W: mc('ender_pearl')
    }).id(esnb('mage/dark_arcane_wizard_armor_t2_feet'));

    e.remove({id: fwz('dark_fire_staff')});
    e.remove({id: fwz('dark_frost_staff')});
    e.remove({id: fwz('dark_arcane_staff')});
});


