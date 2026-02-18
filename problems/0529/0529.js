const DELTAS = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
];

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = function (board, [cy, cx]) {
  const [H, W] = [board.length, board[0].length];

  if (board[cy][cx] === 'M') {
    board[cy][cx] = 'X';
    return board;
  }

  if (board[cy][cx] !== 'E') {
    return board;
  }

  const inBounds = (x, y) => x >= 0 && x < W && y >= 0 && y < H;

  function countMines(x, y) {
    let count = 0;

    for (const [dx, dy] of DELTAS) {
      const nx = x + dx;
      const ny = y + dy;

      if (inBounds(nx, ny) && board[ny][nx] === 'M') count++;
    }

    return count;
  }

  function expand(x, y) {
    const mines = countMines(x, y);

    if (mines > 0) {
      board[y][x] = String(mines);
      return;
    }

    board[y][x] = 'B';

    for (const [dx, dy] of DELTAS) {
      const nx = x + dx;
      const ny = y + dy;

      if (!inBounds(nx, ny)) continue;
      if (board[ny][nx] !== 'E') continue;

      expand(nx, ny);
    }
  }

  expand(cx, cy);

  return board;
};
