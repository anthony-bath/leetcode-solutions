const { min, max } = Math;

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  const squareSizeCounts = rectangles
    .map(([l, w]) => min(l, w))
    .reduce((freq, len) => {
      freq.set(len, (freq.get(len) || 0) + 1);
      return freq;
    }, new Map());

  return squareSizeCounts.get(max(...squareSizeCounts.keys()));
};
