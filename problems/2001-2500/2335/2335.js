const { max, ceil } = Math;

/**
 * @param {number[]} amount
 * @return {number}
 */
const fillCups = function (amount) {
  const total = amount[0] + amount[1] + amount[2];
  const highest = max(...amount);

  return max(highest, ceil(total / 2));
};
