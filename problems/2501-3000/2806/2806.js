/**
 * @param {number} purchaseAmount
 * @return {number}
 */
const accountBalanceAfterPurchase = function (purchaseAmount) {
  const roundedAmount = 10 * Math.round(purchaseAmount / 10);
  return 100 - roundedAmount;
};
