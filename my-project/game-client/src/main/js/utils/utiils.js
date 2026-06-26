// game-client/src/main/js/utils/utils.js
// Utils

export class Utils {
  static clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
}
