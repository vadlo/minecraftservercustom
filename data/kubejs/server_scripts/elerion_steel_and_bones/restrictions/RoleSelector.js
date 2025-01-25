console.info(`
================================================================================
Restrictions Applier is now applying the roles to specified players.
If the game freezes, please wait for some time, while the stages are loading.
================================================================================
`)

const $OriginLayer = Java.loadClass('io.github.apace100.origins.origin.OriginLayer');
const $OriginLayers = Java.loadClass('io.github.apace100.origins.origin.OriginLayers');
const $ModComponents = Java.loadClass('io.github.apace100.origins.registry.ModComponents');
const $Origin = Java.loadClass('io.github.apace100.origins.origin.Origin');
let once = false;

/**
 * @param {Internal.Entity} entity
 * @param {string} originLayerString
 */
function getOrigin(entity, originLayerString) {
    if (entity == null) {
        return null;
    }

    let originLayer = $OriginLayers.getLayer(originLayerString ?? 'origins:origin');
    
    if (originLayer == null) {
        return null;
    }
    
    let origin = $ModComponents.ORIGIN.get(entity).getOrigin(originLayer);

    if (origin == null) {
        return null;
    }

    return origin.getIdentifier();
}

// [Framework] Restrictions Applier API v1
function apply(event, playerName, stageName, value) {
    if (event.player.displayName.string == playerName) {
        event.server.runCommandSilent('skills set ' + playerName + ' ' + stageName + ' ' + value);
        event.player.stages.add(stageName);
    }
}

function recolor(event, playerName) {
    if (event.player.displayName.string != playerName) {
        return;
    }

    if (event.player.stages.has('skills:technician') || event.player.stages.has('skills:magician')) {
        if (event.player.stages.has('skills:technician')) {
            event.server.runCommandSilent('styled-nicknames set ' + playerName + ' <color:#5889DE>' + playerName + '</color>');
            event.player.tell('У вас текущая роль - Техник. Если у вас возникли какие-либо проблемы или вопросы - обратитесь к автору сборки.')
        }

        if (event.player.stages.has('skills:magician')) {
            event.server.runCommandSilent('styled-nicknames set ' + playerName + ' <color:#9FFE48>' + playerName + '</color>');
            event.player.tell('У вас текущая роль - Маг. Если у вас возникли какие-либо проблемы или вопросы - обратитесь к автору сборки.')
        }
    }
}

function recolorGodMode(event, playerName) {
    if (event.player.displayName.string != playerName) {
        return;
    }
    
    event.server.runCommandSilent('styled-nicknames set ' + playerName + ' <color:#C20B09>' + playerName + '</color>');
    event.player.tell('У вас текущая роль - Божество. Если у вас возникли какие-либо проблемы или вопросы - обратитесь к автору сборки.')
}

// [Framework] Role Applier Setup
PlayerEvents.loggedIn(event => {
    let player = event.player;

    if (!event.player.stages.has('skills:technician') && !event.player.stages.has('skills:magician')){
        event.server.runCommandSilent('tell @a Привет! Похоже, что у тебя нет роли. Пожалуйста, подожди, пока автоматически настроятся доступные тебе рецепты и взаимодействия модов. Игра может зависнуть на пару минут.')
    }

    if ((getOrigin(player) == "elerion_blood_and_steel:technician")) {
        apply(event, event.player.displayName.string, 'skills:technician', true);
        recolor(event, event.player.displayName.string);
    }

    if ((getOrigin(player) == "elerion_blood_and_steel:magician")) {
        apply(event, event.player.displayName.string, 'skills:magician', true);
        recolor(event, event.player.displayName.string);
    }
})

function checkOrigin(event) {
    if (event.player == null) {
        return;
    }

    // Player should have origin applied ONLY once, otherwise return.
    if ((getOrigin(event.player) == "elerion_blood_and_steel:technician")) {
        apply(event, event.player.displayName.string, 'skills:technician', true);
        recolor(event, event.player.displayName.string);
        once = true;
    }

    if ((getOrigin(event.player) == "elerion_blood_and_steel:magician")) {
        apply(event, event.player.displayName.string, 'skills:magician', true);
        recolor(event, event.player.displayName.string);
        once = true;
    }
}

PlayerEvents.tick(event => {
    if (once == true) {
        return;
    }

    checkOrigin(event);
})