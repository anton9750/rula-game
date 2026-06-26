// data/players/player.js
// Player data and save system

export class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.x = 0;
    this.y = 10;
    this.z = 0;
    this.health = 100;
    this.inventory = [];
  }
  save() { console.log('💾 Player saved:', this.id); }
}
