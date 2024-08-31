    //entries that are capitalized are game title suggestions. many from queester/bartattack
	//added logic that matches text inside genre filter i.e. modern, scifi, horror etc.. so not needed here.
	//if a keyword is in the title it's not needed in the keywords object. i.e. 'mountain tavern' does not need the 'tavern' keyword.
var dictionary = {
    "429": ["Star Wars","Deathstar","Stormtroopers","Empire","spacestation","chase"], //Imperial Pursuit
    "428": ["Dune","Arrakis","Bene Geserit","Chapterhouse","coven","temple","prayer"], //The Sisterhood
    "427": ["alien","aliens","spacestation","spaceship","action","nostromo","xenomorph"], //Bug Hunt
    "426": ["west","American","cowboys","horses","action","chase","Deadlands","gunfire","battle"],//Stagecoach Heist
    "425": ["west","American","cowboys","horses","Deadlands","dark","haunted","mysterious"], //The Stranger
    "424": ["west","American","cowboys","village","horses","outpost","western","Deadlands"], //Frontier Town
    "423": ["biome","forest","flowers","jungle","alien","planet","peaceful","pandora"], //Magical Flora
    "422": ["boat","ship","sailing","water","ocean","sea","pirates","navy","nautical"], //Ghost Ship
    "421": ["city","urban","town","Waterdeep","Baldur's Gate","medieval","market"], //The Madding Crowd
    "420": ["bank","money","exchange","Gringotts","trade","currency"], //Counting House
    "419": ["tunnel","mountain pass","shortcut","cave","cavern","road","action"], //Hidden Passage
    "418": ["forest","ruins","norse","viking","druids","witches","ritual","magic","spirits"], //Pagan Woods
    "417": ["motherboard","computer","cyberpunk","cyberspace","metaverse","Tron","Shodan","Glados"], //Mainframe
    "416": ["city","village","town","medieval","construction","repair","square"], //Rebuilding
    "415": ["forest","Endor","Star Wars","Stormtroopers","redoubt","action","mechs","at-st"], //Jungle Bunker
    "414": ["city","urban","spy","spies","cyberpunk","technology","surveillance","camera"], //Stakeout
    "413": ["library","study","mage","maester","research","symposium","books","scrolls"], //Collegium Magica
    "412": ["statues","crypt","cave","cavern","underground","automaton","monster"], //Tomb Guardians
    "411": ["ocean","sea","waves","sailing","sailboat","wind","nautical","navy","naval"], //Ship of the Line
    "410": ["woods","dark","magic","magical","spooky","druids","exploration"], //Forgotten Forest
    "409": ["space","spaceship","spacestation","freight","cargo","rendezvous","port","starship"], //Docking Procedure
    "408": ["Mind Flayers","ilithid","elder brain","action","suspense","crash","shipwreck"], //Nautiloid Escape
    "407": ["inn", "bar","pub","alehouse","warm","fireplace","longhouse","tavern"], //Viking Tavern
    "406": ["danger","road","lava","fire","hell","mordor","demons","underworld","bridge"], //Treacherous Path
    "405": ["spiders","hatchery","aragog","aliens","cave","lair","hive","dungeon","boss"], //Brood Mother
    "404": ["castle","undead","vampire","Strahd","Ravenloft","Dracula","Barovia"], //Vampyr
    "403": ["dwarven","dwarf","metal","blacksmith","factory","moria","hammer","smelt"], //Steel Foundry
    "402": ["underwater","ocean","sea","ruins","dive","whales","water","depths","sunken pyramid"], //The Drowned Tower
    "401": ["tavern","inn","pub","hall","bard","celebration","festival","party"], //Feast of Crispian
    "400": ["cave","grotto","spirits","ghosts","underdark","mine","underground","tomb"], //Whispering Caverns
    "399": ["winter","snow","blizzard","tundra","arctic","ice","Icewind","wind","frozen","storm"], //Whiteout
    "398": ["ocean","sea","water","Saltmarsh","peaceful","breeze","birds","reeds","boat","wetlands"], //The Misty Marsh
    "397": ["medieval","festival","city","town","celebration","uplifting","heroic","vicotory","fanfare"], //Homecoming
    "396": ["artifact","ruins","ancient","mountain","beacon","communication","ultrawave"], //The Ansible
    "395": ["cyberpunk","spacehip","spacestation","space","rocket","gantry","exploration","Star Trek"], //Launch Day
    "394": ["battle","action","war","underworld","devil","fight","blood wars","lava","fire"], //Demon Army
    "393": ["cyberpunk","street","night","dogs","gritty","urban","desolate"], //Hellhound Alley
    "392": ["ocean","sea","waves","boat","ship","sailing","greece","greek","islands","sparta"], //Trireme
    "391": ["action","suspense","chase","locomotive","steam","spy","tension","heist","Bond"], //Train Job
    "390": ["temple","monks","chant","prayer","Dune","Arrakis","sand","peaceful","quiet"], //Desert Devotional
    "389": ["peaceful","spring","birds","town","city","square","magic","happy","festival"], //Medieval Market
    "388": ["monster","skeleton","dungeon","hell","boss","action","fire","battle"], //Lord of Bones
    "387": ["mechs","army","troops","battle","action","chase","hangar","spaceship","droids"], //Docking Bay
    "386": ["house","haunted","creepy","scary","ghosts","spirits","hut","shack","halloween"], //The Attic
    "385": ["stealth","escape","heist","guards","facility","spy","sneak"], //Infiltration
    "384": ["fortress","ruins","mountains","castle","fort","outpost","guard tower","tower"],//Western Watchtower
    "383": ["house","shack","cabin","witch","crone","cottage"], //Banshee's Lair
    "382": ["camp","campsite","quiet","peaceful","forest","night","campfire"], //Long Rest
    "381": ["stealth","comedy","hobbits","castle","escape","guards","heist"], //Halfling Sneak
    "380": ["machine","mechanical","steampunk","engine","gears","clifftop","elevator","mountain"], //The Great Lift
    "379": ["Mars","Terraforming Mars","atmosphere","machine","factory","industrial","planet"], //Terraforming
    "378": ["cave","cavern","underdark","underground","drow","mine","pit","rope"], //Descent
    "377": ["horses","carriage","buggy","chase","action","battle","tension","forest"], //Through the Woods
    "376": ["docks","intro","beginning","ships","sailing","adventure","pier","journey","travel"], //Voyage Begins
    "375": ["magic","spells","wizards","clay","construct","incantation","cleric"], //Rise of the Golem
    "374": ["museum","sculpture","statues","seraphs","archons","gallery"], //Hall of Angels
    "373": ["mechanical","mechanism","steampunk","clockwork","steam","gears","engines"],//Infernal Machine
    "372": ["tavern","bar","pub","brothel","inn","alehouse"], //Den of Iniquity
    "371": ["shipwreck","ship","ocean","sea","waves","Poseidon","action","sail","sailing"], //Whirlpool
    "370": ["robot","android","artificial","automaton","computers","laborotory","cyberpunk"], //Awakenings
    "369": ["cave","monster","tribal","tense","giant","Scandinavian","Norse","Nordic"], //Troll Grotto
    "368": ["hut","shack","spirits","country","cottage","abandoned","forest","winter","cabin","house"], //Ghosts of Appalachia
    "367": ["jungle","clifftop","cliff","danger","suspense","swing bridge"], //Rope Bridge
    "366": ["mountain","clifftop","birds","tension","drama","wings","monster"], //Roc's Nest
    "365": ["war","marching","march","battlefield","celtic","medieval","armor","army"], //Trail of Ashes
    "364": ["Avernus","barren","wasteland","dead","hell","hades"], //River of Blood
    "363": ["space","spaceship","Star Trek","interstellar","mothership","Expanse"], //Starship Adrift
    "362": ["oxen","oxcart","aurochs","market","vendors","nomads","wagon","souk"], //Rolling Emporium
    "361": ["desert","dune","pyramid","ansible","sand","wind","bedouin","stargate"], //Ancient Beacon
    "360": ["arena","colosseum","gladiators","combat","trial","duel","sport","blood sport"], //Pit Fighter
    "359": ["ocean","adventure","drama","ship","shipwreck","tribal","jungle","King Kong","Kong"], //Skull Island
    "358": ["alien","aliens","creepy","hatchery","brood"], //Egg Chamber
    "357": ["ocean","waves","cliff","clifftop","bluff","overlook","peaceful"], //Promontory
    "356": ["Waterdeep","Neverwinter","Baldur's Gate","city","intro","beginning"], //Adventure Begins
    "355": ["starship","Star Trek","Enterprise","vines","technology","botany","garden"], //Hydroponics Bay
    "354": ["magic","dark","evil","sorcery","creepy","wizard","energy"], //Warlock's Whisper
    "353": ["peaceful","magical","magic","spiritual","wind","deer","stag"], //Spirit of the Plains
    "352": ["tolkien","hobbits","action","nazgul","horses","forest","chase"], //Black Rider
    "351": ["tavern","inn","hobbits","tolkien","happy","festive","party"], //Halfling Lodge
    "350": ["spy","espionage","city","urban","stakeout","noir","street"], //Covert Ops
    "349": ["labyrinth","maze","mechanical","crypt","sneak","tension"], //Puzzle Dungeon
    "348": ["town","north","snow","cold","village","ice","mountains","frozen"], //Viking Village
    "347": ["forest","woods","elves","elf", "tolkien","spirits","peaceful"], //Elven Procession
    "346": ["robots","machines","junkyard","cyberpunk","metal","mechanical","future","tech"], //Tinkertown
    "345": ["ship","ships","sailing","ocean","battle","action","chase","sail"], //High Seas Pursuit
    "344": ["yokai","demon","spirit","Japan","Japanese","mysterious","trees"], //Yōkai Forest
    "343": ["action","battle","combat","chase","church","temple","ruins","destruction"], // Dungeon Collapse
    "342": ["inn","festival","dance","party","action","tavern","happy"], //Tavern Celebration
    "341": ["city","village","slum","ghetto","victorian","flea bottom","street"], //Beggar's Rest
    "340": ["space","spacestation","spaceship","interstellar","outpost"], //Starbase Omega
    "339": ["mars","desert","wind","sand","habitat","space","colony","Dune"], //Red Planet
    "338": ["shop","store","merchant","general store","goods","supplies"], //Adventure Supply
    "337": ["scary","storm","rain","creepy","halloween","barovia","gothic","town","supernatural"], //Village of the Damned
    "336": ["feast","party","gathering","wedding","court","castle","dinner","food"], //Medieval Banquet
    "335": ["temple","church","cathedral","ruins","gothic","decay"], //Abandoned Chapel
    "334": ["harpy","action","battle","wind","wings","cliff","mountain","monster"], //Harpies' Nest
    "333": ["libary","magic","books","scrolls","scribe","Candlekeep"], //Arcane Athenaeum
    "332": ["underdark","dank","dark","spooky","moist","mushroom","fungus","magic"], //Myconid Colony
    "331": ["beach","ocean","shipwreck","water","zombies","battle","action"], //Drowned Sailors
    "330": ["cyberpunk","urban","future","tech","Blade Runner","ghetto","dystopian"], //Mega City Slums
    "329": ["sand","wasteland","dune","Bedouin","tribal","desert","barren"], //Desert Temple
    "328": ["war","tragedy","battlefield","defeat","sorrow","retreat","refugee"], //Battle Requiem
    "327": ["beach","ocean","waves","surf","tiki","rum","tropics","whiskey","whisky"], //Distilled: Tropical
    "326": ["Asia","China","Japan","Zen","peaceful","baijiu","whiskey","whisky","garden"], //Distilled: Tranquility
    "325": ["barrels","whiskey","whisky","storage","spirits"], //Distilled: Warehouse
    "324": ["peat","mountains","hills","Scotland","Scottish","whiskey","whisky"], //Distilled: Highlands
    "323": ["still","whisky","whiskey","moonshine","spirits"], //Distilled: Backwoods
    "322": ["barrels","whiskey","whisky","workshop","craft"], //Distilled: Cooperage
    "321": ["tepui","peaceful","stream","wind","clouds","peak","summit","water"], //Invisible Mountain
    "320": ["pagan","ritual","magic","occult","ominous","chant","summon"], //Cultist's Cavern
    "319": ["forest","woods","magic","ritual","druids","archdruids","pagan"], //Shaman's Hollow
    "318": ["gate","mordor","action","drama","battle","combat","hell","tolkien","passage"], //The Gaping Maw
    "317": ["cyberpunk","peaceful","mech","android","machine","factory","junkyard"], //Robot Scrapyard
    "316": ["battle","action","combat","Phandelver","chase","skirmish"], //Goblin Ambush
    "315": ["action","wyvern","wind","chase","battle","combat","dragons","drakes","pern"], //Dragon Rider
    "314": ["alien","planet","jungle","swamp","derelict","spaceship","wreck","shipwreck"], //Shuttle Crash
    "313": ["woods","forest","trees","spooky","nymph","feywild","fey","faerie"], //Dusk of the Dryad
    "312": ["space","interstellar","mothership","spaceship","stars","expanse","star trek"], //Generation Ship
    "311": ["marsh","monster","spooky","boat","water","bog","creature"], //Swamp Thing
    "310": ["Star Wars","Tatooine","desert","barren","water","Dune"], //Moisture Farm
    "309": ["gateway","portal","dimension","lich","sword coast","blood","wizards"], //Bloodgate
    "308": ["port","docks","underground","underdark","cave","Skullport","Waterdeep","drow"], //Skullwharf
    "307": ["Star Wars","Tusken Raiders","Tatooine","desert","battle","action","combat"], //Sand Raiders
    "306": ["nuclear","cataclysm","wasteland","survivor","dead","barren"], //Aftermath
    "305": ["wind","quiet","peaceful","safe","verdant","vale","trees","birds"], //Hidden Valley
    "304": ["vikings","battle","camp","bivouac","suspense","dread","ominous"], //Fog of War
    "303": ["witches","witchcraft","coven","ritual","seance","occult","magic"], //Summoning
    "302": ["water","bazaar","vendor","river","inlet","shop","wares","canal"], //Floating Market
    "301": ["water","magic","peaceful","ritual","temple","ethereal","blood","arcane"], //Pool of Radiance
    "300": ["space","spaceship","stars","star trek","expanse","rocket","starship","engines"], //Burn Maneuver
    "299": ["ruins","ancient","death","city","decay","rubble","crypt","grave","tomb"], //Necropolis
    "298": ["volcano","crater","fire","fiery","evil","hades","underworld","brimstone"], //Gateway to Hell
    "297": ["camp","encampment","campsite","refugee","retreat","sad","campfire"], //Survivors' Bivouac
    "296": ["winter","ice","arctic","north","cold","freezing","snow"], //The Frozen Trail
    "295": ["cyberpunk","city","urban","traffic","night"], //Closing Time
    "294": ["medieval","town","city","alley","urban","chase","Witcher"], //Cutpurse Pursuit
    "293": ["Cthulhu","Lovecraft","mythos","hospital","asylum"], //Sanitarium
    "292": ["Cthulhu","harbor","boats","fishing","village","whaling","mythos","Lovecraft"], //Bleakwater Docks
    "291": ["detective","Cthulhu","vintage","noir","private eye","film noir","Lovecraft","mythos"], //Investigator's Office
    "290": ["horse","carriage","cart","oxen","ox","oxcart","travel","drama","Skyrim"], //Wagon Ride
    "289": ["alien","object","temple","Dune","Numenera","technology"], //Ancient Artifact
    "288": ["ocean","sea","underwater","Netherdeep","depths","water","abyss"], //Everdeep
    "287": ["Apothecaria","city","chaos","chaotic","demons","magical"], // Apothecaria: The Strange
    "286": ["Apothecaria","swamp","insects","goblins","dryads","ruins"], // Apothecaria: Blastfire Bog
    "285": ["Apothecaria","town","village","mountain"], // Apothecaria: High Rannoc Village
    "284": ["souk","arab","arabian","sand","camels","market","desert","camels","spice","Ank'Harel","Ank Harel"], //Oasis City
    "283": ["cyberpunk","computers","stealth","suspense","tech","noir","drama","investigation"], //Pattern Recognition
    "282": ["action","combat","chase","horses","horseback","forest","woods","pagan","Witcher"], //The Wild Hunt
    "281": ["action","combat","battle","drama","army","adventure"], //Escape from Shadow
    "280": ["urban","skyscraper","city","rooftop","cyberpunk"], //The City Above
    "279": ["rural","medieval","village","town","diseased","evil","defiled","rotten"], //Blighted Farm
    "278": ["rural","medieval","town","village","agriculture","peaceful"], //Farmyard
    "277": ["peaceful","ocean","waves","planet","dawn","exploration"], //A New Beginning
    "276": ["dwarf","dwarven","smith","fire","metal","blacksmith","moria","khazad dum"], //Forge of Fury
    "275": ["druids","elven","elf","forest","woods","ritual","peaceful","emerald enclave"], //Lorekeeper Grove
    "274": ["rites","jungle","beach","waterfall","spirits","ritual","voodoo"], //Jungle Shaman
    "273": ["steampunk","mechanical","gears","dance","1920s","1930s","gnome","workshop"], //Arcane Clockworks
    "272": ["abandoned","derelict","relics","technology","alien"], //Starforged: Vault
    "271": ["action","combat","Star Wars","spaceship","starship","space","lasers","battle"], //Starforged: Fray
    "270": ["settlement","outpost","colony","star trek","alien"], //Starforged: Sojourn
    "269": ["exploration","alien","planet","star trek"], //Starforged: Planetside
    "268": ["interstellar","stars","space","star trek","space travel"], //Starforged: Space
    "267": ["Strahd","Dracula","castle","cthulhu","vampire","library","scary","barovia","Ravenloft"], //Court of the Count
    "266": ["battle","war","action","fight","boss","combat","epic"], //Orbital Prison Break
    "265": ["temple","church","cult","mountain","storm","thunder","lightning","wind"], //Shrine of Talos
    "264": ["battle","war","action","fight","boss","epic","combat"], //Base Assault
    "263": ["cave","dark","lair","cavern","dungeon","mountain"], //Mysterious Grotto
    "262": ["london","dickens","city","ghetto","urban","Jack the Ripper","Sherlock","19th century"], //Victorian Slums
    "261": ["battle","war","siege","skirmish","army","soldiers","fight","combat"], //Unto the Breach
    "260": ["airship","flying","sailing","transport"], //Skyship
    "259": ["theatre","drama","auditorium","playhouse","hall","orchestra"], //Grand Theater
    "258": ["rot","disease","evil","corrupted","poisoned","tainted","trees","grove"], //Blighted Forest
    "257": ["rural","town","medieval","peaceful","farm","blacksmith","tinker","village"], //Country Workshop
    "256": ["snow","battle","boss","dragon","monsters","fight","action","war","combat"], //Ice Dragon
    "255": ["tavern","pub","inn","Candlekeep","bard","hearth"], //The Hearth Inn
    "254": ["sand","tatooine","jawas","droids","Star Wars","alien","bazaar","market"], //Desert Planet Souk
    "253": ["ocean","water","dark","calm","peaceful","quiet","ethereal","scuba"], //Submerged
    "252": ["tomb","dungeon","dark","occult","tomb of horror","underground"], //Vault of Terror
    "251": ["library","Candlekeep","fortress","books","knowledge","monks","chant"], //Candledeep
    "250": ["wolves","dungeon","jail","cellar","castle","monsters","suspense"], //Wolf Pens
    "249": ["victorian", "trains","machines","clocks","gears","airship"], //Steampunk Station
    "248": ["Cthulhu","dark","scary","tense","tension","monster","lovecraft"], //Alien Reactor
    "247": ["west","America","wagon","wagon train","horse","oxen","journey","travel"], //Oregon Trail
    "246": ["Harry Potter","Olivander","general store","store","potions","supplies","Diagon Alley"], //Magic Shoppe
    "245": ["cyberpunk","tension","tv","drama","police","spy","spies","noir"], //Secret Facility
    "244": ["ocean","sail","boats","battle","drums","action","Scandinavian","Norse","Nordic","war","combat"], //Vikings
    "243": ["aztec","mayan","temple","forest","birds","humid","insects"], // Jungle Ruins
    "242": ["dark","cave","lair","dungeon","boss","aragog","tunnel","web","insects"], //Spider's Den
    "241": ["sailing","ship","ocean","boat","nautical","sea","adventure"], //Pirates!
    "240": ["palace","regal","royalty","court","gossip","king","queen","Love Letter","salon"], //Throne Room
    "239": ["police","drama","television","tv","intrigue","investigation","detective","Scandinavian"], //Nordic Noir
    "238": ["illithid","dungeon","suspense","brain","elder brain","action"], //Mind Flayer Chamber
    "237": ["swords","fight","spar","battle","melee","clash","skirmish","action","castle","combat"], //Training Grounds
    "236": ["dungeon","monsters","dark","cult","church","occult","ritual"], //Defiled Temple
    "235": ["peaceful","town","rain","thunder","horses","rural"], //Rainy Village
    "234": ["peaceful","quiet","water","calm","ethereal","psychedelic","birds"], //Lush World
    "233": ["church","temple","cathedral","mechanical","peaceful","ritual","peaceful","steampunk"], //The Orrery
    "232": ["battle","war","action","robot","Warhammer","drama","fight","boss","epic","combat"], //Mech War
    "231": ["cold","winter","ice","frozen","north","frost","Frostmaiden","Icewind Dale","arctic","village"], //Icebound Town
    "230": ["Strahd","Dracula","vampire","wolf","scary","spooky","gothic","haunted","monster","Halloween","Ravenloft"], //All Hallows' Eve
    "229": ["cyberpunk","police","tension","tense","action","tv","sneak","dark","stealth"], //Interrogation Room
    "228": ["ethereal","psychedelic","trippy","peaceful","calm","quiet"], //Mushroom Forest
    "227": ["lovecraft","action","chase","tension","monsters","battle","combat"], //Terror in the Woods
    "226": ["1950s","1960s","synthesizer","tension","technology","laborotory","science"], //60s Computer Lab
    "225": ["1920s","1930s","gothic","cthulhu","urban","city","mystery"], //New Orleans Noir
    "224": ["stealth","search","house","sneak","dark","shadows","mysterious"], //Mansion: Night
    "223": ["ocean","sea","water","Saltmarsh","peaceful","breeze","birds","reeds"], //Salt Marsh
    "222": ["Asian","Chinese","China","martial arts","kung fu","rural","peaceful","village"], //Wuxia Tea House
    "221": ["underwater","water","deep","ocean","sea","depths","dive","scuba","shipwreck"], //Sunken Treasure
    "220": ["Asian","Chinese","China","martial arts","kung fu","rural","mountain","town"], //Wuxia Village
    "219": ["gnomes","shop","machines","funny","steampunk"],//Tinkerer's Workshop
    "218": ["stealth","dungeon","quiet","tense","sneak","dark","shadows","monster"], //Sleeping Ogre
    "217": ["sailing","ship","ocean","waves","nautical","navy","sail","squall","boat"], //Storm at Sea
    "216": ["medieval","city","town","Waterdeep","society","night","quiet"], //Waterdeep: Night
    "215": ["action","combat","Star Wars","spaceship","starship","space opera","lasers"], //Space Battle
    "214": ["medieval","cooking","food","restaurant","feast","oven"], //Castle Kitchen
    "213": ["fire","chaos","destruction","town","flames","waste","hell"], //Burning Village
    "212": ["action","magic","fight","battle","heroic","war","magical","heroic","combat"], //Witch Mountain
    "211": ["action","stealth","cyberpunk","mysterious","sneak","tv","dark","shadows"], //Thieves' Guild
    "210": ["peaceful","quiet","zen","water","fountain","calm","heal"], //Temple Garden
    "209": ["fight","battle","action","skirmish","clash","melee","scuffle","combat"], //Rat Battle
    "208": ["desolate","rural","village","eerie","abandoned","ominous","peaceful"], //Ghost Town
    "207": ["peaceful","breeze","drama","relaxing","technology","dome","greenhouse"], //Biodome
    "206": ["ropes","bridges","wind","buildings","breeze","crows","vents"], //The Heart: High Rise
    "205": ["chaos","nightmare","dreams","alien","terror"], //The Heart: Absolution
    "204": ["tunnel","decay","rot","flesh","insects"], //The Heart: Meat Corridor
    "203": ["forest","woods","beasts","jungle","birds","crows"], //The Heart: Briar
    "202": ["water","sewars","cave","tunnel","flood","waves"], //The Heart: Drowned
    "201": ["peaceful","rain","calm","mourning","thunder","drama","heroic"], //Haven
    "200": ["occult","ritual","summoning","Yester Hill","strahd","wind","chant"], //Druid Hilltop
    "199": ["forest","horses","peaceful","woods","trees","travel","journey"], //Sun Dappled Trail
    "198": ["scary","eerie","dark","ominous", "shadow","ethereal"], //Shadowfell
    "197": ["action","fight","clash","combat","heroic","war","combat"], //Battle of the Amazons
    "196": ["boat","water","Charon","row","hades","ominous","hell","ferry","ferryman"], //Crossing the Styx
    "195": ["crowds","promenade","galleria","stores","80s","shops"], //Shopping Mall
    "194": ["monster","dank","wet","ominous","mysterious","dark"],//Tarrasque Interior
    "193": ["drums","war","battle","army","mongolian","skirmish","combat","action","fight"],//The Steppes
    "192": ["alien","jungle","humid","insects","water","humid","dagobah"], //Swamp Planet
    "191": ["alien","solitude","wind","dystopia","crumble","decay"], //Dying World
    "190": ["seaside","ocean","beach","1940s","1930s","cthulhu"], //1940s Boardwalk
    "189": ["Christmas","fireplace","peaceful","winter","snow","holiday"], //Yuletide
    "188": ["mountain","city","town","medieval","quiet","gothic","strahd","dracula","Ravenloft"], //Barovian Village
    "187": ["battle","drama","action","fight","clash","boss","epic","heroic","combat"], //Endgame
    "186": ["scary","eerie","halloween","ghosts","spooky","graveyard","monsters"], //Haunted
    "185": ["space","orbit","tension","ominous","drama","action","cyberpunk"], //Gravity
    "184": ["water","cave","cavern","mountain"], //Underground Lake
    "183": ["ocean","storm","waves","ominous","glacier","water","winter"], //Sea of Moving Ice
    "182": ["rural","town","medieval","peaceful","farm"], //Country Village
    "181": ["urban","future","blade runner","Shadowrun","tavern","matrix","club"], //Cyberpunk Bar
    "180": ["rural","country","landscape","building","ominous","medieval","desolate"], //Abandoned Windmill
    "179": ["urban","future","blade runner","Shadowrun","rain","matrix"], //Cyberpunk City
    "178": ["cavern","frozen","cold","lich","cave","tundra","snow","winter"], //Ice Throne
    "177": ["inn","hearth","meeting","bard","dance","tavern"],//Tavern Music
    "176": ["desert","steppes","lonely","solitude","wind","tundra","plains","arctic","alien","planet"], //Barren Wastes
    "175": ["king","queen","royalty","palace","monarch","prince","medieval","imperial"], //Royal Court
    "174": ["magic","heroic","drama","action","magical"], // Wizard's Tower
    "173": ["technolgy","hi-tech","spaceship","spacestation","facility","labrotory","robots"], //Robotics Lab
    "172": ["dungeon","prison","cell","torture","dark","dank","dripping"], //Castle Jail
    "171": ["battle","drama","action","fight","clash","medieval","epic","heroic","combat"], //Cry Havoc
    "170": ["dungeon","underground","dark","drow","mysterious","dangerous"], //The Underdark
    "169": ["peaceful","forest","nature","trees","breeze","quiet","ethereal"], //The Feywild
    "168": ["action","drama","synth","boss","fight","epic","battle","gothic","cyberpunk","Shadowrun","combat"], //Neon Drive
    "167": ["ocean","sea","boats","town","medieval","Saltmarsh","docks","water","peaceful"], //Fishing Village
    "166": ["ocean","sea","ships","sail","pirates","Saltmarsh","anchor","inlet","water","tropics","peaceful"], //Quiet Cove
    "165": ["ocean","sea","ships","steamer","boats","luxury","travel","elegant"], //RMS Titanic
    "164": ["dark","dank","dripping","tunnel","sewars","underground","water"], //cistern
    "163": ["festival","town","village","market","party","bazaar"], //Medieval Fair
    "162": ["action","drama","synth","90s","boss","fight","epic","battle","gothic"], //Dark Angel
    "161": ["quiet", "breeze", "trees", "birds", "wind", "sleeping","productivty"], //Forest: Day
    "160": ["jazz","china","asia","asian","orient","cthulhu","city","urban","crime","1920","1940"], //Shanghai 1930s
    "159": ["medieval","horses","hitch","grooming","livestock","stalls","animals"], //Stables
    "158": ["medieval","city","town","Waterdeep","society"], //Waterkeep
    "157": ["battle","drama","action","fight","clash","medieval","epic","heroic","combat"], //Field of Heroes
    "156": ["cargo","space","spaceship","peaceful","aliens","salvage"], //Star Freighter
    "155": ["antarctica","arctic","snow","ice","synth","john carpenter","thing","the thing","morricone","cold","winter"], //Outpost 31
    "154": ["attic","rain","writing","fireplace","solitude","peaceful","shack"], //Artist's Garret
    "153": ["elves","elven","elf","forest","woods","spirits","tolkien","peaceful","magic","sleeping"], //Secret Garden
    "152": ["spaceship","salvage","aliens","reavers","halloween","space","hypersleep"], //Nostromo
    "151": ["combat","battle","action","drama","steampunk"], //Metropolis Fanfare
    "150": ["technolgy","Tales from the Loop","cyberpunk","abstract","dystopia","80s","synth","tv","television"], //Loop Tales
    "149": ["river","stream","water","campsite","campfire","calm","peaceful","relaxing"], //Lakeside Camp
    "148": ["Strahd","Dracula","vampire","wolf","scary","spooky","gothic","haunted","monster","Ravenloft"], //Barovian Castle
    "147": ["tomb","castle","strahd","Dracula","vampire","wolf","scary","spooky","gothic","haunted","monster","Ravenloft"], //Graveyard
    "146": ["palace","frozen","fortress","clouds","giants","cold","flying","sky","skyreach"], //Floating Ice Castle
    "145": ["jazz","harlem","club","bar","speakeasy","tavern","city","urban","1920","1930","1940","cthulhu"], //Cotton Club
    "144": ["warfare","helicopters","combat","huey","urban","shelling","city","airstrike"], //War Zone
    "143": ["supper","dining","jane austen","social","entertaining","downton abbey","society"], //Elegant Dinner Party
    "142": ["egypt","pharoah","pyramid","burial","undead","desert","sarcophagus"], //Mummy's Tomb
    "141": ["wind","cabin","shack","hovel","house","witch","crone","lonely","woods"], //Hermit Hut
    "140": ["neon","cyberpunk","noir","space","gritty","metallic","urban"], //Dark Future
    "139": ["underwater","water","deep","sunken pyramid","ocean","sea","depths","dive","scuba","Aquasphere","church"], //Sunken Temple
    "138": ["storm","sandstorm","sand","arabian","weather","dust","haboob","Tales of the Arabian Nights","egypt"], //Desert Winds
    "137": ["river","stream","village","water"],//Mill Town    
    "136": ["prayer","gods","religion","sanctuary","chants","ritual","rites","holy","church"], //Temple of Helm
    "135": ["infinity","cosmos","universe","celestial","cyberpunk","planets","computers","abstract"], //Dark Matter
    "134": ["horses","traveling","buggy","cart","stagecoach","hansom","travel","coach","rain"], //Carriage Journey
    "133": ["party","wedding","dance","hobbits","village","fair"], //Halfling Festival
    "132": ["water","waves","sea","peaceful","productivty"], //Open Ocean
    "131": ["tavern","meeting","inn","hearth","food","drink"], //The Bog Standard     
    "130": ["snow","ice","slavic","cold","wind","north","barren"], //Russian Winter 
    "129": ["80s","synth","tv","television"], //Weirder Things 2   
    "128": ["clockwork","gnomes","gears","patience","funny","humor","creepy","crazy","building","work"], //Waiting Time
    "127": ["70s","cops","police","funk","tv","cars","highway","hotrods","race","speed","television"], //Car Chase
    "126": ["synth","journey","space","exploration","wonder","planets","stars","nebula"], //Endless Voyage
    "125": ["125","Halloween", "fear", "buried", "paranoid", "paranoia","terror","scary"], //Existential Dread
    "124": ["vibrations", "machinery", "wind", "tunnels","train", "unreality"], //Spire: The Vermissian
    "123": ["insects", "spiders", "creepy", "skittering", "nursery","dank","dark"], //Spire: The Hatchery
    "122": ["secrets", "whispers", "prayer", "temple", "religion","sanctuary","chants","ritual","rites","church"], //Spire: The Ministry
    "121": ["dripping", "dark", "chants", "drow", "slum","poverty","decay","ruins","magic"], //Spire: Derelictus
    "120": ["wind", "mourning", "chants", "priests", "preachers","zealots","funeral","dirges","bells"], //Spire: New Heaven
    "119": ["ice","crystalline","frozen","cold","coins","cruel","winter"], //Spire: Amaranth
    "118": ["decay","blood","insects","rotting","disease"], //Spire: The Heart
    "117": ["southern","blues","guitar","bayou","south","rural","country","traffic"], //Crossroads
    "116": ["Potter","Hogwarts","magic","victorian","fireplace","library","castle","house","wizard","school","witch"], //RavenPuff Common
    "115": ["mystery","sleeping","suspense","victorian","office","library","rain","house"], //Antiquarian Study
    "114": ["underground","dark","dwarf","moria","khazad dum","forge"], //Dwarven City
    "113": ["ethereal","dark","abstract","swirl","heaven","projection"], //Astral Plane
    "112": ["astral","peaceful","abstract","swirl","light","heaven"], //Ethereal Plane
	"111": ["space station","star trek","star wars","future","commerce","shopping","mall","crowds"], //Orbital Promenade
	"110": ["west","western","ragtime","music","inn","tavern","Deadlands","food","drink"], //Wild West Saloon
	"109": ["aircraft","airplane","cabin","white noise"], //747 Interior
	"108": ["fairground","fair","rides"], //Carnival
	"107": ["west","western","horses","dusty","Deadlands","cowboys"], //Lonesome West
	"106": ["suspense","abandoned","machines","industrial","alien"], //Lunar Outpost
	"105": ["80s","synth","tv","television"], //Weirder Things
	"104": ["elves","elven","elf","water","stream","sleeping","village"], //River Town
	"103": ["portal","factory","industrial","machines"], //Testing Chamber
	"102": ["vampire","gothic","castle","haunted","dracula","blood","undead","halloween","monster","strahd","Ravenloft"], //Vampire's Castle
    "101": ["road","cars","lynch","hitch","trip","tv","television"], //Highway
    "100": ["hell","bubbling","sulphur","devil","inferno"], //Volcano
    "99" : ["spirits","ghosts","wailing","danger","magic","moria","dungeon"], //Cavern of Lost Souls
    "98" : ["adventure","tolkien","khazad dum","dwarf","dwarven","quest","cave","moria","dungeon"], //Lost Mine
    "97" : ["battle","assault","urban","weapons","gunfire","military","fight","combat"], //City Under Siege
    "96" : ["indian","native","american","horses","prairie","western","cowboy"], //Windswept Plains
    "95" : ["horses","desert","middle eastern","nomad","bedouin","exotic","warriors","sand","Tales of the Arabian Nights","egypt"], //Arabesque
    "94" : ["police","drama","television","tv","intrigue","investigation","detective","Deception"],//Noir Procedural
    "93" : ["trek","space","station","doctor","starfleet"],//Starship Medial
    "92" : ["battle","drama","action","fight","clash","medieval","epic","combat"],//Skirmish
    "91" : ["elves","elf","forest","woods","spirits","tolkien","peaceful","magic","sleeping"],//Elven Glade
    "90" : ["dwemer","dwarf","dwarven","gears","clockwork","underground","quest"],//Dungeon II: Mechanical
    "89" : ["peaceful","quiet","solitude","outdoors","cold"],//Winter Woods
    "88" : ["coffee shop","starbucks","restaurant","tea","productivty","tavern"],//Lively Cafe
    "87" : ["christmas","xmas","festivus","holiday","frozen","ice","fair"],//Winter Festival
    "86" : ["action","mysterious","television","tv","cyberpunk"],//Dark City
    "85" : ["dark","dank","dripping","tunnel","sewars","quest","dungeon","water","underground"],//Sewers
    "84" : ["mexican","wrestling","arena","crowds","wwe","wwf"],//Lucha Libre!
    "83" : ["ghosts","spooky","scary","halloween","terror","fright","hamlet"],//Haunted Ramparts
    "82" : ["ghosts","spooky","scary","halloween","terror","fright"],//Nightmare
    "81" : ["jazz age","20s","30s","drink","twenties","flappers","food","bar","tavern","inn","gangsters","mobsters","Bootleggers"],//1920s Speakeasy
    "80" : ["metal","anvil","horse","armor","iron","forge","Forge War","King's Forge","Kings Forge"],//Blacksmith Shoppe
    "79" : ["army","armies","horses","weapons","soldiers","fight","clash","combat"],//Medieval Battle
    "78" : ["blimp","dirigible","victorian","jules verne", "Kings of Air and Steam"],//Steampunk Airship
    "77" : ["apocalypse","post-apocalyptic","desolate","eerie","amusement park","dystopia"],//Abandoned Fair
    "76" : ["spells","potions","laborotory","bubbling","magic","Alchemists"],//Alchemist's Lab
    "75" : ["boats","harbor","shady","water","sea","ships","Le Havre","Francis Drake"],//Docks District
    "74" : ["walking dead","undead","halloween","brains","flesh","monster","Dead of Winter","Zombicide","T.I.M.E. Stories","Time Stories"],//Zombies!
    "73" : ["books","quills","scholars","study","peaceful","quiet","pages","arcane"],//Medieval Library
    "72" : ["godzilla","tokyo","japan","king kong","destruction","chaos","city","urban","King of Tokyo","King of New York","Rampage"],//Monster Attack
    "71" : ["smaug","treasure","gold","red dragon","tiamat","tolkien","Dragon Rampage","Dragon Run"],//Sleeping Dragon
    "70" : ["trains","engines","locomotive","train station","train platform","Ticket to Ride","Railways of the World"],//The Age of Steam
    "69" : ["quiet","breeze","trees","birds","wind","sleeping"],//Forest:Night
    "68" : ["40s","50s","30s","gangster","mobster","bogart","vintage","1940s","1930s"],//1940s Office
    "67" : ["insane","crazy","spooky","madness","bedlam","arkham","straight jackets","T.I.M.E. Stories","TIME Stories"],//Asylum
    "66" : ["party","18th century","france","french","whispers","baroque","classical","wigs","parlor","court"],//Royal Salon
    "65" : ["adventure","treasure","underground","quest"],//Dungeon I
    "64" : ["journey","travel","wind","rain","snow","horses"],//Mountain Pass
    "63" : ["boats","ships","industry","docks","harbor","freight","cargo","Shipyard"],//Industrial Shipyard
    "62" : ["travel","adventure","peaceful","tolkien","birds","breeze","sleeping","elves","hobbits"],//Middle Earth: Dawn
    "61" : ["space","future","stars","trek","starfleet"],//Orbital Platform
    "60" : ["rain","wind","spooky","weather","Betrayal at House on the Hill","sleeping","vampire"],//Dark and Stormy
    "59" : ["dinosaurs","jungle","Evolution","Evo","Triassic Terror","Raptor"],//Dinotopia
    "58" : ["terror", "halloween", "scary"],//Terror
    "57" : ["roman","rome","gladiators","combat","fight","arena","Spartacus"],//Colosseum
    "56" : ["medieval", "town", "city", "Village"],//Medieval Town
    "55" : ["cave","freezing","cold","snow","echo","frozen","winter"],//Ice Cavern
    "54" : ["inn","hearth","food","drink"],//Mountain Tavern
    "53" : ["orient express", "rail", "railroad", "mystery", "dining","Ticket to Ride","Mystery Express"],//Strangers on a Train
    "52" : ["factory","industrial","abandoned"],//Warehouse 13
    "51" : ["woods", "campfire", "fire", "horses", "forest"],//Woodland Campsite
    "50" : ["action","city","explosions","thriller"],//Super Hero
    "49" : ["dark","dripping","stream","cavern","monsters","kobolds"],//Goblin's Cave
    "48" : ["ox","cart","wagon","travel","horses"],//Overland with Oxen
    "47" : ["fight","battle","dragons","quest","Dragon Rampage","Dragon Run","combat"],//There be Dragons
    "46" : ["church","holy","paladin","ethereal","chant","monks","prayer","temple"],//Cathedral
    "45" : ["horses","japanese","army","bivouac","camp","feudalism","warlords","mongol","asia","asian","Yedo","Shogun"],//Samurai HQ
    "44" : ["jack the ripper","Sherlock Holmes","city","streets","urban","19th century"],//Victorian London
    "43" : ["urban","future","futuristic"],//Dome City Center
    "42" : ["cthulhu","cult","lovecraft","demon","monster","Arkham","Eldritch","Elder Scrolls"],//Rise of the Ancients
    "41" : ["deck","space","spaceship","enterprise","star trek","Space Cadets"],//Starship Bridge
    "40" : ["downpour","storm","monsoon","water","productivty"],//The Long Rain
    "39" : ["cult","chant","ritual","dark energy","doomsday","church"],//Temple of the Eye
    "38" : ["underwater","water","deep","dive","scuba","darkness","ocean floor","diver","drown","Aquasphere"],//Into the Deep
    "37" : ["underground","dark","grave","tomb","skeletons","skulls","burial","sarcophagus"],//Catacombs
    "36" : ["water","ocean","beach","gulls","birds","sand","dunes","surf","wind","breeze"],//Down by the Sea
    "35" : ["swamp","jungle","insects","water","humid","sticky"],//Swamplandia
    "34" : ["battle","weapons","armor","marching","army","armies","battlefield","combat"],//Clash of Kings
    "33" : ["space","outerspace","quiet","dark","astronaut","spacewalk"],//Far Above the World
    "32" : ["urban","streets","traffic","nightlife","Police Precinct"],//City and the City
    "31" : ["ice","arctic","tundra","wind","snow","cold","Arctic Scavengers","Dead of Winter"],//Frozen Wastes
    "30" : ["synthesizer","blade runner","future","city","urban","City of Remnants","cyberpunk"],//Los Vangeles 3030
    "29" : ["fragged empire","spaceship","starship","space opera"],//Kaltoran Craft FE
    "28" : ["fragged empire","laboratory","genetics","experiments","Level 7","Theseus","Legendary Encounters"],//Nephilim Labs FE
    "27" : ["jungle","birds","insects","trees","forest","Cacao","Relic Runners"],//Xingu Nights
    "26" : ["war","combat","wwii","wwi","tanks","infantry","trenches","Memoir 44","Heroes of Normandie"],//Uncommon Valor
    "25" : ["spacewalk","asteroids"],//Deep Space EVA
    "24" : ["space","weapons","vintage","planet","Alien Frontiers"],//Forbidden Galaxy!
    "23" : ["inn","tavern","hearth","food","drink"],//The Slaughtered Ox
    "22" : ["horses","western","cowboys","dusty","town","Carson City","Bang","Spurs"],//True West
    "21" : ["spaceship","salvage","space opera","reavers","Level 7","Theseus","Legendary Encounters"],//Derelict Freighter
    "20" : ["rhythm","drums","chant","tribal"],//Dark Continent
    "19" : ["ships","ocean","navy","naval","wind","waves","seven seas","50 fathoms"],//Age of Sail
    "18" : ["lovecraft","betrayal","creepy","haunted","abandoned","ghosts","Betrayal at House on the Hill","vampire"],//House on the hill
    "17" : ["cantina","bar","music","scum","underworld","star wars", "City of Remnants"],//Alien Night Club
    "16" : ["spaceship","travel","alien","outpost","spacestation","Among the Stars"],//Busy Space Port
    "15" : ["spaceship","repair","mechanic"],//Alien Machine Shop
    "14" : ["suspense","ethereal","astral","drone"],//Protean Fields
    "13" : ["dripping","bats","underground","wind","dungeon","music","suspense"],//Cave of Time
    "12" : ["ghosts","dark","abstract","music","ethereal","menacing","strange","sarcophagus"],//Disembodied Spirits
    "11" : ["brooding","abstract","music","menacing","whispers","strange","ethereal"],//Shelter from the Storm
    "10" : ["abstract","void","wind","music"],//In the Shadows
    "9" : ["calm","rain","mourning"],//Before the Storm
    "8" : ["ethereal","deep","brooding","abstract","music"],//Dust to Dust
    "7" : ["sand","ethnic","tribal","wind","Forbidden Desert"],//The Desert Awaits
    "6" : ["dark","void","lonely"],//Abyssal Gaze
    "5" : ["arabian","dune","market","suspense","alien","magic","Voyages of Marco Polo"],//Desert Bazaar
    "4" : ["brooding","sad","brave","uplifting"],//Solemn Vow
    "3" : ["music","brooding","dark","sad","suspense","drums","abstract"],//March of Faith
    "2" : ["bubbles","music","ethereal","mystical","sand","magic","Alchemists"],//Bubbling Pools
    "1" : ["deep","technology","alien","computers","reactor"],//The Inner Core
   }

$(document).ready(function(){

//function that gets size of an object i.e. dictionary.
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var size = Object.size(dictionary); //returns size (legnth) of dictionary
//console.log(size+' entries in the dictionary'); //length of dictionary

for (var n=0; n < size; n++) { //loop through object
	var track_key = Object.keys(dictionary)[n];
	//console.log(track_key+" tracknum");
    //console.log("keywords = "+dictionary[track_key]);
	var keyword = dictionary[track_key];
    for (var i=0; i < dictionary[track_key].length;i++ ) {
    	//console.log(keyword);
        document.getElementById('keys_'+track_key).innerHTML=keyword;
    }
}
});