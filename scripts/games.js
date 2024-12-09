//Constante que almacena los nombres de las consolas que tenemos.
const consolas = ['PSX', 'N64', 'GBA', 'NDS', 'SNES', 'ARCADE', 'GENESIS', 'ATARI'];

//Constantes que almacenan los nombres de los juegos de su respectiva consola (con el que se referenciará al id en el html).
//Juegos PSX (PlayStation 1)
const juegospsx = ['APE ESCAPE', 'BATMAN Y ROBIN', 'BLADE', 'BLOODY ROAR 2', 'BUSHIDO BLADE', 'BUSHIDO BLADE 2', 'CASTLEVANIA SYMPHONY OF THE NIGHT', 'CLOCK TOWER',
  'COMMAND CONQUER', 'CRASH BANDICOOT', 'CRASH BANDICOOT 3', 'CRASH TEAM RACING', 'DIGIMON WORLD',
  'DRIVER 2', 'FIFA 2000', 'FIFA 2003', 'FINAL FANTASY VII', 'FORMULA 1 2001', 'GRAN TURISMO', 'HARRY POTTER Y LA PIEDRA FILOSOFAL', 'IRON SOLDIER 3',
  'LEGACY OF KAIN SOUL REAVER', 'MEDAL OF HONOR UNDERGROUND', 'MEGAMAN LEGENDS', 'MEGAMAN LEGENDS 2', 'METAL GEAR SOLID', 'RESIDENT EVIL', 'RESIDENT EVIL 2',
  'RESIDENT EVIL 3', 'RESIDENT EVIL SURVIVOR', 'SILENT HILL', 'SPIDER-MAN', 'SPIDER-MAN 2', 'SPYRO 1', 'SPYRO 2', 'SPYRO 3', 'SYPHON FILTER',
  'TEKKEN 3', 'TOMB RAIDER', 'TOMB RAIDER 2', 'TONY HAWKS PRO SKATER 2', 'VAGRANT STORY'];

//Juegos N64 (Nintendo 64)
const juegosn64 = ['40 WINKS', 'BANJO-TOOLE', 'DONKEY KONG 64', 'DUCK DODGERS', 'EARTHWORM JIM 3D', 'EL PATO DONALD', 'F1 RACING CHAMPIONSHIP', 'F1 WORLD GRAND PRIX', 'FIFA 1999', 'GEX 3', 'GOLDENEYE 007', 'HERCULES', 'MISION IMPOSIBLE', 'MORTAL KOMBAT TRILOGY',
  'OPERATION WINBACK', 'PERFECT DARK', 'QUAKE 2', 'RAYMAN 2', 'SAN FRANCISCO RUSH 2049', 'SHADOWGATE 64', 'SHADOW MAN', 'SUPERMAN', 'SUPER MARIO 64', 'SUPER SMASH BROS', 'WORMS ARMAGEDDON', 'WWF NO MERCY', 'YOSHI STORY', 'ZELDA OCARINA OF TIME'];

//Juegos GBS (Game Boy Advance)
const juegosgba = ['ALIEN HOMINID', 'CASTLEVANIA', 'DRAGON BALL ADVANCED ADVENTURE', 'DRAGON BALL Z SUPERSONIC WARRIORS',
  'FINAL FANTASY TACTICS ADVANCE', 'FIRE EMBLEM', 'GRAND THEFT AUTO ADVANCE', 'KINGDOM HEARTS CHAIN OF MEMORIES', 'METROID FUSION', 
  'KIRBY AND THE AMAZING MIRROR', 'POKEMON QUETZAL', 'POKEMON ROJO FUEGO', 'POKEMON ULTIMATE FUSION', 'PRINCE OF PERSIA THE SANDS OF TIME', 'SHINING SOUL',
  'SONIC ADVANCE 3', 'SWORD OF MANA', 'ULTIMATE SPIDER-MAN'];

