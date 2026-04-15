/* ════════════════════════════════════════════
   FrenchQuest - Game Data
   All vocabulary, levels, fish, badges, shop items
   ════════════════════════════════════════════ */

// ── LEVELS & VOCABULARY ──
const LEVELS = [
  {
    id:1, name:"First Steps", description:"Greetings and introducing yourself", color:"#4A90D9",
    flashcards:[
      {fr:"Bonjour",en:"Hello / Good morning",audio:"bon-ZHOOR"},{fr:"Salut",en:"Hi (casual)",audio:"sa-LUU"},
      {fr:"Bonsoir",en:"Good evening",audio:"bon-SWAHR"},{fr:"Au revoir",en:"Goodbye",audio:"oh ruh-VWAHR"},
      {fr:"Merci",en:"Thank you",audio:"mehr-SEE"},{fr:"S'il vous pla\u00eet",en:"Please",audio:"seel voo PLEH"},
      {fr:"Oui",en:"Yes",audio:"WEE"},{fr:"Non",en:"No",audio:"NOH"},
      {fr:"Comment \u00e7a va ?",en:"How are you?",audio:"koh-MOH sa VAH"},{fr:"\u00c7a va bien",en:"I'm doing well",audio:"sa va BYEH"},
    ],
    sentences:[
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"suis",type:"verb",en:"am"},{text:"content",type:"complement",en:"happy"}]},
      {parts:[{text:"Tu",type:"subject",en:"You"},{text:"es",type:"verb",en:"are"},{text:"gentil",type:"complement",en:"kind"}]},
      {parts:[{text:"Il",type:"subject",en:"He"},{text:"est",type:"verb",en:"is"},{text:"grand",type:"complement",en:"tall"}]},
      {parts:[{text:"Elle",type:"subject",en:"She"},{text:"est",type:"verb",en:"is"},{text:"intelligente",type:"complement",en:"smart"}]},
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"suis",type:"verb",en:"am"},{text:"ici",type:"complement",en:"here"}]},
    ],
    exercises:[
      {type:"translate",prompt:"How do you say 'Hello' in French?",answer:"bonjour",accept:["bonjour","salut"]},
      {type:"translate",prompt:"How do you say 'Thank you' in French?",answer:"merci",accept:["merci"]},
      {type:"fill",prompt:"Comment ___ va ?",answer:"\u00e7a",accept:["\u00e7a","ca","sa"]},
      {type:"translate",prompt:"What does 'Au revoir' mean?",answer:"goodbye",accept:["goodbye","bye"]},
      {type:"translate",prompt:"What does 'Oui' mean?",answer:"yes",accept:["yes"]},
    ],
    test:[
      {q:"Translate: Hello",a:"bonjour",accept:["bonjour","salut"]},
      {q:"Translate: Thank you",a:"merci",accept:["merci"]},
      {q:"What does 'Comment \u00e7a va ?' mean?",a:"how are you",accept:["how are you","how are you?"]},
      {q:"Complete: Je ___ content (I am happy)",a:"suis",accept:["suis"]},
      {q:"Translate: Goodbye",a:"au revoir",accept:["au revoir","aurevoir"]},
    ],
  },
  {
    id:2, name:"About Me", description:"Talking about yourself with \u00eatre and avoir", color:"#6B8E4E",
    flashcards:[
      {fr:"Je suis",en:"I am",audio:"zhuh SWEE"},{fr:"Tu es",en:"You are",audio:"too EH"},
      {fr:"J'ai",en:"I have",audio:"ZHAY"},{fr:"Tu as",en:"You have",audio:"too AH"},
      {fr:"Il a / Elle a",en:"He has / She has",audio:"eel AH / el AH"},
      {fr:"un ami",en:"a friend",audio:"uh ah-MEE"},{fr:"un livre",en:"a book",audio:"uh LEEV-ruh"},
      {fr:"un chat",en:"a cat",audio:"uh SHAH"},{fr:"un chien",en:"a dog",audio:"uh SHYEH"},
      {fr:"content",en:"happy",audio:"kohn-TOH"},
    ],
    sentences:[
      {parts:[{text:"J'",type:"subject",en:"I"},{text:"ai",type:"verb",en:"have"},{text:"un chat",type:"complement",en:"a cat"}]},
      {parts:[{text:"Tu",type:"subject",en:"You"},{text:"as",type:"verb",en:"have"},{text:"un livre",type:"complement",en:"a book"}]},
      {parts:[{text:"Il",type:"subject",en:"He"},{text:"a",type:"verb",en:"has"},{text:"un ami",type:"complement",en:"a friend"}]},
      {parts:[{text:"Elle",type:"subject",en:"She"},{text:"est",type:"verb",en:"is"},{text:"gentille",type:"complement",en:"kind"}]},
    ],
    exercises:[
      {type:"translate",prompt:"How do you say 'I have' in French?",answer:"j'ai",accept:["j'ai","jai","j ai"]},
      {type:"fill",prompt:"J'___ un chat (I have a cat)",answer:"ai",accept:["ai"]},
      {type:"translate",prompt:"What does 'un livre' mean?",answer:"a book",accept:["a book","book"]},
      {type:"fill",prompt:"Elle ___ gentille (She is kind)",answer:"est",accept:["est"]},
    ],
    test:[
      {q:"Translate: I have a cat",a:"j'ai un chat",accept:["j'ai un chat","jai un chat"]},
      {q:"What does 'Tu es content' mean?",a:"you are happy",accept:["you are happy","you're happy"]},
      {q:"Complete: Il ___ un livre (He has a book)",a:"a",accept:["a"]},
      {q:"Translate: She is smart",a:"elle est intelligente",accept:["elle est intelligente"]},
    ],
  },
  {
    id:3, name:"Actions", description:"Common verbs: aller, faire, vouloir", color:"#D4A053",
    flashcards:[
      {fr:"Je vais",en:"I go",audio:"zhuh VAY"},{fr:"Tu vas",en:"You go",audio:"too VAH"},
      {fr:"Il va",en:"He goes",audio:"eel VAH"},{fr:"Je fais",en:"I do / I make",audio:"zhuh FAY"},
      {fr:"Je veux",en:"I want",audio:"zhuh VUH"},{fr:"\u00e0 la maison",en:"home",audio:"ah lah may-ZOH"},
      {fr:"\u00e0 l'\u00e9cole",en:"to school",audio:"ah lay-KOHL"},{fr:"bien",en:"well",audio:"BYEH"},
      {fr:"maintenant",en:"now",audio:"meht-NAH"},{fr:"avec",en:"with",audio:"ah-VEK"},
    ],
    sentences:[
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"vais",type:"verb",en:"go"},{text:"\u00e0 l'\u00e9cole",type:"complement",en:"to school"}]},
      {parts:[{text:"Tu",type:"subject",en:"You"},{text:"fais",type:"verb",en:"do"},{text:"bien",type:"complement",en:"well"}]},
      {parts:[{text:"Il",type:"subject",en:"He"},{text:"va",type:"verb",en:"goes"},{text:"\u00e0 la maison",type:"complement",en:"home"}]},
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"veux",type:"verb",en:"want"},{text:"un livre",type:"complement",en:"a book"}]},
    ],
    exercises:[
      {type:"translate",prompt:"How do you say 'I go' in French?",answer:"je vais",accept:["je vais"]},
      {type:"fill",prompt:"Je ___ \u00e0 l'\u00e9cole (I go to school)",answer:"vais",accept:["vais"]},
      {type:"translate",prompt:"What does 'Je veux' mean?",answer:"i want",accept:["i want"]},
      {type:"translate",prompt:"What does 'avec' mean?",answer:"with",accept:["with"]},
    ],
    test:[
      {q:"Translate: I go to school",a:"je vais \u00e0 l'\u00e9cole",accept:["je vais a l'ecole","je vais a l ecole"]},
      {q:"What does 'Tu fais bien' mean?",a:"you do well",accept:["you do well"]},
      {q:"Complete: Je ___ un livre (I want a book)",a:"veux",accept:["veux"]},
      {q:"What does 'maintenant' mean?",a:"now",accept:["now"]},
    ],
  },
  {
    id:4, name:"Daily Life", description:"Food, colors, likes and dislikes", color:"#9B6B9E",
    flashcards:[
      {fr:"Je mange",en:"I eat",audio:"zhuh MAHNZH"},{fr:"Je bois",en:"I drink",audio:"zhuh BWAH"},
      {fr:"de l'eau",en:"water",audio:"duh LOH"},{fr:"du pain",en:"bread",audio:"doo PEH"},
      {fr:"une pomme",en:"an apple",audio:"oon POHM"},{fr:"rouge",en:"red",audio:"ROOZH"},
      {fr:"bleu",en:"blue",audio:"BLUH"},{fr:"vert",en:"green",audio:"VEHR"},
      {fr:"J'aime",en:"I like",audio:"ZHEHM"},{fr:"Je n'aime pas",en:"I don't like",audio:"zhuh NEHM PAH"},
    ],
    sentences:[
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"mange",type:"verb",en:"eat"},{text:"une pomme",type:"complement",en:"an apple"}]},
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"bois",type:"verb",en:"drink"},{text:"de l'eau",type:"complement",en:"water"}]},
      {parts:[{text:"J'",type:"subject",en:"I"},{text:"aime",type:"verb",en:"like"},{text:"le bleu",type:"complement",en:"blue"}]},
    ],
    exercises:[
      {type:"translate",prompt:"How do you say 'I eat' in French?",answer:"je mange",accept:["je mange"]},
      {type:"translate",prompt:"What does 'rouge' mean?",answer:"red",accept:["red"]},
      {type:"fill",prompt:"Je ___ de l'eau (I drink water)",answer:"bois",accept:["bois"]},
      {type:"translate",prompt:"What does 'J'aime' mean?",answer:"i like",accept:["i like","i love"]},
    ],
    test:[
      {q:"Translate: I eat an apple",a:"je mange une pomme",accept:["je mange une pomme"]},
      {q:"What does 'Je bois de l'eau' mean?",a:"i drink water",accept:["i drink water"]},
      {q:"Translate: red",a:"rouge",accept:["rouge"]},
      {q:"What does 'J'aime le bleu' mean?",a:"i like blue",accept:["i like blue"]},
    ],
  },
  {
    id:5, name:"Conversations", description:"Questions and simple exchanges", color:"#C0725E",
    flashcards:[
      {fr:"Comment tu t'appelles ?",en:"What's your name?",audio:"koh-MOH too tah-PEL"},
      {fr:"Je m'appelle...",en:"My name is...",audio:"zhuh mah-PEL"},
      {fr:"O\u00f9 est... ?",en:"Where is...?",audio:"OO EH"},
      {fr:"Qu'est-ce que c'est ?",en:"What is this?",audio:"kess-kuh-SAY"},
      {fr:"Pourquoi ?",en:"Why?",audio:"poor-KWAH"},{fr:"Parce que",en:"Because",audio:"PARS-kuh"},
      {fr:"aujourd'hui",en:"today",audio:"oh-zhoor-DWEE"},{fr:"demain",en:"tomorrow",audio:"duh-MEH"},
      {fr:"Je ne sais pas",en:"I don't know",audio:"zhuh nuh SAY pah"},
    ],
    sentences:[
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"m'appelle",type:"verb",en:"am called"},{text:"Thomas",type:"complement",en:"Thomas"}]},
      {parts:[{text:"C'",type:"subject",en:"It"},{text:"est",type:"verb",en:"is"},{text:"un livre",type:"complement",en:"a book"}]},
      {parts:[{text:"Je",type:"subject",en:"I"},{text:"ne sais pas",type:"verb",en:"don't know"},{text:"pourquoi",type:"complement",en:"why"}]},
    ],
    exercises:[
      {type:"translate",prompt:"How do you say 'My name is...' in French?",answer:"je m'appelle",accept:["je m'appelle","je mappelle"]},
      {type:"translate",prompt:"What does 'aujourd'hui' mean?",answer:"today",accept:["today"]},
      {type:"translate",prompt:"What does 'demain' mean?",answer:"tomorrow",accept:["tomorrow"]},
    ],
    test:[
      {q:"How do you ask 'What's your name?'",a:"comment tu t'appelles",accept:["comment tu t'appelles","comment tu tappelles"]},
      {q:"Translate: My name is Thomas",a:"je m'appelle thomas",accept:["je m'appelle thomas","je mappelle thomas"]},
      {q:"What does 'Parce que' mean?",a:"because",accept:["because"]},
      {q:"Translate: I don't know",a:"je ne sais pas",accept:["je ne sais pas","je sais pas"]},
    ],
  },
];

