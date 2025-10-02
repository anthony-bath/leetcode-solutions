/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function (s) {
  if (s.length === 2) return (s[0] === '0' ? 1 : 0) + (s[1] === '1' ? 1 : 0);

  let [ones, zeroes] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      ones++;
    } else {
      zeroes++;
    }
  }

  let [left, right] = [0, ones];
  let max = 0;

  for (let split = 0; split < s.length - 1; split++) {
    if (s[split] === '0') {
      left++;
    } else {
      right--;
    }

    if (left + right > max) {
      max = left + right;
    }
  }

  return max;
};
