const { floor } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function (n) {
  const weeks = floor(n / 7);
  const rem = n % 7;

  return ((weeks * (weeks - 1)) / 2) * 7 + 28 * weeks + (rem * (rem + 1)) / 2 + rem * weeks;
};
