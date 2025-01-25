// priority: -1

ServerEvents.recipes(e => {
    e.remove({id: 'megacells:cells/mega_item_cell_housing'})
    e.remove({id: 'megacells:cells/mega_fluid_cell_housing'})
    e.remove({id: 'megacells:cells/standard/item_storage_cell_1m'})
    e.remove({id: 'megacells:cells/standard/item_storage_cell_4m'})
    e.remove({id: 'megacells:cells/standard/item_storage_cell_16m'})
    e.remove({id: 'megacells:cells/standard/item_storage_cell_64m'})
    e.remove({id: 'megacells:cells/standard/item_storage_cell_256m'})
    e.remove({id: 'megacells:cells/standard/fluid_storage_cell_1m'})
    e.remove({id: 'megacells:cells/standard/fluid_storage_cell_4m'})
    e.remove({id: 'megacells:cells/standard/fluid_storage_cell_16m'})
    e.remove({id: 'megacells:cells/standard/fluid_storage_cell_64m'})
    e.remove({id: 'megacells:cells/standard/fluid_storage_cell_256m'})
    e.remove({id: 'megacells:cell_component_256m'})
    
    e.shaped('megacells:mega_item_cell_housing', [
        'ABA',
        'B B',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:tungsten_plates'
    })

    e.shaped('megacells:mega_fluid_cell_housing', [
        'ABA',
        'B B',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:enderium_plates'
    })

    e.shaped('megacells:cell_component_4m', [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        A: 'ae2:sky_dust',
        B: 'ae2:engineering_processor',
        C: 'megacells:cell_component_1m',
        D: 'megacells:vibrant_quartz_glass'
    })

    e.shaped('megacells:cell_component_16m', [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        A: '#c:desh_plates',
        B: 'ae2:engineering_processor',
        C: 'megacells:cell_component_4m',
        D: 'megacells:vibrant_quartz_glass'
    })

    e.shaped('megacells:cell_component_64m', [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        A: '#c:desh_plates',
        B: 'ae2:engineering_processor',
        C: 'megacells:cell_component_16m',
        D: 'megacells:vibrant_quartz_glass'
    })

    e.shaped('megacells:cell_component_256m', [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        A: '#c:ostrum_plates',
        B: 'ae2:engineering_processor',
        C: 'megacells:cell_component_64m',
        D: 'megacells:vibrant_quartz_glass'
    })

    e.shaped('megacells:item_storage_cell_1m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:tungsten_plates',
        D: 'megacells:cell_component_1m'
    })

    e.shaped('megacells:item_storage_cell_4m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:tungsten_plates',
        D: 'megacells:cell_component_4m'
    })

    e.shaped('megacells:item_storage_cell_16m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:tungsten_plates',
        D: 'megacells:cell_component_16m'
    })

    e.shaped('megacells:item_storage_cell_64m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:tungsten_plates',
        D: 'megacells:cell_component_64m'
    })

    e.shaped('megacells:item_storage_cell_256m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:tungsten_plates',
        D: 'megacells:cell_component_256m'
    })

    e.shaped('megacells:fluid_storage_cell_1m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:enderium_plates',
        D: 'megacells:cell_component_1m'
    })

    e.shaped('megacells:fluid_storage_cell_4m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:enderium_plates',
        D: 'megacells:cell_component_4m'
    })

    e.shaped('megacells:fluid_storage_cell_16m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:enderium_plates',
        D: 'megacells:cell_component_16m'
    })

    e.shaped('megacells:fluid_storage_cell_64m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:enderium_plates',
        D: 'megacells:cell_component_64m'
    })

    e.shaped('megacells:fluid_storage_cell_256m', [
        'ABA',
        'BDB',
        'CCC'
    ],
    {
        A: 'ae2:vibrant_quartz_glass',
        B: 'ae2:sky_dust',
        C: '#c:enderium_plates',
        D: 'megacells:cell_component_256m'
    })
});