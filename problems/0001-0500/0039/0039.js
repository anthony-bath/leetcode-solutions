/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  function search(position = 0, remaining = target, path = [], result = []) {
    for (let i = position; i < candidates.length; i++) {
      const nextRemaining = remaining - candidates[i];

      if (nextRemaining === 0) {
        result.push([...path, candidates[i]]);
        continue;
      }

      if (nextRemaining > 0) {
        search(i, nextRemaining, [...path, candidates[i]], result);
      }
    }

    return result;
  }

  return search(0, target, [], []);
};
