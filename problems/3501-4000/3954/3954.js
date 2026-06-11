const { abs, max } = Math;

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function (n, k) {
  let sum = 0;
  let lowerBound = max(0, n - k);
  let upperBound = max(0, n + k);

  for (let x = lowerBound; x <= upperBound; x++) {
    if ((n & x) === 0) {
      sum += x;
    }
  }

  return sum;
};
