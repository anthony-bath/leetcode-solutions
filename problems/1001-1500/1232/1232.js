/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[coordinates.length - 1];

  if (y1 === y2) {
    // horizontal line
    return coordinates.every(([_, y]) => y === y1);
  } else if (x1 === x2) {
    // vertical line
    return coordinates.every(([x]) => x === x1);
  } else {
    const m = (y2 - y1) / (x2 - x1);
    const b = y2 - m * x2;

    return coordinates.every(([x, y]) => y === m * x + b);
  }
};
