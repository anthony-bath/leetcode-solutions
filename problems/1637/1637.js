const { max } = Math;

/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = function (points) {
  points.sort(([x1, y1], [x2, y2]) => x1 - x2);

  let maxWidth = 0;

  for (let i = 1; i < points.length; i++) {
    maxWidth = max(maxWidth, points[i][0] - points[i - 1][0]);
  }

  return maxWidth;
};
