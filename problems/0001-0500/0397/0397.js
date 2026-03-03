/**
 * @param {number} n
 * @return {number}
 */
const integerReplacement = function (n) {
  const cache = new Map();

  function f(x) {
    if (x === 1) return 0;
    if (cache.has(x)) return cache.get(x);

    let result;

    if (x % 2 === 0) {
      result = f(x / 2);
    } else {
      result = Math.min(f(x + 1), f(x - 1));
    }

    cache.set(x, result + 1);
    return result + 1;
  }

  return f(n);
};