// ── FISHING DATA ──
const FISH_SPECIES = [
  {name:"Sardine",emoji:"\ud83d\udc1f",color:"#90CAF9",rarity:"common",value:2,minLevel:1},
  {name:"Trout",emoji:"\ud83d\udc1f",color:"#66BB6A",rarity:"common",value:3,minLevel:1},
  {name:"Perch",emoji:"\ud83d\udc1f",color:"#FFB74D",rarity:"common",value:3,minLevel:1},
  {name:"Bass",emoji:"\ud83d\udc1f",color:"#8D6E63",rarity:"common",value:4,minLevel:1},
  {name:"Carp",emoji:"\ud83d\udc1f",color:"#A5D6A7",rarity:"uncommon",value:6,minLevel:1},
  {name:"Salmon",emoji:"\ud83e\udd8b",color:"#F48FB1",rarity:"uncommon",value:8,minLevel:2},
  {name:"Tuna",emoji:"\ud83d\udc1f",color:"#5C6BC0",rarity:"uncommon",value:10,minLevel:2},
  {name:"Swordfish",emoji:"\u2694\ufe0f",color:"#7E57C2",rarity:"rare",value:18,minLevel:3},
  {name:"Octopus",emoji:"\ud83d\udc19",color:"#AB47BC",rarity:"rare",value:20,minLevel:3},
  {name:"Seahorse",emoji:"\ud83d\udc1f",color:"#FFD54F",rarity:"rare",value:22,minLevel:2},
  {name:"Dolphin",emoji:"\ud83d\udc2c",color:"#4FC3F7",rarity:"epic",value:35,minLevel:4},
  {name:"Whale",emoji:"\ud83d\udc33",color:"#1565C0",rarity:"legendary",value:60,minLevel:5},
  {name:"Golden Fish",emoji:"\u2728",color:"#FFD700",rarity:"legendary",value:80,minLevel:4},
];
const RARITY_COLORS = {common:"#6B8E4E",uncommon:"#4A90D9",rare:"#9B6B9E",epic:"#D4A053",legendary:"#C0725E"};
const RARITY_WEIGHTS = {1:{common:70,uncommon:25,rare:5,epic:0,legendary:0},2:{common:55,uncommon:30,rare:12,epic:3,legendary:0},3:{common:40,uncommon:30,rare:20,epic:8,legendary:2}};

