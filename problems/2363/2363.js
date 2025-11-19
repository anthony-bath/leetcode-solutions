/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
const mergeSimilarItems = function (items1, items2) {
  const map = {};

  for (const [value, weight] of [...items1, ...items2]) {
    if (!map[value]) {
      map[value] = [value, weight];
    } else {
      map[value][1] += weight;
    }
  }

  return Object.values(map);
};
