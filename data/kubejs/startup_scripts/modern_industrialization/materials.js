// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIMaterialEvents.addMaterials(e => {
    e.createMaterial('Desh', 'desh', 0xe9ba5d,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'bolt', 'curved_plate', 'drill', 'drill_head')
                .defaultRecipes()
                .addExternalPart('ingot', 'ad_astra:desh_ingot', '#c:desh_ingots')
                .addExternalPart('plate', 'ad_astra:desh_plate', '#c:desh_plates')
        });
    
    e.createMaterial('Tungstensteel', 'tungstensteel', 0x677680,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'coil', 'bolt', 'large_plate', 'curved_plate', 'wire')
                .barrel("Tungstensteel Barrel", "tungstensteel_barrel", 16384)
                .tank("Tungstensteel Tank", "tungstensteel_tank", 256)
                .cable('ev')
                .defaultRecipes()
                .addExternalPart('ingot', 'techreborn:tungstensteel_ingot', '#c:tungstensteel_ingots')
                .addExternalPart('plate', 'techreborn:tungstensteel_plate', '#c:tungstensteel_plates')
        });
    
    e.createMaterial('Calorite', 'calorite', 0xb63044,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'blade', 'bolt', 'curved_plate')
                .machineCasing(12.0)
                .pipeCasing(12.0)
                .defaultRecipes()
                .addExternalPart('ingot', 'ad_astra:calorite_ingot', '#c:calorite_ingots')
                .addExternalPart('plate', 'ad_astra:calorite_plate', '#c:calorite_plates')
        });
    
    e.createMaterial('Zinc', 'zinc', 0xb9e9c1,
        builder => {
            builder.addParts('rod', 'ring', 'gear', 'curved_plate', 'plate', 'bolt', 'drill_head', 'drill', 'tiny_dust')
            .defaultRecipes()
            .addExternalPart('ingot', 'techreborn:zinc_ingot', '#c:zinc_ingots')
        });
    
    e.createMaterial('Clay', 'clay', 0xa3acc7,
        builder => {
            builder.addParts('dust', 'tiny_dust')
                .addExternalPart('ingot', 'minecraft:clay_ball')
                .defaultRecipes();
        });
    
    e.createMaterial('Stone', 'stone', 0x767676,
        builder => {
            builder.addParts('dust', 'tiny_dust')
                .defaultRecipes();
        });

    e.createMaterial('Fluorite', 'fluorite', 0xe4ed9b,
        builder => {
            builder.addParts('dust', 'tiny_dust')
                .ore({
                    'generate': true,
                    'ore_set': 'nether_gold',
                    'vein_size': 4,
                    'veins_per_chunk': 5,
                    'max_y': 90
                })
                .rawMetal('copper', true).rawMetal('iridium', false)
                .defaultRecipes()
        });
    
    e.createMaterial('Polytetrafluoroethylene', 'polytetrafluoroethylene', 0x454545,
        builder => {
            builder.addParts('ingot', 'nugget', 'dust', 'tiny_dust', 'plate', 'curved_plate', 'gear', 'ring', 'rod', 'bolt')
                .specialCasing('Chemically Inert PTFE Casing', 'chemically_inert_ptfe_casing', 8.0)
                .pipeCasing(8.0)
                .block('iron')
                .defaultRecipes();
        });

    e.createMaterial('Enderium', 'enderium', 0x105e51,
        builder => {
            builder.addParts('ingot', 'nugget', 'hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt', 'dust', 'tiny_dust')
                .block('iron')
                .defaultRecipes();
        });

    e.createMaterial('HSS-G', 'hssg', 0x828200,
        builder => {
            builder.addParts('ingot', 'nugget', 'hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt', 'drill_head', 'dust', 'tiny_dust')
                .specialCasing('Chemically Inert HSS-G IV Casing', 'chemically_inert_hssg_casing', 8.0)
                .block('iron')
                .defaultRecipes();
        });

    e.createMaterial('HSS-E', 'hsse', 0x2B5600,
        builder => {
            builder.addParts('ingot', 'nugget', 'hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt', 'drill_head', 'dust', 'tiny_dust')
                .specialCasing('Chemically Inert HSS-E ZPM Casing', 'chemically_inert_hsse_casing', 8.0)
                .block('iron')
                .defaultRecipes();
        });

    e.createMaterial('HSS-S', 'hsss', 0x500028,
        builder => {
            builder.addParts('ingot', 'nugget', 'hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt', 'drill_head', 'dust', 'tiny_dust')
                .specialCasing('Chemically Inert HSS-S LuV Casing', 'chemically_inert_hsss_casing', 8.0)
                .block('iron')
                .defaultRecipes();
        });

    e.createMaterial('Ostrum', 'ostrum', 0xA66B72,
        builder => {
            builder.addParts('hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt', 'drill_head', 'dust', 'tiny_dust')
                .block('iron')
                .defaultRecipes();
        });
});