const ROD_UPGRADES = [
  {id:1,name:"Bamboo Rod",desc:"Basic rod. +0 bonus.",timeBonus:0,rarityBonus:0,cost:0},
  {id:2,name:"Wooden Rod",desc:"+3 sec. Slightly better fish.",timeBonus:3,rarityBonus:1,cost:120},
  {id:3,name:"Steel Rod",desc:"+5 sec. Better rare chance.",timeBonus:5,rarityBonus:2,cost:300},
  {id:4,name:"Golden Rod",desc:"+8 sec. Great rare chance.",timeBonus:8,rarityBonus:3,cost:700},
];

// ── DICTIONARY ──
const DICT_ENTRIES = [
  {cat:"Greetings",fr:"Bonjour",en:"Hello / Good morning"},
  {cat:"Greetings",fr:"Salut",en:"Hi"},
  {cat:"Greetings",fr:"Bonsoir",en:"Good evening"},
  {cat:"Greetings",fr:"Au revoir",en:"Goodbye"},
  {cat:"Greetings",fr:"Comment \u00e7a va ?",en:"How are you?"},
  {cat:"Greetings",fr:"\u00c7a va bien, merci",en:"I'm fine, thank you"},
  {cat:"Greetings",fr:"\u00c7a va mal",en:"I'm not doing well"},
  {cat:"Basics",fr:"Oui",en:"Yes"},{cat:"Basics",fr:"Non",en:"No"},
  {cat:"Basics",fr:"Merci",en:"Thank you"},{cat:"Basics",fr:"S'il vous pla\u00eet",en:"Please"},
  {cat:"Basics",fr:"Excusez-moi",en:"Excuse me"},{cat:"Basics",fr:"Pardon",en:"Sorry"},
  {cat:"Basics",fr:"Je ne comprends pas",en:"I don't understand"},
  {cat:"Basics",fr:"Je ne sais pas",en:"I don't know"},
  {cat:"Basics",fr:"Parlez-vous anglais ?",en:"Do you speak English?"},
  {cat:"About me",fr:"Je m'appelle...",en:"My name is..."},
  {cat:"About me",fr:"J'ai ... ans",en:"I am ... years old"},
  {cat:"About me",fr:"Je suis content",en:"I am happy"},
  {cat:"About me",fr:"Je suis fatigu\u00e9",en:"I am tired"},
  {cat:"About me",fr:"J'ai faim",en:"I am hungry"},
  {cat:"About me",fr:"J'ai soif",en:"I am thirsty"},
  {cat:"Daily",fr:"Qu'est-ce que c'est ?",en:"What is this?"},
  {cat:"Daily",fr:"O\u00f9 est... ?",en:"Where is...?"},
  {cat:"Daily",fr:"Combien \u00e7a co\u00fbte ?",en:"How much does it cost?"},
  {cat:"Daily",fr:"Je voudrais...",en:"I would like..."},
  {cat:"Daily",fr:"aujourd'hui",en:"today"},{cat:"Daily",fr:"demain",en:"tomorrow"},
  {cat:"Daily",fr:"hier",en:"yesterday"},{cat:"Daily",fr:"maintenant",en:"now"},
  {cat:"Gaming",fr:"jouer",en:"to play"},{cat:"Gaming",fr:"gagner",en:"to win"},
  {cat:"Gaming",fr:"perdre",en:"to lose"},{cat:"Gaming",fr:"un niveau",en:"a level"},
  {cat:"Gaming",fr:"un personnage",en:"a character"},
  {cat:"Gaming",fr:"une partie",en:"a game (session)"},
  {cat:"Gaming",fr:"Je veux jouer",en:"I want to play"},
  {cat:"Gaming",fr:"C'est mon tour",en:"It's my turn"},
  {cat:"Gaming",fr:"J'ai gagn\u00e9 !",en:"I won!"},
  {cat:"Gaming",fr:"On joue ensemble ?",en:"Shall we play together?"},
  {cat:"Animals",fr:"un chien",en:"a dog"},{cat:"Animals",fr:"un chat",en:"a cat"},
  {cat:"Animals",fr:"un poisson",en:"a fish"},{cat:"Animals",fr:"un oiseau",en:"a bird"},
  {cat:"Animals",fr:"un lapin",en:"a rabbit"},{cat:"Animals",fr:"un cheval",en:"a horse"},
  {cat:"Animals",fr:"un singe",en:"a monkey"},{cat:"Animals",fr:"un lion",en:"a lion"},
  {cat:"Animals",fr:"un \u00e9l\u00e9phant",en:"an elephant"},{cat:"Animals",fr:"une girafe",en:"a giraffe"},
  {cat:"Animals",fr:"un serpent",en:"a snake"},{cat:"Animals",fr:"une tortue",en:"a turtle"},
  {cat:"Animals",fr:"un dauphin",en:"a dolphin"},{cat:"Animals",fr:"un requin",en:"a shark"},
  {cat:"Zoo",fr:"le zoo",en:"the zoo"},{cat:"Zoo",fr:"la cage",en:"the cage"},
  {cat:"Zoo",fr:"l'aquarium",en:"the aquarium"},{cat:"Zoo",fr:"le soigneur",en:"the zookeeper"},
  {cat:"Zoo",fr:"Je veux voir les singes",en:"I want to see the monkeys"},
  {cat:"Zoo",fr:"O\u00f9 sont les lions ?",en:"Where are the lions?"},
  {cat:"Zoo",fr:"C'est un grand \u00e9l\u00e9phant",en:"It's a big elephant"},
];
const DICT_CATS = [...new Set(DICT_ENTRIES.map(d=>d.cat))];
const CAT_COLORS = {Greetings:"#4A90D9",Basics:"#6B8E4E","About me":"#D4A053",Daily:"#9B6B9E",Gaming:"#C0725E",Animals:"#2E86AB",Zoo:"#8D6E63"};

