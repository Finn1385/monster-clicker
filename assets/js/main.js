var currentMob = new Mob("Slime", 1, 1, "Slime.png", 1);
var nextMob = new Mob("Person", 1, 1, "Person.png", 1);
document.addEventListener(
  "DOMContentLoaded",
  function () {
    currentMob.spawn();
    upgradesWeapons.loadUpgrades();
    upgradesMagic.loadUpgrades();
    gameMechanics.updateCoins();
    gameMechanics.autoClicker();
  },
  false
);

document.addEventListener("mousemove", (event) => {
  if (
    event.clientX === 0 ||
    event.clientX >= document.body.clientWidth - 2 ||
    event.clientY === 0 ||
    event.clientY >= document.body.clientHeight - 2
  ) {
    if (!isPaused) gameMechanics.gamePause();
  }
});

const test = () => {
  if (!isPaused) gameControls.hitMob(currentMob, 1);
  setTimeout(() => {
    test();
  }, 1000);
};