//Juegos NDS (Nintendo DS)
const juegosnds = ['ANOTHER CODE', 'BOMBERMAN', 'CODIGO LYOKO', 'DRAGON BALL Z SUPERSONIC WARRIORS 2', 'HARRY POTTER Y EL CALIZ DE FUEGO',
  'HOTEL DUSK HABITACION 215', 'LAS CRONICAS DE NARNIA', 'LAST WINDOW THE SECRET OF CAPE WEST', 'LEGO BATMAN', 'LEGO BATMAN 2', 'LEGO EL SEÑOR DE LOS ANILLOS', 
  'LEGO HARRY POTTER 1-4', 'LEGO HARRY POTTER 5-7', 
  'LEGO INDIANA JONES', 'LEGO INDIANA JONES 2', 'LEGO LEGENDS OF CHIMA', 'LEGO MARVEL', 'LEGO NINJAGO', 'LEGO PIRATAS DEL CARIBE', 'LEGO STAR WARS', 'LEGO STAR WARS 2', 'LEGO STAR WARS 3', 'NEED FOR SPEED CARBON','NEED FOR SPEED UNDERGROUND 2','NEW SUPER MARIO BROS','NINTENDOGS', 
  'PHOENIX WRIGHT ACE ATTORNEY', 'PHOENIX WRIGHT ACE ATTORNEY JUSTICE FOR ALL', 'PHOENIX WRIGHT ACE ATTORNEY TRIALS AND TRIBULATIONS', 'PIRATAS DEL CARIBE EL COFRE DEL HOMBRE MUERTO', 'PIRATAS DEL CARIBE EN EL FIN DEL MUNDO', 'POKEMON BLAZE BLACK 2',
  'POKEMON EDICION BLANCA', 'POKEMON EDICION NEGRA', 'POKEMON PLATINO', 'POKEMON RANGER', 'RAYMAN DS', 'RESIDENT EVIL DEADLY SILENCE', 
  'SONIC RUSH', 'SONIC RUSH ADVENTURE', 'SPLINTER CELL CHAOS THEORY', 'SPYRO SHADOW LEGACY', 'SURFS UP', 'THE SIMS 2'];

//Juegos SNES (Super Nintendo)
const juegossnes = ['ALADDIN', 'ASTERIX', 'ASTERIX Y OBELIX', 'DONKEY KONG COUNTRY', 'EARTHBOUND', 'FINAL FIGHT 3', 'KING OF DRAGONS', 'KIRBY SUPER STAR', 
  'LAS AVENTURAS DE BATMAN Y ROBIN', 'MEGAMAN X', 'PUZZLE BOBBLE', 'SUNSET RIDERS', 'SUPER MARIO WORLD', 'TERRANIGMA', 
  'ULTIMATE MORTAL KOMBAT 3', 'WOLFENSTEIN 3D', 'X-MEN MUTANT APOCALYPSE'];

//Juegos Arcade
const juegosarcade = ['BUBBLE BOBBLE', 'DONKEY KONG', 'FROGGER', 'GALAGA', 'MARVEL VS CAPCOM', 'MEGA MAN', 'MORTAL KOMBAT', 'NEO BOMBERMAN', 'PAC-MAN', 'SPACE INVADERS', 'STREET FIGHTER', 'TETRIS'];

//Juegos Arcade
const juegosgenesis = ['ASTERIX Y EL PODER DE LOS DIOSES', 'EL PATO LUCAS EN HOLLYWOOD', 'FIFA 98', 'LIGHT CRUSADER', 'LOS PITUFOS', 'MARSUPILAMI', 'SONIC CLASSIC HEROES', 'SONIC GENERATIONS 2', 'SONIC THE HEDGEHOG', 'SONIC THE HEDGEHOG 2', 'SONIC THE HEDGEHOG 3', 'SONIC THE HEDGEHOG 3 Y KNUCKLES', 'SONIC Y KNUCKLES', 'WHERE IN THE WORLD IS CARMEN SANDIEGO'];

//Juegos Atari Jaguar
const juegosatari = ['ALIEN VS PREDATOR', 'CHECKERED FLAG', 'CLUB DRIVE', 'DOOM', 'DRAGON THE BRUCE LEE STORY', 'FIGHT FOR LIFE', 'IRON SOLDIER 1','IRON SOLDIER 2','POWER DRIVE RALLY', 'RAYMAN', 'TEMPEST 2000', 'WOLFENSTEIN 3D', 'ZOOL 2'];

