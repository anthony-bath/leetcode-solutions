/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const count = Array(128).fill(0);
  let longest = 0;

  for (let left = 0, right = 0; right < s.length; right++) {
    const rightChar = s[right].charCodeAt();
    count[rightChar]++;

    while (count[rightChar] > 1) {
      const leftChar = s[left++].charCodeAt();
      count[leftChar]--;
    }

    longest = Math.max(longest, 1 + right - left);
  }

  return longest;
};
