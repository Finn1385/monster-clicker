class GameControls {
  constructor() {}

  hitMob(mob, damage = player.damage) {
    if (mob.hp - damage > 0) {
      mob.hp -= damage;
      new GameMechanics().updateHpBar(mob);
      document.querySelector(".monster img.monster-img").style.transform =
        "scale(.9)";
      setTimeout(() => {
        document.querySelector(".monster img.monster-img").style.transform =
          "scale(1)";
      }, 100);
    } else {
      mob.hp -= damage;
      new GameMechanics().updateHpBar(mob);
      mob.kill();
    }
  }
}

class GameMechanics {
  constructor() {}

  updateHpBar(mob) {
    var hpBarDiv = document.querySelector(".monster .monster-health-bar");
    var hpBar = hpBarDiv.querySelector(".monster-health");
    var hpAmount = hpBarDiv.querySelector("p.monster-hp");

    hpBar.style.width = (Math.ceil(mob.hp) * 100) / mob.maxHp + "%";
    hpAmount.innerHTML = mob.maxHp + "/" + Math.ceil(mob.hp) + " HP";
  }

  updateCoins() {
    document.querySelector(
      "main .pov .coins p span.amount"
    ).innerHTML = Math.round(player.coins);
  }

  pauseGame() {
    if (isPaused == true) {
      isPaused = false;
    } else {
      isPaused = true;
    }
  }
}
