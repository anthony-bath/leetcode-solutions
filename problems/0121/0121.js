const { max } = Math;

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      maxProfit = max(maxProfit, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }

    sell++;
  }

  return maxProfit;
};
