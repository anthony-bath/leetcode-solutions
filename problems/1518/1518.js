/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
};

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottlesSim = function (numBottles, numExchange) {
  if (numExchange > numBottles) return numBottles;

  let full = numBottles;
  let empty = 0;
  let count = 0;

  while (full > 0) {
    count += full;
    empty += full;
    full = 0;

    const swap = Math.floor(empty / numExchange);

    empty -= swap * numExchange;
    full += swap;
  }

  return count;
};
