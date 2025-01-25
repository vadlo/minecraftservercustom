// priority: -1

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let esnb = (id) => `elerion_blood_and_steel:mchalo/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let ho = (id) => `mchalo:${id}`;

    e.remove({id: 'mchalo:gun_table'})
    e.shaped(ho('gun_table'), [
        'ABE',
        'CDC',
        '   '
    ],
    {
        A: mi('silicon_p_doped_plate'),
        B: mi('robot_arm'),
        C: tr('aluminum_storage_block'),
        D: mi('advanced_machine_hull'),
        E: mi('silicon_n_doped_plate'),
    }).id(esnb('gun_table'));
});