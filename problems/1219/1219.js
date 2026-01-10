const DELTAS = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaximumGold = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  let best = 0;

  function dfs(x, y, total) {
    const gold = grid[y][x];

    total += gold;

    if (total > best) {
      best = total;
    }

    grid[y][x] = 0;

    for (const [dx, dy] of DELTAS) {
      const [nx, ny] = [x + dx, y + dy];
      if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
      if (grid[ny][nx] === 0) continue;

      dfs(nx, ny, total);
    }

    grid[y][x] = gold;
  }

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 0) continue;
      dfs(x, y, 0);
    }
  }

  return best;
};
