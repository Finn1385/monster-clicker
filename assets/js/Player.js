class Player {
  constructor(coins = 0, weapon = null, mobsKilled = 0, dps = 0) {
    this.coins = coins;
    this.weapon = weapon;
    this.damage = weapon
      ? defaultPlayerDamage * weapon.dmgMultiplier
      : defaultPlayerDamage;
    this.mobsKilled = mobsKilled;
    this.dps = 0;
  }
}
