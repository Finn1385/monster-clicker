class GameControls {
  constructor() {}

  hitMob(mob, damage = defaultPlayerDamage) {
    if (mob.hp - damage > 0) {
      mob.hp -= damage;
      new GameMechanics().updateHpBar(mob);
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

    hpBar.style.width = (mob.hp * 100) / mob.maxHp + "%";
    hpAmount.innerHTML = mob.maxHp + "/" + mob.hp + " HP";
  }
}
