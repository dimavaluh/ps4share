
//link the fileSystem module
const fs = require('fs');

//array of the objects with unique games' ids. 
//to be noticed: its the raw and invalid json file that why we have to prosses it (what we do in the end of the file)
var idArr = [
{
id: 185,
name: "Bomb Jack"
},
{
id: 361,
name: "FantaVision"
},
{
id: 928,
name: "Solomon's Key"
},
{
id: 993,
name: "Okage: Shadow King"
},
{
id: 1063,
name: "Metal Slug 3"
},
{
id: 1272,
name: "Terra Cresta"
},
{
id: 1578,
name: "Resident Evil 4"
},
{
id: 1761,
name: "KiKi KaiKai"
},
{
id: 2077,
name: "The Mark of Kri"
},
{
id: 2414,
name: "Max Payne"
},
{
id: 2906,
name: "Psychonauts"
},
{
id: 3080,
name: "Rise of the Kasai"
},
{
id: 3329,
name: "Star Force"
},
{
id: 3623,
name: "Gradius II"
},
{
id: 4017,
name: "Star Wars: Jedi Starfighter"
},
{
id: 4209,
name: "Prototype"
},
{
id: 4247,
name: "Arc the Lad: Twilight of the Spirits"
},
{
id: 4372,
name: "Maniac Mansion: Day of the Tentacle"
},
{
id: 4816,
name: "Double Dragon II: The Revenge"
},
{
id: 4822,
name: "Wild Arms 3"
},
{
id: 5220,
name: "Wonder Boy"
},
{
id: 6108,
name: "Manhunt"
},
{
id: 6426,
name: "Twisted Metal: Black"
},
{
id: 6681,
name: "Devil May Cry 4"
},
{
id: 6936,
name: "Primal"
},
{
id: 7120,
name: "Grand Theft Auto: San Andreas"
},
{
id: 7250,
name: "Karate Champ"
},
{
id: 7451,
name: "Moon Cresta"
},
{
id: 7564,
name: "The Last Blade 2"
},
{
id: 7675,
name: "The Forest"
},
{
id: 7746,
name: "Star Wars: Racer Revenge"
},
{
id: 7940,
name: "Rogue Galaxy"
},
{
id: 10007,
name: "Dark Cloud 2"
},
{
id: 10051,
name: "PaRappa the Rapper 2"
},
{
id: 10247,
name: "Resident Evil 0"
},
{
id: 10281,
name: "Bully"
},
{
id: 10674,
name: "Garou: Mark of the Wolves"
},
{
id: 10701,
name: "The Legend of Kage"
},
{
id: 11700,
name: "Exerion"
},
{
id: 11758,
name: "Crimsonland"
},
{
id: 13053,
name: "Final Fantasy VII"
},
{
id: 13230,
name: "Grim Fandango"
},
{
id: 13232,
name: "City Connection"
},
{
id: 13960,
name: "Life Force"
},
{
id: 14450,
name: "Super Star Wars"
},
{
id: 14662,
name: "Scramble"
},
{
id: 15334,
name: "Crazy Climber"
},
{
id: 15508,
name: "Gradius"
},
{
id: 15728,
name: "The King of Fighters 2000"
},
{
id: 15784,
name: "Galaga"
},
{
id: 15836,
name: "D/Generation"
},
{
id: 15849,
name: "flOw"
},
{
id: 16206,
name: "The Warriors"
},
{
id: 17293,
name: "Alien Shooter"
},
{
id: 17483,
name: "Out of This World"
},
{
id: 17571,
name: "Star Wars: Bounty Hunter"
},
{
id: 18293,
name: "Renegade"
},
{
id: 18881,
name: "MagMax"
},
{
id: 19020,
name: "Metal Slug Anthology"
},
{
id: 19651,
name: "War of the Monsters"
},
{
id: 20461,
name: "God of War III"
},
{
id: 20569,
name: "Resident Evil 5"
},
{
id: 20654,
name: "Doom"
},
{
id: 20752,
name: "Double Dragon"
},
{
id: 20971,
name: "Valkyria Chronicles"
},
{
id: 20985,
name: "APB Reloaded"
},
{
id: 21006,
name: "Final Fantasy XV"
},
{
id: 21110,
name: "DC Universe Online"
},
{
id: 21120,
name: "Flower"
},
{
id: 21304,
name: "Heavy Rain"
},
{
id: 21464,
name: "Star Ocean: Second Evolution"
},
{
id: 21848,
name: "Final Fantasy Type-0"
},
{
id: 22198,
name: "Mr. Goemon"
},
{
id: 22314,
name: "A-Jax"
},
{
id: 23796,
name: "Arcania: Gothic 4"
},
{
id: 24081,
name: "Dreamfall Chapters"
},
{
id: 24301,
name: "The Unfinished Swan"
},
{
id: 24451,
name: "Kingdom Under Fire II"
},
{
id: 24739,
name: "Trine"
},
{
id: 24768,
name: "Fez"
},
{
id: 24783,
name: "Dragon Quest X: Mezameshi Itsutsu no Shuzoku Online"
},
{
id: 24999,
name: "Spelunky"
},
{
id: 25114,
name: "Super Meat Boy"
},
{
id: 25298,
name: "SuperHyperCube"
},
{
id: 25508,
name: "A Boy and His Blob"
},
{
id: 26331,
name: "Ultratron"
},
{
id: 26400,
name: "Thief"
},
{
id: 26513,
name: "The Last Guardian"
},
{
id: 26561,
name: "Rygar"
},
{
id: 26706,
name: "Shadow Complex"
},
{
id: 26847,
name: "Final Fantasy XIV Online: A Realm Reborn"
},
{
id: 26871,
name: "Hustle Kings"
},
{
id: 27028,
name: "Mirror's Edge Catalyst"
},
{
id: 27312,
name: "Tomb Raider"
},
{
id: 27578,
name: "Nioh"
},
{
id: 27668,
name: "The Witness"
},
{
id: 27691,
name: "Dust: An Elysian Tail"
},
{
id: 27715,
name: "Resident Evil"
},
{
id: 27866,
name: "Dead Nation"
},
{
id: 28141,
name: "Shantae: Risky's Revenge"
},






{
id: 28488,
name: "Angel Senki"
},
{
id: 29010,
name: "Scivelation"
},
{
id: 29025,
name: "PlanetSide 2"
},
{
id: 29132,
name: "Syberia III"
},
{
id: 29441,
name: "Sleeping Dogs"
},
{
id: 29745,
name: "VVVVVV"
},
{
id: 29941,
name: "Darksiders II"
},
{
id: 30060,
name: "Art Of Balance"
},
{
id: 30380,
name: "Limbo"
},
{
id: 30471,
name: "Miegakure"
},
{
id: 30475,
name: "Minecraft"
},
{
id: 30480,
name: "Lichdom: Battlemage"
},
{
id: 30486,
name: "Persona 5"
},
{
id: 30567,
name: "World of Tanks"
},
{
id: 30839,
name: "Mat Mania"
},
{
id: 31558,
name: "Retro City Rampage"
},
{
id: 31582,
name: "Skulls of the Shogun"
},
{
id: 31661,
name: "Trine 2"
},
{
id: 31772,
name: "Journey"
},
{
id: 32085,
name: "Bastion"
},
{
id: 32144,
name: "Jet Car Stunts"
},
{
id: 32284,
name: "EverQuest Next"
},
{
id: 32417,
name: "Neverwinter"
},
{
id: 32560,
name: "Puddle"
},
{
id: 32626,
name: "Doodle God"
},
{
id: 32660,
name: "Flak Attack"
},
{
id: 32712,
name: "Phantasy Star Online 2"
},
{
id: 32940,
name: "The Swapper"
},
{
id: 32945,
name: "Super Crate Box"
},
{
id: 33052,
name: "Prismatic Solid"
},
{
id: 33345,
name: "Prototype 2"
},
{
id: 33394,
name: "The Elder Scrolls V: Skyrim"
},
{
id: 33619,
name: "Score Rush"
},
{
id: 34082,
name: "Skullgirls"
},
{
id: 34205,
name: "The Walking Dead"
},
{
id: 34213,
name: "The Wolf Among Us"
},
{
id: 34320,
name: "Nidhogg"
},
{
id: 34407,
name: "Rocket League"
},
{
id: 34412,
name: "Hawken"
},
{
id: 34488,
name: "Titan Attacks!"
},
{
id: 34741,
name: "Touhou Sky Arena"
},
{
id: 34940,
name: "Terraria"
},
{
id: 35031,
name: "No Time to Explain"
},
{
id: 35377,
name: "Awesomenauts"
},
{
id: 35398,
name: "Dragon Age: Inquisition"
},
{
id: 35476,
name: "Crazy Climber 2"
},
{
id: 35487,
name: "Carmageddon: Reincarnation"
},
{
id: 35505,
name: "Sound Shapes"
},
{
id: 35611,
name: "Jamestown: Legend of the Lost Colony"
},
{
id: 35617,
name: "Gravity Rush"
},
{
id: 35619,
name: "ZombiU"
},
{
id: 35667,
name: "Ninja Senki"
},
{
id: 35687,
name: "Rainbow Moon"
},
{
id: 35702,
name: "Vendetta: Curse of Raven's Cry"
},
{
id: 35850,
name: "Dishonored"
},
{
id: 35877,
name: "Octodad: Dadliest Catch"
},
{
id: 35940,
name: "The Swindle"
},
{
id: 36067,
name: "Destiny"
},
{
id: 36090,
name: "Strike Suit Zero"
},
{
id: 36153,
name: "Escape Plan"
},
{
id: 36212,
name: "AeternoBlade"
},
{
id: 36230,
name: "Blacklight Retribution"
},
{
id: 36241,
name: "Smite"
},
{
id: 36260,
name: "Jetpack Joyride"
},
{
id: 36296,
name: "AirMech"
},
{
id: 36494,
name: "Kerbal Space Program"
},
{
id: 36627,
name: "The Witch and the Hundred Knight"
},
{
id: 36644,
name: "BIT.TRIP Presents: Runner2: Future Legend of Rhythm Alien"
},
{
id: 36683,
name: "Homefront: The Revolution"
},
{
id: 36713,
name: "Toki Tori 2"
},
{
id: 36763,
name: "Prison Architect"
},
{
id: 36765,
name: "Grand Theft Auto V"
},
{
id: 36777,
name: "The Pinball Arcade"
},
{
id: 36869,
name: "UnEpic"
},
{
id: 36884,
name: "Saints Row IV"
},
{
id: 36907,
name: "Maldita Castilla"
},
{
id: 36978,
name: "South Park: The Stick of Truth"
},
{
id: 36989,
name: "The Last of Us"
},
{
id: 36993,
name: "Project CARS"
},
{
id: 37022,
name: "Warriors Orochi 3"
},
{
id: 37093,
name: "Ikki"
},
{
id: 37243,
name: "Hatoful Boyfriend"
},
{
id: 37262,
name: "Deadlight"
},
{
id: 37273,
name: "Resident Evil 6"
},
{
id: 37330,
name: "Formation Armed F"
},
{
id: 37419,
name: "Super Time Force"
},
{
id: 37448,
name: "Broken Age"
},
{
id: 37591,
name: "Johann Sebastian Joust"
},
{
id: 37628,
name: "Loadout"
},
{
id: 37629,
name: "The Banner Saga"
},
{
id: 37669,
name: "Contrast"
},
{
id: 37690,
name: "Everybody's Gone to the Rapture"
},
{
id: 37707,
name: "Apotheon"
},
{
id: 37721,
name: "Wasteland 2"
},
{
id: 37794,
name: "Lone Survivor"
},
{
id: 37839,
name: "Starbound"
},
{
id: 37942,
name: "Zen Pinball 2"
},
{
id: 37963,
name: "Republique"
},
{
id: 37976,
name: "Axiom Verge"
},
{
id: 37999,
name: "Pure Chess"
},







{
id: 38006,
name: "Chivalry: Medieval Warfare"
},
{
id: 38141,
name: "Rayman Legends"
},
{
id: 38143,
name: "Air Conflicts: Pacific Carriers"
},
{
id: 38196,
name: "Yatagarasu"
},
{
id: 38206,
name: "The Elder Scrolls Online"
},
{
id: 38327,
name: "Gone Home"
},
{
id: 38394,
name: "Divekick"
},
{
id: 38446,
name: "Divinity: Original Sin"
},
{
id: 38450,
name: "Among The Sleep"
},
{
id: 38480,
name: "Injustice: Gods Among Us"
},
{
id: 38498,
name: "CastleStorm"
},
{
id: 38499,
name: "Human Element"
},
{
id: 38538,
name: "Watch Dogs"
},
{
id: 38541,
name: "Beyond: Two Souls"
},
{
id: 38596,
name: "Payday 2"
},
{
id: 38661,
name: "Splice"
},
{
id: 38664,
name: "Mercenary Kings"
},
{
id: 38666,
name: "HOKRA"
},
{
id: 38695,
name: "The Iconoclasts"
},
{
id: 38772,
name: "Journey Collector's Edition"
},
{
id: 38788,
name: "Warframe"
},
{
id: 38825,
name: "Thomas Was Alone"
},
{
id: 38860,
name: "Home"
},
{
id: 38889,
name: "Back to the Future: The Game"
},
{
id: 38893,
name: "KickBeat"
},
{
id: 38992,
name: "War Thunder"
},
{
id: 39001,
name: "Defense Grid 2"
},
{
id: 39010,
name: "Deadpool"
},
{
id: 39011,
name: "The Bridge"
},
{
id: 39035,
name: "Battlefield 4"
},
{
id: 39042,
name: "The Walking Dead: Season Two"
},
{
id: 39123,
name: "Samurai Warriors 4"
},
{
id: 39154,
name: "Unmechanical"
},
{
id: 39225,
name: "BlazBlue: Chrono Phantasma"
},
{
id: 39256,
name: "DayZ"
},
{
id: 39282,
name: "Foul Play"
},
{
id: 39358,
name: "Until Dawn"
},
{
id: 39452,
name: "Hotline Miami"
},
{
id: 39470,
name: "Crazy Strike Bowling"
},
{
id: 39473,
name: "Dragon Fantasy: Book II"
},
{
id: 39484,
name: "Giana Sisters: Twisted Dreams"
},
{
id: 39486,
name: "Broken Sword: The Serpent's Curse"
},
{
id: 39575,
name: "Metal Gear Solid V: Ground Zeroes"
},
{
id: 39576,
name: "Ironclad Tactics"
},
{
id: 39593,
name: "Knock-Knock"
},
{
id: 39614,
name: "1001 Spikes"
},
{
id: 39664,
name: "Don't Starve"
},
{
id: 39750,
name: "The Evil Within"
},
{
id: 39765,
name: "Nano Assault Neo"
},
{
id: 39777,
name: "Death Ray Manta"
},
{
id: 39813,
name: "Armello"
},
{
id: 39825,
name: "Slender: The Arrival"
},
{
id: 39854,
name: "Brothers: A Tale of Two Sons"
},
{
id: 39906,
name: "Aqua Kitty: Milk Mine Defender"
},
{
id: 39928,
name: "Oddworld: Abe's Oddysee New 'n' Tasty!"
},
{
id: 39945,
name: "Angry Birds: Star Wars"
},
{
id: 40050,
name: "Ninja-Kid II"
},
{
id: 40061,
name: "2 Fast 4 Gnomz"
},
{
id: 40089,
name: "Outlast"
},
{
id: 40253,
name: "Rock Boshers DX"
},
{
id: 40313,
name: "Dynasty Warriors 8"
},
{
id: 40319,
name: "Guns of Icarus Online"
},
{
id: 40371,
name: "Nom Nom Galaxy"
},
{
id: 40413,
name: "Pier Solar and the Great Architects"
},
{
id: 40416,
name: "Phantom Breaker: Battle Grounds"
},
{
id: 40417,
name: "Shantae and the Pirate's Curse"
},
{
id: 40443,
name: "BaraBariBall"
},
{
id: 40672,
name: "Stealth Bastard Deluxe"
},
{
id: 40680,
name: "Astebreed"
},
{
id: 40770,
name: "Ray's the Dead"
},
{
id: 40779,
name: "Distance"
},
{
id: 40796,
name: "Metal Gear Solid V: The Phantom Pain"
},
{
id: 40798,
name: "Dark Souls II"
},
{
id: 40865,
name: "The Binding of Isaac: Rebirth"
},
{
id: 40888,
name: "Hotline Miami 2: Wrong Number"
},
{
id: 41090,
name: "LEGO Marvel Super Heroes"
},
{
id: 41122,
name: "Lovers in a Dangerous Spacetime"
},
{
id: 41174,
name: "Ninja-Kid"
},
{
id: 41212,
name: "Xing"
},
{
id: 41238,
name: "Teslagrad"
},
{
id: 41357,
name: "Evolve"
},
{
id: 41394,
name: "Saturday Morning RPG"
},
{
id: 41419,
name: "Surgeon Simulator 2013"
},
{
id: 41459,
name: "Madden NFL 25"
},
{
id: 41484,
name: "The Witcher 3: Wild Hunt"
},
{
id: 41485,
name: "Skylanders SWAP Force"
},
{
id: 41506,
name: "The Vanishing of Ethan Carter"
},
{
id: 41510,
name: "McDroid"
},
{
id: 41518,
name: "Assassin's Creed IV: Black Flag"
},
{
id: 41520,
name: "Call of Duty: Ghosts"
},
{
id: 41524,
name: "Murdered: Soul Suspect"
},
{
id: 41535,
name: "Daylight"
},
{
id: 41550,
name: "Super Ubie Island"
},
{
id: 41559,
name: "Scram Kitty and his Buddy on Rails"
},
{
id: 41590,
name: "140"
},
{
id: 41604,
name: "Ether One"
},
{
id: 41650,
name: "There Came an Echo"
},
{
id: 41687,
name: "Knack"
},
{
id: 41690,
name: "Killzone: Shadow Fall"
},
{
id: 41693,
name: "Driveclub"
},







{
id: 41695,
name: "inFamous: Second Son"
},
{
id: 41696,
name: "Deep Down"
},
{
id: 41716,
name: "Rainbow Skies"
},
{
id: 41717,
name: "Super Motherload"
},
{
id: 41720,
name: "Rocketbirds 2: Evolution"
},
{
id: 41764,
name: "Cryamore"
},
{
id: 41785,
name: "Blood Bowl 2"
},
{
id: 41788,
name: "Anomaly 2"
},
{
id: 41791,
name: "Bound By Flame"
},
{
id: 41797,
name: "Putty Squad"
},
{
id: 41928,
name: "Sniper Elite III"
},
{
id: 41938,
name: "Forced"
},
{
id: 41970,
name: "Electronic Super Joy"
},
{
id: 41983,
name: "Rack N Ruin"
},
{
id: 41999,
name: "Nuclear Throne"
},
{
id: 42003,
name: "Chasm"
},
{
id: 42012,
name: "Transistor"
},
{
id: 42013,
name: "Final Fantasy X/X-2 HD Remaster"
},
{
id: 42020,
name: "Tiny Brains"
},
{
id: 42032,
name: "Cult County"
},
{
id: 42034,
name: "Shovel Knight"
},
{
id: 42045,
name: "Secret Ponchos"
},
{
id: 42074,
name: "Primal Carnage: Genesis"
},
{
id: 42088,
name: "Citizens of Earth"
},
{
id: 42090,
name: "Metrico"
},
{
id: 42113,
name: "Dungeon Defenders II"
},
{
id: 42154,
name: "5 Star Wrestling"
},
{
id: 42164,
name: "Organ Trail: Director's Cut"
},
{
id: 42167,
name: "YIIK: A Postmodern RPG"
},
{
id: 42170,
name: "Anima - Gate of Memories"
},
{
id: 42202,
name: "TimeSplitters Rewind"
},
{
id: 42232,
name: "Swimsanity"
},
{
id: 42239,
name: "Race the Sun"
},
{
id: 42278,
name: "Tower of Guns"
},
{
id: 42283,
name: "Super Mega Baseball"
},
{
id: 42298,
name: "Volgarr the Viking"
},
{
id: 42301,
name: "Nutjitsu"
},
{
id: 42361,
name: "Badland"
},
{
id: 42372,
name: "Wander"
},
{
id: 42410,
name: "FIFA 14"
},
{
id: 42503,
name: "Tennis in the Face"
},
{
id: 42514,
name: "Hellraid"
},
{
id: 42529,
name: "Risk of Rain"
},
{
id: 42581,
name: "Wolfenstein: The New Order"
},
{
id: 42584,
name: "Need for Speed Rivals"
},
{
id: 42585,
name: "CounterSpy"
},
{
id: 42589,
name: "Hohokum"
},
{
id: 42594,
name: "Doki-Doki Universe"
},
{
id: 42603,
name: "Armikrog"
},
{
id: 42608,
name: "Road Redemption"
},
{
id: 42610,
name: "Shadow Warrior"
},
{
id: 42628,
name: "Earthlock: Festival Of Magic"
},
{
id: 42632,
name: "NBA 2K14"
},
{
id: 42634,
name: "Nobunaga's Ambition: Sphere of Influence"
},
{
id: 42635,
name: "Paranautical Activity"
},
{
id: 42654,
name: "OlliOlli"
},
{
id: 42672,
name: "Lords of the Fallen"
},
{
id: 42679,
name: "Guilty Gear Xrd -SIGN-"
},
{
id: 42694,
name: "EA Sports UFC"
},
{
id: 42712,
name: "Dying Light"
},
{
id: 42717,
name: "N++"
},
{
id: 42722,
name: "Second Chance Heroes"
},
{
id: 42768,
name: "Wonder Flick"
},
{
id: 42828,
name: "Rogue Legacy"
},
{
id: 42847,
name: "Stick It to the Man!"
},
{
id: 42848,
name: "TowerFall"
},
{
id: 42858,
name: "Basement Crawl"
},
{
id: 42864,
name: "NBA Live 14"
},
{
id: 42875,
name: "Q.U.B.E. Director's Cut"
},
{
id: 42881,
name: "Hotch Kiss"
},
{
id: 42887,
name: "Plants vs. Zombies: Garden Warfare"
},
{
id: 42907,
name: "Just Dance 2014"
},
{
id: 42911,
name: "Peggle 2"
},
{
id: 42912,
name: "Star Wars Battlefront"
},
{
id: 42913,
name: "Rocksmith 2014"
},
{
id: 42914,
name: "The Crew"
},
{
id: 42915,
name: "Trials Fusion"
},
{
id: 42918,
name: "Tom Clancy's The Division"
},
{
id: 42922,
name: "The Order: 1886"
},
{
id: 42925,
name: "Galak-Z: The Dimensional"
},
{
id: 42926,
name: "Kingdom Hearts III"
},
{
id: 42927,
name: "Mad Max"
},
{
id: 42934,
name: "Warhammer 40,000: Eternal Crusade"
},
{
id: 43032,
name: "H-Hour: World's Elite"
},
{
id: 43040,
name: "Liege"
},
{
id: 43045,
name: "Soul Saga"
},
{
id: 43107,
name: "Invisible, Inc."
},
{
id: 43241,
name: "Ultra Street Fighter IV"
},
{
id: 43256,
name: "Disgaea 5: Alliance of Vengeance"
},
{
id: 43263,
name: "The LEGO Movie Videogame"
},
{
id: 43275,
name: "Strider"
},
{
id: 43290,
name: "Hand of Fate"
},
{
id: 43292,
name: "Bridge Constructor"
},
{
id: 43309,
name: "Cosmic Star Heroine"
},
{
id: 43323,
name: "Neverending Nightmares"
},
{
id: 43346,
name: "Broforce"
},
{
id: 43376,
name: "Escape Goat 2"
},
{
id: 43404,
name: "Landmark"
},
{
id: 43405,
name: "How to Survive"
},
{
id: 43416,
name: "SteamWorld Dig"
},






{
id: 43486,
name: "Battle Worlds: Kronos"
},
{
id: 43495,
name: "Tetrobot and Co."
},
{
id: 43501,
name: "Volume"
},
{
id: 43531,
name: "Aaru's Awakening"
},
{
id: 43533,
name: "Aztez"
},
{
id: 43535,
name: "Tropico 5"
},
{
id: 43536,
name: "Crypt of the NecroDancer"
},
{
id: 43540,
name: "Gravity Ghost"
},
{
id: 43541,
name: "Life Goes On"
},
{
id: 43545,
name: "Sportsfriends"
},
{
id: 43571,
name: "Full Mojo Rampage"
},
{
id: 43576,
name: "Ryu ga Gotoku Ishin!"
},
{
id: 43583,
name: "7 Days to Die"
},
{
id: 43609,
name: "EVE: Valkyrie"
},
{
id: 43611,
name: "Rime"
},
{
id: 43612,
name: "Child of Light"
},
{
id: 43613,
name: "Helldivers"
},
{
id: 43628,
name: "Resogun"
},
{
id: 43633,
name: "Shadow of the Beast"
},
{
id: 43634,
name: "Velocity 2X"
},
{
id: 43658,
name: "Dynasty Warriors 8: Xtreme Legends"
},
{
id: 43666,
name: "Assault Android Cactus"
},
{
id: 43667,
name: "Project Phoenix"
},
{
id: 43671,
name: "Kick & Fennick"
},
{
id: 43675,
name: "Switch Galaxy Ultra"
},
{
id: 43676,
name: "Flame Over"
},
{
id: 43677,
name: "Final Horizon"
},
{
id: 43678,
name: "Don't Die, Mr. Robot!"
},
{
id: 43727,
name: "Akiba's Trip: Undead & Undressed"
},
{
id: 43742,
name: "Chroma Squad"
},
{
id: 43784,
name: "Road Not Taken"
},
{
id: 43790,
name: "Mighty No. 9"
},
{
id: 43811,
name: "Space Hulk: Deathwing"
},
{
id: 43823,
name: "Shantae: 1/2 Genie Hero"
},
{
id: 43869,
name: "Pavilion"
},
{
id: 43879,
name: "Natural Doctrine"
},
{
id: 43883,
name: "Puyo Puyo Tetris"
},
{
id: 43885,
name: "Valiant Hearts: The Great War"
},
{
id: 43901,
name: "Air Conflicts: Vietnam"
},
{
id: 43902,
name: "Hyper Void"
},
{
id: 43923,
name: "Savant"
},
{
id: 43940,
name: "Hyper Light Drifter"
},
{
id: 43960,
name: "Cabela's African Adventures"
},
{
id: 43972,
name: "Gravity Rush 2"
},
{
id: 43982,
name: "The Fall"
},
{
id: 44020,
name: "Super Exploding Zoo"
},
{
id: 44036,
name: "MXGP"
},
{
id: 44063,
name: "Jazzpunk"
},
{
id: 44066,
name: "Dragon Fin Soup"
},
{
id: 44072,
name: "SOMA"
},
{
id: 44108,
name: "Marvel Puzzle Quest"
},
{
id: 44117,
name: "MouseCraft"
},
{
id: 44126,
name: "Blast 'Em Bunnies"
},
{
id: 44155,
name: "Sword Art Online: Hollow Fragment"
},
{
id: 44164,
name: "Randall"
},
{
id: 44203,
name: "Darkest Dungeon"
},
{
id: 44217,
name: "The Amazing Spider-Man 2"
},
{
id: 44231,
name: "SNOW"
},
{
id: 44258,
name: "Roundabout"
},
{
id: 44296,
name: "Alien: Isolation"
},
{
id: 44305,
name: "Blue Estate"
},
{
id: 44331,
name: "Dream C Club: Host Girls on Stage"
},
{
id: 44346,
name: "Rory McIlroy PGA Tour"
},
{
id: 44359,
name: "Castles in the Sky"
},
{
id: 44367,
name: "Draugen"
},
{
id: 44368,
name: "Videoball"
},
{
id: 44412,
name: "MLB 14: The Show"
},
{
id: 44425,
name: "Thumper"
},
{
id: 44436,
name: "Type:Rider"
},
{
id: 44445,
name: "Backgammon Blitz"
},
{
id: 44449,
name: "Mitsurugi Kamui Hikae"
},
{
id: 44484,
name: "Middle-earth: Shadow of Mordor"
},
{
id: 44507,
name: "Uncharted 4: A Thief's End"
},
{
id: 44517,
name: "Gran Turismo Sport"
},
{
id: 44652,
name: "LEGO The Hobbit"
},
{
id: 44653,
name: "Tales from the Borderlands"
},
{
id: 44655,
name: "Game of Thrones: A Telltale Game Series"
},
{
id: 44656,
name: "No Man's Sky"
},
{
id: 44657,
name: "Chaos;Child"
},
{
id: 44659,
name: "Ano Ko wa Ore kara Hanarenai"
},
{
id: 44683,
name: "Pure Pool"
},
{
id: 44717,
name: "Silence: The Whispered World 2"
},
{
id: 44720,
name: "Dex"
},
{
id: 44722,
name: "Tales of Zestiria"
},
{
id: 44748,
name: "Energy Hook"
},
{
id: 44778,
name: "Digimon Story: Cyber Sleuth"
},
{
id: 44790,
name: "Kingdom Come: Deliverance"
},
{
id: 44801,
name: "1993 Space Machine"
},
{
id: 44804,
name: "Grave"
},
{
id: 44806,
name: "Starwhal"
},
{
id: 44913,
name: "Get Even"
},
{
id: 44921,
name: "Nobunaga no Yabou Online"
},
{
id: 44976,
name: "King Oddball"
},
{
id: 44986,
name: "Night in the Woods"
},
{
id: 45034,
name: "Midwinter"
},
{
id: 45101,
name: "Catlateral Damage"
},
{
id: 45115,
name: "R.B.I. Baseball 14"
},
{
id: 45135,
name: "Kodoku"
},
{
id: 45139,
name: "Onigiri"
},
{
id: 45148,
name: "Call of Cthulhu - The Video Game"
},







{
id: 45150,
name: "Hitman"
},
{
id: 45160,
name: "Adam's Venture Chronicles"
},
{
id: 45194,
name: "Shutshimi"
},
{
id: 45206,
name: "The Golf Club"
},
{
id: 45213,
name: "Runemaster"
},
{
id: 45255,
name: "Airship Q"
},
{
id: 45277,
name: "Strike Vector"
},
{
id: 45293,
name: "Ready to Run"
},
{
id: 45333,
name: "WWE 2K15"
},
{
id: 45334,
name: "NBA 2K15"
},
{
id: 45343,
name: "Assassin's Creed: Freedom Cry"
},
{
id: 45359,
name: "Call of Duty: Advanced Warfare"
},
{
id: 45360,
name: "Gunsport"
},
{
id: 45386,
name: "Worms Battlegrounds"
},
{
id: 45403,
name: "Adr1ft"
},
{
id: 45405,
name: "Goat Simulator"
},
{
id: 45425,
name: "Gang Beasts"
},
{
id: 45430,
name: "Styx: Master of Shadows"
},
{
id: 45435,
name: "Transformers: Rise of the Dark Spark"
},
{
id: 45436,
name: "Nikoli no Puzzle 4: Sudoku"
},
{
id: 45437,
name: "Tottemo E Mahjong Plus"
},
{
id: 45443,
name: "Blade Arcus from Shining"
},
{
id: 45453,
name: "Futuridium EP Deluxe"
},
{
id: 45457,
name: "Tumblestone"
},
{
id: 45494,
name: "Ascendant"
},
{
id: 45517,
name: "Aqua Moto Racing Utopia"
},
{
id: 45518,
name: "The Chainsaw Incident"
},
{
id: 45525,
name: "Razor Global Domination Pro Tour"
},
{
id: 45536,
name: "Cel Damage HD"
},
{
id: 45541,
name: "Forma.8"
},
{
id: 45552,
name: "Riptide GP2"
},
{
id: 45566,
name: "Project Root"
},
{
id: 45577,
name: "Batman: Arkham Knight"
},
{
id: 45581,
name: "Shadow Blade"
},
{
id: 45583,
name: "Abyss Odyssey"
},
{
id: 45585,
name: "PixelJunk Shooter Ultimate"
},
{
id: 45589,
name: "Super Toy Cars"
},
{
id: 45591,
name: "Shaq Fu: A Legend Reborn"
},
{
id: 45601,
name: "Rollers of the Realm"
},
{
id: 45619,
name: "Assault Suit Leynos"
},
{
id: 45621,
name: "Revolver360 Re:Actor"
},
{
id: 45622,
name: "One Upon Light"
},
{
id: 45630,
name: "MotoGP 14"
},
{
id: 45634,
name: "Costume Quest 2"
},
{
id: 45643,
name: "Nova-111"
},
{
id: 45646,
name: "Tiny Troopers: Joint Ops"
},
{
id: 45648,
name: "Alone With You"
},
{
id: 45657,
name: "This War of Mine"
},
{
id: 45658,
name: "Firewatch"
},
{
id: 45691,
name: "Level 22"
},
{
id: 45705,
name: "Gauntlet"
},
{
id: 45722,
name: "Pixel Piracy"
},
{
id: 45729,
name: "Chariot"
},
{
id: 45730,
name: "Hover: Revolt of Gamers"
},
{
id: 45744,
name: "Assassin's Creed Unity"
},
{
id: 45746,
name: "Duck Game"
},
{
id: 45783,
name: "Don Bradman Cricket 14"
},
{
id: 45792,
name: "Quest of Dungeons"
},
{
id: 45802,
name: "Not a Hero"
},
{
id: 45819,
name: "The Hero Trap"
},
{
id: 45878,
name: "Source"
},
{
id: 45879,
name: "Spider: Rite of the Shrouded Moon"
},
{
id: 45884,
name: "Woah Dave!"
},
{
id: 45900,
name: "Manifold Garden"
},
{
id: 45901,
name: "Sentris"
},
{
id: 45904,
name: "Refactor"
},
{
id: 45908,
name: "We Are Doomed"
},
{
id: 45912,
name: "Toukiden Kiwami"
},
{
id: 45938,
name: "Super Pole Riders"
},
{
id: 45991,
name: "That Trivia Game"
},
{
id: 46005,
name: "Orcs Must Die! Unchained"
},
{
id: 46009,
name: "Disney Infinity: Marvel Super Heroes"
},
{
id: 46018,
name: "Rain World"
},
{
id: 46020,
name: "Hitman Go"
},
{
id: 46021,
name: "Curses 'N Chaos"
},
{
id: 46038,
name: "Heart Forth, Alicia"
},
{
id: 46070,
name: "Paperbound"
},
{
id: 46081,
name: "RocketsRocketsRockets"
},
{
id: 46094,
name: "Skylanders Trap Team"
},
{
id: 46101,
name: "The Girl and the Robot"
},
{
id: 46112,
name: "Infinity Runner"
},
{
id: 46117,
name: "The Last Tinker: City of Colors"
},
{
id: 46157,
name: "Madden NFL 15"
},
{
id: 46181,
name: "Flockers"
},
{
id: 46185,
name: "Drifter"
},
{
id: 46188,
name: "Croixleur Sigma"
},
{
id: 46189,
name: "Stealth Inc. 2: A Game of Clones"
},
{
id: 46211,
name: "Fenix Rage"
},
{
id: 46230,
name: "Pixel Noir"
},
{
id: 46241,
name: "To Leave"
},
{
id: 46242,
name: "NHL 15"
},
{
id: 46253,
name: "Sherlock Holmes: Crimes and Punishments"
},
{
id: 46255,
name: "Omega Quintet"
},
{
id: 46277,
name: "Never Alone"
},
{
id: 46289,
name: "Sparkle 2"
},
{
id: 46300,
name: "Diablo III: Ultimate Evil Edition"
},
{
id: 46307,
name: "Bombshell"
},
{
id: 46310,
name: "Far Cry 4"
},
{
id: 46311,
name: "VizionEck"
},
{
id: 46315,
name: "Kiss Bell"
},





{
id: 46319,
name: "Dragon Ball XenoVerse"
},
{
id: 46323,
name: "The Treasures of Montezuma 4"
},
{
id: 46328,
name: "FIFA 15"
},
{
id: 46378,
name: "Battle Chef Brigade"
},
{
id: 46379,
name: "SingStar: Ultimate Party"
},
{
id: 46389,
name: "Amplitude"
},
{
id: 46430,
name: "Lego Batman 3: Beyond Gotham"
},
{
id: 46431,
name: "Battlefield Hardline"
},
{
id: 46434,
name: "Killing Floor 2"
},
{
id: 46447,
name: "Mortal Kombat X"
},
{
id: 46455,
name: "Inside My Radio"
},
{
id: 46461,
name: "Psycho-Pass: Mandatory Happiness"
},
{
id: 46480,
name: "The Black Glove"
},
{
id: 46491,
name: "The Escapists"
},
{
id: 46492,
name: "Red Goddess: Inner World"
},
{
id: 46493,
name: "Gunship X"
},
{
id: 46502,
name: "One Way Trip"
},
{
id: 46503,
name: "EarthNight"
},
{
id: 46504,
name: "Dynasty Warriors 8: Empires"
},
{
id: 46516,
name: "MechRunner"
},
{
id: 46520,
name: "The Magic Circle"
},
{
id: 46521,
name: "NBA Live 15"
},
{
id: 46527,
name: "Tetris Ultimate"
},
{
id: 46535,
name: "The Book of Unwritten Tales 2"
},
{
id: 46549,
name: "Rise of the Tomb Raider"
},
{
id: 46556,
name: "Lara Croft and the Temple of Osiris"
},
{
id: 46559,
name: "Chromophore: The Two Brothers Director's Cut"
},
{
id: 46561,
name: "Just Dance 2015"
},
{
id: 46562,
name: "Tom Clancy's Rainbow Six: Siege"
},
{
id: 46563,
name: "White Night"
},
{
id: 46565,
name: "Entwined"
},
{
id: 46567,
name: "LittleBigPlanet 3"
},
{
id: 46568,
name: "inFamous: First Light"
},
{
id: 46569,
name: "Bloodborne"
},
{
id: 46570,
name: "Dead Island 2"
},
{
id: 46571,
name: "Magicka 2"
},
{
id: 46572,
name: "The Talos Principle"
},
{
id: 46573,
name: "Abzû"
},
{
id: 46574,
name: "Let It Die"
},
{
id: 46593,
name: "Nero"
},
{
id: 46605,
name: "Guns Up!"
},
{
id: 46608,
name: "The Assembly"
},
{
id: 46613,
name: "Pro Evolution Soccer 2015"
},
{
id: 46622,
name: "Titan Souls"
},
{
id: 46631,
name: "Mass Effect: Andromeda"
},
{
id: 46663,
name: "Megadimension Neptunia VII"
},
{
id: 46680,
name: "Tour de France 2014"
},
{
id: 46790,
name: "The Legend of Korra"
},
{
id: 46818,
name: "Bombing Bastards"
},
{
id: 46918,
name: "Killzone: Shadow Fall - Intercept"
},
{
id: 46940,
name: "Battleborn"
},
{
id: 46942,
name: "Action Henk"
},
{
id: 46943,
name: "Back to Bed"
},
{
id: 46983,
name: "Whispering Willows"
},
{
id: 46990,
name: "Q*bert: Rebooted"
},
{
id: 47021,
name: "Onechanbara Z2: Chaos"
},
{
id: 47042,
name: "Frozen Free Fall"
},
{
id: 47047,
name: "Tinertia"
},
{
id: 47109,
name: "Bladestorm: Nightmare"
},
{
id: 47146,
name: "LA Cops"
},
{
id: 47153,
name: "Lovely Planet"
},
{
id: 47154,
name: "Timespinner"
},
{
id: 47156,
name: "Overruled!"
},
{
id: 47176,
name: "Nikoli no Puzzle 4: Kakuro"
},
{
id: 47185,
name: "Stikbold!"
},
{
id: 47190,
name: "Screencheat"
},
{
id: 47192,
name: "RIVE: The Metal Wrecking, Robot Hacking Shooter"
},
{
id: 47195,
name: "The Walking Dead: Season Three"
},
{
id: 47199,
name: "Toto Temple Deluxe"
},
{
id: 47251,
name: "Letter Quest: Grimm's Journey"
},
{
id: 47261,
name: "Mega Coin Squad"
},
{
id: 47284,
name: "Xeodrifter"
},
{
id: 47289,
name: "Last Inua – An Arctic Adventure"
},
{
id: 47298,
name: "Toren"
},
{
id: 47308,
name: "Ziggurat"
},
{
id: 47310,
name: "Pneuma: Breath of Life"
},
{
id: 47324,
name: "#killallzombies"
},
{
id: 47326,
name: "Leo's Fortune"
},
{
id: 47329,
name: "Metro Redux"
},
{
id: 47335,
name: "M3 Sono Kuroki Hagane: Mission Memento Mori"
},
{
id: 47342,
name: "Life Is Strange"
},
{
id: 47349,
name: "Ninja Pizza Girl"
},
{
id: 47352,
name: "Geometry Wars 3: Dimensions"
},
{
id: 47353,
name: "King's Quest"
},
{
id: 47355,
name: "The Tomorrow Children"
},
{
id: 47357,
name: "Hollowpoint"
},
{
id: 47360,
name: "WiLD"
},
{
id: 47361,
name: "Tearaway Unfolded"
},
{
id: 47362,
name: "Alienation"
},
{
id: 47363,
name: "Hellblade"
},
{
id: 47365,
name: "Silent Hills"
},
{
id: 47375,
name: "Blues & Bullets"
},
{
id: 47376,
name: "Toy Soldiers: War Chest"
},
{
id: 47393,
name: "Pix the Cat"
},
{
id: 47394,
name: "In Space We Brawl"
},
{
id: 47395,
name: "Q.U.B.E. 2"
},
{
id: 47396,
name: "Ubusana"
},
{
id: 47403,
name: "Farming Simulator 15"
},
{
id: 47409,
name: "Attractio"
},
{
id: 47440,
name: "Close Castles"
},




{
id: 47449,
name: "Tharsis"
},
{
id: 47457,
name: "Extreme Exorcism"
},
{
id: 47468,
name: "Werewolf Island"
},
{
id: 47469,
name: "Mighty Gunvolt"
},
{
id: 47475,
name: "Resident Evil: Revelations 2"
},
{
id: 47476,
name: "Indie Assault"
},
{
id: 47494,
name: "Soul Axiom"
},
{
id: 47502,
name: "Bedlam"
},
{
id: 47551,
name: "Yakuza 0"
},
{
id: 47567,
name: "Pillar"
},
{
id: 47592,
name: "Spy Chameleon RGB Agent"
},
{
id: 47622,
name: "Randal's Monday"
},
{
id: 47637,
name: "Wild Season"
},
{
id: 47647,
name: "Lacrosse 15"
},
{
id: 47651,
name: "One Piece: Pirate Warriors 3"
},
{
id: 47654,
name: "Salt and Sanctuary"
},
{
id: 47663,
name: "Moon Hunters"
},
{
id: 47666,
name: "Collectems"
},
{
id: 47679,
name: "Saints Row: Gat Out of Hell"
},
{
id: 47682,
name: "Commander Cherry's Puzzled Journey"
},
{
id: 47683,
name: "Murasaki Mist: Akara's Journey"
},
{
id: 47716,
name: "Kyn"
},
{
id: 47719,
name: "Summer Lesson"
},
{
id: 47721,
name: "Earth Defense Force 4.1: The Shadow of New Despair"
},
{
id: 47722,
name: "Fairy Fencer F: Advent Dark Force"
},
{
id: 47723,
name: "Ys VIII: Lacrimosa of Dana"
},
{
id: 47724,
name: "God Eater 2: Rage Burst"
},
{
id: 47725,
name: "Senran Kagura: Estival Versus"
},
{
id: 47726,
name: "Dragon Quest Heroes: The World Tree’s Woe and the Blight Below"
},
{
id: 47753,
name: "Disney Infinity 3.0 Edition"
},
{
id: 47761,
name: "Fibbage"
},
{
id: 47763,
name: "The Legend of Lobodestroyo vs. La Liga de Los Villanos"
},
{
id: 47778,
name: "Aegis Defenders"
},
{
id: 47779,
name: "Worlds of Magic"
},
{
id: 47818,
name: "Dragon Quest XI: Sugisarishi Toki o Motomete"
},
{
id: 47822,
name: "Fragments of Him"
},
{
id: 47827,
name: "New Hot Shots Golf"
},
{
id: 47833,
name: "Duck Dynasty"
},
{
id: 47836,
name: "Mayan Death Robots"
},
{
id: 47839,
name: "Sengoku Hime 5: Senka Tatsu Haou no Keifu"
},
{
id: 47844,
name: "SteamWorld Heist"
},
{
id: 47862,
name: "Sword Art Online: Lost Song"
},
{
id: 47865,
name: "Klaus"
},
{
id: 47866,
name: "Touhou Genso Wanderer"
},
{
id: 47868,
name: "Giana Sisters 2"
},
{
id: 47870,
name: "Poltergeist: A Pixelated Horror"
},
{
id: 47872,
name: "Trine 3: The Artifacts of Power"
},
{
id: 47882,
name: "The Sun and Moon"
},
{
id: 47886,
name: "RIDE"
},
{
id: 47911,
name: "OlliOlli 2: Welcome to OlliWood"
},
{
id: 47913,
name: "Formula Fusion"
},
{
id: 47918,
name: "Adventures of Pip"
},
{
id: 47934,
name: "Viking Squad"
},
{
id: 47936,
name: "Shu"
},
{
id: 47966,
name: "Schrödinger's Cat and the Raiders of the Lost Quark"
},
{
id: 47969,
name: "Dead or Alive 5 Last Round"
},
{
id: 47970,
name: "Fluster Cluck"
},
{
id: 48003,
name: "BlazeRush"
},
{
id: 48005,
name: "Albedo: Eyes from Outer Space"
},
{
id: 48006,
name: "Children of Morta"
},
{
id: 48028,
name: "Tadeo Jones Y El Manuscrito Perdido"
},
{
id: 48036,
name: "Rugby 15"
},
{
id: 48041,
name: "Gunscape"
},
{
id: 48047,
name: "Nova 2001"
},
{
id: 48057,
name: "Rebel Galaxy"
},
{
id: 48076,
name: "I Am Bread"
},
{
id: 48099,
name: "Outlast 2"
},
{
id: 48104,
name: "Lost Sea"
},
{
id: 48113,
name: "Battlefield 1"
},
{
id: 48116,
name: "Battle Islands"
},
{
id: 48117,
name: "Four Sided Fantasy"
},
{
id: 48127,
name: "The Castle Game"
},
{
id: 48132,
name: "Friday the 13th: The Game"
},
{
id: 48156,
name: "Minutes"
},
{
id: 48190,
name: "Overwatch"
},
{
id: 48191,
name: "Tony Hawk's Pro Skater 5"
},
{
id: 48193,
name: "Rabbids Invasion: The Interactive TV Show"
},
{
id: 48203,
name: "Saints Row IV: Re-Elected"
},
{
id: 48205,
name: "Henka Twist Caper"
},
{
id: 48206,
name: "Speakeasy"
},
{
id: 48207,
name: "Just Cause 3"
},
{
id: 48209,
name: "Lost Orbit"
},
{
id: 48218,
name: "Capsule Force"
},
{
id: 48238,
name: "Monopoly Family Fun Pack"
},
{
id: 48240,
name: "Crossing Souls"
},
{
id: 48241,
name: "The Jackbox Party Pack"
},
{
id: 48243,
name: "Samurai Warriors 4-II"
},
{
id: 48247,
name: "Natsuiro High School: Seishun Hakusho"
},
{
id: 48266,
name: "Black Witchcraft"
},
{
id: 48267,
name: "Ender of Fire"
},
{
id: 48269,
name: "Qurare: Magic Library"
},
{
id: 48289,
name: "Motorcycle Club"
},
{
id: 48306,
name: "Assassin's Creed Syndicate"
},
{
id: 48310,
name: "Invokers Tournament"
},
{
id: 48312,
name: "Poncho"
},
{
id: 48313,
name: "Aegis of Earth: Protonovus Assault"
},
{
id: 48320,
name: "Street Fighter V"
},
{
id: 48326,
name: "The Banner Saga 2"
},
{
id: 48328,
name: "MLB 15: The Show"
},
{
id: 48329,
name: "What Remains of Edith Finch"
},






{
id: 48330,
name: "Drawn to Death"
},
{
id: 48332,
name: "Enter the Gungeon"
},
{
id: 48333,
name: "Wattam"
},
{
id: 48334,
name: "Fat Princess Adventures"
},
{
id: 48335,
name: "Skytorn"
},
{
id: 48344,
name: "Nitroplus Blasterz: Heroines Infinite Duel"
},
{
id: 48346,
name: "Three Fourths Home"
},
{
id: 48352,
name: "Color Guardians"
},
{
id: 48358,
name: "Naruto Shippuden: Ultimate Ninja Storm 4"
},
{
id: 48360,
name: "Zombie Vikings"
},
{
id: 48364,
name: "Krinkle Krusher"
},
{
id: 48399,
name: "JoJo's Bizarre Adventure: Eyes of Heaven"
},
{
id: 48400,
name: "Deception IV: The Nightmare Princess"
},
{
id: 48404,
name: "Risk"
},
{
id: 48413,
name: "Minecraft: Story Mode"
},
{
id: 48421,
name: "Sébastien Loeb Rally Evo"
},
{
id: 48423,
name: "Raiders5"
},
{
id: 48427,
name: "Kill Strain"
},
{
id: 48436,
name: "Tokyo Xanadu"
},
{
id: 48439,
name: "Devil May Cry 4: Special Edition"
},
{
id: 48441,
name: "Standpoint"
},
{
id: 48444,
name: "J-Stars Victory Vs+"
},
{
id: 48487,
name: "Funk of Titans"
},
{
id: 48488,
name: "Jotun"
},
{
id: 48505,
name: "Zheros"
},
{
id: 48507,
name: "Starlight Tactics"
},
{
id: 48510,
name: "Rugby League Live 3"
},
{
id: 48520,
name: "The Hum"
},
{
id: 48521,
name: "Kholat"
},
{
id: 48522,
name: "Zombie Army Trilogy"
},
{
id: 48538,
name: "Yu-No: Kono Yo no Hate de Koi o Utau Shoujo"
},
{
id: 48593,
name: "Shiftlings"
},
{
id: 48617,
name: "Vampyr"
},
{
id: 48618,
name: "Borderlands: The Handsome Collection"
},
{
id: 48619,
name: "Sengoku Basara 4 Sumeragi"
},
{
id: 48621,
name: "TorqueL"
},
{
id: 48622,
name: "Izle"
},
{
id: 48628,
name: "Infinifactory"
},
{
id: 48631,
name: "Grow Home"
},
{
id: 48671,
name: "Dragon's Dogma Online"
},
{
id: 48677,
name: "BlazBlue: Chrono Phantasma Extend"
},
{
id: 48680,
name: "LEGO Marvel's Avengers"
},
{
id: 48682,
name: "LEGO Jurassic World"
},
{
id: 48683,
name: "Gems of War"
},
{
id: 48685,
name: "Shusse Ozumo"
},
{
id: 48693,
name: "DmC Devil May Cry: Definitive Edition"
},
{
id: 48698,
name: "Monster Boy and the Wizard of Booze"
},
{
id: 48703,
name: "Spelunker World"
},
{
id: 48727,
name: "Ratchet & Clank"
},
{
id: 48754,
name: "Call of Duty: Black Ops III"
},
{
id: 48755,
name: "Warhammer: End Times – Vermintide"
},
{
id: 48756,
name: "Small Radios Big Televisions"
},
{
id: 48759,
name: "Super Stardust Ultra"
},
{
id: 48760,
name: "Necropolis"
},
{
id: 48782,
name: "Kromaia"
},
{
id: 48797,
name: "R.B.I. Baseball 2015"
},
{
id: 48823,
name: "Sword Coast Legends"
},
{
id: 48836,
name: "Paparazzi"
},
{
id: 48837,
name: "Trivial Pursuit Live!"
},
{
id: 48860,
name: "Troll and I"
},
{
id: 48901,
name: "Final Fantasy XIV: Heavensward"
},
{
id: 48935,
name: "Downwell"
},
{
id: 48942,
name: "AIPD: Artificial Intelligence Police Department"
},
{
id: 48943,
name: "Pure Hold'em"
},
{
id: 48948,
name: "Mutant Football League"
},
{
id: 48951,
name: "Boot Hill Heroes 2"
},
{
id: 48955,
name: "Submerged"
},
{
id: 48966,
name: "Hunger"
},
{
id: 48974,
name: "Super Rude Bear Resurrection"
},
{
id: 48981,
name: "Tabletop Cricket"
},
{
id: 48994,
name: "Beach Buggy Racing"
},
{
id: 48999,
name: "Velocibox"
},
{
id: 49000,
name: "Legend of Kay Anniversary"
},
{
id: 49009,
name: "Thief Town"
},
{
id: 49014,
name: "Gal Gun: Double Peace"
},
{
id: 49018,
name: "Aces of the Luftwaffe"
},
{
id: 49024,
name: "Ninjin: Clash of Carrots"
},
{
id: 49025,
name: "Soft Body"
},
{
id: 49031,
name: "Blood Alloy: Reborn"
},
{
id: 49033,
name: "Afro Samurai 2: Revenge of Kuma"
},
{
id: 49051,
name: "Super Dungeon Bros"
},
{
id: 49052,
name: "Magic Duels: Origins"
},
{
id: 49053,
name: "Beyond Eyes"
},
{
id: 49073,
name: "Wolfenstein: The Old Blood"
},
{
id: 49077,
name: "Rock Band 4"
},
{
id: 49101,
name: "New Danganronpa V3: Minna no Koroshiai Shingakki"
},
{
id: 49122,
name: "Dark Souls II: Scholar of the First Sin"
},
{
id: 49133,
name: "Tembo the Badass Elephant"
},
{
id: 49137,
name: "Butasan"
},
{
id: 49139,
name: "Titanfall 2"
},
{
id: 49140,
name: "fault -milestone one-"
},
{
id: 49158,
name: "Yooka-Laylee"
},
{
id: 49159,
name: "Guacamelee!: Super Turbo Championship Edition"
},
{
id: 49218,
name: "Yorbie"
},
{
id: 49229,
name: "Giana Sisters: Dream Runners"
},
{
id: 49237,
name: "Mystery Chronicle: One Way Heroics"
},
{
id: 49271,
name: "Ironcast"
},
{
id: 49272,
name: "MotoGP 15"
},
{
id: 49277,
name: "F1 2015"
},
{
id: 49281,
name: "Steins;Gate 0"
},








{
id: 49291,
name: "Brawl"
},
{
id: 49316,
name: "Assassin’s Creed Chronicles: India"
},
{
id: 49317,
name: "Assassin’s Creed Chronicles: Russia"
},
{
id: 49318,
name: "Assassin's Creed Chronicles: China"
},
{
id: 49322,
name: "Dragon Quest Heroes II"
},
{
id: 49323,
name: "Slain!"
},
{
id: 49330,
name: "Guns, Gore & Cannoli"
},
{
id: 49365,
name: "Ginger Beyond the Crystal"
},
{
id: 49366,
name: "Heart & Slash"
},
{
id: 49367,
name: "Castles"
},
{
id: 49369,
name: "Utawarerumono: Itsuwari no Kamen"
},
{
id: 49370,
name: "Godzilla"
},
{
id: 49379,
name: "Deus Ex: Mankind Divided"
},
{
id: 49396,
name: "LEGO Dimensions"
},
{
id: 49404,
name: "SmuggleCraft"
},
{
id: 49405,
name: "The Technomancer"
},
{
id: 49408,
name: "Saint Seiya: Soldiers’ Soul"
},
{
id: 49431,
name: "The Four Kings Casino & Slots"
},
{
id: 49436,
name: "Police 1013"
},
{
id: 49452,
name: "Square Heroes"
},
{
id: 49455,
name: "Guardians of the Forest"
},
{
id: 49458,
name: "Star Ocean: Integrity and Faithlessness"
},
{
id: 49459,
name: "Guitar Hero Live"
},
{
id: 49466,
name: "World War Toons"
},
{
id: 49483,
name: "Trans-Galactic Tournament"
},
{
id: 49506,
name: "Dungeons 2"
},
{
id: 49523,
name: "Adventure Time: Finn and Jake Investigations"
},
{
id: 49542,
name: "Overlord: Fellowship of Evil"
},
{
id: 49556,
name: "DiRT Rally"
},
{
id: 49560,
name: "Siralim"
},
{
id: 49569,
name: "Gundam: Battle Operation Next"
},
{
id: 49571,
name: "Maddening Overload"
},
{
id: 49573,
name: "Cosmophony"
},
{
id: 49586,
name: "Genso Rondo"
},
{
id: 49589,
name: "Sky Force Anniversary"
},
{
id: 49595,
name: "Kung Fu Panda: Showdown of Legendary Legends the Video Game"
},
{
id: 49597,
name: "Maihana Soumakyou: Uniting Barrage Action"
},
{
id: 49598,
name: "Need for Speed"
},
{
id: 49599,
name: "NBA Live 16"
},
{
id: 49600,
name: "Madden NFL 16"
},
{
id: 49601,
name: "FIFA 16"
},
{
id: 49602,
name: "NHL 16"
},
{
id: 49617,
name: "Arslan: The Warriors of Legend"
},
{
id: 49633,
name: "Bloodstained: Ritual of the Night"
},
{
id: 49634,
name: "Corridor Z"
},
{
id: 49642,
name: "ARK: Survival Evolved"
},
{
id: 49643,
name: "Nights of Azure"
},
{
id: 49668,
name: "Toro"
},
{
id: 49669,
name: "Steredenn"
},
{
id: 49684,
name: "Romance of the Three Kingdoms XIII"
},
{
id: 49777,
name: "Pro Evolution Soccer 2016"
},
{
id: 49784,
name: "Kung Fury: Street Rage"
},
{
id: 49786,
name: "Shanghai III"
},
{
id: 49787,
name: "Sparkle Unleashed"
},
{
id: 49817,
name: "XCOM 2"
},
{
id: 49821,
name: "Handball 16"
},
{
id: 49826,
name: "Sengoku Musou 4 Empires"
},
{
id: 49833,
name: "Fallout 4"
},
{
id: 49834,
name: "Skylanders SuperChargers"
},
{
id: 49843,
name: "Uncharted: The Nathan Drake Collection"
},
{
id: 49864,
name: "Yu-Gi-Oh! Legacy of the Duelist"
},
{
id: 49865,
name: "Hatoful Boyfriend: Holiday Star"
},
{
id: 49866,
name: "NBA 2K16"
},
{
id: 49869,
name: "Gnog"
},
{
id: 49874,
name: "Tales of Berseria"
},
{
id: 49878,
name: "Mega Man Legacy Collection"
},
{
id: 49880,
name: "Le Tour de France 2015"
},
{
id: 49884,
name: "Dark Souls III"
},
{
id: 49888,
name: "Grand Kingdom"
},
{
id: 49910,
name: "Shadow Warrior 2"
},
{
id: 49939,
name: "Transformers: Devastation"
},
{
id: 49953,
name: "Death's Gambit"
},
{
id: 49954,
name: "Dishonored 2"
},
{
id: 49965,
name: "Unravel"
},
{
id: 49967,
name: "For Honor"
},
{
id: 49968,
name: "South Park: The Fractured But Whole"
},
{
id: 49970,
name: "Just Dance 2016"
},
{
id: 49971,
name: "Trackmania Turbo"
},
{
id: 49972,
name: "Tom Clancy's Ghost Recon: Wildlands"
},
{
id: 49973,
name: "Horizon: Zero Dawn"
},
{
id: 49974,
name: "Final Fantasy VII Remake"
},
{
id: 49975,
name: "Shenmue III"
},
{
id: 49976,
name: "Battlezone"
},
{
id: 49977,
name: "Dreams"
},
{
id: 49978,
name: "Headmaster"
},
{
id: 49979,
name: "Rigs: Mechanized Combat League"
},
{
id: 49990,
name: "Wayward Sky"
},
{
id: 49998,
name: "NieR Automata"
},
{
id: 50001,
name: "I Am Setsuna"
},
{
id: 50003,
name: "World of Final Fantasy"
},
{
id: 50005,
name: "HUSH: Into The Darkness"
},
{
id: 50015,
name: "Sheltered"
},
{
id: 50020,
name: "Plants vs. Zombies: Garden Warfare 2"
},
{
id: 50025,
name: "Tachyon Project"
},
{
id: 50032,
name: "EITR"
},
{
id: 50041,
name: "Neon Chrome"
},
{
id: 50043,
name: "Pac-Man 256"
},
{
id: 50049,
name: "Mother Russia Bleeds"
},
{
id: 50075,
name: "Attacking Zegeta"
},
{
id: 50137,
name: "Maison de Maou"
},







{
id: 50138,
name: "Project CARS 2"
},
{
id: 50154,
name: "Atelier Sophie: The Alchemist of the Mysterious Book"
},
{
id: 50155,
name: "God Eater Resurrection"
},
{
id: 50156,
name: "Koihime Enbu"
},
{
id: 50180,
name: "The Walking Dead: Michonne"
},
{
id: 50183,
name: "Quiplash"
},
{
id: 50213,
name: "Punch Line"
},
{
id: 50231,
name: "RONIN"
},
{
id: 50245,
name: "Yasai Ninja"
},
{
id: 50246,
name: "Indivisible"
},
{
id: 50254,
name: "Cook, Serve, Delicious! 2!!"
},
{
id: 50255,
name: "Red Ash"
},
{
id: 50267,
name: "Cosmo Police Galivan"
},
{
id: 50273,
name: "Crows: Burning Edge"
},
{
id: 50275,
name: "WWE 2K16"
},
{
id: 50277,
name: "Myriad"
},
{
id: 50279,
name: "Butt Sniffin Pugs"
},
{
id: 50281,
name: "Super Impossible Road"
},
{
id: 50283,
name: "The Peanuts Movie: Snoopy's Grand Adventure"
},
{
id: 50284,
name: "Dragon Quest Builders"
},
{
id: 50339,
name: "BlazBlue: Central Fiction"
},
{
id: 50367,
name: "Moero!! Pro Yakyuu"
},
{
id: 50370,
name: "Hob"
},
{
id: 50388,
name: "Grand Ages: Medieval"
},
{
id: 50389,
name: "Odin Sphere Leifthrasir"
},
{
id: 50401,
name: "Bard's Gold"
},
{
id: 50417,
name: "The Dwarves"
},
{
id: 50419,
name: "Coffin Dodgers"
},
{
id: 50421,
name: "The Surge"
},
{
id: 50432,
name: "The Last of Us: Left Behind"
},
{
id: 50441,
name: "WRC 5"
},
{
id: 50442,
name: "Rugby World Cup 2015"
},
{
id: 50448,
name: "Exist Archive: The Other Side of the Sky"
},
{
id: 50449,
name: "Mafia III"
},
{
id: 50454,
name: "Zotrix"
},
{
id: 50456,
name: "Broken Bots"
},
{
id: 50465,
name: "Pang Adventures"
},
{
id: 50476,
name: "Guilty Gear Xrd -Revelator-"
},
{
id: 50492,
name: "Dead or Alive Xtreme 3: Fortune"
},
{
id: 50516,
name: "Attack on Titan"
},
{
id: 50519,
name: "Alekhine's Gun"
},
{
id: 50546,
name: "Ittle Dew 2"
},
{
id: 50551,
name: "Read Only Memories"
},
{
id: 50561,
name: "Ultimate Chicken Horse"
},
{
id: 50567,
name: "Check In, Knock Out"
},
{
id: 50571,
name: "FutureGrind"
},
{
id: 50605,
name: "Jenny LeClue"
},
{
id: 50616,
name: "Summon Night 6: Lost Borders"
},
{
id: 50636,
name: "Calvino Noir"
},
{
id: 50660,
name: "Party Hard"
},
{
id: 50675,
name: "MasterCube"
},
{
id: 50676,
name: "The Bread Pub Brawlers"
},
{
id: 50677,
name: "Tina's Toy Factory"
},
{
id: 50678,
name: "Dynamite Fishing: World Games"
},
{
id: 50691,
name: "PieceFall"
},
{
id: 50692,
name: "Bombing Busters"
},
{
id: 50698,
name: "Layers of Fear"
},
{
id: 50706,
name: "Hatsune Miku: Project Diva X"
},
{
id: 50713,
name: "Resident Evil Origins Collection"
},
{
id: 50745,
name: "Headlander"
},
{
id: 50749,
name: "Buff Knight Advanced"
},
{
id: 50790,
name: "Boss 101 with S.T.E.V.E. and Max"
},
{
id: 50807,
name: "Pumped BMX+"
},
{
id: 50808,
name: "Kamen Rider: Battride War Genesis"
},
{
id: 50852,
name: "Kitten Squad"
},
{
id: 50864,
name: "Stardust Vanguards"
},
{
id: 50872,
name: "The King of Fighters XIV"
},
{
id: 50873,
name: "Ryu ga Gotoku Kiwami"
},
{
id: 50874,
name: "Ryu ga Gotoku 6"
},
{
id: 50875,
name: "Umbrella Corps"
},
{
id: 50876,
name: "One Piece: Burning Blood"
},
{
id: 50877,
name: "Kingdom Hearts HD II.8: Final Chapter Prologue"
},
{
id: 50878,
name: "Hatsune Miku: Project Diva Future Tone"
},
{
id: 50879,
name: "13 Sentinels: Aegis Rim"
},
{
id: 50899,
name: "Stardew Valley"
},
{
id: 50996,
name: "Stories: The Path of Destinies"
},
{
id: 51006,
name: "Masquerada: Songs and Shadows"
},
{
id: 51021,
name: "Laserlife"
},
{
id: 51022,
name: "Penarium"
},
{
id: 51023,
name: "Rally Copters"
},
{
id: 51024,
name: "Battle Trivia Knockout"
},
{
id: 51026,
name: "Jikkyou Powerful Pro Yakyuu 2016"
},
{
id: 51035,
name: "Let's Sing 2016"
},
{
id: 51069,
name: "R.B.I. Baseball 16"
},
{
id: 51073,
name: "Fat City"
},
{
id: 51075,
name: "Drive!Drive!Drive!"
},
{
id: 51102,
name: "Far Cry: Primal"
},
{
id: 51103,
name: "The Jackbox Party Pack 2"
},
{
id: 51109,
name: "Dome City"
},
{
id: 51112,
name: "Dead Star"
},
{
id: 51175,
name: "Cryptark"
},
{
id: 51187,
name: "Goosebumps: The Game"
},
{
id: 51188,
name: "Sword Art Online: Hollow Realization"
},
{
id: 51219,
name: "Gemini: Heroes Reborn"
},
{
id: 51222,
name: "Super Mutant Alien Assault"
},
{
id: 51223,
name: "Chronicles of Teddy: Harmony of Exidus"
},
{
id: 51241,
name: "Home Free"
},
{
id: 51244,
name: "The Park"
},
{
id: 51246,
name: "Toto Temple Deluxe"
},
{
id: 51271,
name: "Dino Dini’s Kick Off Revival"
},






{
id: 51293,
name: "DarkEdeNight"
},
{
id: 51307,
name: "Dengeki Bunko: Fighting Climax Ignition"
},
{
id: 51338,
name: "Darius Burst: Chronicle Saviours"
},
{
id: 51339,
name: "Toukiden 2"
},
{
id: 51340,
name: "Winning Post 8 2016"
},
{
id: 51351,
name: "Detroit: Become Human"
},
{
id: 51352,
name: "Vector"
},
{
id: 51353,
name: "MatterFall"
},
{
id: 51355,
name: "Until Dawn: Rush of Blood"
},
{
id: 51395,
name: "Pocket God vs Desert Ashes"
},
{
id: 51397,
name: "MX vs. ATV Supercross Encore"
},
{
id: 51414,
name: "Paragon"
},
{
id: 51430,
name: "Smashing the Battle"
},
{
id: 51440,
name: "SkyScappers"
},
{
id: 51442,
name: "Let's Sing: Hits Français 2016"
},
{
id: 51470,
name: "Root Letter"
},
{
id: 51472,
name: "God Wars: Toki wo Koete"
},
{
id: 51541,
name: "EA Sports UFC 2"
},
{
id: 51568,
name: "Valkyria: Azure Revolution"
},
{
id: 51572,
name: "Dreamals"
},
{
id: 51629,
name: "Miko Mole"
},
{
id: 51656,
name: "Shakedown Hawaii"
},
{
id: 51676,
name: "Utawarerumono: Futari no Hakuoro"
},
{
id: 51677,
name: "Telltale's Game of Thrones: Season 2"
},
{
id: 51691,
name: "Tricky Towers"
},
{
id: 51692,
name: "Space Dave!"
},
{
id: 51715,
name: "Teenage Mutant Ninja Turtles: Mutants in Manhattan"
},
{
id: 51723,
name: "TRON RUN/r"
},
{
id: 51726,
name: "Batman: A Telltale Games Series"
},
{
id: 51734,
name: "Primal Carnage: Extinction"
},
{
id: 51735,
name: "Bound"
},
{
id: 51742,
name: "Rez Infinite"
},
{
id: 51743,
name: "Ace Combat 7"
},
{
id: 51744,
name: "Ni no Kuni II: Revenant Kingdom"
},
{
id: 51745,
name: "100ft Robot Golf"
},
{
id: 51749,
name: "Golem"
},
{
id: 51750,
name: "Eagle Flight"
},
{
id: 51751,
name: "Psychonauts in the Rhombus of Ruin"
},
{
id: 51756,
name: "Brunswick Pro Bowling"
},
{
id: 51758,
name: "MLB The Show 16"
},
{
id: 51760,
name: "The BIT.TRIP"
},
{
id: 51766,
name: "Job Simulator: The 2050 Archives"
},
{
id: 51767,
name: "The Modern Zombie Taxi Co."
},
{
id: 51788,
name: "Killing Bites"
},
{
id: 51829,
name: "Brut@l"
},
{
id: 51837,
name: "Tekken 7: Fated Retribution"
},
{
id: 51895,
name: "Project City Shrouded in Shadow"
},
{
id: 51896,
name: "Zettai Zetsumei Toshi 4 Plus: Summer Memories"
},
{
id: 51932,
name: "Sengoku Basara: Sanada Yukimura-Den"
},
{
id: 51935,
name: "SD Gundam G Generation Genesis"
},
{
id: 51965,
name: "Little Devil Inside"
},
{
id: 51972,
name: "Emily Wants to Play"
},
{
id: 51989,
name: "Sydney Hunter and the Curse of the Mayans"
},
{
id: 52204,
name: "Hardware: Rivals"
},
{
id: 52209,
name: "Snow Moto Racing Freedom"
},
{
id: 52245,
name: "Act It Out! A Game of Charades"
},
{
id: 52263,
name: "Psychonauts 2"
},
{
id: 52277,
name: "Push Me Pull You"
},
{
id: 52278,
name: "Oxenfree"
},
{
id: 52285,
name: "Dogchild"
},
{
id: 52304,
name: "Furi"
},
{
id: 52339,
name: "Amazing Discoveries In Outer Space"
},
{
id: 52371,
name: "The Deadly Tower of Monsters"
},
{
id: 52372,
name: "Baseball Riot"
},
{
id: 52455,
name: "Wondershot"
},
{
id: 52456,
name: "101 Ways to Die"
},
{
id: 52468,
name: "Dangerous Golf"
},
{
id: 52482,
name: "Chaos Code: New Sign of Catastrophe"
},
{
id: 52487,
name: "Song of the Deep"
},
{
id: 52512,
name: "Livelock"
},
{
id: 52537,
name: "LEGO Star Wars: The Force Awakens"
},
{
id: 52538,
name: "Black Rose Valkyrie"
},
{
id: 52579,
name: "Rugby Challenge 3"
},
{
id: 52596,
name: "Obliteracers"
},
{
id: 52605,
name: "Trial by Viking"
},
{
id: 52609,
name: "Agatha Christie: The ABC Murders"
},
{
id: 52616,
name: "MOP: Operation Cleanup"
},
{
id: 52625,
name: "ArmaGallant: Decks of Destiny"
},
{
id: 52633,
name: "Call of Duty: Infinite Warfare"
},
{
id: 52692,
name: "H1Z1: King of the Kill"
},
{
id: 52701,
name: "Sniper: Ghost Warrior 3"
},
{
id: 52704,
name: "Replay: VHS is Not Dead"
},
{
id: 52705,
name: "Chasing Dead"
},
{
id: 52718,
name: "Super Robot Taisen OG: The Moon Dwellers"
},
{
id: 52756,
name: "Kid no Horehore Daisakusen"
},
{
id: 52764,
name: "Insurgency: Sandstorm"
},
{
id: 52777,
name: "Shadwen"
},
{
id: 52781,
name: "The Church in the Darkness"
},
{
id: 52907,
name: "Adam's Venture: Origins"
},
{
id: 52953,
name: "Sniper Elite 4"
},
{
id: 52956,
name: "RETSNOM"
},
{
id: 52963,
name: "Divide"
},
{
id: 52978,
name: "Pankapu: The Dreamkeeper"
},
{
id: 52982,
name: "Gundam Breaker 3"
},
{
id: 53010,
name: "Dreii"
},
{
id: 53011,
name: "Tetraminos"
},
{
id: 53043,
name: "The Playroom VR"
},
{
id: 53044,
name: "PlayStation VR Worlds"
},
{
id: 53045,
name: "Tumble VR"
},
{
id: 53073,
name: "The Playroom"
},






{
id: 53078,
name: "Skylar & Plux: Adventure on Clover Island"
},
{
id: 53235,
name: "Death Squared"
},
{
id: 53244,
name: "NeuroVoider"
},
{
id: 53251,
name: "LastFight"
},
{
id: 53253,
name: "Racers:Dirt"
},
{
id: 53260,
name: "Shin Hayarigami 2"
},
{
id: 53264,
name: "Graceful Explosion Machine"
},
{
id: 53268,
name: "Children of Zodiarcs"
},
{
id: 53272,
name: "Candlelight"
},
{
id: 53273,
name: "Joe Dever's Lone Wolf HD Remastered"
},
{
id: 53274,
name: "Lumo"
},
{
id: 53283,
name: "Hue"
},
{
id: 53284,
name: "Overcooked!"
},
{
id: 53285,
name: "Atom Universe"
},
{
id: 53286,
name: "Unbox"
},
{
id: 53287,
name: "Sangoku Musou: Eiketsuden"
},
{
id: 53373,
name: "Manual Samuel"
},
{
id: 53392,
name: "MXGP2 - The Official Motocross Videogame"
},
{
id: 53396,
name: "Seraph"
},
{
id: 53436,
name: "Pyre"
},
{
id: 53438,
name: "LOUD on Planet X"
},
{
id: 53468,
name: "Featherpunk Prime"
},
{
id: 53487,
name: "Prominence Poker"
},
{
id: 53489,
name: "My Night Job"
},
{
id: 53503,
name: "The Huntsman: Winter's Curse"
},
{
id: 53515,
name: "Battle Ages"
},
{
id: 53544,
name: "Hasbro Family Fun Pack"
},
{
id: 53547,
name: "Sherlock Holmes: The Devil’s Daughter"
},
{
id: 53558,
name: "Pharaonic"
},
{
id: 53566,
name: "Fate/Extella"
},
{
id: 53567,
name: "Valley"
},
{
id: 53574,
name: "Nikoli no Puzzle 4: Museum"
},
{
id: 53576,
name: "Stern Pinball Arcade"
},
{
id: 53585,
name: "N.E.R.O.: Nothing Ever Remains Obscure"
},
{
id: 53599,
name: "Table Top Racing: World Tour"
},
{
id: 53624,
name: "A Duel Hand Disaster: Trackher"
},
{
id: 53649,
name: "10 Second Ninja X"
},
{
id: 53652,
name: "The Long Journey Home"
},
{
id: 53653,
name: "AER"
},
{
id: 53662,
name: "Everything"
},
{
id: 53667,
name: "Realm: Walk of Soul"
},
{
id: 53669,
name: "Fated: The Silent Oath"
},
{
id: 53690,
name: "White Day: Swan Song"
},
{
id: 53697,
name: "Cubikolor"
},
{
id: 53711,
name: "Windscape"
},
{
id: 53723,
name: "Super Treasure Arena"
},
{
id: 53724,
name: "Dungeon Punks"
},
{
id: 53732,
name: "Wild Guns Reloaded"
},
{
id: 53735,
name: "Fear Effect: Sedna"
},
{
id: 53742,
name: "Monsters & Monocles"
},
{
id: 53774,
name: "Valentino Rossi The Game"
},
{
id: 53779,
name: "Dead Island: Definitive Collection"
},
{
id: 53785,
name: "Dead Island Retro Revenge"
},
{
id: 53793,
name: "Blade Ballet"
},
{
id: 53804,
name: "In the Shadows"
},
{
id: 53806,
name: "Dragon Ball Xenoverse 2"
},
{
id: 53814,
name: "Dollhouse"
},
{
id: 53902,
name: "Dead Years"
},
{
id: 53908,
name: "Let Them Come"
},
{
id: 53965,
name: "Batman: Return to Arkham"
},
{
id: 53972,
name: "Atelier Firis: The Alchemist of the Mysterious Journey"
},
{
id: 54007,
name: "Hard Reset: Redux"
},
{
id: 54013,
name: "Harmonix Music VR"
},
{
id: 54030,
name: "F1 2016"
},
{
id: 54031,
name: "Agony"
},
{
id: 54056,
name: "Akiba’s Beat"
},
{
id: 54057,
name: "RISE: Race The Future"
},
{
id: 54062,
name: "Madden NFL 17"
},
{
id: 54066,
name: "Watch Dogs 2"
},
{
id: 54071,
name: "Skylanders Imaginators"
},
{
id: 54102,
name: "Atari Flashback Classics vol. 1"
},
{
id: 54103,
name: "Atari Flashback Classics vol. 2"
},
{
id: 54110,
name: "Absolver"
},
{
id: 54111,
name: "Chambara"
},
{
id: 54121,
name: "Final Fantasy XII: The Zodiac Age"
},
{
id: 54123,
name: "Agents of Mayhem"
},
{
id: 54134,
name: "FIFA 17"
},
{
id: 54142,
name: "Loot Rascals"
},
{
id: 54143,
name: "Aragami"
},
{
id: 54144,
name: "Injustice 2"
},
{
id: 54147,
name: "EA Sports NHL 17"
},
{
id: 54149,
name: "WRC 6"
},
{
id: 54151,
name: "Farming Simulator 17"
},
{
id: 54166,
name: "Gwent: The Witcher Card Game"
},
{
id: 54168,
name: "Super Robot Taisen V"
},
{
id: 54171,
name: "Ride 2"
},
{
id: 54178,
name: "Ghostbusters"
},
{
id: 54179,
name: "Pro Evolution Soccer 2017"
},
{
id: 54180,
name: "Worms W.M.D"
},
{
id: 54181,
name: "Styx: Shards of Darkness"
},
{
id: 54194,
name: "Star Trek: Bridge Crew"
},
{
id: 54199,
name: "Yesterday Origins"
},
{
id: 54200,
name: "Moto Racer 4"
},
{
id: 54211,
name: "Prey"
},
{
id: 54212,
name: "Berserk Musou"
},
{
id: 54221,
name: "Just Dance 2017"
},
{
id: 54224,
name: "Grow Up"
},
{
id: 54225,
name: "Steep"
},
{
id: 54226,
name: "Trials of the Blood Dragon"
},
{
id: 54229,
name: "God of War"
},








{
id: 54230,
name: "Days Gone"
},
{
id: 54231,
name: "Resident Evil 7 biohazard"
},
{
id: 54232,
name: "Death Stranding"
},
{
id: 54233,
name: "Spider-Man"
},
{
id: 54242,
name: "Batman: Arkham VR"
},
{
id: 54243,
name: "Farpoint"
},
{
id: 54244,
name: "Here They Lie"
},
{
id: 54247,
name: "Robinson: The Journey"
},
{
id: 54265,
name: "Le Tour de France 2016"
},
{
id: 54269,
name: "Disc Jam"
},
{
id: 54270,
name: "Mr Shifty"
},
{
id: 54286,
name: "Drawful 2"
},
{
id: 54322,
name: "The Jackbox Party Pack 3"
},
{
id: 54337,
name: "Pirates: Treasure Hunters"
},
{
id: 54348,
name: "Asemblance"
},
{
id: 54417,
name: "NASCAR Heat Evolution"
},
{
id: 54453,
name: "BioShock: The Collection"
},
{
id: 54462,
name: "Carmageddon: Max Damage"
},
{
id: 54483,
name: "Unearned Bounty"
},
{
id: 54486,
name: "Lurking in the Shadows"
},
{
id: 54622,
name: "MilitAnt"
},
{
id: 54626,
name: "Last Wings"
},
{
id: 54682,
name: "Uno"
},
{
id: 54689,
name: "Pac-Man: Championship Edition 2"
},
{
id: 54733,
name: "Sonic Mania"
},
{
id: 54734,
name: "Sonic the Hedgehog 2017 (working title)"
}

]


// this block is responsible for stringifying the keys in each object
idArr = JSON.stringify(idArr);
console.log(idArr);


// and this block write the array of already stringified json to file
fs.writeFile('./games_ids/ps4-games-ids.json', idArr, "UTF-8", (err) => {
    if (err) throw err;
    console.log('succes!');
});