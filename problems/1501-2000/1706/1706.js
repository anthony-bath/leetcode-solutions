/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const H = grid.length;
  const W = grid[0].length;

  function dfs(x, y) {
    // 1 can go down-right if not adjacent to a -1
    // -1 can go down-left if not adjacent to a 1
    const nextY = y + 1;
    const nextX = x + grid[y][x];

    if (nextY < H && (nextX < 0 || nextX >= W)) return -1;
    if (grid[y][nextX] !== grid[y][x]) return -1;
    if (nextY >= H) return nextX;

    return dfs(nextX, nextY);
  }

  return Array.from({ length: W }, (_, i) => i).map((x) => dfs(x, 0));
};
