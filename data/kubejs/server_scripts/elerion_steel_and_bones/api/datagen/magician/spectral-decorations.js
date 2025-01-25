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
    restrict(event, 'spectral-decorations:black_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:black_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:black_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:black_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:blue_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:blue_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:blue_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:blue_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:brown_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:brown_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:brown_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:brown_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:cyan_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:cyan_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:cyan_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:cyan_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:gray_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:gray_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:gray_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:gray_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:green_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:green_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:green_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:green_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_blue_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_blue_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_blue_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_blue_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_gray_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_gray_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_gray_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:light_gray_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:lime_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:lime_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:lime_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:lime_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:magenta_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:magenta_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:magenta_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:magenta_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:orange_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:orange_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:orange_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:orange_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:pink_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:pink_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:pink_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:pink_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:purple_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:purple_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:purple_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:purple_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:red_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:red_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:red_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:red_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:white_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:white_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:white_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:white_light', 'skills:magician', true);
    restrict(event, 'spectral-decorations:yellow_amphora', 'skills:magician', true);
    restrict(event, 'spectral-decorations:yellow_beam', 'skills:magician', true);
    restrict(event, 'spectral-decorations:yellow_lantern', 'skills:magician', true);
    restrict(event, 'spectral-decorations:yellow_light', 'skills:magician', true);
});