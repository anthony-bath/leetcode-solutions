const { abs } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const mirrorDistance = function (n) {
  return abs(n - reverse(n));
};

function reverse(n) {
  const digits = [];

  while (n > 0) {
    const next = n % 10;
    digits.push(next);
    n = (n - next) / 10;
  }

  return digits.join('');
}
