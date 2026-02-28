const INT_MIN = (-2) ** 31;
const INT_MAX = 2 ** 31 - 1;

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  if (dividend === INT_MIN && divisor === -1) return INT_MAX;

  let quotient = 0;
  const negDivisor = divisor > 0 ? -divisor : divisor;
  let negDividend = dividend > 0 ? -dividend : dividend;
  const sameSign = dividend >= 0 === divisor >= 0;

  while (negDividend <= negDivisor) {
    let temp = negDivisor;
    let multiple = 1;

    while (temp >= INT_MIN >> 1 && temp << 1 >= negDividend) {
      temp <<= 1;
      multiple += multiple;
    }

    quotient += multiple;
    negDividend -= temp;

    if (negDividend > negDivisor) {
      break;
    }
  }

  return sameSign ? quotient : -quotient;
};
