// Improper hotfix for the first HSS-G.

ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "alchemistry:dissolver",
            "group": "alchemistry:dissolver",
            "input": {
              "item": "minecraft:milk_bucket"
            },
            "output": {
              "rolls": 1,
              "weighted": true,
              "groups": [
                {
                  "probability": 7.0,
                  "results": [
                    {
                      "item": "chemlib:starch"
                    }
                  ]
                },
                {
                  "probability": 13.0,
                  "results": [
                    {
                      "item": "chemlib:molybdenum",
                      "count": 3
                    }
                  ]
                },
                {
                  "probability": 80.0,
                  "results": [
                    {
                      "item": "chemlib:iron",
                      "count": 8
                    }
                  ]
                }
              ]
            }
          }
    );

    event.remove({id: "alchemistry:dissolver/brown_mushroom"})
    event.custom(
        {
            "type": "alchemistry:dissolver",
            "group": "alchemistry:dissolver",
            "input": {
              "item": "minecraft:brown_mushroom"
            },
            "output": {
              "rolls": 1,
              "weighted": true,
              "groups": [
                {
                  "probability": 4.0,
                  "results": [
                    {
                      "item": "chemlib:phosphoric_acid",
                      "count": 1
                    }
                  ]
                },
                {
                  "probability": 7.0,
                  "results": [
                    {
                      "item": "chemlib:chitin",
                      "count": 2
                    }
                  ]
                },
                {
                  "probability": 6.0,
                  "results": [
                    {
                      "item": "chemlib:vanadium",
                      "count": 1
                    }
                  ]
                }
              ]
            }
          }
    );

    event.remove({id: "alchemistry:dissolver/red_mushroom"})
    event.custom(
        {
            "type": "alchemistry:dissolver",
            "group": "alchemistry:dissolver",
            "input": {
              "item": "minecraft:red_mushroom"
            },
            "output": {
              "rolls": 1,
              "weighted": true,
              "groups": [
                {
                    "probability": 4.0,
                    "results": [
                      {
                        "item": "chemlib:phosphoric_acid",
                        "count": 1
                      }
                    ]
                  },
                  {
                    "probability": 7.0,
                    "results": [
                      {
                        "item": "chemlib:chitin",
                        "count": 2
                      }
                    ]
                  },
                  {
                    "probability": 6.0,
                    "results": [
                      {
                        "item": "chemlib:vanadium",
                        "count": 1
                      }
                    ]
                  }
              ]
            }
          }
    );

    event.remove({id: "alchemistry:dissolver/beetroot"})
    event.custom(
        {
            "type": "alchemistry:dissolver",
            "group": "alchemistry:dissolver",
            "input": {
              "item": "minecraft:beetroot"
            },
            "output": {
              "rolls": 1,
              "weighted": false,
              "groups": [
                {
                  "probability": 25.0,
                  "results": [
                    {
                      "item": "chemlib:sucrose"
                    }
                  ]
                },
                {
                  "probability": 11.0,
                  "results": [
                    {
                      "item": "chemlib:iron_oxide"
                    }
                  ]
                },
                {
                  "probability": 4.0,
                  "results": [
                    {
                      "item": "chemlib:cobalt"
                    }
                  ]
                }
              ]
            }
          }
    )
})