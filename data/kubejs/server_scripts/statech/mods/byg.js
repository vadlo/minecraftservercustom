// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // There was a weird recipe that had no input and had brown dye as an output
    // Might have been a mistagged item
    e.remove({id: 'byg:brown_dye'})
});

ServerEvents.tags('item', e => {
    e.add('c:quartz_ores', 'byg:blue_nether_quartz_ore');
    e.add('c:quartz_ores', 'byg:brimstone_nether_quartz_ore');
    e.add('c:redstone_ores', 'byg:cryptic_redstone_ore');
});

// Block tagging provided by kevintok
ServerEvents.tags('block', e => {
    e.add('c:quartz_ores', 'byg:blue_nether_quartz_ore')
    e.add('c:quartz_ores', 'byg:brimstone_nether_quartz_ore')
    e.add('c:redstone_ores', 'byg:cryptic_redstone_ore')
    e.add('c:emerald_ores', 'byg:emeraldite_ore')
});