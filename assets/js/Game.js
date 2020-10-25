class GameControls {
  constructor() {}

  hitMob(mob) {
    if (mob.hp - player.damage > 0) {
      mob.hp -= player.damage;
      new GameMechanics().updateHpBar(mob);
    } else {
      mob.hp -= player.damage;
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

    hpBar.style.width = (mob.hp * 100) / mob.maxHp + "%";
    hpAmount.innerHTML = mob.maxHp + "/" + mob.hp + " HP";
  }

  updateCoins() {
    document.querySelector(
      "main .pov .coins p span.amount"
    ).innerHTML = Math.round(player.coins);
  }
}
