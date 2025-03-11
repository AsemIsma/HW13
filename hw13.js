var data = {
    "abilities": [
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      },
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
    "base_experience": 64,
    "forms": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
      }
    ],
    "height": 7,
    "id": 1,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "moves": [
      {
        "move": {
          "name": "razor-wind",
          "url": "https://pokeapi.co/api/v2/move/13/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          }
        ]
      }
      ],
  
    "name": "bulbasaur",
    "order": 1,
    "species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "stats": [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "weight": 69
  }

//1

console.log(data.height.toString());
console.log(data.weight.toString());

//2

let heiWeiStr = [data.height.toString(), data.weight.toString()];

parseInt(heiWeiStr[0]);
parseInt(heiWeiStr[1]);

let IBM = parseInt(heiWeiStr[1])/Math.pow(parseInt(heiWeiStr[0]), 2);

console.log(heiWeiStr, " , ", parseInt(heiWeiStr[0]), " , ", parseInt(heiWeiStr[1]), " , ", IBM);

//3

let pokeName = data.name;

console.log(pokeName);
console.log(pokeName.length);
console.log(pokeName.toUpperCase());

//4

console.log(pokeName.includes('bulba'));

//5

pokeNameF2 = pokeName.slice(0,2);
pokeNameL2 = pokeName.slice(-2);

console.log(pokeNameF2);
console.log(pokeNameL2);
console.log(pokeNameF2.concat(pokeNameL2));

//6

let name = pokeNameF2.concat(pokeNameL2);

data.moves.push(name)

console.log(data.moves);

//7

let allTypeArr = [];

for (let el of data.types) {
    allTypeArr.push(el.type.name);
}

console.log(allTypeArr);

//8

console.log(Array.isArray(data.abilities));

//9

//9.1
data.abilities[data.abilities.length - 1].ability.name = [data.abilities[data.abilities.length - 1].ability.name, name];

console.log(data.abilities[data.abilities.length - 1].ability.name);

//9.2

Object.defineProperty(data.abilities[data.abilities.length - 1].ability , "name", {
    value: data.abilities[data.abilities.length - 1].ability.name, name,
});

console.log(data.abilities[data.abilities.length - 1].ability.name);

//10

data.abilities.push(data.abilities[data.abilities.length - 1].ability);
console.log(data.abilities);

//11

let allStatArr = [];

for (let el of data.stats) {
    console.log(el.base_stat);
    allStatArr.push(el.base_stat);
}

console.log(allStatArr);

//12

for (el of allStatArr) {
    if (el > 47) {
        console.log(el);
    }
}

//13

console.log(allStatArr.reverse().join(", "));

//14

let shallowCopyArr =allStatArr.slice(0,2);
console.log(shallowCopyArr);

//15
//15.1

data.stats[1].base_stat = 'asem';
console.log(data.stats[1].base_stat);

//15.2

Object.defineProperty(data.stats[2], 'base_stat', {
    value: 'asem',
});

console.log(data.stats[2].base_stat);

console.log(data.stats);

 //15.3

 console.log(data.stats.splice(3, 1, {
  "base_stat": 'asem',
  "effort": 'asem',
  "stat": {
    "name": "defense",
    "url": "https://pokeapi.co/api/v2/stat/3/"
  }
}));
 console.log(data.stats);
