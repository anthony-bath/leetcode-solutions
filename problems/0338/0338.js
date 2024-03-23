/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  if (n === 0) return [0];

  const result = Array(n + 1).fill(0);

  for (let current = 1; current <= n; current++) {
    result[current] = result[current >> 1] + (current & 1);
  }

  return result;
};
