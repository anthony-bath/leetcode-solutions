/**
 * @param {number} n
 * @return {number}
 */
const countTriples = function (n) {
  let count = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const a2 = a * a;
      const b2 = b * b;
      const c = Math.sqrt(a2 + b2);

      if (Number.isInteger(c) && c <= n) {
        count++;
      }
    }
  }

  return count;
};
