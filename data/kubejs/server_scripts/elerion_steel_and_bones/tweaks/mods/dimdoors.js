// priority: -1

ServerEvents.recipes(e => {
    // Remove rifts recipes
    e.remove({id: 'dimdoors:rift_remover'})
    e.remove({id: 'dimdoors:rift_signature'})
    e.remove({id: 'dimdoors:rift_stabilizer'})
});