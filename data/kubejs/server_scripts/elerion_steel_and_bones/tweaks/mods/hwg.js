// priority: -1

ServerEvents.recipes(e => {
    e.remove({id: 'hwg:gun_table'})
    
    e.shaped('hwg:gun_table', [
        'SF ',
        'ACA',
        'SHS'
    ],
    {
        S: 'anim_guns:plastic',
        F: 'modern_industrialization:robot_arm',
        H: 'modern_industrialization:advanced_machine_hull',
        C: 'modern_industrialization:assembler',
        A: 'modern_industrialization:electronic_circuit'
    })
});