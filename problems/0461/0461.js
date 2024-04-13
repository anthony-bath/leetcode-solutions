/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  return parity(x ^ y);
};

function parity(n) {
  let highs = 0;

  while (n > 0) {
    highs++;
    n &= n - 1;
  }

  return highs;
}
