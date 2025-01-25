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
    restrict(event, 'mchalo:battle_rifle', 'skills:technician', true);
    restrict(event, 'mchalo:brute_shot', 'skills:technician', true);
    restrict(event, 'mchalo:bullet_clip', 'skills:technician', true);
    restrict(event, 'mchalo:energy_sword', 'skills:technician', true);
    restrict(event, 'mchalo:grenade', 'skills:technician', true);
    restrict(event, 'mchalo:gun_table', 'skills:technician', true);
    restrict(event, 'mchalo:magnum_h3', 'skills:technician', true);
    restrict(event, 'mchalo:mauler', 'skills:technician', true);
    restrict(event, 'mchalo:needler', 'skills:technician', true);
    restrict(event, 'mchalo:needles', 'skills:technician', true);
    restrict(event, 'mchalo:plasma_pistol', 'skills:technician', true);
    restrict(event, 'mchalo:plasma_rifle', 'skills:technician', true);
    restrict(event, 'mchalo:prop_shield_h2', 'skills:technician', true);
    restrict(event, 'mchalo:rocket', 'skills:technician', true);
    restrict(event, 'mchalo:rocket_launcher_h3', 'skills:technician', true);
    restrict(event, 'mchalo:shotgun_clip', 'skills:technician', true);
    restrict(event, 'mchalo:shotgun_h2', 'skills:technician', true);
    restrict(event, 'mchalo:sniper_rifle', 'skills:technician', true);
    restrict(event, 'mchalo:sniper_round', 'skills:technician', true);
});