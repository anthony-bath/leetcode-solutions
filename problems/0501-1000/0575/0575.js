/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function (candyType) {
  const types = new Set(candyType);

  return Math.min(types.size, candyType.length / 2);
};
