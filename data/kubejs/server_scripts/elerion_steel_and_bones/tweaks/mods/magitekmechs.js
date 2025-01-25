// priority: -1

ServerEvents.recipes(e => {
    // MAGICITE
    e.remove({id: 'mtmechs:magicite_item'})

    e.shaped('mtmechs:magicite_item', [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'ae2:fluix_crystal',
        B: 'byg:warped_soul_sand',
        C: 'minecraft:slime_ball',
    })

    e.shaped('mtmechs:magicite_item', [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'botania:quartz_mana',
        B: 'byg:warped_soul_sand',
        C: 'minecraft:slime_ball',
    })
    
    // MAGITEK PARTS
    e.remove({id: 'mtmechs:ma_chassis_item'})
    e.shaped('mtmechs:ma_chassis_item', [
        'ADA',
        'BCB',
        'FEF'
    ],
    {
        A: 'botania:terrasteel_ingot',
        B: 'botania:gaia_ingot',
        C: '#create:seats',
        D: 'deeperdarker:soul_crystal',
        E: 'dm:cannon_head',
        F: 'botania:pool_minecart'
    })

    e.remove({id: 'mtmechs:ma_arm_item'})
    e.shaped('mtmechs:ma_arm_item', [
        '  A',
        'ABC',
        'A  '
    ],
    {
        A: 'botania:terrasteel_ingot',
        B: 'botania:gaia_ingot',
        C: 'botania:mana_quartz'
    })

    e.remove({id: 'mtmechs:ma_leg_item'})
    e.shaped('mtmechs:ma_leg_item', [
        ' A ',
        ' A ',
        'BCB'
    ],
    {
        A: 'botania:terrasteel_ingot',
        B: 'botania:gaia_ingot',
        C: 'botania:mana_quartz'
    })

    e.remove({id: 'mtmechs:ma_stack_item'})
    e.shaped('mtmechs:ma_stack_item', [
        'ADA',
        'ACA',
        'ADA'
    ],
    {
        A: 'botania:mana_quartz',
        C: 'botania:manasteel_block',
        D: 'deeperdarker:soul_crystal'
    })

    // PROTO ARMOR PARTS
    e.remove({id: 'mtmechs:pa_chassis_item'})
    e.shaped('mtmechs:pa_chassis_item', [
        'BDB',
        'ACA',
        'FEF'
    ],
    {
        A: 'modern_industrialization:digital_circuit',
        B: 'modern_industrialization:turbo_machine_hull',
        C: '#create:seats',
        D: 'ae2:energy_cell',
        E: 'dm:cannon_head',
        F: 'modern_industrialization:stainless_steel_machine_casing_pipe'
    })

    e.remove({id: 'mtmechs:pa_leg_item'})
    e.shaped('mtmechs:pa_leg_item', [
        ' C ',
        ' C ',
        'BAB'
    ],
    {
        A: 'modern_industrialization:digital_circuit',
        B: 'modern_industrialization:stainless_steel_machine_casing_pipe',
        C: 'modern_industrialization:polytetrafluoroethylene_rod'
    })

    // TUNNEL BORE PARTS
    e.remove({id: 'mtmechs:ta_chassis_item'})
    e.shaped('mtmechs:ta_chassis_item', [
        'AFA',
        'DBD',
        'E E'
    ],
    {
        A: 'modern_industrialization:electronic_circuit',
        B: '#create:seats',
        D: 'modern_industrialization:advanced_machine_hull',
        E: 'dm:cannon_head',
        F: 'modern_industrialization:steel_machine_casing_pipe'
    })

    e.remove({id: 'mtmechs:ta_arm_item'})
    e.shaped('mtmechs:ta_arm_item', [
        '  A',
        'EFD',
        'EF '
    ],
    {
        A: 'modern_industrialization:electronic_circuit',
        D: 'modern_industrialization:advanced_machine_hull',
        E: 'dm:cannon_head',
        F: 'modern_industrialization:steel_machine_casing_pipe'
    })

    e.remove({id: 'mtmechs:ta_stack_item'})
    e.shaped('mtmechs:ta_stack_item', [
        'ADA',
        'ACA',
        'ADA'
    ],
    {
        D: 'modern_industrialization:steel_rod',
        C: 'modern_industrialization:electronic_circuit',
        A: 'modern_industrialization:steel_machine_casing_pipe'
    })

    e.remove({id: 'mtmechs:ta_wheel_item'})
    e.shaped('mtmechs:ta_wheel_item', [
        ' C ',
        'CAC',
        ' C '
    ],
    {
        A: 'ad_astra:wheel',
        C: 'mtmechs:iron_gear_item'
    })

    e.remove({id: 'mtmechs:iron_gear_item'})
    e.shaped('mtmechs:iron_gear_item', [
        'AA ',
        'AA ',
        '   '
    ],
    {
        A: 'modern_industrialization:iron_gear'
    })
});
