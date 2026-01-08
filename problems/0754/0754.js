/**
 * @param {number} target
 * @return {number}
 */
const reachNumber = function (target) {
  target = Math.abs(target);
  let total = 0,
    moves = 0;

  while (total < target || (total - target) % 2 === 1) {
    moves++;
    total += moves;
  }

  return moves;
};
