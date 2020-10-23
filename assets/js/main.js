//Default values
const default_mob_damage = 1;
const default_mob_health = 100;
const default_damage = 10;

const spawnMob = (mob) => {
  var mobImg = document.createElement("img");
  mobImg.src = mob.imgSrc;
  mobImg.classList.add("monster-img");
  mobImg.alt = mob.name;
  mobImg.onclick = () => {
    new GameControls().hitMob(mob);
  };
  document.querySelector(".monster").appendChild(mobImg);
  new GameMechanics().updateHpBar(mob);
};

const killMob = (mob) => {
  const monsterDiv = document.querySelector(".monster");
  if (monsterDiv.querySelector("img.monster-img") !== null && mob.hp <= 0) {
    monsterDiv.querySelector("img.monster-img").remove();
  }
};

var testMob = {
  hp: 100,
  dmgMp: 1,
  healthMp: 1,
  maxHp: function () {
    return default_mob_health * this.healthMp;
  },
  damage: function () {
    return default_mob_damage * this.dmgMp;
  },
  imgSrc: "./assets/images/mobs/slime.png",
  name: "Slime",
};

class GameControls {
  constructor() {}

  hitMob(mob, damage = default_damage) {
    if (mob.hp - damage > 0) {
      mob.hp -= damage;
      new GameMechanics().updateHpBar(mob);
    } else {
      mob.hp -= damage;
      new GameMechanics().updateHpBar(mob);
      killMob(mob);
    }
  }
}

class GameMechanics {
  constructor() {}

  updateHpBar(mob) {
    var hpBarDiv = document.querySelector(".monster .monster-health-bar");
    var hpBar = hpBarDiv.querySelector(".monster-health");
    var hpAmount = hpBarDiv.querySelector("p.monster-hp");

    hpBar.style.width = (mob.hp * 100) / mob.maxHp() + "%";
    hpAmount.innerHTML = mob.maxHp() + "/" + mob.hp + " HP";
  }
}
