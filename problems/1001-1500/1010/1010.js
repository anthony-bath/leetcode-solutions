/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function (time) {
  const rem = Array(61).fill(0);
  let result = 0;

  for (const entry of time) {
    const mod = entry % 60;
    const diff = (60 - mod) % 60;

    result += rem[diff];
    rem[mod] += 1;
  }

  return result;
};
