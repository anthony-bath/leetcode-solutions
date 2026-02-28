/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  const lastDay = days.at(-1);
  const dp = Array(lastDay + 1).fill(0);
  let index = 0;

  for (let day = 1; day <= lastDay; day++) {
    if (day < days[index]) {
      dp[day] = dp[day - 1];
      continue;
    }

    index += 1;
    dp[day] = Math.min(
      dp[day - 1] + costs[0],
      dp[Math.max(0, day - 7)] + costs[1],
      dp[Math.max(0, day - 30)] + costs[2]
    );
  }

  return dp[lastDay];
};
