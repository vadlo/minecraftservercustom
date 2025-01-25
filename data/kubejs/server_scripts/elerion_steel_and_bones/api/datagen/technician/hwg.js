// AUTOMATIC I2JSP DATAGEN
// FOR INTERNAL USAGE IN ELERION: STEEL 'N' BONES MODPACK

function restrict(event, itemName, requiredStage, requiredValue) {
    event.restrict(itemName, restrict => {
      restrict.everything().if(player => player.cannot(requiredStage, requiredValue));
    });
  }

function restrictFluid(event, fluid, requiredStage, requiredValue) {
    event.restrict(fluid, restrict => {
      restrict.everything().if(player => player.cannot(requiredStage, requiredValue));
    });
  }

ItemSkillEvents.register(event => {
    restrict(event, 'hwg:ak47', 'skills:technician', true);
    restrict(event, 'hwg:balrog_gun', 'skills:technician', true);
    restrict(event, 'hwg:black_flare', 'skills:technician', true);
    restrict(event, 'hwg:blue_flare', 'skills:technician', true);
    restrict(event, 'hwg:brimstone_gun', 'skills:technician', true);
    restrict(event, 'hwg:brown_flare', 'skills:technician', true);
    restrict(event, 'hwg:bullets', 'skills:technician', true);
    restrict(event, 'hwg:cyan_flare', 'skills:technician', true);
    restrict(event, 'hwg:flamethrower', 'skills:technician', true);
    restrict(event, 'hwg:flare_gun', 'skills:technician', true);
    restrict(event, 'hwg:fuel_tank', 'skills:technician', true);
    restrict(event, 'hwg:golden_gun', 'skills:technician', true);
    restrict(event, 'hwg:gray_flare', 'skills:technician', true);
    restrict(event, 'hwg:greater_spawn_egg', 'skills:technician', true);
    restrict(event, 'hwg:green_flare', 'skills:technician', true);
    restrict(event, 'hwg:grenade_emp', 'skills:technician', true);
    restrict(event, 'hwg:grenade_frag', 'skills:technician', true);
    restrict(event, 'hwg:grenade_launcher', 'skills:technician', true);
    restrict(event, 'hwg:grenade_napalm', 'skills:technician', true);
    restrict(event, 'hwg:grenade_smoke', 'skills:technician', true);
    restrict(event, 'hwg:grenade_stun', 'skills:technician', true);
    restrict(event, 'hwg:gun_table', 'skills:technician', true);
    restrict(event, 'hwg:hellhorse_revolver', 'skills:technician', true);
    restrict(event, 'hwg:lesser_spawn_egg', 'skills:technician', true);
    restrict(event, 'hwg:lightblue_flare', 'skills:technician', true);
    restrict(event, 'hwg:lightgray_flare', 'skills:technician', true);
    restrict(event, 'hwg:lime_flare', 'skills:technician', true);
    restrict(event, 'hwg:luger', 'skills:technician', true);
    restrict(event, 'hwg:magenta_flare', 'skills:technician', true);
    restrict(event, 'hwg:meanie_gun_1', 'skills:technician', true);
    restrict(event, 'hwg:meanie_gun_2', 'skills:technician', true);
    restrict(event, 'hwg:merc_spawn_egg', 'skills:technician', true);
    restrict(event, 'hwg:minigun', 'skills:technician', true);
    restrict(event, 'hwg:nostromo_flamethrower', 'skills:technician', true);
    restrict(event, 'hwg:orange_flare', 'skills:technician', true);
    restrict(event, 'hwg:pink_flare', 'skills:technician', true);
    restrict(event, 'hwg:pistol', 'skills:technician', true);
    restrict(event, 'hwg:purple_flare', 'skills:technician', true);
    restrict(event, 'hwg:red_flare', 'skills:technician', true);
    restrict(event, 'hwg:rocket', 'skills:technician', true);
    restrict(event, 'hwg:rocketlauncher', 'skills:technician', true);
    restrict(event, 'hwg:shellhorse_revolver', 'skills:technician', true);
    restrict(event, 'hwg:shotgun', 'skills:technician', true);
    restrict(event, 'hwg:shotgun_shell', 'skills:technician', true);
    restrict(event, 'hwg:silver_bullet', 'skills:technician', true);
    restrict(event, 'hwg:silvergun', 'skills:technician', true);
    restrict(event, 'hwg:smg', 'skills:technician', true);
    restrict(event, 'hwg:sniper_rifle', 'skills:technician', true);
    restrict(event, 'hwg:sniper_round', 'skills:technician', true);
    restrict(event, 'hwg:spistol', 'skills:technician', true);
    restrict(event, 'hwg:spy_spawn_egg', 'skills:technician', true);
    restrict(event, 'hwg:tommy_gun', 'skills:technician', true);
    restrict(event, 'hwg:white_flare', 'skills:technician', true);
    restrict(event, 'hwg:yellow_flare', 'skills:technician', true);
});