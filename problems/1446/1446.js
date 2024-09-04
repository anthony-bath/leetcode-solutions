/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function (s) {
  if (s.length === 1) return 1;

  let maxPower = 1;
  let currentPower = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      currentPower++;
    } else {
      if (currentPower > maxPower) maxPower = currentPower;
      currentPower = 1;
    }
  }

  return maxPower;
};
