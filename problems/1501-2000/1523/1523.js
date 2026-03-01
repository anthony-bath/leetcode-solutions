/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
  const odds = (low % 2) + (high % 2);
  const diff = high - low - (odds - 1);

  return odds + Math.floor(diff / 2);
};
