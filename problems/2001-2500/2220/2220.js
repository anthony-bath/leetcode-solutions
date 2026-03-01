/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = function (start, goal) {
  return parity(start ^ goal);
};

function parity(n) {
  let highs = 0;

  while (n > 0) {
    highs++;
    n &= n - 1;
  }

  return highs;
}