// ── BADGES ──
const ALL_BADGES = [
  {id:"first_card",name:"First Discovery",desc:"Review your first flashcard set",icon:"star",rarity:"common"},
  {id:"first_test",name:"Brave Explorer",desc:"Complete your first test",icon:"trophy",rarity:"common"},
  {id:"five_exercises",name:"Steady Learner",desc:"Complete 5 exercises",icon:"book",rarity:"common"},
  {id:"ten_exercises",name:"Dedicated Student",desc:"Complete 10 exercises",icon:"target",rarity:"uncommon"},
  {id:"level_2",name:"Moving Forward",desc:"Unlock Level 2",icon:"unlock",rarity:"common"},
  {id:"level_3",name:"Getting Stronger",desc:"Unlock Level 3",icon:"zap",rarity:"uncommon"},
  {id:"level_4",name:"Rising Star",desc:"Unlock Level 4",icon:"award",rarity:"rare"},
  {id:"level_5",name:"French Speaker",desc:"Unlock Level 5",icon:"heart",rarity:"legendary"},
  {id:"fifty_points",name:"Point Collector",desc:"Earn 50 points total",icon:"star",rarity:"common"},
  {id:"hundred_points",name:"Treasure Hunter",desc:"Earn 100 points total",icon:"sparkles",rarity:"uncommon"},
  {id:"first_fish",name:"First Catch",desc:"Catch your first fish",icon:"fish",rarity:"common"},
  {id:"ten_fish",name:"Angler",desc:"Catch 10 fish",icon:"fish",rarity:"uncommon"},
  {id:"rare_fish",name:"Lucky Fisher",desc:"Catch a rare fish",icon:"sparkles",rarity:"rare"},
  {id:"first_shop",name:"Smart Shopper",desc:"Claim your first reward",icon:"gift",rarity:"common"},
];

