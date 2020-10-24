var currentMob = new Mob("Slime", 1, 1, "Slime.png");
var nextMob = new Mob("Slime2", 1, 1, "Slime.png");
document.addEventListener(
  "DOMContentLoaded",
  function () {
    currentMob.spawn();
  },
  false
);
