/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  return search(n);
};

function search(n, cache = { 1: 1, 2: 2 }) {
  if (n in cache) {
    return cache[n];
  }

  const result = search(n - 1, cache) + search(n - 2, cache);
  cache[n] = result;
  return result;
}
