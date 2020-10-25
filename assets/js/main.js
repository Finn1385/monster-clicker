var currentMob = new Mob("Slime", 1, 1, "Slime.png");
var nextMob = new Mob("Person", 1, 1, "Person.png");
document.addEventListener(
  "DOMContentLoaded",
  function () {
    currentMob.spawn();
    upgradesWeapons.loadUpgrades();
    gameMechanics.updateCoins();
  },
  false
);
