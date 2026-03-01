const { abs, max } = Math;

/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function (points) {
  let duration = 0;

  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];

    const xDiff = abs(x2 - x1);
    const yDiff = abs(y2 - y1);

    duration += max(xDiff, yDiff);
  }

  return duration;
};
