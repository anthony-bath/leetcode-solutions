/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
const canIWin = function (n, desiredTotal) {
  if (n <= 0) return true;
  if ((n * (n + 1)) / 2 < desiredTotal) return false;

  const cache = new Map();

  function evaluate(used, total) {
    if (cache.has(used)) {
      return cache.get(used);
    }

    for (let i = 1; i <= n; i++) {
      const mask = 1 << i;

      if ((used & mask) === 0) {
        if (i >= total || !evaluate(used | mask, total - i)) {
          cache.set(used, true);
          return true;
        }
      }
    }

    cache.set(used, false);
    return false;
  }

  return evaluate(0, desiredTotal);
};
