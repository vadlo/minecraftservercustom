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
    restrict(event, 'catwalksinc:black_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:blue_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:brown_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:cage_lamp', 'skills:technician', true);
    restrict(event, 'catwalksinc:caged_ladder', 'skills:technician', true);
    restrict(event, 'catwalksinc:catwalk', 'skills:technician', true);
    restrict(event, 'catwalksinc:crank_wheel', 'skills:technician', true);
    restrict(event, 'catwalksinc:cyan_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:gray_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:green_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:industrial_ladder', 'skills:technician', true);
    restrict(event, 'catwalksinc:iron_rod', 'skills:technician', true);
    restrict(event, 'catwalksinc:light_blue_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:light_gray_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:lime_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:magenta_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:orange_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:paint_scraper', 'skills:technician', true);
    restrict(event, 'catwalksinc:pink_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:purple_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:red_caged_ladder', 'skills:technician', true);
    restrict(event, 'catwalksinc:red_catwalk', 'skills:technician', true);
    restrict(event, 'catwalksinc:red_ladder', 'skills:technician', true);
    restrict(event, 'catwalksinc:red_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:white_paint_roller', 'skills:technician', true);
    restrict(event, 'catwalksinc:wrench', 'skills:technician', true);
    restrict(event, 'catwalksinc:yellow_caged_ladder', 'skills:technician', true);
    restrict(event, 'catwalksinc:yellow_catwalk', 'skills:technician', true);
    restrict(event, 'catwalksinc:yellow_ladder', 'skills:technician', true);
    restrict(event, 'catwalksinc:yellow_paint_roller', 'skills:technician', true);
});