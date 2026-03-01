/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length;
  const dp = Array(n + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let width = 0;
    let shelfHeight = 0;

    for (let j = i - 1; j >= 0; j--) {
      const [bookWidth, bookHeight] = books[j];
      width += bookWidth;

      if (width > shelfWidth) break;

      shelfHeight = Math.max(shelfHeight, bookHeight);
      dp[i] = Math.min(dp[i], dp[j] + shelfHeight);
    }
  }

  return dp[n];
};
