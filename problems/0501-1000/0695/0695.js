const DELTAS = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
const { max } = Math;

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  const [W, H] = [grid[0].length, grid.length];

  function floodfill(x, y) {
    const queue = [x, y];
    grid[y][x] = 0;
    let area = 1;
    let head = 0;

    while (head < queue.length) {
      const x = queue[head++];
      const y = queue[head++];

      for (const [dx, dy] of DELTAS) {
        const [nx, ny] = [x + dx, y + dy];

        if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue;
        if (grid[ny][nx] === 0) continue;

        queue.push(nx, ny);
        grid[ny][nx] = 0;
        area += 1;
      }
    }

    return area;
  }

  let result = 0;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (grid[y][x] === 0) continue;

      result = max(result, floodfill(x, y));
    }
  }

  return result;
};
