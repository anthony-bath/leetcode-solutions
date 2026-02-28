/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
  const rank = {
    0: 'Gold Medal',
    1: 'Silver Medal',
    2: 'Bronze Medal',
  };

  return Object.entries(score)
    .sort(([_, aScore], [__, bScore]) => bScore - aScore)
    .reduce((result, [pos], i) => {
      result[pos] = rank[i] ?? `${i + 1}`;
      return result;
    }, []);
};
