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
const fireBall = new Magic("Fire Ball", 15, 2000, "Fire Ball.png", null, false);
const energyBall = new Magic(
  "Energy Ball",
  30,
  3800,
  "Energy Ball.png",
  fireBall,
  false
);
const electricBall = new Magic(
  "Electric Ball",
  45,
  7200,
  "Electric ball.png",
  energyBall,
  false
);

const arcaneBall = new Magic(
  "Arcane Ball",
  75,
  13600,
  "Arcane ball.png",
  electricBall,
  false
);

const upgradesMagic = new UpgradesMagic([
  fireBall,
  energyBall,
  electricBall,
  arcaneBall,
]);
