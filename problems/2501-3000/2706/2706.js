/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
const buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);

  const total = prices[0] + prices[1];

  if (total > money) {
    return money;
  }

  return money - total;
};
