// data/saves/save.js
// Save system

export class SaveManager {
  static saves = [];
  static load(id) { console.log('📂 Load save:', id); }
  static save(data) { console.log('💾 Save game'); }
}
