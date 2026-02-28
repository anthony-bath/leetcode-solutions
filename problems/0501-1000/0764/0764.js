/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, minesArr) {
  const dp = Array.from({ length: n }, () => Array(n).fill(n));

  for (const [r, c] of minesArr) {
    dp[r][c] = 0;
  }

  for (let r = 0; r < n; r++) {
    let run = 0;

    for (let c = 0; c < n; c++) {
      if (dp[r][c] === 0) {
        run = 0;
      } else {
        run++;
      }

      dp[r][c] = Math.min(run, dp[r][c]);
    }

    run = 0;

    for (let c = n - 1; c >= 0; c--) {
      if (dp[r][c] === 0) {
        run = 0;
      } else {
        run++;
      }

      dp[r][c] = Math.min(run, dp[r][c]);
    }
  }

  let result = 0;

  for (let c = 0; c < n; c++) {
    let run = 0;

    for (let r = 0; r < n; r++) {
      if (dp[r][c] === 0) {
        run = 0;
      } else {
        run++;
      }

      dp[r][c] = Math.min(run, dp[r][c]);
    }

    run = 0;

    for (let r = n - 1; r >= 0; r--) {
      if (dp[r][c] === 0) {
        run = 0;
      } else {
        run++;
      }

      dp[r][c] = Math.min(run, dp[r][c]);
      result = Math.max(result, dp[r][c]);
    }
  }

  return result;
};
