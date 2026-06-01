const F = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

/**
 * @param {number} n
 * @return {boolean}
 */
const isDigitorialPermutation = function (n) {
  const nFreq = Array(10).fill(0);
  let sum = 0;

  while (n > 0) {
    const digit = n % 10;
    sum += F[digit];
    nFreq[digit] += 1;
    n = (n - digit) / 10;
  }

  const sumFreq = Array(10).fill(0);

  while (sum > 0) {
    const digit = sum % 10;
    sumFreq[digit] += 1;
    sum = (sum - digit) / 10;
  }

  return sumFreq.every((count, digit) => count === nFreq[digit]);
};
