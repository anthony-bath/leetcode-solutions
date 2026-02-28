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
const orangesRotting = function (grid) {
  const [W, H] = [grid[0].length, grid.length];
  const queue = [];
  let freshCount = 0;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (grid[y][x] === 2) {
        queue.push(x, y);
      } else if (grid[y][x] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) return 0;

  let minutes = 0;
  let head = 0;

  while (head < queue.length) {
    const levelEnd = queue.length;
    let rottenThisMinute = 0;

    while (head < levelEnd) {
      const [x, y] = [queue[head++], queue[head++]];

      for (const [dx, dy] of DELTAS) {
        const [nx, ny] = [x + dx, y + dy];

        if (nx < 0 || nx >= W || ny < 0 || ny >= H) continue;
        if (grid[ny][nx] !== 1) continue;

        grid[ny][nx] = 2;
        queue.push(nx, ny);
        freshCount--;
        rottenThisMinute++;
      }
    }

    if (rottenThisMinute > 0) {
      minutes++;
    }
  }

  return freshCount === 0 ? minutes : -1;
};
