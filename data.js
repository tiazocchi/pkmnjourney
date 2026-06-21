/* ═══════════════════════════════════════════════════════
   PkmnJourney — data.js
   All static game data: enemy teams (with types), gens,
   type chart, achievements, badges, trainer sprites.
   Single source of truth — do not duplicate in other files.
═══════════════════════════════════════════════════════ */

const ENEMY_DATA = {
  gen1:{
    gyms:[
      {name:"Brock",type:"Rock",team:[{name:"geodude",type1:"Rock",type2:"Ground",hp:40,atk:80,def:100,spa:30,spd:30,spe:20},{name:"onix",type1:"Rock",type2:"Ground",hp:35,atk:45,def:160,spa:30,spd:45,spe:70}]},
      {name:"Misty",type:"Water",team:[{name:"staryu",type1:"Water",type2:null,hp:30,atk:45,def:55,spa:70,spd:55,spe:85},{name:"starmie",type1:"Water",type2:"Psychic",hp:60,atk:75,def:85,spa:100,spd:85,spe:115}]},
      {name:"Lt. Surge",type:"Electric",team:[{name:"voltorb",type1:"Electric",type2:null,hp:40,atk:30,def:50,spa:55,spd:55,spe:100},{name:"pikachu",type1:"Electric",type2:null,hp:35,atk:55,def:40,spa:50,spd:50,spe:90},{name:"raichu",type1:"Electric",type2:null,hp:60,atk:90,def:55,spa:90,spd:80,spe:110}]},
      {name:"Erika",type:"Grass",team:[{name:"victreebel",type1:"Grass",type2:"Poison",hp:80,atk:105,def:65,spa:100,spd:70,spe:70},{name:"tangela",type1:"Grass",type2:null,hp:65,atk:55,def:115,spa:100,spd:40,spe:60},{name:"vileplume",type1:"Grass",type2:"Poison",hp:75,atk:80,def:85,spa:110,spd:90,spe:50}]},
      {name:"Koga",type:"Poison",team:[{name:"koffing",type1:"Poison",type2:null,hp:40,atk:65,def:95,spa:60,spd:45,spe:35},{name:"muk",type1:"Poison",type2:null,hp:105,atk:105,def:75,spa:65,spd:100,spe:50},{name:"koffing",type1:"Poison",type2:null,hp:40,atk:65,def:95,spa:60,spd:45,spe:35},{name:"weezing",type1:"Poison",type2:null,hp:65,atk:90,def:120,spa:85,spd:70,spe:60}]},
      {name:"Sabrina",type:"Psychic",team:[{name:"kadabra",type1:"Psychic",type2:null,hp:40,atk:35,def:30,spa:120,spd:70,spe:105},{name:"mr-mime",type1:"Psychic",type2:"Fairy",hp:40,atk:45,def:65,spa:100,spd:120,spe:90},{name:"venomoth",type1:"Bug",type2:"Poison",hp:70,atk:65,def:60,spa:90,spd:75,spe:90},{name:"alakazam",type1:"Psychic",type2:null,hp:55,atk:50,def:45,spa:135,spd:95,spe:120}]},
      {name:"Blaine",type:"Fire",team:[{name:"growlithe",type1:"Fire",type2:null,hp:55,atk:70,def:45,spa:70,spd:50,spe:60},{name:"ponyta",type1:"Fire",type2:null,hp:50,atk:85,def:55,spa:65,spd:65,spe:90},{name:"rapidash",type1:"Fire",type2:null,hp:65,atk:100,def:70,spa:80,spd:80,spe:105},{name:"arcanine",type1:"Fire",type2:null,hp:90,atk:110,def:80,spa:100,spd:80,spe:95}]},
      {name:"Giovanni",type:"Ground",team:[{name:"rhyhorn",type1:"Ground",type2:"Rock",hp:80,atk:85,def:95,spa:30,spd:30,spe:25},{name:"dugtrio",type1:"Ground",type2:null,hp:35,atk:100,def:50,spa:50,spd:70,spe:120},{name:"nidoqueen",type1:"Poison",type2:"Ground",hp:90,atk:92,def:87,spa:75,spd:85,spe:76},{name:"nidoking",type1:"Poison",type2:"Ground",hp:81,atk:102,def:77,spa:85,spd:75,spe:85},{name:"rhydon",type1:"Ground",type2:"Rock",hp:105,atk:130,def:120,spa:45,spd:45,spe:40}]},
    ],
    elite4:[
      {name:"Lorelei",type:"Ice",team:[{name:"dewgong",type1:"Water",type2:"Ice",hp:90,atk:70,def:80,spa:70,spd:95,spe:70},{name:"cloyster",type1:"Water",type2:"Ice",hp:50,atk:95,def:180,spa:85,spd:45,spe:70},{name:"slowbro",type1:"Water",type2:"Psychic",hp:95,atk:75,def:110,spa:100,spd:80,spe:30},{name:"jynx",type1:"Ice",type2:"Psychic",hp:65,atk:50,def:35,spa:115,spd:95,spe:95},{name:"lapras",type1:"Water",type2:"Ice",hp:130,atk:85,def:80,spa:85,spd:95,spe:60}]},
      {name:"Bruno",type:"Fighting",team:[{name:"onix",type1:"Rock",type2:"Ground",hp:35,atk:45,def:160,spa:30,spd:45,spe:70},{name:"hitmonchan",type1:"Fighting",type2:null,hp:50,atk:105,def:79,spa:35,spd:110,spe:76},{name:"hitmonlee",type1:"Fighting",type2:null,hp:50,atk:120,def:53,spa:35,spd:110,spe:87},{name:"onix",type1:"Rock",type2:"Ground",hp:35,atk:45,def:160,spa:30,spd:45,spe:70},{name:"machamp",type1:"Fighting",type2:null,hp:90,atk:130,def:80,spa:65,spd:85,spe:55}]},
      {name:"Agatha",type:"Ghost",team:[{name:"gengar",type1:"Ghost",type2:"Poison",hp:60,atk:65,def:60,spa:130,spd:75,spe:110},{name:"haunter",type1:"Ghost",type2:"Poison",hp:45,atk:50,def:45,spa:115,spd:55,spe:95},{name:"gengar",type1:"Ghost",type2:"Poison",hp:60,atk:65,def:60,spa:130,spd:75,spe:110},{name:"arbok",type1:"Poison",type2:null,hp:60,atk:95,def:69,spa:65,spd:79,spe:80},{name:"gengar",type1:"Ghost",type2:"Poison",hp:60,atk:65,def:60,spa:130,spd:75,spe:110}]},
      {name:"Lance",type:"Dragon",team:[{name:"gyarados",type1:"Water",type2:"Flying",hp:95,atk:125,def:79,spa:60,spd:100,spe:81},{name:"dragonair",type1:"Dragon",type2:null,hp:61,atk:84,def:65,spa:70,spd:70,spe:70},{name:"dragonair",type1:"Dragon",type2:null,hp:61,atk:84,def:65,spa:70,spd:70,spe:70},{name:"aerodactyl",type1:"Rock",type2:"Flying",hp:80,atk:105,def:65,spa:60,spd:75,spe:130},{name:"dragonite",type1:"Dragon",type2:"Flying",hp:91,atk:134,def:95,spa:100,spd:100,spe:80}]},
    ],
    champions:[
      {name:"Blue (Bulbasaur)",type:"Normal",team:[{name:"pidgeot",type1:"Normal",type2:"Flying",hp:83,atk:80,def:75,spa:70,spd:70,spe:101},{name:"alakazam",type1:"Psychic",type2:null,hp:55,atk:50,def:45,spa:135,spd:95,spe:120},{name:"rhydon",type1:"Ground",type2:"Rock",hp:105,atk:130,def:120,spa:45,spd:45,spe:40},{name:"arcanine",type1:"Fire",type2:null,hp:90,atk:110,def:80,spa:100,spd:80,spe:95},{name:"exeggutor",type1:"Grass",type2:"Psychic",hp:95,atk:95,def:85,spa:125,spd:75,spe:55},{name:"gyarados",type1:"Water",type2:"Flying",hp:95,atk:125,def:79,spa:60,spd:100,spe:81}]},
      {name:"Blue (Charmander)",type:"Normal",team:[{name:"pidgeot",type1:"Normal",type2:"Flying",hp:83,atk:80,def:75,spa:70,spd:70,spe:101},{name:"alakazam",type1:"Psychic",type2:null,hp:55,atk:50,def:45,spa:135,spd:95,spe:120},{name:"rhydon",type1:"Ground",type2:"Rock",hp:105,atk:130,def:120,spa:45,spd:45,spe:40},{name:"exeggutor",type1:"Grass",type2:"Psychic",hp:95,atk:95,def:85,spa:125,spd:75,spe:55},{name:"blastoise",type1:"Water",type2:null,hp:79,atk:83,def:100,spa:85,spd:105,spe:78},{name:"gyarados",type1:"Water",type2:"Flying",hp:95,atk:125,def:79,spa:60,spd:100,spe:81}]},
      {name:"Blue (Squirtle)",type:"Normal",team:[{name:"pidgeot",type1:"Normal",type2:"Flying",hp:83,atk:80,def:75,spa:70,spd:70,spe:101},{name:"alakazam",type1:"Psychic",type2:null,hp:55,atk:50,def:45,spa:135,spd:95,spe:120},{name:"rhydon",type1:"Ground",type2:"Rock",hp:105,atk:130,def:120,spa:45,spd:45,spe:40},{name:"charizard",type1:"Fire",type2:"Flying",hp:78,atk:84,def:78,spa:109,spd:85,spe:100},{name:"exeggutor",type1:"Grass",type2:"Psychic",hp:95,atk:95,def:85,spa:125,spd:75,spe:55},{name:"gyarados",type1:"Water",type2:"Flying",hp:95,atk:125,def:79,spa:60,spd:100,spe:81}]},
    ],
  },
  gen2:{
    gyms:[
      {name:"Falkner",type:"Flying",team:[{name:"pidgey",type1:"Normal",type2:"Flying",hp:40,atk:45,def:40,spa:35,spd:35,spe:56},{name:"pidgeotto",type1:"Normal",type2:"Flying",hp:63,atk:60,def:55,spa:50,spd:50,spe:71}]},
      {name:"Bugsy",type:"Bug",team:[{name:"metapod",type1:"Bug",type2:null,hp:50,atk:20,def:55,spa:25,spd:25,spe:30},{name:"kakuna",type1:"Bug",type2:"Poison",hp:45,atk:25,def:50,spa:25,spd:25,spe:35},{name:"scyther",type1:"Bug",type2:"Flying",hp:70,atk:110,def:80,spa:55,spd:80,spe:105}]},
      {name:"Whitney",type:"Normal",team:[{name:"clefairy",type1:"Normal",type2:"Fairy",hp:70,atk:45,def:48,spa:60,spd:65,spe:35},{name:"miltank",type1:"Normal",type2:null,hp:95,atk:80,def:105,spa:40,spd:70,spe:100}]},
      {name:"Morty",type:"Ghost",team:[{name:"gastly",type1:"Ghost",type2:"Poison",hp:30,atk:35,def:30,spa:100,spd:35,spe:80},{name:"haunter",type1:"Ghost",type2:"Poison",hp:45,atk:50,def:45,spa:115,spd:55,spe:95},{name:"gengar",type1:"Ghost",type2:"Poison",hp:60,atk:65,def:60,spa:130,spd:75,spe:110},{name:"haunter",type1:"Ghost",type2:"Poison",hp:45,atk:50,def:45,spa:115,spd:55,spe:95}]},
      {name:"Chuck",type:"Fighting",team:[{name:"primeape",type1:"Fighting",type2:null,hp:65,atk:105,def:60,spa:60,spd:70,spe:95},{name:"poliwrath",type1:"Water",type2:"Fighting",hp:90,atk:95,def:95,spa:70,spd:90,spe:70}]},
      {name:"Jasmine",type:"Steel",team:[{name:"magnemite",type1:"Electric",type2:"Steel",hp:25,atk:35,def:70,spa:95,spd:55,spe:45},{name:"magnemite",type1:"Electric",type2:"Steel",hp:25,atk:35,def:70,spa:95,spd:55,spe:45},{name:"steelix",type1:"Steel",type2:"Ground",hp:75,atk:85,def:200,spa:55,spd:65,spe:30}]},
      {name:"Pryce",type:"Ice",team:[{name:"seel",type1:"Water",type2:null,hp:65,atk:45,def:55,spa:45,spd:70,spe:45},{name:"dewgong",type1:"Water",type2:"Ice",hp:90,atk:70,def:80,spa:70,spd:95,spe:70},{name:"piloswine",type1:"Ice",type2:"Ground",hp:100,atk:100,def:80,spa:60,spd:60,spe:50}]},
      {name:"Clair",type:"Dragon",team:[{name:"dragonair",type1:"Dragon",type2:null,hp:61,atk:84,def:65,spa:70,spd:70,spe:70},{name:"dragonair",type1:"Dragon",type2:null,hp:61,atk:84,def:65,spa:70,spd:70,spe:70},{name:"dragonair",type1:"Dragon",type2:null,hp:61,atk:84,def:65,spa:70,spd:70,spe:70},{name:"kingdra",type1:"Water",type2:"Dragon",hp:75,atk:95,def:95,spa:95,spd:95,spe:85}]},
    ],
    elite4:[
      {name:"Will",type:"Psychic",team:[{name:"xatu",type1:"Psychic",type2:"Flying",hp:65,atk:75,def:70,spa:95,spd:70,spe:95},{name:"jynx",type1:"Ice",type2:"Psychic",hp:65,atk:50,def:35,spa:115,spd:95,spe:95},{name:"exeggutor",type1:"Grass",type2:"Psychic",hp:95,atk:95,def:85,spa:125,spd:75,spe:55},{name:"slowbro",type1:"Water",type2:"Psychic",hp:95,atk:75,def:110,spa:100,spd:80,spe:30},{name:"xatu",type1:"Psychic",type2:"Flying",hp:65,atk:75,def:70,spa:95,spd:70,spe:95}]},
      {name:"Koga",type:"Poison",team:[{name:"ariados",type1:"Bug",type2:"Poison",hp:70,atk:90,def:70,spa:60,spd:70,spe:40},{name:"venomoth",type1:"Bug",type2:"Poison",hp:70,atk:65,def:60,spa:90,spd:75,spe:90},{name:"forretress",type1:"Bug",type2:"Steel",hp:75,atk:90,def:140,spa:60,spd:60,spe:40},{name:"muk",type1:"Poison",type2:null,hp:105,atk:105,def:75,spa:65,spd:100,spe:50},{name:"crobat",type1:"Poison",type2:"Flying",hp:85,atk:90,def:80,spa:70,spd:80,spe:130}]},
      {name:"Bruno",type:"Fighting",team:[{name:"hitmontop",type1:"Fighting",type2:null,hp:50,atk:95,def:95,spa:35,spd:110,spe:70},{name:"hitmonlee",type1:"Fighting",type2:null,hp:50,atk:120,def:53,spa:35,spd:110,spe:87},{name:"hitmonchan",type1:"Fighting",type2:null,hp:50,atk:105,def:79,spa:35,spd:110,spe:76},{name:"onix",type1:"Rock",type2:"Ground",hp:35,atk:45,def:160,spa:30,spd:45,spe:70},{name:"machamp",type1:"Fighting",type2:null,hp:90,atk:130,def:80,spa:65,spd:85,spe:55}]},
      {name:"Karen",type:"Dark",team:[{name:"umbreon",type1:"Dark",type2:null,hp:95,atk:65,def:110,spa:60,spd:130,spe:65},{name:"vileplume",type1:"Grass",type2:"Poison",hp:75,atk:80,def:85,spa:110,spd:90,spe:50},{name:"gengar",type1:"Ghost",type2:"Poison",hp:60,atk:65,def:60,spa:130,spd:75,spe:110},{name:"murkrow",type1:"Dark",type2:"Flying",hp:60,atk:85,def:42,spa:85,spd:42,spe:91},{name:"houndoom",type1:"Dark",type2:"Fire",hp:75,atk:90,def:50,spa:110,spd:80,spe:95}]},
    ],
    champions:[
      {name:"Lance",type:"Dragon",team:[{name:"gyarados",type1:"Water",type2:"Flying",hp:95,atk:125,def:79,spa:60,spd:100,spe:81},{name:"dragonite",type1:"Dragon",type2:"Flying",hp:91,atk:134,def:95,spa:100,spd:100,spe:80},{name:"dragonite",type1:"Dragon",type2:"Flying",hp:91,atk:134,def:95,spa:100,spd:100,spe:80},{name:"aerodactyl",type1:"Rock",type2:"Flying",hp:80,atk:105,def:65,spa:60,spd:75,spe:130},{name:"charizard",type1:"Fire",type2:"Flying",hp:78,atk:84,def:78,spa:109,spd:85,spe:100},{name:"dragonite",type1:"Dragon",type2:"Flying",hp:91,atk:134,def:95,spa:100,spd:100,spe:80}]},
    ],
  },
  gen3:{
    gyms:[
      {name:"Roxanne",type:"Rock",team:[{name:"geodude",type1:"Rock",type2:"Ground",hp:40,atk:80,def:100,spa:30,spd:30,spe:20},{name:"geodude",type1:"Rock",type2:"Ground",hp:40,atk:80,def:100,spa:30,spd:30,spe:20},{name:"nosepass",type1:"Rock",type2:null,hp:30,atk:45,def:135,spa:45,spd:90,spe:30}]},
      {name:"Brawly",type:"Fighting",team:[{name:"machop",type1:"Fighting",type2:null,hp:70,atk:80,def:50,spa:35,spd:35,spe:35},{name:"meditite",type1:"Fighting",type2:"Psychic",hp:30,atk:40,def:55,spa:40,spd:55,spe:60},{name:"makuhita",type1:"Fighting",type2:null,hp:72,atk:60,def:30,spa:20,spd:30,spe:25}]},
      {name:"Wattson",type:"Electric",team:[{name:"voltorb",type1:"Electric",type2:null,hp:40,atk:30,def:50,spa:55,spd:55,spe:100},{name:"electrike",type1:"Electric",type2:null,hp:40,atk:45,def:40,spa:65,spd:40,spe:65},{name:"magneton",type1:"Electric",type2:"Steel",hp:50,atk:60,def:95,spa:120,spd:70,spe:70},{name:"manectric",type1:"Electric",type2:null,hp:70,atk:75,def:60,spa:105,spd:60,spe:105}]},
      {name:"Flannery",type:"Fire",team:[{name:"slugma",type1:"Fire",type2:null,hp:40,atk:40,def:40,spa:70,spd:40,spe:20},{name:"slugma",type1:"Fire",type2:null,hp:40,atk:40,def:40,spa:70,spd:40,spe:20},{name:"camerupt",type1:"Fire",type2:"Ground",hp:70,atk:100,def:70,spa:105,spd:75,spe:40},{name:"torkoal",type1:"Fire",type2:null,hp:70,atk:85,def:140,spa:85,spd:70,spe:20}]},
      {name:"Norman",type:"Normal",team:[{name:"spinda",type1:"Normal",type2:null,hp:60,atk:60,def:60,spa:60,spd:60,spe:60},{name:"vigoroth",type1:"Normal",type2:null,hp:80,atk:80,def:80,spa:55,spd:55,spe:90},{name:"linoone",type1:"Normal",type2:null,hp:78,atk:70,def:61,spa:50,spd:61,spe:100},{name:"slaking",type1:"Normal",type2:null,hp:150,atk:160,def:100,spa:95,spd:65,spe:100}]},
      {name:"Winona",type:"Flying",team:[{name:"swablu",type1:"Normal",type2:"Flying",hp:45,atk:40,def:60,spa:40,spd:75,spe:50},{name:"tropius",type1:"Grass",type2:"Flying",hp:99,atk:68,def:83,spa:72,spd:87,spe:51},{name:"pelipper",type1:"Water",type2:"Flying",hp:60,atk:50,def:100,spa:95,spd:70,spe:65},{name:"skarmory",type1:"Steel",type2:"Flying",hp:65,atk:80,def:140,spa:40,spd:70,spe:70},{name:"altaria",type1:"Dragon",type2:"Flying",hp:75,atk:70,def:90,spa:70,spd:105,spe:80}]},
      {name:"Tate & Liza",type:"Psychic",team:[{name:"claydol",type1:"Ground",type2:"Psychic",hp:60,atk:70,def:105,spa:70,spd:120,spe:75},{name:"xatu",type1:"Psychic",type2:"Flying",hp:65,atk:75,def:70,spa:95,spd:70,spe:95},{name:"lunatone",type1:"Rock",type2:"Psychic",hp:90,atk:55,def:65,spa:95,spd:85,spe:70},{name:"solrock",type1:"Rock",type2:"Psychic",hp:90,atk:95,def:85,spa:55,spd:65,spe:70}]},
      {name:"Juan",type:"Water",team:[{name:"luvdisc",type1:"Water",type2:null,hp:43,atk:30,def:55,spa:40,spd:65,spe:97},{name:"whiscash",type1:"Water",type2:"Ground",hp:110,atk:78,def:73,spa:76,spd:71,spe:60},{name:"sealeo",type1:"Ice",type2:"Water",hp:90,atk:60,def:70,spa:75,spd:70,spe:45},{name:"crawdaunt",type1:"Water",type2:"Dark",hp:63,atk:120,def:85,spa:90,spd:55,spe:55},{name:"kingdra",type1:"Water",type2:"Dragon",hp:75,atk:95,def:95,spa:95,spd:95,spe:85}]},
    ],
    elite4:[
      {name:"Sidney",type:"Dark",team:[{name:"mightyena",type1:"Dark",type2:null,hp:70,atk:90,def:70,spa:60,spd:60,spe:70},{name:"shiftry",type1:"Grass",type2:"Dark",hp:90,atk:100,def:60,spa:90,spd:60,spe:80},{name:"cacturne",type1:"Grass",type2:"Dark",hp:70,atk:115,def:60,spa:115,spd:60,spe:55},{name:"crawdaunt",type1:"Water",type2:"Dark",hp:63,atk:120,def:85,spa:90,spd:55,spe:55},{name:"absol",type1:"Dark",type2:null,hp:65,atk:130,def:60,spa:75,spd:60,spe:75}]},
      {name:"Phoebe",type:"Ghost",team:[{name:"dusclops",type1:"Ghost",type2:null,hp:40,atk:70,def:130,spa:60,spd:130,spe:25},{name:"banette",type1:"Ghost",type2:null,hp:64,atk:115,def:65,spa:83,spd:63,spe:65},{name:"sableye",type1:"Dark",type2:"Ghost",hp:50,atk:75,def:75,spa:65,spd:65,spe:50},{name:"banette",type1:"Ghost",type2:null,hp:64,atk:115,def:65,spa:83,spd:63,spe:65},{name:"dusclops",type1:"Ghost",type2:null,hp:40,atk:70,def:130,spa:60,spd:130,spe:25}]},
      {name:"Glacia",type:"Ice",team:[{name:"sealeo",type1:"Ice",type2:"Water",hp:90,atk:60,def:70,spa:75,spd:70,spe:45},{name:"glalie",type1:"Ice",type2:null,hp:80,atk:80,def:80,spa:80,spd:80,spe:80},{name:"sealeo",type1:"Ice",type2:"Water",hp:90,atk:60,def:70,spa:75,spd:70,spe:45},{name:"glalie",type1:"Ice",type2:null,hp:80,atk:80,def:80,spa:80,spd:80,spe:80},{name:"walrein",type1:"Ice",type2:"Water",hp:110,atk:80,def:90,spa:95,spd:90,spe:65}]},
      {name:"Drake",type:"Dragon",team:[{name:"shelgon",type1:"Dragon",type2:null,hp:65,atk:95,def:100,spa:60,spd:50,spe:50},{name:"altaria",type1:"Dragon",type2:"Flying",hp:75,atk:70,def:90,spa:70,spd:105,spe:80},{name:"flygon",type1:"Ground",type2:"Dragon",hp:80,atk:100,def:80,spa:80,spd:80,spe:100},{name:"flygon",type1:"Ground",type2:"Dragon",hp:80,atk:100,def:80,spa:80,spd:80,spe:100},{name:"salamence",type1:"Dragon",type2:"Flying",hp:95,atk:135,def:80,spa:110,spd:80,spe:100}]},
    ],
    champions:[
      {name:"Steven",type:"Steel",team:[{name:"skarmory",type1:"Steel",type2:"Flying",hp:65,atk:80,def:140,spa:40,spd:70,spe:70},{name:"claydol",type1:"Ground",type2:"Psychic",hp:60,atk:70,def:105,spa:70,spd:120,spe:75},{name:"aggron",type1:"Steel",type2:"Rock",hp:70,atk:110,def:180,spa:60,spd:60,spe:50},{name:"cradily",type1:"Rock",type2:"Grass",hp:86,atk:81,def:97,spa:81,spd:107,spe:43},{name:"armaldo",type1:"Rock",type2:"Bug",hp:75,atk:125,def:100,spa:70,spd:80,spe:45},{name:"metagross",type1:"Steel",type2:"Psychic",hp:80,atk:135,def:130,spa:95,spd:90,spe:70}]},
    ],
  },
  gen4:{
    gyms:[
      {name:"Roark",type:"Rock",team:[{name:"geodude",type1:"Rock",type2:"Ground",hp:40,atk:80,def:100,spa:30,spd:30,spe:20},{name:"onix",type1:"Rock",type2:"Ground",hp:35,atk:45,def:160,spa:30,spd:45,spe:70},{name:"cranidos",type1:"Rock",type2:null,hp:67,atk:125,def:40,spa:30,spd:30,spe:58}]},
      {name:"Gardenia",type:"Grass",team:[{name:"turtwig",type1:"Grass",type2:null,hp:55,atk:68,def:64,spa:45,spd:55,spe:31},{name:"cherubi",type1:"Grass",type2:null,hp:45,atk:35,def:45,spa:62,spd:53,spe:35},{name:"roserade",type1:"Grass",type2:"Poison",hp:60,atk:70,def:65,spa:125,spd:105,spe:90}]},
      {name:"Maylene",type:"Fighting",team:[{name:"meditite",type1:"Fighting",type2:"Psychic",hp:30,atk:40,def:55,spa:40,spd:55,spe:60},{name:"machoke",type1:"Fighting",type2:null,hp:80,atk:100,def:70,spa:50,spd:60,spe:45},{name:"lucario",type1:"Fighting",type2:"Steel",hp:70,atk:110,def:70,spa:115,spd:70,spe:90}]},
      {name:"Crasher Wake",type:"Water",team:[{name:"gyarados",type1:"Water",type2:"Flying",hp:95,atk:125,def:79,spa:60,spd:100,spe:81},{name:"quagsire",type1:"Water",type2:"Ground",hp:95,atk:85,def:85,spa:65,spd:65,spe:35},{name:"floatzel",type1:"Water",type2:null,hp:85,atk:105,def:55,spa:85,spd:50,spe:115}]},
      {name:"Fantina",type:"Ghost",team:[{name:"duskull",type1:"Ghost",type2:null,hp:20,atk:40,def:90,spa:30,spd:90,spe:25},{name:"haunter",type1:"Ghost",type2:"Poison",hp:45,atk:50,def:45,spa:115,spd:55,spe:95},{name:"mismagius",type1:"Ghost",type2:null,hp:60,atk:60,def:60,spa:105,spd:105,spe:105}]},
      {name:"Byron",type:"Steel",team:[{name:"magneton",type1:"Electric",type2:"Steel",hp:50,atk:60,def:95,spa:120,spd:70,spe:70},{name:"steelix",type1:"Steel",type2:"Ground",hp:75,atk:85,def:200,spa:55,spd:65,spe:30},{name:"bastiodon",type1:"Rock",type2:"Steel",hp:60,atk:52,def:168,spa:47,spd:138,spe:30}]},
      {name:"Candice",type:"Ice",team:[{name:"snover",type1:"Grass",type2:"Ice",hp:60,atk:62,def:50,spa:62,spd:60,spe:40},{name:"sneasel",type1:"Dark",type2:"Ice",hp:55,atk:95,def:55,spa:35,spd:75,spe:115},{name:"medicham",type1:"Fighting",type2:"Psychic",hp:60,atk:60,def:75,spa:60,spd:75,spe:80},{name:"abomasnow",type1:"Grass",type2:"Ice",hp:90,atk:92,def:75,spa:92,spd:85,spe:60},{name:"froslass",type1:"Ice",type2:"Ghost",hp:70,atk:80,def:70,spa:80,spd:70,spe:110}]},
      {name:"Volkner",type:"Electric",team:[{name:"jolteon",type1:"Electric",type2:null,hp:65,atk:65,def:60,spa:110,spd:95,spe:130},{name:"raichu",type1:"Electric",type2:null,hp:60,atk:90,def:55,spa:90,spd:80,spe:110},{name:"luxray",type1:"Electric",type2:null,hp:80,atk:120,def:79,spa:95,spd:79,spe:70},{name:"electivire",type1:"Electric",type2:null,hp:75,atk:123,def:67,spa:95,spd:85,spe:95}]},
    ],
    elite4:[
      {name:"Aaron",type:"Bug",team:[{name:"dustox",type1:"Bug",type2:"Poison",hp:60,atk:50,def:70,spa:50,spd:90,spe:65},{name:"beautifly",type1:"Bug",type2:"Flying",hp:60,atk:70,def:50,spa:100,spd:50,spe:65},{name:"vespiquen",type1:"Bug",type2:"Flying",hp:70,atk:80,def:102,spa:80,spd:102,spe:40},{name:"heracross",type1:"Bug",type2:"Fighting",hp:80,atk:125,def:75,spa:40,spd:95,spe:85},{name:"drapion",type1:"Poison",type2:"Dark",hp:70,atk:90,def:110,spa:60,spd:75,spe:95}]},
      {name:"Bertha",type:"Ground",team:[{name:"whiscash",type1:"Water",type2:"Ground",hp:110,atk:78,def:73,spa:76,spd:71,spe:60},{name:"gliscor",type1:"Ground",type2:"Flying",hp:75,atk:95,def:125,spa:45,spd:75,spe:95},{name:"golem",type1:"Rock",type2:"Ground",hp:80,atk:120,def:130,spa:55,spd:65,spe:45},{name:"rhyperior",type1:"Ground",type2:"Rock",hp:115,atk:140,def:130,spa:55,spd:55,spe:40},{name:"hippowdon",type1:"Ground",type2:null,hp:108,atk:112,def:118,spa:68,spd:72,spe:47}]},
      {name:"Flint",type:"Fire",team:[{name:"houndoom",type1:"Dark",type2:"Fire",hp:75,atk:90,def:50,spa:110,spd:80,spe:95},{name:"flareon",type1:"Normal",type2:null,hp:65,atk:130,def:60,spa:95,spd:110,spe:65},{name:"rapidash",type1:"Fire",type2:null,hp:65,atk:100,def:70,spa:80,spd:80,spe:105},{name:"infernape",type1:"Normal",type2:null,hp:76,atk:104,def:71,spa:104,spd:71,spe:108},{name:"magmortar",type1:"Normal",type2:null,hp:75,atk:95,def:67,spa:125,spd:95,spe:83}]},
      {name:"Lucian",type:"Psychic",team:[{name:"girafarig",type1:"Normal",type2:"Psychic",hp:70,atk:80,def:65,spa:90,spd:65,spe:85},{name:"medicham",type1:"Fighting",type2:"Psychic",hp:60,atk:60,def:75,spa:60,spd:75,spe:80},{name:"alakazam",type1:"Psychic",type2:null,hp:55,atk:50,def:45,spa:135,spd:95,spe:120},{name:"espeon",type1:"Psychic",type2:null,hp:65,atk:65,def:60,spa:130,spd:95,spe:110},{name:"gallade",type1:"Psychic",type2:"Fighting",hp:68,atk:125,def:65,spa:65,spd:115,spe:80}]},
    ],
    champions:[
      {name:"Cynthia",type:"Mixed",team:[{name:"spiritomb",type1:"Ghost",type2:"Dark",hp:50,atk:92,def:108,spa:92,spd:108,spe:35},{name:"roserade",type1:"Grass",type2:"Poison",hp:60,atk:70,def:65,spa:125,spd:105,spe:90},{name:"togekiss",type1:"Fairy",type2:"Flying",hp:85,atk:50,def:95,spa:120,spd:115,spe:80},{name:"lucario",type1:"Fighting",type2:"Steel",hp:70,atk:110,def:70,spa:115,spd:70,spe:90},{name:"milotic",type1:"Water",type2:null,hp:95,atk:60,def:79,spa:100,spd:125,spe:81},{name:"garchomp",type1:"Dragon",type2:"Ground",hp:108,atk:130,def:95,spa:80,spd:85,spe:102}]},
    ],
  },
  gen5:{
    gyms:[
      {name:"Cheren",type:"Normal",team:[{name:"patrat",type1:"Normal",type2:null,hp:45,atk:55,def:39,spa:35,spd:39,spe:42},{name:"lillipup",type1:"Normal",type2:null,hp:45,atk:60,def:45,spa:25,spd:45,spe:55}]},
      {name:"Roxie",type:"Poison",team:[{name:"koffing",type1:"Poison",type2:null,hp:40,atk:65,def:95,spa:60,spd:45,spe:35},{name:"whirlipede",type1:"Bug",type2:"Poison",hp:40,atk:55,def:99,spa:40,spd:79,spe:47}]},
      {name:"Burgh",type:"Bug",team:[{name:"swadloon",type1:"Bug",type2:"Grass",hp:55,atk:63,def:90,spa:50,spd:80,spe:42},{name:"dwebble",type1:"Bug",type2:"Rock",hp:50,atk:65,def:85,spa:35,spd:35,spe:55},{name:"leavanny",type1:"Bug",type2:"Grass",hp:75,atk:103,def:80,spa:70,spd:80,spe:92}]},
      {name:"Elesa",type:"Electric",team:[{name:"flaaffy",type1:"Electric",type2:null,hp:70,atk:55,def:55,spa:80,spd:60,spe:45},{name:"zebstrika",type1:"Electric",type2:null,hp:75,atk:100,def:63,spa:80,spd:63,spe:116},{name:"emolga",type1:"Electric",type2:"Flying",hp:55,atk:75,def:60,spa:75,spd:60,spe:103},{name:"emolga",type1:"Electric",type2:"Flying",hp:55,atk:75,def:60,spa:75,spd:60,spe:103}]},
      {name:"Clay",type:"Ground",team:[{name:"krokorok",type1:"Ground",type2:"Dark",hp:60,atk:82,def:45,spa:45,spd:45,spe:74},{name:"palpitoad",type1:"Water",type2:"Ground",hp:75,atk:65,def:55,spa:65,spd:55,spe:69},{name:"excadrill",type1:"Ground",type2:"Steel",hp:110,atk:135,def:60,spa:50,spd:65,spe:88}]},
      {name:"Skyla",type:"Flying",team:[{name:"swoobat",type1:"Psychic",type2:"Flying",hp:67,atk:57,def:55,spa:77,spd:55,spe:114},{name:"unfezant",type1:"Normal",type2:"Flying",hp:80,atk:115,def:80,spa:65,spd:55,spe:93},{name:"swanna",type1:"Water",type2:"Flying",hp:75,atk:87,def:63,spa:87,spd:63,spe:98},{name:"skarmory",type1:"Steel",type2:"Flying",hp:65,atk:80,def:140,spa:40,spd:70,spe:70}]},
      {name:"Drayden",type:"Dragon",team:[{name:"druddigon",type1:"Dragon",type2:null,hp:77,atk:120,def:90,spa:60,spd:90,spe:48},{name:"flygon",type1:"Ground",type2:"Dragon",hp:80,atk:100,def:80,spa:80,spd:80,spe:100},{name:"haxorus",type1:"Dragon",type2:null,hp:76,atk:147,def:90,spa:60,spd:70,spe:97}]},
      {name:"Marlon",type:"Water",team:[{name:"wailord",type1:"Water",type2:null,hp:170,atk:90,def:45,spa:90,spd:45,spe:60},{name:"mantine",type1:"Water",type2:"Flying",hp:85,atk:40,def:70,spa:80,spd:140,spe:70},{name:"jellicent",type1:"Water",type2:"Ghost",hp:100,atk:60,def:70,spa:85,spd:105,spe:60}]},
    ],
    elite4:[
      {name:"Shauntal",type:"Ghost",team:[{name:"cofagrigus",type1:"Ghost",type2:null,hp:58,atk:50,def:145,spa:95,spd:105,spe:30},{name:"drifblim",type1:"Ghost",type2:"Flying",hp:150,atk:80,def:44,spa:90,spd:54,spe:80},{name:"golurk",type1:"Ground",type2:"Ghost",hp:89,atk:124,def:80,spa:55,spd:80,spe:55},{name:"chandelure",type1:"Ghost",type2:"Fire",hp:60,atk:55,def:90,spa:145,spd:90,spe:80}]},
      {name:"Marshal",type:"Fighting",team:[{name:"throh",type1:"Fighting",type2:null,hp:120,atk:100,def:85,spa:30,spd:85,spe:45},{name:"sawk",type1:"Fighting",type2:null,hp:75,atk:125,def:75,spa:30,spd:75,spe:85},{name:"conkeldurr",type1:"Fighting",type2:null,hp:105,atk:140,def:95,spa:55,spd:65,spe:45},{name:"mienshao",type1:"Fighting",type2:null,hp:65,atk:125,def:60,spa:95,spd:60,spe:105}]},
      {name:"Grimsley",type:"Dark",team:[{name:"liepard",type1:"Dark",type2:null,hp:64,atk:88,def:50,spa:88,spd:50,spe:106},{name:"krookodile",type1:"Ground",type2:"Dark",hp:95,atk:117,def:80,spa:65,spd:70,spe:92},{name:"scrafty",type1:"Dark",type2:"Fighting",hp:65,atk:90,def:115,spa:45,spd:115,spe:58},{name:"bisharp",type1:"Dark",type2:"Steel",hp:65,atk:125,def:100,spa:60,spd:70,spe:70}]},
      {name:"Caitlin",type:"Psychic",team:[{name:"musharna",type1:"Psychic",type2:null,hp:116,atk:55,def:85,spa:107,spd:95,spe:29},{name:"sigilyph",type1:"Psychic",type2:"Flying",hp:72,atk:58,def:80,spa:103,spd:80,spe:97},{name:"gothitelle",type1:"Psychic",type2:null,hp:70,atk:55,def:95,spa:95,spd:110,spe:65},{name:"reuniclus",type1:"Psychic",type2:null,hp:110,atk:65,def:75,spa:125,spd:85,spe:30}]},
    ],
    champions:[
      {name:"Iris",type:"Dragon",team:[{name:"hydreigon",type1:"Dark",type2:"Dragon",hp:92,atk:105,def:90,spa:125,spd:90,spe:98},{name:"druddigon",type1:"Dragon",type2:null,hp:77,atk:120,def:90,spa:60,spd:90,spe:48},{name:"aggron",type1:"Steel",type2:"Rock",hp:70,atk:110,def:180,spa:60,spd:60,spe:50},{name:"lapras",type1:"Water",type2:"Ice",hp:130,atk:85,def:80,spa:85,spd:95,spe:60},{name:"archeops",type1:"Rock",type2:"Flying",hp:75,atk:140,def:65,spa:112,spd:65,spe:110},{name:"haxorus",type1:"Dragon",type2:null,hp:76,atk:147,def:90,spa:60,spd:70,spe:97}]},
    ],
  },
  gen6:{
    gyms:[
      {name:"Viola",type:"Bug",team:[{name:"surskit",type1:"Bug",type2:"Water",hp:40,atk:30,def:32,spa:50,spd:52,spe:65},{name:"vivillon",type1:"Bug",type2:"Flying",hp:80,atk:52,def:50,spa:90,spd:50,spe:89}]},
      {name:"Grant",type:"Rock",team:[{name:"amaura",type1:"Rock",type2:"Ice",hp:77,atk:59,def:50,spa:67,spd:63,spe:46},{name:"tyrunt",type1:"Rock",type2:"Dragon",hp:58,atk:89,def:77,spa:45,spd:45,spe:48}]},
      {name:"Korrina",type:"Fighting",team:[{name:"mienfoo",type1:"Fighting",type2:null,hp:45,atk:85,def:50,spa:55,spd:50,spe:65},{name:"machoke",type1:"Fighting",type2:null,hp:80,atk:100,def:70,spa:50,spd:60,spe:45},{name:"lucario",type1:"Fighting",type2:"Steel",hp:70,atk:110,def:70,spa:115,spd:70,spe:90}]},
      {name:"Ramos",type:"Grass",team:[{name:"jumpluff",type1:"Grass",type2:"Flying",hp:75,atk:55,def:70,spa:55,spd:95,spe:110},{name:"weepinbell",type1:"Grass",type2:"Poison",hp:65,atk:90,def:50,spa:85,spd:45,spe:55},{name:"gogoat",type1:"Grass",type2:null,hp:123,atk:100,def:62,spa:97,spd:81,spe:68}]},
      {name:"Clemont",type:"Electric",team:[{name:"emolga",type1:"Electric",type2:"Flying",hp:55,atk:75,def:60,spa:75,spd:60,spe:103},{name:"magneton",type1:"Electric",type2:"Steel",hp:50,atk:60,def:95,spa:120,spd:70,spe:70},{name:"heliolisk",type1:"Electric",type2:"Normal",hp:62,atk:55,def:52,spa:109,spd:94,spe:109}]},
      {name:"Valerie",type:"Fairy",team:[{name:"mawile",type1:"Steel",type2:"Fairy",hp:50,atk:85,def:85,spa:55,spd:55,spe:50},{name:"mr-mime",type1:"Psychic",type2:"Fairy",hp:40,atk:45,def:65,spa:100,spd:120,spe:90},{name:"sylveon",type1:"Fairy",type2:null,hp:95,atk:65,def:65,spa:110,spd:130,spe:60}]},
      {name:"Olympia",type:"Psychic",team:[{name:"sigilyph",type1:"Psychic",type2:"Flying",hp:72,atk:58,def:80,spa:103,spd:80,spe:97},{name:"slowking",type1:"Water",type2:"Psychic",hp:95,atk:75,def:80,spa:100,spd:110,spe:30},{name:"meowstic",type1:"Psychic",type2:null,hp:74,atk:48,def:76,spa:83,spd:81,spe:104}]},
      {name:"Wulfric",type:"Ice",team:[{name:"abomasnow",type1:"Grass",type2:"Ice",hp:90,atk:92,def:75,spa:92,spd:85,spe:60},{name:"cryogonal",type1:"Ice",type2:null,hp:80,atk:50,def:50,spa:95,spd:135,spe:105},{name:"avalugg",type1:"Ice",type2:null,hp:95,atk:117,def:184,spa:44,spd:46,spe:28}]},
    ],
    elite4:[
      {name:"Malva",type:"Fire",team:[{name:"pyroar",type1:"Fire",type2:"Normal",hp:86,atk:68,def:72,spa:109,spd:66,spe:106},{name:"torkoal",type1:"Fire",type2:null,hp:70,atk:85,def:140,spa:85,spd:70,spe:20},{name:"chandelure",type1:"Ghost",type2:"Fire",hp:60,atk:55,def:90,spa:145,spd:90,spe:80},{name:"talonflame",type1:"Fire",type2:"Flying",hp:78,atk:81,def:71,spa:74,spd:69,spe:126}]},
      {name:"Siebold",type:"Water",team:[{name:"clawitzer",type1:"Water",type2:null,hp:71,atk:73,def:88,spa:120,spd:89,spe:59},{name:"gyarados",type1:"Water",type2:"Flying",hp:95,atk:125,def:79,spa:60,spd:100,spe:81},{name:"barbaracle",type1:"Rock",type2:"Water",hp:72,atk:105,def:115,spa:54,spd:86,spe:68},{name:"starmie",type1:"Water",type2:"Psychic",hp:60,atk:75,def:85,spa:100,spd:85,spe:115}]},
      {name:"Wikstrom",type:"Steel",team:[{name:"klefki",type1:"Steel",type2:"Fairy",hp:57,atk:80,def:91,spa:80,spd:87,spe:75},{name:"probopass",type1:"Rock",type2:"Steel",hp:60,atk:55,def:145,spa:75,spd:150,spe:40},{name:"scizor",type1:"Bug",type2:"Steel",hp:70,atk:130,def:100,spa:55,spd:80,spe:65},{name:"aegislash",type1:"Steel",type2:"Ghost",hp:60,atk:50,def:150,spa:50,spd:150,spe:60}]},
      {name:"Drasna",type:"Dragon",team:[{name:"dragalge",type1:"Poison",type2:"Dragon",hp:65,atk:75,def:90,spa:97,spd:123,spe:44},{name:"druddigon",type1:"Dragon",type2:null,hp:77,atk:120,def:90,spa:60,spd:90,spe:48},{name:"altaria",type1:"Dragon",type2:"Flying",hp:75,atk:70,def:90,spa:70,spd:105,spe:80},{name:"noivern",type1:"Flying",type2:"Dragon",hp:85,atk:70,def:80,spa:97,spd:80,spe:123}]},
    ],
    champions:[
      {name:"Diantha",type:"Mixed",team:[{name:"hawlucha",type1:"Fighting",type2:"Flying",hp:78,atk:92,def:75,spa:74,spd:63,spe:118},{name:"tyrantrum",type1:"Rock",type2:"Dragon",hp:82,atk:121,def:119,spa:69,spd:59,spe:71},{name:"aurorus",type1:"Rock",type2:"Ice",hp:123,atk:77,def:72,spa:99,spd:92,spe:58},{name:"gourgeist",type1:"Ghost",type2:"Grass",hp:65,atk:90,def:122,spa:58,spd:75,spe:84},{name:"goodra",type1:"Dragon",type2:null,hp:90,atk:100,def:70,spa:110,spd:150,spe:80},{name:"gardevoir",type1:"Psychic",type2:"Fairy",hp:68,atk:65,def:65,spa:125,spd:115,spe:80}]},
    ],
  },
  gen7:{
    gyms:[
      {name:"Ilima",type:"Normal",team:[{name:"yungoos",type1:"Normal",type2:null,hp:48,atk:70,def:30,spa:30,spd:30,spe:45},{name:"smeargle",type1:"Normal",type2:null,hp:55,atk:20,def:35,spa:20,spd:45,spe:75}]},
      {name:"Lana",type:"Water",team:[{name:"shellder",type1:"Water",type2:null,hp:30,atk:65,def:100,spa:45,spd:25,spe:40},{name:"cloyster",type1:"Water",type2:"Ice",hp:50,atk:95,def:180,spa:85,spd:45,spe:70},{name:"wishiwashi",type1:"Water",type2:null,hp:45,atk:140,def:130,spa:140,spd:135,spe:30}]},
      {name:"Kiawe",type:"Fire",team:[{name:"growlithe",type1:"Fire",type2:null,hp:55,atk:70,def:45,spa:70,spd:50,spe:60},{name:"fletchinder",type1:"Fire",type2:"Flying",hp:62,atk:73,def:55,spa:56,spd:52,spe:84},{name:"marowak",type1:"Fire",type2:"Ghost",hp:60,atk:80,def:110,spa:50,spd:80,spe:45}]},
      {name:"Mallow",type:"Grass",team:[{name:"phantump",type1:"Ghost",type2:"Grass",hp:43,atk:70,def:48,spa:50,spd:60,spe:38},{name:"steenee",type1:"Grass",type2:null,hp:52,atk:40,def:48,spa:40,spd:48,spe:62},{name:"lurantis",type1:"Grass",type2:null,hp:70,atk:105,def:90,spa:80,spd:90,spe:45}]},
      {name:"Sophocles",type:"Electric",team:[{name:"grubbin",type1:"Bug",type2:null,hp:47,atk:62,def:45,spa:55,spd:45,spe:46},{name:"charjabug",type1:"Bug",type2:"Electric",hp:57,atk:82,def:95,spa:55,spd:75,spe:36},{name:"togedemaru",type1:"Electric",type2:"Steel",hp:65,atk:98,def:63,spa:40,spd:73,spe:96}]},
      {name:"Acerola",type:"Ghost",team:[{name:"shuppet",type1:"Ghost",type2:null,hp:44,atk:75,def:35,spa:63,spd:33,spe:45},{name:"drifblim",type1:"Ghost",type2:"Flying",hp:150,atk:80,def:44,spa:90,spd:54,spe:80},{name:"gengar",type1:"Ghost",type2:"Poison",hp:60,atk:65,def:60,spa:130,spd:75,spe:110},{name:"mimikyu",type1:"Ghost",type2:"Fairy",hp:55,atk:90,def:80,spa:50,spd:105,spe:96}]},
      {name:"Mina",type:"Fairy",team:[{name:"granbull",type1:"Fairy",type2:null,hp:90,atk:120,def:75,spa:60,spd:60,spe:45},{name:"shiinotic",type1:"Grass",type2:"Fairy",hp:60,atk:45,def:80,spa:90,spd:100,spe:30},{name:"togekiss",type1:"Fairy",type2:"Flying",hp:85,atk:50,def:95,spa:120,spd:115,spe:80},{name:"sylveon",type1:"Fairy",type2:null,hp:95,atk:65,def:65,spa:110,spd:130,spe:60},{name:"ribombee",type1:"Bug",type2:"Fairy",hp:60,atk:55,def:60,spa:95,spd:70,spe:124}]},
      {name:"Hapu",type:"Ground",team:[{name:"dugtrio",type1:"Ground",type2:null,hp:35,atk:100,def:50,spa:50,spd:70,spe:120},{name:"gastrodon",type1:"Water",type2:"Ground",hp:111,atk:83,def:68,spa:92,spd:82,spe:39},{name:"flygon",type1:"Ground",type2:"Dragon",hp:80,atk:100,def:80,spa:80,spd:80,spe:100},{name:"mudsdale",type1:"Ground",type2:null,hp:100,atk:125,def:100,spa:55,spd:85,spe:35}]},
    ],
    elite4:[
      {name:"Hala",type:"Fighting",team:[{name:"hariyama",type1:"Fighting",type2:null,hp:144,atk:120,def:60,spa:40,spd:60,spe:50},{name:"crabominable",type1:"Fighting",type2:"Ice",hp:97,atk:132,def:77,spa:62,spd:67,spe:43},{name:"poliwrath",type1:"Water",type2:"Fighting",hp:90,atk:95,def:95,spa:70,spd:90,spe:70},{name:"bewear",type1:"Normal",type2:"Fighting",hp:120,atk:125,def:80,spa:55,spd:60,spe:60}]},
      {name:"Olivia",type:"Rock",team:[{name:"relicanth",type1:"Water",type2:"Rock",hp:100,atk:90,def:130,spa:45,spd:65,spe:55},{name:"probopass",type1:"Rock",type2:"Steel",hp:60,atk:55,def:145,spa:75,spd:150,spe:40},{name:"carbink",type1:"Rock",type2:"Fairy",hp:50,atk:50,def:150,spa:50,spd:150,spe:50},{name:"lycanroc",type1:"Rock",type2:null,hp:75,atk:115,def:65,spa:55,spd:65,spe:112}]},
      {name:"Acerola",type:"Ghost",team:[{name:"sableye",type1:"Dark",type2:"Ghost",hp:50,atk:75,def:75,spa:65,spd:65,spe:50},{name:"drifblim",type1:"Ghost",type2:"Flying",hp:150,atk:80,def:44,spa:90,spd:54,spe:80},{name:"froslass",type1:"Ice",type2:"Ghost",hp:70,atk:80,def:70,spa:80,spd:70,spe:110},{name:"palossand",type1:"Ghost",type2:"Ground",hp:85,atk:75,def:110,spa:100,spd:75,spe:35}]},
      {name:"Kahili",type:"Flying",team:[{name:"crobat",type1:"Poison",type2:"Flying",hp:85,atk:90,def:80,spa:70,spd:80,spe:130},{name:"skarmory",type1:"Steel",type2:"Flying",hp:65,atk:80,def:140,spa:40,spd:70,spe:70},{name:"mandibuzz",type1:"Dark",type2:"Flying",hp:110,atk:65,def:105,spa:55,spd:95,spe:80},{name:"oricorio",type1:"Fire",type2:"Flying",hp:75,atk:70,def:70,spa:98,spd:70,spe:93},{name:"toucannon",type1:"Normal",type2:"Flying",hp:80,atk:120,def:75,spa:75,spd:75,spe:60}]},
    ],
    champions:[
      {name:"Kukui",type:"Mixed",team:[{name:"lycanroc",type1:"Rock",type2:null,hp:75,atk:115,def:65,spa:55,spd:65,spe:112},{name:"ninetales",type1:"Ice",type2:"Fairy",hp:73,atk:76,def:75,spa:81,spd:100,spe:100},{name:"braviary",type1:"Normal",type2:"Flying",hp:100,atk:123,def:75,spa:57,spd:75,spe:80},{name:"magnezone",type1:"Electric",type2:"Steel",hp:70,atk:70,def:115,spa:130,spd:90,spe:60},{name:"snorlax",type1:"Normal",type2:null,hp:160,atk:110,def:65,spa:65,spd:110,spe:30},{name:"incineroar",type1:"Fire",type2:"Dark",hp:95,atk:115,def:90,spa:80,spd:90,spe:60}]},
    ],
  },
  gen8:{
    gyms:[
      {name:"Milo",type:"Grass",team:[{name:"gossifleur",type1:"Grass",type2:null,hp:40,atk:40,def:60,spa:40,spd:60,spe:10},{name:"eldegoss",type1:"Grass",type2:null,hp:60,atk:50,def:90,spa:80,spd:120,spe:60}]},
      {name:"Nessa",type:"Water",team:[{name:"goldeen",type1:"Water",type2:null,hp:45,atk:67,def:60,spa:35,spd:50,spe:63},{name:"arrokuda",type1:"Water",type2:null,hp:41,atk:63,def:40,spa:40,spd:30,spe:66},{name:"drednaw",type1:"Water",type2:"Rock",hp:90,atk:115,def:90,spa:48,spd:68,spe:74}]},
      {name:"Kabu",type:"Fire",team:[{name:"ninetales",type1:"Ice",type2:"Fairy",hp:73,atk:76,def:75,spa:81,spd:100,spe:100},{name:"arcanine",type1:"Fire",type2:null,hp:90,atk:110,def:80,spa:100,spd:80,spe:95},{name:"centiskorch",type1:"Fire",type2:"Bug",hp:100,atk:115,def:65,spa:90,spd:90,spe:65}]},
      {name:"Bea",type:"Fighting",team:[{name:"hitmontop",type1:"Fighting",type2:null,hp:50,atk:95,def:95,spa:35,spd:110,spe:70},{name:"pangoro",type1:"Fighting",type2:"Dark",hp:95,atk:124,def:78,spa:69,spd:71,spe:58},{name:"sirfetchd",type1:"Fighting",type2:null,hp:62,atk:135,def:95,spa:68,spd:82,spe:65},{name:"machamp",type1:"Fighting",type2:null,hp:90,atk:130,def:80,spa:65,spd:85,spe:55}]},
      {name:"Opal",type:"Fairy",team:[{name:"weezing",type1:"Poison",type2:null,hp:65,atk:90,def:120,spa:85,spd:70,spe:60},{name:"mawile",type1:"Steel",type2:"Fairy",hp:50,atk:85,def:85,spa:55,spd:55,spe:50},{name:"togekiss",type1:"Fairy",type2:"Flying",hp:85,atk:50,def:95,spa:120,spd:115,spe:80},{name:"alcremie",type1:"Fairy",type2:null,hp:65,atk:60,def:75,spa:110,spd:121,spe:64}]},
      {name:"Gordie",type:"Rock",team:[{name:"barbaracle",type1:"Rock",type2:"Water",hp:72,atk:105,def:115,spa:54,spd:86,spe:68},{name:"shuckle",type1:"Bug",type2:"Rock",hp:20,atk:10,def:230,spa:10,spd:230,spe:5},{name:"stonjourner",type1:"Rock",type2:null,hp:100,atk:125,def:135,spa:20,spd:20,spe:70},{name:"coalossal",type1:"Rock",type2:"Fire",hp:110,atk:80,def:120,spa:80,spd:90,spe:30}]},
      {name:"Piers",type:"Dark",team:[{name:"scrafty",type1:"Dark",type2:"Fighting",hp:65,atk:90,def:115,spa:45,spd:115,spe:58},{name:"malamar",type1:"Dark",type2:"Psychic",hp:86,atk:92,def:88,spa:68,spd:75,spe:73},{name:"skuntank",type1:"Poison",type2:"Dark",hp:103,atk:93,def:67,spa:71,spd:61,spe:84},{name:"obstagoon",type1:"Dark",type2:"Normal",hp:93,atk:90,def:101,spa:60,spd:81,spe:95}]},
      {name:"Raihan",type:"Dragon",team:[{name:"flygon",type1:"Ground",type2:"Dragon",hp:80,atk:100,def:80,spa:80,spd:80,spe:100},{name:"sandaconda",type1:"Ground",type2:null,hp:72,atk:107,def:125,spa:65,spd:70,spe:71},{name:"gigalith",type1:"Rock",type2:null,hp:85,atk:135,def:130,spa:60,spd:80,spe:25},{name:"duraludon",type1:"Steel",type2:"Dragon",hp:70,atk:95,def:115,spa:120,spd:50,spe:85}]},
    ],
    elite4:[
      {name:"Marnie",type:"Dark",team:[{name:"liepard",type1:"Dark",type2:null,hp:64,atk:88,def:50,spa:88,spd:50,spe:106},{name:"toxicroak",type1:"Poison",type2:"Fighting",hp:83,atk:106,def:65,spa:86,spd:65,spe:85},{name:"scrafty",type1:"Dark",type2:"Fighting",hp:65,atk:90,def:115,spa:45,spd:115,spe:58},{name:"morpeko",type1:"Electric",type2:"Dark",hp:58,atk:95,def:58,spa:70,spd:58,spe:97},{name:"grimmsnarl",type1:"Dark",type2:"Fairy",hp:95,atk:120,def:65,spa:95,spd:75,spe:60}]},
      {name:"Bede",type:"Fairy",team:[{name:"mawile",type1:"Steel",type2:"Fairy",hp:50,atk:85,def:85,spa:55,spd:55,spe:50},{name:"gardevoir",type1:"Psychic",type2:"Fairy",hp:68,atk:65,def:65,spa:125,spd:115,spe:80},{name:"rapidash",type1:"Fire",type2:null,hp:65,atk:100,def:70,spa:80,spd:80,spe:105},{name:"hatterene",type1:"Psychic",type2:"Fairy",hp:57,atk:90,def:95,spa:136,spd:103,spe:29}]},
      {name:"Hop",type:"Mixed",team:[{name:"dubwool",type1:"Normal",type2:null,hp:72,atk:80,def:100,spa:60,spd:90,spe:88},{name:"pincurchin",type1:"Electric",type2:null,hp:48,atk:101,def:95,spa:91,spd:85,spe:15},{name:"snorlax",type1:"Normal",type2:null,hp:160,atk:110,def:65,spa:65,spd:110,spe:30},{name:"corviknight",type1:"Flying",type2:"Steel",hp:98,atk:87,def:105,spa:53,spd:85,spe:67},{name:"rillaboom",type1:"Grass",type2:null,hp:100,atk:125,def:90,spa:60,spd:70,spe:85}]},
      {name:"Leon",type:"Mixed",team:[{name:"aegislash",type1:"Steel",type2:"Ghost",hp:60,atk:50,def:150,spa:50,spd:150,spe:60},{name:"haxorus",type1:"Dragon",type2:null,hp:76,atk:147,def:90,spa:60,spd:70,spe:97},{name:"dragapult",type1:"Dragon",type2:"Ghost",hp:88,atk:120,def:75,spa:100,spd:75,spe:142},{name:"rillaboom",type1:"Grass",type2:null,hp:100,atk:125,def:90,spa:60,spd:70,spe:85},{name:"mr-rime",type1:"Ice",type2:"Psychic",hp:80,atk:85,def:75,spa:110,spd:100,spe:70},{name:"charizard",type1:"Fire",type2:"Flying",hp:78,atk:84,def:78,spa:109,spd:85,spe:100}]},
    ],
    champions:[
      {name:"Leon",type:"Mixed",team:[{name:"aegislash",type1:"Steel",type2:"Ghost",hp:60,atk:50,def:150,spa:50,spd:150,spe:60},{name:"haxorus",type1:"Dragon",type2:null,hp:76,atk:147,def:90,spa:60,spd:70,spe:97},{name:"dragapult",type1:"Dragon",type2:"Ghost",hp:88,atk:120,def:75,spa:100,spd:75,spe:142},{name:"rillaboom",type1:"Grass",type2:null,hp:100,atk:125,def:90,spa:60,spd:70,spe:85},{name:"mr-rime",type1:"Ice",type2:"Psychic",hp:80,atk:85,def:75,spa:110,spd:100,spe:70},{name:"charizard",type1:"Fire",type2:"Flying",hp:78,atk:84,def:78,spa:109,spd:85,spe:100}]},
    ],
  },
};

