/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
  if (n === 1) return 1;

  const trustMap = Array(n + 1).fill(0);

  for (const [truster, trustee] of trust) {
    trustMap[truster]--;
    trustMap[trustee]++;
  }

  return trustMap.indexOf(n - 1);
};
