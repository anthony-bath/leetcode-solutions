const { abs } = Math;

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
const escapeGhosts = function (ghosts, target) {
  const [x, y] = target;
  const player = abs(x) + abs(y);

  for (const [gx, gy] of ghosts) {
    if (abs(gx - x) + abs(gy - y) <= player) return false;
  }

  return true;
};
