/**
 * @param {number} n
 * @return {boolean}
 */
const isThree = function (n) {
  if (n < 4) return false;

  let divisors = 2;

  for (let k = 2; k <= n / 2; k++) {
    if (n % k === 0) divisors++;

    if (divisors > 3) return false;
  }

  return divisors === 3;
};
