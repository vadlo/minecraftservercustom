// priority: -1

ServerEvents.recipes(e => {
    // -- FLINT AND STEEL -- //
    e.remove({id: 'modern_industrialization:electric_age/machine/assembler/replicator'})
    e.remove({id: 'statech:modern_industrialization/quantum_sword'}) // Makes the game unplayable at all.

    e.remove({id: 'statech:modern_industrialization/assembler/handheld_worldshaper'})
});