const GENS=[
  {id:1,name:"Kanto",game:"Red/Blue",range:[1,151],enemyKey:"gen1"},
  {id:2,name:"Johto",game:"Gold/Silver",range:[152,251],enemyKey:"gen2"},
  {id:3,name:"Hoenn",game:"Ruby/Sapphire",range:[252,386],enemyKey:"gen3"},
  {id:4,name:"Sinnoh",game:"Diamond/Pearl",range:[387,493],enemyKey:"gen4"},
  {id:5,name:"Unova",game:"Black/White",range:[494,649],enemyKey:"gen5"},
  {id:6,name:"Kalos",game:"X/Y",range:[650,721],enemyKey:"gen6"},
  {id:7,name:"Alola",game:"Sun/Moon",range:[722,809],enemyKey:"gen7"},
  {id:8,name:"Galar",game:"Sword/Shield",range:[810,898],enemyKey:"gen8"},
];

const TYPE_CHART={Normal:{Rock:.5,Ghost:0,Steel:.5},Fire:{Fire:.5,Water:.5,Rock:.5,Dragon:.5,Grass:2,Ice:2,Bug:2,Steel:2},Water:{Water:.5,Grass:.5,Dragon:.5,Fire:2,Ground:2,Rock:2},Grass:{Fire:.5,Grass:.5,Poison:.5,Flying:.5,Bug:.5,Dragon:.5,Steel:.5,Water:2,Ground:2,Rock:2},Electric:{Grass:.5,Electric:.5,Dragon:.5,Ground:0,Flying:2,Water:2},Ice:{Water:.5,Ice:.5,Steel:.5,Fire:.5,Grass:2,Ground:2,Flying:2,Dragon:2},Fighting:{Poison:.5,Bug:.5,Psychic:.5,Flying:.5,Fairy:.5,Ghost:0,Normal:2,Ice:2,Rock:2,Dark:2,Steel:2},Poison:{Poison:.5,Ground:.5,Rock:.5,Ghost:.5,Steel:0,Grass:2,Fairy:2},Ground:{Grass:.5,Bug:.5,Flying:0,Fire:2,Electric:2,Poison:2,Rock:2,Steel:2},Flying:{Electric:.5,Rock:.5,Steel:.5,Grass:2,Fighting:2,Bug:2},Psychic:{Psychic:.5,Steel:.5,Dark:0,Fighting:2,Poison:2},Bug:{Fire:.5,Fighting:.5,Flying:.5,Ghost:.5,Steel:.5,Fairy:.5,Grass:2,Psychic:2,Dark:2},Rock:{Fighting:.5,Ground:.5,Steel:.5,Fire:2,Ice:2,Flying:2,Bug:2},Ghost:{Normal:0,Dark:.5,Psychic:2,Ghost:2},Dragon:{Steel:.5,Fairy:0,Dragon:2},Dark:{Fighting:.5,Dark:.5,Fairy:.5,Psychic:2,Ghost:2},Steel:{Fire:.5,Water:.5,Electric:.5,Steel:.5,Ice:2,Rock:2,Fairy:2},Fairy:{Fire:.5,Poison:.5,Steel:.5,Fighting:2,Dragon:2,Dark:2}};

