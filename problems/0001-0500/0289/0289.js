const DELTAS = [
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
];

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  const W = board[0].length,
    H = board.length;
  const toUpdate = [];

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let liveNeighbors = 0;

      for (const [dx, dy] of DELTAS) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || nx >= W || ny < 0 || ny >= H) continue;

        liveNeighbors += board[ny][nx];
      }

      if (!board[y][x] && liveNeighbors === 3) {
        toUpdate.push([x, y, 1]);
        continue;
      }

      if (board[y][x] && (liveNeighbors < 2 || liveNeighbors > 3)) {
        toUpdate.push([x, y, 0]);
      }
    }
  }

  for (const [x, y, v] of toUpdate) {
    board[y][x] = v;
  }
};
