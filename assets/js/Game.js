class GameControls {
  constructor() {}

  hitMob(mob, damage = player.damage) {
    if (damage !== 0) {
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

  updateDPS() {
    document.querySelector("main .pov .monster .monster-dps").innerHTML =
      "Damage Per Second: " + player.dps;
  }

  gamePlayPause() {
    if (isPaused == true) {
      this.gamePlay();
    } else {
      this.gamePause();
    }
  }

  gamePause() {
    isPaused = true;
    var el = document.querySelector(".pov .play-pause .pause");

    el.classList.add("play");
    el.classList.remove("pause");
  }

  gamePlay() {
    isPaused = false;
    var el = document.querySelector(".pov .play-pause .play");
    el.classList.remove("play");
    el.classList.add("pause");
  }

  autoClicker() {
    if (!isPaused) gameControls.hitMob(currentMob, player.dps);

    setTimeout(() => {
      this.autoClicker();
    }, 1000);
  }
}