// ── Helpers used in achievement checks ────────────────
// Check if all gyms in a region result were won
const _allGymsWon = r => r.battles.filter(b=>b.stage==="gym").every(b=>b.result==="win");
// Check if all elite 4 in a region were won
const _allE4Won = r => r.battles.filter(b=>b.stage==="elite4").every(b=>b.result==="win");
// Check if the champion in a region was beaten
const _champWon = r => r.battles.filter(b=>b.stage==="champion").every(b=>b.result==="win");

const ACHIEVEMENTS=[

  // ── Type team achievements ─────────────────────────
  {id:"lord_skies",   item:"sharp-beak",       name:"Lord of the Skies",    desc:"Draft a full Flying-type team",      hidden:false, check:(t,r)=>r.length>0&&t.every(p=>p.type1==="Flying"||p.type2==="Flying")},
  {id:"eternal_flame",item:"fire-stone",        name:"Eternal Flame",        desc:"Draft a full Fire-type team",        hidden:false, check:(t,r)=>r.length>0&&t.every(p=>p.type1==="Fire"||p.type2==="Fire")},
  {id:"tide_turner",  item:"water-stone",       name:"Tide Turner",          desc:"Draft a full Water-type team",       hidden:false, check:(t,r)=>r.length>0&&t.every(p=>p.type1==="Water"||p.type2==="Water")},
  {id:"shadow_realm", item:"spell-tag",         name:"Shadow Realm",         desc:"Draft a full Ghost-type team",       hidden:false, check:(t,r)=>r.length>0&&t.every(p=>p.type1==="Ghost"||p.type2==="Ghost")},
  {id:"thunder_god",  item:"thunder-stone",     name:"Thunder God",          desc:"Draft a full Electric-type team",    hidden:false, check:(t,r)=>r.length>0&&t.every(p=>p.type1==="Electric"||p.type2==="Electric")},
  {id:"frozen_throne",item:"never-melt-ice",    name:"Frozen Throne",        desc:"Draft a full Ice-type team",         hidden:false, check:(t,r)=>r.length>0&&t.every(p=>p.type1==="Ice"||p.type2==="Ice")},
  {id:"dragon_master",item:"dragon-scale",      name:"Dragon Master",        desc:"Draft a full Dragon-type team",      hidden:false, check:(t,r)=>r.length>0&&t.every(p=>p.type1==="Dragon"||p.type2==="Dragon")},

  // ── Stat achievements ──────────────────────────────
  {id:"engineered",   item:"master-ball",       name:"Perfectly Engineered", desc:"Draft a team with avg BST over 500",  hidden:false, check:(t,r)=>r.length>0&&t.reduce((s,p)=>s+p.baseTotal,0)/t.length>500},
  {id:"dark_horse",   item:"dusk-stone",        name:"Dark Horse",           desc:"Beat a region with avg BST under 380",hidden:false, check:(t,r)=>t.reduce((s,p)=>s+p.baseTotal,0)/t.length<380&&r.some(g=>_champWon(g))},
  {id:"flawless",     item:"gold-bottle-cap",   name:"Flawless Champion",    desc:"Complete a run with zero losses",     hidden:false, check:(t,r)=>r.length>0&&r.reduce((s,g)=>s+g.losses,0)===0},
  {id:"rock_solid",   item:"hard-stone",        name:"Rock Solid",           desc:"Beat a champion despite 5+ losses",   hidden:false, check:(t,r)=>r.reduce((s,g)=>s+g.losses,0)>=5&&r.some(g=>_champWon(g))},
  {id:"fates_champ",  item:"destiny-knot",      name:"Fate's Champion",      desc:"Complete a full run using Type Roll",  hidden:false, check:(t,r,m)=>m==="typeroll"&&r.length===8&&r.every(g=>_champWon(g))},

  // ── Per-region Champion achievements (single run) ──
  // item is a PokeAPI badge number (used differently from pokesprite items)
  {id:"champ_kanto",  badgeId:8,  name:"Kanto Champion",  desc:"Beat the Kanto champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===1&&_champWon(g))},
  {id:"champ_johto",  badgeId:16, name:"Johto Champion",  desc:"Beat the Johto champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===2&&_champWon(g))},
  {id:"champ_hoenn",  badgeId:24, name:"Hoenn Champion",  desc:"Beat the Hoenn champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===3&&_champWon(g))},
  {id:"champ_sinnoh", badgeId:32, name:"Sinnoh Champion", desc:"Beat the Sinnoh champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===4&&_champWon(g))},
  {id:"champ_unova",  badgeId:40, name:"Unova Champion",  desc:"Beat the Unova champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===5&&_champWon(g))},
  {id:"champ_kalos",  badgeId:48, name:"Kalos Champion",  desc:"Beat the Kalos champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===6&&_champWon(g))},
  {id:"champ_alola",  badgeId:null,name:"Alola Champion", desc:"Beat the Alola champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===7&&_champWon(g))},
  {id:"champ_galar",  badgeId:64, name:"Galar Champion",  desc:"Beat the Galar champion in a single run",  hidden:false, check:(t,r)=>r.some(g=>g.gen.id===8&&_champWon(g))},

  // ── Cross-region achievements (ALL run) ───────────
  {id:"gym_legend",   item:"key-item/vs-recorder",  name:"Gym Legend",      desc:"Win every gym across all 8 regions in one run",          hidden:false, check:(t,r)=>r.length===8&&r.every(g=>_allGymsWon(g))},
  {id:"elite_master", item:"hold-item/kings-rock",  name:"Elite Master",    desc:"Win every Elite 4 battle across all 8 regions in one run",hidden:false, check:(t,r)=>r.length===8&&r.every(g=>_allE4Won(g))},
  {id:"world_tour",   item:"key-item/exp-share",    name:"World Traveller", desc:"Beat every champion across all 8 regions in one run",    hidden:false, check:(t,r)=>r.length===8&&r.every(g=>_champWon(g))},
  {id:"loyal_team",   item:"ball/master",            name:"Loyal Bond",      desc:"Beat all 8 champions in one run keeping the same team",  hidden:false, check:(t,r,m)=>r.length===8&&r.every(g=>_champWon(g))&&m==="same"},
  {id:"fresh_start",  item:"hold-item/choice-scarf", name:"Fresh Start",    desc:"Beat all 8 champions in one run redrafting each region", hidden:false, check:(t,r,m)=>r.length===8&&r.every(g=>_champWon(g))&&m==="redraft"},

  // ── Pokédex achievements (all-time, checked via profile) ──
  // These are checked differently — in profile, not in game
  // check() receives (team, results, draftMode, dexCount)
  {id:"first_catch",  item:"ball/poke",              name:"First Catch",     desc:"Catch your first Pokémon",             hidden:false, check:(t,r,m,dex)=>dex>=1},
  {id:"collector",    item:"ball/great",             name:"Collector",       desc:"Catch 50 different Pokémon",           hidden:false, check:(t,r,m,dex)=>dex>=50},
  {id:"kanto_dex",    item:"ball/ultra",             name:"Kanto Complete",  desc:"Catch all 151 Kanto Pokémon",          hidden:false, check:(t,r,m,dex)=>dex>=151},
  {id:"half_dex",     item:"ball/dusk",              name:"Halfway There",   desc:"Catch 500 different Pokémon",          hidden:false, check:(t,r,m,dex)=>dex>=500},
  {id:"full_dex",     item:"ball/master",            name:"Pokédex Complete",desc:"Catch all 898 Pokémon",                hidden:false, check:(t,r,m,dex)=>dex>=898},

  // ── Shiny achievements ─────────────────────────────
  {id:"shiny_first",  item:"hold-item/kings-rock",   name:"A Gleam of Light",desc:"Find your first shiny Pokémon in a pool",hidden:false, check:(t,r,m,dex,shinies)=>shinies>=1},
  {id:"shiny_draft",  item:"hold-item/scope-lens",   name:"Shiny Hunter",   desc:"Draft a shiny Pokémon into your team",   hidden:false, check:(t,r)=>t.some(p=>p.shiny)},
  {id:"shiny_five",   item:"hold-item/lucky-egg",    name:"Fortune Favours", desc:"Find 5 shinies across all your runs",   hidden:false, check:(t,r,m,dex,shinies)=>shinies>=5},
  
  // ── Hard mode exclusive achievements ──────────────────
  // These only unlock when pkmnjourney_battlemode === "hard"
  // check() receives (team, results, draftMode, dexCount, shinyCount, battleMode)
  {id:"iron_will",    item:"hold-item/hard-stone",   name:"Iron Will",       desc:"Complete a full run without a single loss in Hard mode",           hidden:false, check:(t,r,m,d,s,bm)=>bm==="hard"&&r.length>0&&r.reduce((s,g)=>s+g.losses,0)===0&&r.every(g=>_champWon(g))},
  {id:"true_champ",   item:"ball/master",            name:"True Champion",   desc:"Beat all 8 champions in Hard mode",                                hidden:false, check:(t,r,m,d,s,bm)=>bm==="hard"&&r.length===8&&r.every(g=>_champWon(g))},
  {id:"glass_cannon", item:"hold-item/choice-specs", name:"Glass Cannon",    desc:"Beat a champion with avg team BST under 350 in Hard mode",         hidden:false, check:(t,r,m,d,s,bm)=>bm==="hard"&&t.reduce((s,p)=>s+p.baseTotal,0)/t.length<350&&r.some(g=>_champWon(g))},
  {id:"speed_runner", item:"hold-item/choice-scarf", name:"Speed Runner",    desc:"Beat a champion with every Pokémon having SPE over 100 in Hard mode",hidden:false, check:(t,r,m,d,s,bm)=>bm==="hard"&&t.every(p=>p.spe>100)&&r.some(g=>_champWon(g))},
  {id:"the_wall",     item:"hold-item/leftovers",    name:"The Wall",        desc:"Beat a champion with every Pokémon having DEF+SpD over 150 in Hard mode",hidden:false, check:(t,r,m,d,s,bm)=>bm==="hard"&&t.every(p=>(p.def+p.spd)>150)&&r.some(g=>_champWon(g))},
  
  // Hidden — draft a shiny legendary
  {id:"shiny_legend", item:"hold-item/light-clay",   name:"???",             desc:"???",                                    hidden:true,  check:(t,r)=>t.some(p=>p.shiny&&p.isLegendary)},
];

// Total non-hidden achievements (for profile display)
const ACHIEVEMENTS_TOTAL = ACHIEVEMENTS.filter(a=>!a.hidden).length;

// ── Badge & Sprite mappings ──────────────────────────
const GYM_BADGES = {
  // Kanto
  "Brock":1,"Misty":2,"Lt. Surge":3,"Erika":4,
  "Koga":5,"Sabrina":6,"Blaine":7,"Giovanni":8,
  // Johto
  "Falkner":9,"Bugsy":10,"Whitney":11,"Morty":12,
  "Chuck":13,"Jasmine":14,"Pryce":15,"Clair":16,
  // Hoenn
  "Roxanne":17,"Brawly":18,"Wattson":19,"Flannery":20,
  "Norman":21,"Winona":22,"Tate & Liza":23,"Juan":24,
  // Sinnoh
  "Roark":25,"Gardenia":26,"Maylene":27,"Crasher Wake":28,
  "Fantina":29,"Byron":30,"Candice":31,"Volkner":32,
  // Unova
  "Cheren":33,"Roxie":34,"Burgh":35,"Elesa":36,
  "Clay":37,"Skyla":38,"Drayden":40,"Marlon":null,
  // Kalos
  "Viola":41,"Grant":42,"Korrina":43,"Ramos":44,
  "Clemont":45,"Valerie":46,"Olympia":47,"Wulfric":48,
  // Alola (no badges — trials)
  "Ilima":null,"Lana":null,"Kiawe":null,"Mallow":null,
  "Sophocles":null,"Acerola":null,"Mina":null,"Hapu":null,
  // Galar
  "Milo":57,"Nessa":58,"Kabu":59,"Bea":60,
  "Opal":61,"Gordie":62,"Piers":63,"Raihan":64,
};

const TRAINER_SPRITES = {
  // Gen 1
  "Lorelei":"lorelei-gen3","Bruno":"bruno","Agatha":"agatha-gen3","Lance":"lance",
  "Blue (Bulbasaur)":"blue","Blue (Charmander)":"blue","Blue (Squirtle)":"blue",
  // Gen 2
  "Will":"will","Koga":"koga","Karen":"karen",
  // Gen 3
  "Sidney":"sidney","Phoebe":"phoebe-gen3","Glacia":"glacia","Drake":"drake-gen3","Steven":"steven",
  // Gen 4
  "Aaron":"aaron","Bertha":"bertha","Flint":"flint","Lucian":"lucian","Cynthia":"cynthia",
  // Gen 5
  "Shauntal":"shauntal","Marshal":"marshal","Grimsley":"grimsley","Caitlin":"caitlin","Iris":"iris",
  // Gen 6
  "Malva":"malva","Siebold":"siebold","Wikstrom":"wikstrom","Drasna":"drasna","Diantha":"diantha",
  // Gen 7
  "Hala":"hala","Olivia":"olivia","Acerola":"acerola","Kahili":"kahili","Kukui":"kukui",
  // Gen 8
  "Marnie":"marnie","Bede":"bede","Hop":"hop","Leon":"leon",
};