/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const sorted = [...heights].sort((a, b) => a - b);
  let mismatchCount = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (heights[i] !== sorted[i]) mismatchCount++;
  }

  return mismatchCount;
};
