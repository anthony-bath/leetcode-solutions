/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
const numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (tomatoSlices % 2 === 1) return [];

  // 4j + 2s = tomatoSlices
  // j + s = cheeseSlices
  // j = cheeseSlices - s
  // 4(cheeseSlices - s) + 2s = tomatoSlices
  // 4*cheeseSlices - 4s + 2s = tomatoSlices
  // 4*cheeseSlices - tomatoSlices = 2s
  // s = (4*cheeseSlices - tomatoSlices)/2
  const small = (4 * cheeseSlices - tomatoSlices) / 2;
  const jumbo = cheeseSlices - small;

  if (small < 0 || jumbo < 0) return [];

  return [jumbo, small];
};
