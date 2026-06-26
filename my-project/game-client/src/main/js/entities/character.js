// game-client/src/main/js/entities/character.js
// Character entity

export class Character {
  constructor() {
    this.position = { x: 0, y: 0, z: 0 };
    this.rotation = 0;
  }
  update() { console.log('⚔️ Character updated'); }
}
