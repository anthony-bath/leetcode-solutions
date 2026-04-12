const DELTA = [
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
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttacktheKing = function (queens, king) {
  const board = Array(8)
    .fill()
    .map((_) => Array(8).fill(0));

  for (const [x, y] of queens) {
    board[y][x] = 1;
  }

  const result = [];

  for (const [dx, dy] of DELTA) {
    let [x, y] = [king[0] + dx, king[1] + dy];

    while (x < 8 && y < 8 && x >= 0 && y >= 0) {
      if (board[y][x]) {
        result.push([x, y]);
        break;
      }

      x += dx;
      y += dy;
    }
  }

  return result;
};
