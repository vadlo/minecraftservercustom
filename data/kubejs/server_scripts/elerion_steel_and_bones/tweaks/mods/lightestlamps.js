// priority: -1

ServerEvents.recipes(e => {
    // -- FIX MI ARGON CREATION, MAKES THE ARGON VERY EASY TO GET    -- //
    e.remove({id: 'lightestlamp:centrifuge/argon_fluid'})
    e.remove({id: 'lightestlamp:gas_centrifuge'})

    e.shaped('lightestlamp:glowstone_centrifuge', [
        'SFS',
        'ACA',
        'SHS'
    ],
    {
        S: 'lightestlamp:lanthanum_ingot',
        F: 'lightestlamp:basic_centrifuge_filter',
        H: 'modern_industrialization:advanced_machine_hull',
        C: 'modern_industrialization:centrifuge',
        A: 'modern_industrialization:electronic_circuit'
    })
});


