/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function (wall) {
  const ends = {};
  let max = 0;

  wall.forEach((row) => {
    let width = 0;

    for (let i = 0; i < row.length - 1; i++) {
      width += row[i];
      const count = (ends[width] ?? 0) + 1;
      ends[width] = count;

      if (count > max) {
        max = count;
      }
    }
  });

  return wall.length - max;
};
