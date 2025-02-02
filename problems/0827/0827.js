/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  let islandId = 2;
  const islands = {};

  function dfs(y, x, id) {
    if (y < 0 || y >= grid.length || x < 0 || x >= grid.length) return;

    if (grid[y][x] === 1) {
      grid[y][x] = id;
      islands[id]++;

      dfs(y - 1, x, id);
      dfs(y + 1, x, id);
      dfs(y, x - 1, id);
      dfs(y, x + 1, id);
    }
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid.length; x++) {
      if (grid[y][x] === 1) {
        islandId++;
        islands[islandId] = 0;
        dfs(y, x, islandId);
      }
    }
  }

  if (Object.keys(islands).length === 0) return 1;

  function adjacentArea(y, x, visited) {
    if (
      y < 0 ||
      y >= grid.length ||
      x < 0 ||
      x >= grid.length ||
      grid[y][x] === 0 ||
      visited.has(grid[y][x])
    ) {
      return 0;
    }

    visited.add(grid[y][x]);
    return islands[grid[y][x]];
  }

  let max = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid.length; x++) {
      if (grid[y][x] !== 0) continue;

      let area = 1;
      const visited = new Set();
      area += adjacentArea(y - 1, x, visited);
      area += adjacentArea(y + 1, x, visited);
      area += adjacentArea(y, x - 1, visited);
      area += adjacentArea(y, x + 1, visited);

      if (area > max) {
        max = area;
      }
    }
  }

  return max ? max : grid.length * grid.length;
};
