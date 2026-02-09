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
const shortestBridge = function (grid) {
  const [W, H] = [grid[0].length, grid.length];
  const queue = [];

  function dfs(x, y) {
    if (y < 0 || y >= H || x < 0 || x >= W) return;
    if (grid[y][x] === 0 || grid[y][x] === 2) return;

    grid[y][x] = 2;
    queue.push(x, y);

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }

  outer: for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (grid[y][x] === 1) {
        dfs(x, y);
        break outer;
      }
    }
  }

  let head = 0;
  let distance = 0;

  while (head < queue.length) {
    const layerCount = (queue.length - head) >> 1;

    for (let i = 0; i < layerCount; i++) {
      const x = queue[head++],
        y = queue[head++];

      for (const [dx, dy] of DELTAS) {
        const [nx, ny] = [x + dx, y + dy];

        if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue;
        if (grid[ny][nx] === 2) continue;
        if (grid[ny][nx] === 1) return distance;

        grid[ny][nx] = 2;
        queue.push(nx, ny);
      }
    }

    distance++;
  }
};
