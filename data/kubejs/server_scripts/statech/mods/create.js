// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:create/${id}`;
    let cr = (id) => `create:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let sd = (id) => `sliceanddice:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;

    // -- CREATE REMOVED RECIPES -- //
    const CREATE_DELETED_ITEMS = [
        cr('crafting/kinetics/fluid_tank'),
        cr('smelting/platinum_ingot_compat_modern_industrialization'),
        cr('blasting/platinum_ingot_compat_modern_industrialization'),
        cr('smelting/silver_ingot_compat_modern_industrialization'),
        cr('blasting/silver_ingot_compat_modern_industrialization'),
        cr('smelting/lead_ingot_compat_techreborn'),
        cr('blasting/lead_ingot_compat_techreborn'),
        cr('blasting/tin_ingot_compat_techreborn'),
        cr('smelting/tin_ingot_compat_techreborn'),
    ];
    CREATE_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove( {type: cr('crushing'), output: cr('crushed_platinum_ore')} );
    e.remove( {mod: 'create', output: mi('uranium_ingot') });

    e.smelting(tr('zinc_ingot'), '#c:raw_zinc_ores', 1);
    e.blasting(tr('zinc_ingot'), '#c:raw_zinc_ores', 1);

    // -- TANK -- //
    e.shaped(cr('fluid_tank'), [
        'CGC',
        'GSG',
        'CGC'
    ],
    {
        C: '#c:copper_plates',
        S: '#c:iron_plates',
        G: '#c:glass_blocks'
    })
    .id(st('fluid_tank'));

    // -- SPRINKLER FROM SLICE AND DICE -- //
    e.shaped(sd('sprinkler'), [
        'SPS',
        'SBS'
    ], 
    {
        S: '#c:copper_plates',
        P: cr('fluid_pipe'),
        B: mc('iron_bars')
    })
    .id(st('sprinkler'));
});