//Array de te todos los juegos
const juegos = [juegospsx, juegosn64, juegosgba, juegosnds, juegossnes, juegosarcade, juegosgenesis, juegosatari];


//Constantes que almacenan los iframes de los juegos de su respectiva consola.
// Iframes PSX
const iframespsx = [
  '40196-ape-escape',
  '41597-batman-robin',
  '41615-blade',
  '41623-bloody-roar-2-bringer-of-new-age',
  '41636-bushido-blade',
  '41635-bushido-blade-2',
  '41504-castlevania-symphony-of-the-night',
  '41666-clock-tower-the-first-fear',
  '41679-command-conquer-red-alert',
  '40784-crash-bandicoot',
  '43627-crash-bandicoot-3-warped-europe-en-fr-de-es-it',
  '41687-crash-team-racing',
  '41731-digimon-world',
  '41742-driver-2-back-on-the-streets',
  '41776-fifa-2000',
  '41780-fifa-soccer-2003',
  '43658-final-fantasy-vii-usa-disc-1',
  '45186-formula-one-2001-europe-en-fi',
  '41826-gran-turismo',
  '45177-harry-potter-and-the-philosophers-stone-europe-en-fr-de',
  '41896-iron-soldier-3',
  '43155-legacy-of-kain-soul-reaver',
  '43154-medal-of-honor-underground',
  '40783-mega-man-legends',
  '42739-mega-man-legends-2',
  '43266-metal-gear-solid-disc-1',
  '42875-resident-evil',
  '42943-resident-evil-2-dual-shock-ver-disc-1-leon',
  '42155-resident-evil-3-nemesis-u',
  '41500-resident-evil-survivor',
  '41684-silent-hill',
  '41980-spider-man',
  '41981-spider-man-2-enter-electro',
  '40796-spyro-the-dragon',
  '40797-spyro-2-riptos-rage',
  '40798-spyro-3-year-of-the-dragon',
  '40805-syphon-filter',
  '40238-tekken-3',
  '42723-tomb-raider',
  '42724-tomb-raider-2',
  '42153-tony-hawks-pro-skater-2',
  '40117-vagrant-story'
];

// Iframes N64
const iframesn64 = [
  '32642-40-winks-europe-en-es-it-proto',
  '32908-banjo-tooie-europe-en-fr-de-es',
  '32252-donkey-kong-64-europe-en-fr-de-es',
  '32388-daffy-duck-starring-as-duck-dodgers-europe-en-fr-de-es-it-nl', 
  '32893-earthworm-jim-3d-europe-en-fr-de-es-it', 
  '32212-donald-duck-goin-quackers-usa-en-fr-de-es-it', 
  '32314-f1-racing-championship-europe-en-fr-de-es-it',
  '32662-f-1-world-grand-prix-europe',
  '32441-fifa-99-europe-en-fr-de-es-it-nl-pt-sv',
  '32598-gex-3-deep-cover-gecko-europe-en-es-it', 
  '32126-007-goldeneye-europe',
  '32627-hercules-the-legendary-journeys-europe-en-fr-de-es-it-nl',
  '32138-mission-impossible-spain', 
  '32167-mortal-kombat-trilogy-europe',
  '32206-operation-winback-europe-en-fr-de-es-it',
  '32497-perfect-dark-europe-en-fr-de-es-it', 
  '32282-quake-ii-europe',
  '32559-rayman-2-the-great-escape-usa-en-fr-de-es-it', 
  '32186-san-francisco-rush-2049-europe-en-fr-de-es-it-nl', 
  '32215-shadowgate-64-trials-of-the-four-towers-usa-en-es', 
  '32170-shadow-man-europe-en-es-it',
  '32913-superman-the-new-superman-aventures-usa-en-fr-es', 
  '42371-warped-worlds',
  '32117-super-smash-bros-usa',
  '32571-worms-armageddon-europe-en-fr-de-es-it-nl', 
  '32162-wwf-no-mercy-europe',
  '32116-yoshis-story-europe-en-fr-de',
  '44169-ocarina-of-time-redux'
];

