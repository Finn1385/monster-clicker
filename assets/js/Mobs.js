class Mob {
  constructor(name, hpMultiplier, dmgMultiplier, img) {
    this.hpMultiplier = hpMultiplier;
    this.maxHp = Math.round(defaultMobHealth * hpMultiplier);
    this.hp = this.maxHp;
    this.dmgMultiplier = dmgMultiplier;
    this.dmg = defaultMobDamage * dmgMultiplier;
    this.name = name;
    this.img = img;
    this.isAlive = true;
  }

  spawn() {
    var mobImg = document.createElement("img");
    mobImg.src = "./assets/images/mobs/" + this.img;
    mobImg.classList.add("monster-img");
    mobImg.alt = this.name;
    mobImg.onclick = () => {
      gameControls.hitMob(this);
    };
    const monster = document.querySelector(".monster");
    monster.appendChild(mobImg);
    monster.querySelector("h2.monster-name").innerHTML = this.name;
    gameMechanics.updateHpBar(this);
    this.attack();
    currentMob = this;
  }

  kill() {
    const monsterDiv = document.querySelector(".monster");
    if (monsterDiv.querySelector("img.monster-img") !== null && this.hp <= 0) {
      monsterDiv.querySelector("img.monster-img").remove();
      this.isAlive = false;
      nextMob.spawn();
      generateMob(nextMob);
      // TODO rewards
      player.coins += player.coins * this.dmgMultiplier;
      gameMechanics.updateCoins();
    }
  }

  attack() {
    if (this.isAlive) {
      if (player.coins - this.dmg >= 0) {
        player.coins -= this.dmg;
      } else {
        player.coins = 0;
      }
      gameMechanics.updateCoins();
      const monster = document.querySelector(".monster img.monster-img");
      monster.style.transform = "translateY(25px) scale(1.1)";
      setTimeout(() => {
        monster.style.transform = null;
      }, 150);
      setTimeout(() => {
        this.attack();
      }, 2000);
    }
  }
}

const generateMob = (oldMob) => {
  // Random mob
  const totalMobs = Object.keys(allMobNames).length;
  const randomNum = Math.floor(Math.random() * totalMobs);

  const randomMob = {
    name: Object.keys(allMobNames)[randomNum],
    img: allMobNames[Object.keys(allMobNames)[randomNum]],
  };
  if (oldMob.name === randomMob.name && oldMob.img === randomMob.img) {
    return generateMob(oldMob);
  }

  nextMob = new Mob(
    randomMob.name,
    oldMob.hpMultiplier + 0.01,
    oldMob.dmgMultiplier + 0.025,
    randomMob.img
  );
};
