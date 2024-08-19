/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function (arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const ranks = new Map();
  let rank = 1;

  for (const element of sorted) {
    if (!ranks.has(element)) {
      ranks.set(element, rank++);
    }
  }

  return arr.map((n) => ranks.get(n));
};