// ── SHOP ──
const SHOP_ITEMS = [
  {id:"game_15",name:"15 min extra game time",cost:75,category:"Gaming"},
  {id:"game_30",name:"30 min extra game time",cost:130,category:"Gaming"},
  {id:"game_60",name:"1 hour extra game time",cost:230,category:"Gaming"},
  {id:"book",name:"Choose a new book",cost:250,category:"Gifts"},
  {id:"snack",name:"Special snack of choice",cost:100,category:"Treats"},
  {id:"outing",name:"Fun outing (zoo, museum...)",cost:500,category:"Adventures"},
  {id:"movie",name:"Movie night pick",cost:150,category:"Entertainment"},
  {id:"surprise",name:"Mystery surprise",cost:180,category:"Gifts"},
];

// ── MESSAGES ──
const MSG_OK = ["Great job!","Excellent!","Well done!","That's correct!","Perfect!","Nicely done!"];
const MSG_CLOSE = ["Almost there!","Really close!","Nice try!","Good effort!"];
const MSG_FAIL = ["Not quite, but don't worry!","That's okay!","Keep going!","No worries!"];

// ── CONFIG ──
const DAILY_LIMIT_MINUTES = 15;
const DAILY_ACTION_LIMIT = 40;
const ADMIN_USERS = ["Batiste"];
const DEFAULT_PROFILE = {points:0,totalPts:0,unlockedLevels:[1],completedTests:[],earnedBadges:[],exerciseCount:0,purchaseHistory:[],fishInventory:[],fishCaught:0,rodLevel:1,dailyLog:{},notes:[]};
