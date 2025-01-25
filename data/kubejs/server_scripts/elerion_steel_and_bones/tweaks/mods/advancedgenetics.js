// priority: -1
ServerEvents.recipes(e => {
    e.remove({id: 'advancedgenetics:syringe'})
    e.remove({id: 'advancedgenetics:overclocker'})
    e.remove({id: 'advancedgenetics:cell_analyzer'})
    e.remove({id: 'advancedgenetics:dna_extractor'})
    e.remove({id: 'advancedgenetics:dna_decrypter'})
    e.remove({id: 'advancedgenetics:plasmid_infuser'})
    e.remove({id: 'advancedgenetics:blood_purifier'})
    e.remove({id: 'advancedgenetics:plasmid_injector'})

    e.shaped('advancedgenetics:syringe', [
        ' CD',
        'CBC',
        'AC '
    ],
    {
        A: 'modern_industrialization:steel_rod',
        B: '#c:glass_blocks',
        C: 'modern_industrialization:iron_large_plate',
        D: 'minecraft:stick'
    })

    e.shaped('advancedgenetics:overclocker', [
        'CDC',
        'ABA',
        'CDC'
    ],
    {
        A: 'techreborn:overclocker_upgrade',
        B: 'modern_industrialization:digital_circuit_board',
        C: 'modern_industrialization:iron_large_plate',
        D: 'modern_industrialization:electrum_wire'
    })

    e.shaped('advancedgenetics:cell_analyzer', [
        'CBC',
        'CAC',
        'CDC'
    ],
    {
        A: 'modern_industrialization:turbo_machine_hull',
        B: 'advancedgenetics:syringe',
        C: 'modern_industrialization:stainless_steel_large_plate',
        D: 'modern_industrialization:digital_circuit'
    })

    e.shaped('advancedgenetics:dna_extractor', [
        'CEC',
        'BAB',
        'CDC'
    ],
    {
        A: 'modern_industrialization:turbo_machine_hull',
        B: '#advancedgenetics:cells',
        C: 'modern_industrialization:stainless_steel_large_plate',
        D: 'modern_industrialization:digital_circuit',
        E: 'minecraft:sticky_piston'
    })

    e.shaped('advancedgenetics:dna_decrypter', [
        'CDC',
        'EAE',
        'CBC'
    ],
    {
        A: 'modern_industrialization:turbo_machine_hull',
        B: '#advancedgenetics:cells',
        C: 'modern_industrialization:stainless_steel_large_plate',
        D: 'modern_industrialization:digital_circuit',
        E: 'advancedgenetics:dna_helix'
    })

    e.shaped('advancedgenetics:plasmid_infuser', [
        'CCC',
        'EAE',
        'CDC'
    ],
    {
        A: 'modern_industrialization:turbo_machine_hull',
        C: 'modern_industrialization:stainless_steel_large_plate',
        D: 'modern_industrialization:digital_circuit',
        E: 'advancedgenetics:plasmid'
    })

    e.shaped('advancedgenetics:blood_purifier', [
        'CBC',
        'EAE',
        'CDC'
    ],
    {
        A: 'modern_industrialization:turbo_machine_hull',
        B: '#minecraft:wool',
        C: 'modern_industrialization:stainless_steel_large_plate',
        D: 'modern_industrialization:digital_circuit',
        E: 'advancedgenetics:syringe'
    })

    e.shaped('advancedgenetics:plasmid_injector', [
        'CEC',
        'EAE',
        'CDC'
    ],
    {
        A: 'modern_industrialization:turbo_machine_hull',
        C: 'modern_industrialization:stainless_steel_large_plate',
        D: 'modern_industrialization:digital_circuit',
        E: 'advancedgenetics:syringe'
    })
});
