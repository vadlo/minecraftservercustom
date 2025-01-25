console.info(`
================================================================================
Stage Registry Loader is now registering game stages.
If the game freezes, please wait for some time, while the stages are loading.
================================================================================
`)

SkillEvents.registration(event => {
    // Technologist
    event.add('technician', 'basic', skill => {
      skill.initialValue(false)
        .description('This stage marks the player as the Technician and makes sure that the player is able to play only with Tech mods.');
    });

    // Magician
    event.add('magician', 'basic', skill => {
      skill.initialValue(false)
        .description('This stage marks the player as the Magician and makes sure that the player is able to play only with Magic mods.');
    });

    // Magician
    event.add('later_content', 'basic', skill => {
      skill.initialValue(false)
        .description('This stage blocks mods from being involved due to WIP progress and fixes.');
    });
  });