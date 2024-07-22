/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = function (dominoes) {
  let pairs = 0;
  const map = new Map();

  for (const [a, b] of dominoes) {
    const key = `${a},${b}`;
    const reverseKey = `${b},${a}`;

    pairs += map.get(key) ?? 0;

    if (a !== b) {
      pairs += map.get(reverseKey) ?? 0;
    }

    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      map.set(key, map.get(key) + 1);
    }
  }

  return pairs;
};
