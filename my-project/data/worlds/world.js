// data/worlds/world.js
// World data and terrain

export class World {
  constructor(name) {
    this.name = name;
    this.chunks = [];
    this.biomes = ['forest', 'mountain'];
    this.terrain = [];
  }
  generate() { console.log('🌍 World generated:', this.name); }
}
