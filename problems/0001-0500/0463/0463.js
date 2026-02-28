/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  let perimeter = 0;
  const H = grid.length;
  const W = grid[0].length;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (grid[y][x] === 0) continue;
      if (!grid[y - 1] || grid[y - 1][x] === 0) perimeter++;
      if (!grid[y + 1] || grid[y + 1][x] === 0) perimeter++;
      if (grid[y]) {
        if (!grid[y][x + 1] || grid[y][x + 1] === 0) perimeter++;
        if (!grid[y][x - 1] || grid[y][x - 1] === 0) perimeter++;
      }
    }
  }

  return perimeter;
};