// Iframes GBA
const iframesgba = [
  '42843-alien-hominid-europe-en-fr-de-es-it',
  '27883-2-in-1-castlevania-double-pack-e-rising-sun',
  '28994-dragon-ball-advanced-adventure-u-ongaku',
  '19537-dragonball-z-supersonic-warriors-e-rising-sun',
  '17590-final-fantasy-tactics-advance-e-surplus',
  '19510-fire-emblem-e-rising-sun',
  '26424-grand-theft-auto-advance-e-rising-sun',
  '26130-kingdom-hearts-chain-of-memories-e-eternity',
  '19385-kirby-and-the-amazing-mirror-e-rising-sun',
  '26543-metroid-fusion-e-flashadvance',
  '43512-pokemon-quetzal-alpha-0-6-4',
  '42834-pokemon-fire-red-extended-v2-0-4',
  '43408-pokemon-ultimate-fusion',
  '26217-prince-of-persia-the-sands-of-time-e-rising-sun',
  '16705-shining-soul-e-patience',
  '19452-sonic-advance-3-e-trashman',
  '17530-sword-of-mana-e-rising-sun',
  '17518-ultimate-spider-man-e-independent'
];

// Iframes NDS
const iframesnds = [
  '35191-another-code-two-memories-europe-en-fr-de-es-it',
  '35218-bomberman-europe-en-fr-de-es-it',
  '36224-code-lyoko-usa-en-fr-es',
  '35443-dragon-ball-z-supersonic-warriors-2-europe-en-fr-de-es-it',
  '35303-harry-potter-and-the-goblet-of-fire-europe-en-fr-de-es-it',
  '36139-hotel-dusk-room-215-europe-en-fr-de-es-it',
  '35312-chronicles-of-narnia-the-the-lion-the-witch-and-the-wardrobe-usa-en-fr-es-it-nl',
  '43319-last-window-the-secret-of-cape-west-europe-en-fr-de-es-it',
  '37833-lego-batman-the-videogame-usa-en-fr-es',
  '42017-lego-batman-2-dc-super-heroes-usa-en-fr-es-pt',
  '42770-lego-the-lord-of-the-rings-usa-en-fr-es-pt',
  '42090-lego-harry-potter-years-1-4-europe-en-fr-de-es-it-da',
  '42092-lego-harry-potter-years-5-7-usa-en-fr-es',
  '37471-lego-indiana-jones-the-original-adventures-usa-en-fr-de-es-it-da',
  '39630-lego-indiana-jones-2-the-adventure-continues-usa-en-fr-es',
  '44726-lego-legends-of-chima-laval-s-journey-usa-en-fr-es-pt',
  '42366-lego-marvel-super-heroes-universe-in-peril-usa-en-fr-es-pt',
  '44717-lego-ninjago-the-videogame-europe-en-fr-de-es-it-nl-da',
  '44719-lego-pirates-of-the-caribbean-the-video-game-usa-en-fr-es',
  '36772-lego-star-wars-the-complete-saga-europe-en-fr-de-es-it-da',
  '35701-lego-star-wars-ii-the-original-trilogy-europe-en-fr-de-es-it-da',
  '42925-lego-star-wars-iii-the-clone-wars-europe-en-fr-de-es-it-da',
  '35780-need-for-speed-carbon-own-the-city-europe-en-fr-de-es-it',
  '35180-need-for-speed-underground-2-europe-en-fr-de-es-it',
  '44400-new-super-mario-bros-adventure-normal',
  '35241-nintendogs-labrador-friends-europe-en-fr-de-es-it',
  '35844-phoenix-wright-ace-attorney-europe-de-es-it',
  '36065-phoenix-wright-ace-attorney-justice-for-all-europe-es-it',
  '37878-phoenix-wright-ace-attorney-trials-and-tribulations-europe-es-it',
  '35614-pirates-of-the-caribbean-dead-man-s-chest-usa-en-fr-de-es-it',
  '36233-pirates-of-the-caribbean-at-world-s-end-usa-en-fr-de-es-it-nl',
  '44648-pokemon-blaze-black-2-redux',
  '45050-pokemon-edicion-blanca-spain-ndsi-enhanced',
  '45051-pokemon-edicion-negra-spain-ndsi-enhanced',
  '43044-pokemon-platinum-version-usa-rev-1',
  '43442-pokemon-ranger-guardian-signs-europe-en-fr-de-es-it',
  '35186-rayman-ds-usa-en-fr-es',
  '35530-resident-evil-deadly-silence-europe-en-fr-de-es-it',
  '35316-sonic-rush-usa-en-ja-fr-de-es-it',
  '42074-sonic-rush-adventure-europe-en-ja-fr-de-es-it-rev-1',
  '35205-tom-clancy-s-splinter-cell-chaos-theory-europe-en-fr-de-es-it.',
  '35288-spyro-shadow-legacy-europe-en-fr-de-es-it-nl',
  '35797-sims-2-the-pets-usa-en-fr-de-es-it-nl'
];

