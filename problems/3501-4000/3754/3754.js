/**
 * @param {number} n
 * @return {number}
 */
const sumAndMultiply = function (n) {
  let sum = 0;
  let x = '';

  while (n > 0) {
    const digit = n % 10;

    if (digit > 0) {
      sum += digit;
      x = `${digit}${x}`;
    }

    n = (n - digit) / 10;
  }

  return x * sum;
};
