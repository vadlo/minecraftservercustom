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
    restrict(event, 'haema:book_of_blood', 'skills:magician', true);
    restrict(event, 'haema:empty_vampire_blood_injector', 'skills:magician', true);
    restrict(event, 'haema:ritual_table', 'skills:magician', true);
    restrict(event, 'haema:vampire_blood', 'skills:magician', true);
    restrict(event, 'haema:vampire_blood_injector', 'skills:magician', true);
    restrict(event, 'haema:vampire_coat', 'skills:magician', true);
    restrict(event, 'haema:vampire_hat', 'skills:magician', true);
    restrict(event, 'haema:vampire_hunter_contract', 'skills:magician', true);
    restrict(event, 'haema:vampire_shoes', 'skills:magician', true);
    restrict(event, 'haema:vampire_trousers', 'skills:magician', true);
});