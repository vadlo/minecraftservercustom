// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/photosynthetic_chamber/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let bg = (id) => `byg:${id}`;
    let fd = (id) => `farmersdelight:${id}`;
    let pr = (id) => `promenade:${id}`;
    
    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let photoChamber = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: mi('photosynthetic_chamber'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)    
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe).id(id);
    }

    // This is all the seeds in the game with their respective outputs
    const recipeInOut = [
        // Wheat
        [
            mc('wheat_seeds'),
            [
                { amount: 1, item: mc('wheat') },
                { amount: 1, item: mc('wheat'), probability: 0.5 },
                { amount: 1, item: mc('wheat_seeds'), probability: 0.5 }
            ]
        ],

        // Pumpkin
        [
            mc('pumpkin_seeds'),
            [
                { amount: 1, item: mc('pumpkin') },
                { amount: 1, item: mc('pumpkin_seeds'), probability: 0.5 }
            ]
        ],

        // Melon
        [
            mc('melon_seeds'),
            [
                { amount: 1, item: mc('melon') },
                { amount: 1, item: mc('melon_seeds'), probability: 0.5 }
            ]
        ],

        // Beetroot
        [
            mc('beetroot_seeds'),
            [
                { amount: 1, item: mc('beetroot') },
                { amount: 1, item: mc('beetroot'), probability: 0.5 },
                { amount: 1, item: mc('beetroot_seeds'), probability: 0.5 }
            ]
        ],

        // Carrot
        [
            mc('carrot'),
            [
                { amount: 1, item: mc('carrot') },
                { amount: 1, item: mc('carrot'), probability: 0.5 }
            ]
        ],

        // Potato
        [
            mc('potato'),
            [
                { amount: 1, item: mc('potato') },
                { amount: 1, item: mc('potato'), probability: 0.5 },
                { amount: 1, item: mc('poisonous_potato'), probability: 0.02 }
            ]
        ],

        // Blueberries
        [
            bg('blueberries'),
            [
                { amount: 1, item: bg('blueberries') },
                { amount: 1, item: bg('blueberries'), probability: 0.5 }
            ]
        ],

        // Cabbage
        [
            fd('cabbage_seeds'),
            [
                { amount: 1, item: fd('cabbage') },
                { amount: 1, item: fd('cabbage'), probability: 0.5 },
                { amount: 1, item: fd('cabbage_seeds'), probability: 0.5 }
            ]
        ],

        // Tomato
        [
            fd('tomato_seeds'),
            [
                { amount: 1, item: fd('tomato') },
                { amount: 1, item: fd('rotten_tomato'), probability: 0.02 },
                { amount: 1, item: fd('tomato_seeds'), probability: 0.5 }
            ]
        ],

        // Onion
        [
            fd('onion'),
            [
                { amount: 1, item: fd('onion') },
                { amount: 1, item: fd('onion'), probability: 0.5 }
            ]
        ],

        // Rice
        [
            fd('rice'),
            [
                { amount: 1, item: fd('rice_panicle') },
                { amount: 1, item: fd('rice_panicle'), probability: 0.5 },
                { amount: 1, item: fd('rice'), probability: 0.5 }
            ]
        ],

        // Cactus
        [
            mc('cactus'),
            [
                { amount: 2, item: mc('cactus') },
                { amount: 1, item: mc('cactus'), probability: 0.5 }
            ]
        ],

        // Sugar cane
        [
            mc('sugar_cane'),
            [
                { amount: 2, item: mc('sugar_cane') },
                { amount: 1, item: mc('sugar_cane'), probability: 0.5 }
            ]
        ],

        // Cocoa Beans
        [
            mc('cocoa_beans'),
            [
                { amount: 2, item: mc('cocoa_beans') },
                { amount: 2, item: mc('cocoa_beans'), probability: 0.5 }
            ]
        ],

        // Kelp
        [
            mc('kelp'),
            [
                { amount: 4, item: mc('kelp') },
                { amount: 4, item: mc('kelp'), probability: 0.5 }
            ]
        ],

        // Bamboo
        [
            mc('bamboo'),
            [
                { amount: 4, item: mc('bamboo') },
                { amount: 4, item: mc('bamboo'), probability: 0.5 }
            ]
        ],

        // Vine
        [
            mc('vine'),
            [
                { amount: 1, item: mc('vine') },
                { amount: 1, item: mc('vine'), probability: 0.5 }
            ]
        ],

        // Sweet Berries
        [
            mc('sweet_berries'),
            [
                { amount: 1, item: mc('sweet_berries') },
                { amount: 1, item: mc('sweet_berries'), probability: 0.5 }
            ]
        ],

        // Glow Berries
        [
            mc('glow_berries'),
            [
                { amount: 1, item: mc('glow_berries') },
                { amount: 1, item: mc('glow_berries'), probability: 0.5 }
            ]
        ],

        // Brown Mushrooom
        [
            mc('brown_mushroom'),
            [
                { amount: 1, item: mc('brown_mushroom') },
                { amount: 1, item: mc('brown_mushroom'), probability: 0.5 }
            ]
        ],

        // Red Mushroom
        [
            mc('red_mushroom'),
            [
                { amount: 1, item: mc('red_mushroom') },
                { amount: 1, item: mc('red_mushroom'), probability: 0.5 }
            ]
        ],

        // Nightshade Berries
        [
            bg('nightshade_berries'),
            [
                { amount: 1, item: bg('nightshade_berries') },
                { amount: 1, item: bg('nightshade_berries'), probability: 0.5 }
            ]
        ],

        // Blueberries
        [
            pr('blueberries'),
            [
                { amount: 1, item: pr('blueberries') },
                { amount: 1, item: pr('blueberries'), probability: 0.5 }
            ]
        ]
    ];
    // Create recipes for each of the items in the list
    recipeInOut.forEach(recipe => {
        let input = recipe[0];
        let output = recipe[1];
        let namespace = input.split(':')[0];
        let itemName = input.split(':')[1];

        photoChamber(
            st(`${namespace}_${itemName}`),
            8,
            600,
            [ { amount: 1, item: input, probability: 0.0 } ],
            output,
            [ { amount: 100, fluid: mc('water') } ]
        );
    });

    // These use a different fluid and are omitted from the original list
    // -- NETHER WART -- // 
    photoChamber(
        st('minecraft_nether_wart'),
        8,
        600,
        [ { amount: 1, item: mc('nether_wart'), probability: 0.0 } ],
        [ 
            { amount: 1, item: mc('nether_wart') },
            { amount: 1, item: mc('nether_wart'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mc('lava') } ]
    );

    // -- CRIMSON BERRIES -- //
    photoChamber(
        st('byg_crimson_berries'),
        8,
        600,
        [ { amount: 1, item: bg('crimson_berries'), probability: 0.0 } ],
        [
            { amount: 1, item: bg('crimson_berries') },
            { amount: 1, item: bg('crimson_berries'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mc('lava') } ]
    );

    // -- CHORUS FLOWER -- //
    photoChamber(
        st('minecraft_chorus_fruit'),
        8,
        600,
        [ { amount: 1, item: mc('chorus_flower'), probability: 0.0 } ],
        [ 
            { amount: 1, item: mc('chorus_fruit') },
            { amount: 1, item: mc('chorus_fruit'), probability: 0.5 },
            { amount: 1, item: mc('chorus_flower'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('liquid_ender') } ]
    );
});