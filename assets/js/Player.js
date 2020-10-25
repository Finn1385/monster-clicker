class Player {
  constructor(coins = 0, weapon = null) {
    this.coins = coins;
    this.weapon = weapon;
    this.damage = weapon
      ? defaultPlayerDamage * weapon.dmgMultiplier
      : defaultPlayerDamage;
  }
}
