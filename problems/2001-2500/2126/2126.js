/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
const asteroidsDestroyed = function (mass, asteroids) {
  asteroids.sort((a, b) => a - b);

  for (let i = 0, current = mass; i < asteroids.length; i++) {
    if (current < asteroids[i]) {
      return false;
    }

    current += asteroids[i];
  }

  return true;
};
