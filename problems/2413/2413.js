/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  for (let x = n; ; x += n) {
    if (x % 2 === 0) return x;
  }
};
