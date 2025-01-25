//priority: -1

ServerEvents.recipes(e => {
    e.remove({id: 'heartytrinkets:smithing/amethyst_apple'})
    
    e.shaped('heartytrinkets:amethyst_apple', [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'minecraft:amethyst_block',
        B: 'betterend:eternal_crystal',
        C: 'create:honeyed_apple'
    })
});