const MOD = 10 ** 9 + 7;

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const memo = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(maxMove + 1).fill(-1))
  );

  function dfs(r, c, remainingMoves) {
    if (r < 0 || r >= m || c < 0 || c >= n) return 1;
    if (remainingMoves === 0) return 0;
    if (memo[r][c][remainingMoves] !== -1) return memo[r][c][remainingMoves];

    let count = 0;
    let moves = remainingMoves - 1;

    count = (count + dfs(r + 1, c, moves)) % MOD;
    count = (count + dfs(r - 1, c, moves)) % MOD;
    count = (count + dfs(r, c + 1, moves)) % MOD;
    count = (count + dfs(r, c - 1, moves)) % MOD;

    memo[r][c][remainingMoves] = count;
    return count;
  }

  return dfs(startRow, startColumn, maxMove);
};
