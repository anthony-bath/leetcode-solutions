/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = function (position) {
  let [odds, evens] = [0, 0];

  for (const chip of position) {
    if (chip % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  return Math.min(odds, evens);
};
