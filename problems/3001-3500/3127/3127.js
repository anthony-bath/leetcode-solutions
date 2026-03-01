/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const canMakeSquare = function (grid) {
  const points = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];

  for (const [y, x] of points) {
    const counts = { B: 0, W: 0 };

    counts[grid[y][x]]++;
    counts[grid[y][x + 1]]++;
    counts[grid[y + 1][x]]++;
    counts[grid[y + 1][x + 1]]++;

    if (counts.B >= 3 || counts.W >= 3) return true;
  }

  return false;
};
