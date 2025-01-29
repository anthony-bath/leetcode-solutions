/**
 * @param {number[]} cost
 * @return {number}
 */
const minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < cost.length; i += 3) {
    sum += cost[i];

    if (cost[i + 1]) {
      sum += cost[i + 1];
    }
  }

  return sum;
};
