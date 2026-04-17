/**
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxFish = function (grid) {
  let best = 0;

  function dfs(r, c) {
    if (!grid[r] || !grid[r][c]) return 0;
    if (grid[r][c] === 0) return 0;

    const count = grid[r][c];
    grid[r][c] = 0;

    return count + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 0) continue;

      best = Math.max(best, dfs(r, c));
    }
  }

  return best;
};
