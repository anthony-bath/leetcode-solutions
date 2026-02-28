const MOVES = [
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
];

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
const knightProbability = function (n, k, row, column) {
  function isOffBoard(x, y) {
    return x < 0 || y < 0 || x >= n || y >= n;
  }

  const cache = Array(n)
    .fill()
    .map((_) =>
      Array(n)
        .fill()
        .map((_) => Array(k).fill(null))
    );

  function dfs(x, y, m) {
    if (isOffBoard(x, y)) return 0;
    if (m === 0) return 1;
    if (cache[y][x][m]) return cache[y][x][m];

    let p = 0;

    for (const [dx, dy] of MOVES) {
      p += dfs(x + dx, y + dy, m - 1);
    }

    p /= 8;

    cache[y][x][m] = p;
    return p;
  }

  return dfs(column, row, k);
};
