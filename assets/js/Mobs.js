class Mob {
  constructor(name, hpMultiplier, dmgMultiplier, img, rewardMultiplier) {
    this.hpMultiplier = hpMultiplier;
    this.maxHp = Math.round(defaultMobHealth * hpMultiplier);
    this.hp = this.maxHp;
    this.dmgMultiplier = dmgMultiplier;
    this.dmg = defaultMobDamage * dmgMultiplier;
    this.name = name;
    this.img = img;
    this.rewardMultiplier = rewardMultiplier;
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
      player.mobsKilled += 1;
      generateMob(nextMob);
      player.coins += defaultMobReward * this.rewardMultiplier;
      gameMechanics.updateCoins();
    }
  }

  attack() {
    if (this.isAlive) {
      if (!isPaused) {
        if (player.coins - this.dmg >= 0) {
          player.coins -= this.dmg;
        } else {
          player.coins = 0;
        }
        gameMechanics.updateCoins();
        const monster = document.querySelector(".monster img.monster-img");
        monster.style.transform = "translateY(50px) scale(1.1)";
        document.querySelector(".pov").classList.add("shake");
        setTimeout(() => {
          monster.style.transform = null;
          document.querySelector(".pov").classList.remove("shake");
        }, 150);
      }
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

  if (player.mobsKilled % 10 == 0) {
    nextMob = new Mob(
      randomMob.name,
      oldMob.hpMultiplier + 0.5,
      oldMob.dmgMultiplier + 0.5,
      randomMob.img,
      oldMob.rewardMultiplier + 1
    );
  } else {
    nextMob = new Mob(
      randomMob.name,
      oldMob.hpMultiplier,
      oldMob.dmgMultiplier,
      randomMob.img,
      oldMob.rewardMultiplier
    );
  }
};
