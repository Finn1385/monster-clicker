class Weapon {
  constructor(name, dmgMultiplier, price, img, unlockBefore, isBought = false) {
    this.name = name;
    this.dmgMultiplier = dmgMultiplier;
    this.price = price;
    this.img = "weapons/" + img;
    this.unlockBefore = unlockBefore;
    this.isBought = isBought;
  }

  buy() {
    if (player.coins - this.price >= 0) {
      player.weapon = this;
      player.damage = defaultPlayerDamage * this.dmgMultiplier;
      player.coins -= this.price;
      this.isBought = true;
      upgradesWeapons.loadUpgrades();
      gameMechanics.updateCoins();
    }
  }
}

class UpgradesWeapons {
  constructor(allWeapons) {
    this.allWeapons = allWeapons;
  }

  loadUpgrades() {
    var upgradesDiv = document.querySelector("aside .upgrades-weapons");
    while (upgradesDiv.childNodes.length > 0) {
      upgradesDiv.removeChild(upgradesDiv.lastChild);
    }
    this.allWeapons.forEach((weapon) => {
      if (
        weapon.unlockBefore === null ||
        (weapon.unlockBefore !== null && weapon.unlockBefore.isBought)
      ) {
        var weaponDiv = document.createElement("div");
        weaponDiv.classList.add("upgrades-item");
        if (weapon.isBought) {
          weaponDiv.classList.add("bought");
        }

        if (!weapon.isBought) {
          weaponDiv.onclick = () => {
            weapon.buy();
          };
        }

        var itemLeft = document.createElement("div");
        itemLeft.classList.add("item-left");

        var itemName = document.createElement("div");
        itemName.classList.add("item-name");

        var h2 = document.createElement("h2");
        var img = document.createElement("img");
        img.src = "./assets/images/upgrades/" + weapon.img;
        img.alt = weapon.name;
        itemName.appendChild(img);
        h2.innerHTML = weapon.name;
        itemName.appendChild(h2);
        itemLeft.appendChild(itemName);

        var pDesc = document.createElement("p");
        pDesc.classList.add("desc");
        pDesc.innerHTML =
          "Damage: " + defaultPlayerDamage * weapon.dmgMultiplier;
        itemLeft.appendChild(pDesc);

        weaponDiv.appendChild(itemLeft);

        var pPrice = document.createElement("p");
        pPrice.classList.add("price");
        if (weapon.isBought) {
          pPrice.innerHTML =
            '<svg class="bought" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';
        } else {
          pPrice.innerHTML =
            weapon.price +
            " <img class='coin' src='./assets/images/misc/Coin.png' />";
        }
        weaponDiv.appendChild(pPrice);

        upgradesDiv.appendChild(weaponDiv);
      }
    });
  }
}

class Magic {
  constructor(name, dps, price, img, unlockBefore, isBought = false) {
    this.name = name;
    this.dps = dps;
    this.price = price;
    this.img = "magic/" + img;
    this.unlockBefore = unlockBefore;
    this.isBought = isBought;
  }

  buy() {
    if (player.coins - this.price >= 0) {
      player.magic = this;
      player.dps = this.dps;
      player.coins -= this.price;
      this.isBought = true;
      upgradesMagic.loadUpgrades();
      gameMechanics.updateCoins();
      gameMechanics.updateDPS();
      document.querySelector(".pov .magic").innerHTML =
        '<img src="./assets/images/upgrades/' +
        this.img +
        '" alt="' +
        this.name +
        '" />';
    }
  }
}

class UpgradesMagic {
  constructor(allMagic) {
    this.allMagic = allMagic;
  }

  loadUpgrades() {
    var upgradesDiv = document.querySelector("aside .upgrades-magic");
    while (upgradesDiv.childNodes.length > 0) {
      upgradesDiv.removeChild(upgradesDiv.lastChild);
    }
    this.allMagic.forEach((weapon) => {
      if (
        weapon.unlockBefore === null ||
        (weapon.unlockBefore !== null && weapon.unlockBefore.isBought)
      ) {
        var weaponDiv = document.createElement("div");
        weaponDiv.classList.add("upgrades-item");
        if (weapon.isBought) {
          weaponDiv.classList.add("bought");
        }

        if (!weapon.isBought) {
          weaponDiv.onclick = () => {
            weapon.buy();
          };
        }

        var itemLeft = document.createElement("div");
        itemLeft.classList.add("item-left");

        var itemName = document.createElement("div");
        itemName.classList.add("item-name");

        var h2 = document.createElement("h2");
        var img = document.createElement("img");
        img.src = "./assets/images/upgrades/" + weapon.img;
        img.alt = weapon.name;
        itemName.appendChild(img);
        h2.innerHTML = weapon.name;
        itemName.appendChild(h2);
        itemLeft.appendChild(itemName);

        var pDesc = document.createElement("p");
        pDesc.classList.add("desc");
        pDesc.innerHTML = "Damage Per Second: " + weapon.dps;
        itemLeft.appendChild(pDesc);

        weaponDiv.appendChild(itemLeft);

        var pPrice = document.createElement("p");
        pPrice.classList.add("price");
        if (weapon.isBought) {
          pPrice.innerHTML =
            '<svg class="bought" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';
        } else {
          pPrice.innerHTML =
            weapon.price +
            " <img class='coin' src='./assets/images/misc/Coin.png' />";
        }
        weaponDiv.appendChild(pPrice);

        upgradesDiv.appendChild(weaponDiv);
      }
    });
  }
}

const upgradesMenu = (type) => {
  var menuButtons = document.querySelector("aside .top .types");
  var menuWeapons = document.querySelector("aside .upgrades-weapons");
  var menuMagic = document.querySelector("aside .upgrades-magic");
  if (type === "weapons") {
    menuButtons.querySelector(".upgrade-type.magic").classList.remove("active");
    menuButtons.querySelector(".upgrade-type.weapons").classList.add("active");
    menuMagic.classList.remove("active");
    menuWeapons.classList.add("active");
  } else {
    menuButtons
      .querySelector(".upgrade-type.weapons")
      .classList.remove("active");
    menuButtons.querySelector(".upgrade-type.magic").classList.add("active");
    menuWeapons.classList.remove("active");
    menuMagic.classList.add("active");
  }
};
