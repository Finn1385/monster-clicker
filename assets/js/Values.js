//Default values
const defaultMobDamage = 3;
const defaultMobHealth = 100;
const defaultPlayerDamage = 10;
const defaultMobReward = 10;

// Game values
const gameControls = new GameControls();
const gameMechanics = new GameMechanics();
var isPaused = false;

// Player
const player = new Player();

// Mob names
const allMobNames = {
  Slime: "Slime.png",
  Crawler: "Crawler.png",
  Goblin: "Goblin.png",
  Groundeater: "Groundeater.png",
  Husk: "Husk.png",
  Leafy: "Leafy.png",
  Mimic: "Mimic.png",
  Person: "Person.png",
  "Tortured Soul": "Soul.png",
  Wrapper: "Wrapper.png",
  Slythar: "Slythar.png", //Boss
  Tygroth: "Tygroth.png", //Boss
  Tailer: "Tailer.png",
  Globber: "Globber.png",
};

//Upgrades - Weapons
const fist = new Weapon("Fist", 1, 0, "Fist.png", null, true);
const stick = new Weapon("Twig", 1.5, 100, "Stick.png", fist, false);
const slingshot = new Weapon(
  "Slingshot",
  2,
  250,
  "Slingshot.png",
  stick,
  false
);
const damagedDagged = new Weapon(
  "Damaged Dagger",
  2.5,
  500,
  "Damaged dagger.png",
  slingshot,
  false
);
const shortsword = new Weapon(
  "ShortSword",
  3,
  950,
  "Shortsword.png",
  damagedDagged,
  false
);
const hammer = new Weapon("Hammer", 3.5, 1800, "Hammer.png", shortsword, false);
const axe = new Weapon("Axe", 4, 3400, "Axe.png", hammer, false);
const sword = new Weapon("Axe", 4.5, 6500, "Sword.png", axe, false);
const scythe = new Weapon("Scythe", 5, 12300, "Scythe.png", sword, false);

const upgradesWeapons = new UpgradesWeapons([
  fist,
  stick,
  slingshot,
  damagedDagged,
  shortsword,
  hammer,
  axe,
  sword,
  scythe,
]);

// Upgrades - Magic

const upgradesMagic = new UpgradesMagic([]);
