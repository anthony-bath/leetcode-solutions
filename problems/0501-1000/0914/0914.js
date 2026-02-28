/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function (deck) {
  if (deck.length === 1) return false;

  const freq = new Map();

  for (const card of deck) {
    freq.set(card, (freq.get(card) ?? 0) + 1);
  }

  if (freq.size === 1) return true;

  return gcd(...freq.values()) >= 2;
};

function gcd(x, y, ...z) {
  if (!y && z.length > 0) {
    return gcd(x, ...z);
  }

  if (!y) {
    return x;
  }

  return gcd(y, x % y, ...z);
}
