// game-client/public/models/models.js
// 3D Models loader

export class ModelManager {
  loadModel(name) {
    console.log('📦 Loading model:', name);
    return new Promise(resolve => setTimeout(resolve, 500));
  }
}
