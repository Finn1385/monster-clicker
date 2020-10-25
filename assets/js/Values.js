//Default values
const defaultMobDamage = 1;
const defaultMobHealth = 100;
const defaultPlayerDamage = 10;

// Game values
const gameControls = new GameControls();
const gameMechanics = new GameMechanics();

// Player
const player = new Player(100); //TODO remove coins

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
  Soul: "Soul.png",
  Wrapper: "Wrapper.png",
  // Slythar: "Slythar.png",
  // Tygroth: "Tygroth.png",
};

//Upgrades - Weapons
var fist = new Weapon("Fist", 1, 0, "Fist.png", null, true);
var hammer = new Weapon("Hammer", 1.5, 25, "Hammer.png", fist, false);
var axe = new Weapon("Axe", 1.6, 50, "Axe.png", hammer, false);

//Upgrades - Magic

const upgradesWeapons = new UpgradesWeapons([fist, hammer, axe]);
