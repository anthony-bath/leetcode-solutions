/**
 * @param {number[][]} dimensions
 * @return {number}
 */
const areaOfMaxDiagonal = function (dimensions) {
  let [maxDiagonal, maxArea] = [0, 0];

  for (const [l, w] of dimensions) {
    const diagonal = Math.sqrt(l * l + w * w);

    if (diagonal > maxDiagonal) {
      maxArea = l * w;
      maxDiagonal = diagonal;
    } else if (diagonal === maxDiagonal) {
      maxArea = Math.max(l * w, maxArea);
    }
  }

  return maxArea;
};
