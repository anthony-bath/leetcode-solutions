/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  if (n === 1) return true;

  const { floor } = Math;
  const seen = new Set();

  while (true) {
    let sum = 0;

    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = floor(n / 10);
    }

    if (sum === 1) return true;
    if (seen.has(sum)) return false;

    n = sum;
    seen.add(sum);
  }
};
