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
    restrict(event, 'computercraft:cable', 'skills:technician', true);
    restrict(event, 'computercraft:computer_advanced', 'skills:technician', true);
    restrict(event, 'computercraft:computer_command', 'skills:technician', true);
    restrict(event, 'computercraft:computer_normal', 'skills:technician', true);
    restrict(event, 'computercraft:disk', 'skills:technician', true);
    restrict(event, 'computercraft:disk_drive', 'skills:technician', true);
    restrict(event, 'computercraft:monitor_advanced', 'skills:technician', true);
    restrict(event, 'computercraft:monitor_normal', 'skills:technician', true);
    restrict(event, 'computercraft:pocket_computer_advanced', 'skills:technician', true);
    restrict(event, 'computercraft:pocket_computer_normal', 'skills:technician', true);
    restrict(event, 'computercraft:printed_book', 'skills:technician', true);
    restrict(event, 'computercraft:printed_page', 'skills:technician', true);
    restrict(event, 'computercraft:printed_pages', 'skills:technician', true);
    restrict(event, 'computercraft:printer', 'skills:technician', true);
    restrict(event, 'computercraft:speaker', 'skills:technician', true);
    restrict(event, 'computercraft:treasure_disk', 'skills:technician', true);
    restrict(event, 'computercraft:turtle_advanced', 'skills:technician', true);
    restrict(event, 'computercraft:turtle_normal', 'skills:technician', true);
    restrict(event, 'computercraft:wired_modem', 'skills:technician', true);
    restrict(event, 'computercraft:wired_modem_full', 'skills:technician', true);
    restrict(event, 'computercraft:wireless_modem_advanced', 'skills:technician', true);
    restrict(event, 'computercraft:wireless_modem_normal', 'skills:technician', true);
});