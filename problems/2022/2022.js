/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];

  const result = [];

  for (let i = 0; i < m; i++) {
    result.push(original.slice(i * n, i * n + n));
  }

  return result;
};
