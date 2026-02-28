/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set(jewels.split(''));

  return stones.split('').filter((stone) => jewelsSet.has(stone)).length;
};
