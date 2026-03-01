/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = function (n) {
  let sum = 0;
  let sign = 1;

  for (const digit of n.toString()) {
    sum += sign * Number(digit);
    sign = -sign;
  }

  return sum;
};
