/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  const digits = `${n}`.split('').map(Number);

  let product = 1;

  for (const digit of digits) {
    if (digit === 0) {
      product = 0;
      break;
    }

    product *= digit;
  }

  let sum = 0;

  for (const digit of digits) {
    sum += digit;
  }

  return product - sum;
};
