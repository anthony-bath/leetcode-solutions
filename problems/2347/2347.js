/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
const bestHand = function (ranks, suits) {
  if (suits.every((suit) => suit === suits[0])) return 'Flush';

  const max = Math.max(
    ...ranks.reduce((freq, rank) => {
      freq[rank]++;
      return freq;
    }, Array(14).fill(0))
  );

  if (max >= 3) {
    return 'Three of a Kind';
  } else if (max === 2) {
    return 'Pair';
  }

  return 'High Card';
};
