/**
 * @param {number[]} cost
 * @return {number[]}
 */
const minCosts = function (cost) {
  const result = [cost[0]];
  let min = cost[0];

  for (let i = 1; i < cost.length; i++) {
    if (cost[i] < min) {
      min = cost[i];
    }

    result.push(min);
  }

  return result;
};