// Iframes SNES
const iframessnes = [
  '23875-aladdin-spain',
  '19830-asterix-europe-en-fr-de-es',
  '22466-asterix-obelix-europe-en-fr-de-es',
  '23747-donkey-kong-country-europe-en-fr-de-rev-a', 
  '24789-earthbound-usa',
  '19951-final-fight-3-europe',
  '20211-king-of-dragons-the-europe',
  '24938-kirby-super-star-usa',
  '17021-adventures-of-batman-robin-the-europe',
  '16693-megaman-x-europe',
  '22796-puzzle-bobble-bust-a-move-europe',
  '19838-sunset-riders-europe',
  '44282-super-mario-world-u-prototype',
  '18686-terranigma-spain',
  '17359-ultimate-mortal-kombat-3-europe',
  '16834-wolfenstein-3d-europe',
  '16831-x-men-mutant-apocalypse-europe'
];

// Iframes Arcade
const iframesarcade = [
  '8011-bubble-bobble',
  '8301-donkey-kong-us-set-1',
  '8553-frogger',
  '8573-galaga-namco',
  '9123-marvel-vs-capcom-clash-of-super-heroes-980123-usa',
  '9138-mega-man-the-power-battle-951006-usa',
  '42476-mortal-kombat-rev-5-0-t-unit-03-19-93',
  '9293-neo-bomberman', 
  '9406-pac-man-midway-1',
  '34372-space-invaders-space-invaders-m',
  '8805-hyper-street-fighter-2%3A-the-anniversary-edition-031222-japan',
  '17612-tetris-usa'
];

// Iframes Genesis
const iframesgenesis = [
  '30468-asterix-and-the-power-of-the-gods-europe-en-fr-de-es',
  '30262-daffy-duck-in-hollywood-europe-en-fr-de-es-it',
  '30223-fifa-98-road-to-world-cup-europe-en-fr-es-it-sv',
  '17231-light-crusader-europe-en-fr-de-es',
  '28414-smurfs-the-europe-en-fr-de-es-it',
  '29868-marsupilami-usa-en-fr-de-es-it',
  '42046-sonic-classic-heroes',
  '42251-sonic-generations-2',
  '28249-sonic-the-hedgehog-usa-europe-hack-by-lost-v1-0-sonic-jam-s-easy-mode',
  '17236-sonic-the-hedgehog-2-world-rev-a',
  '30002-sonic-the-hedgehog-3-europe',
  '29209-sonic-knuckles-sonic-the-hedgehog-3-world',
  '28257-sonic-knuckles-world',
  '19010-where-in-the-world-is-carmen-sandiego-usa-europe-en-fr-de-es-it'
]

// Iframes atari jaguar
const iframesatari = [
  '34897-alien-vs-predator-world',
  '34925-checkered-flag-world',
  '34922-club-drive-world',
  '', //34891-doom-world
  '34909-dragon-the-bruce-lee-story-world',
  '34931-fight-for-life-world',
  '34924-iron-soldier-world-v1-04',
  '34889-iron-soldier-2-world',
  '34893-power-drive-rally-world',
  '34890-rayman-world',
  '34905-tempest-2000-world',
  '34937-wolfenstein-3d-world',
  '34903-zool-2-world'
];

//Array de todos los iframes
const iframes = [iframespsx, iframesn64, iframesgba, iframesnds, iframessnes, iframesarcade, iframesgenesis, iframesatari];