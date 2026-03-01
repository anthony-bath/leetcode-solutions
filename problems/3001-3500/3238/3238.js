/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
const winningPlayerCount = function (n, pick) {
  const counts = Array(n)
    .fill()
    .reduce((counts, _, i) => {
      counts[i] = Array(11).fill(0);
      return counts;
    }, {});

  const winners = new Set();

  for (const [player, color] of pick) {
    counts[player][color]++;

    if (counts[player][color] > player) {
      winners.add(player);
    }
  }

  return winners.size;
};
