/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  if (moves.length < 5) return 'Pending';

  const board = Array(3)
    .fill()
    .map(() => Array(3).fill(''));
  let aTurn = true;

  for (const [row, col] of moves) {
    board[row][col] = aTurn ? 'A' : 'B';
    aTurn = !aTurn;
  }

  for (const win of wins) {
    const [r0, c0] = win[0];
    const base = board[r0][c0];

    if (!base) continue;

    if (win.every(([r, c]) => board[r][c] === base)) {
      return aTurn ? 'B' : 'A';
    }
  }

  return moves.length === 9 ? 'Draw' : 'Pending';
};

const wins = [
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
];
