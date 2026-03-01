/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
  const cache = {};

  function getTrib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    if (n === 3) return 2;

    if (n in cache) {
      return cache[n];
    }

    cache[n] = getTrib(n - 3) + getTrib(n - 2) + getTrib(n - 1);

    return cache[n];
  }

  return getTrib(n);
};
