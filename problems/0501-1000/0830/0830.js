/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = function (s) {
  if (s.length < 3) return [];

  const intervals = [];
  let [currLetter, currLength, currStartIndex] = [s[0], 1, 0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currLetter) {
      currLength++;
    } else {
      if (currLength >= 3) {
        intervals.push([currStartIndex, i - 1]);
      }

      currLetter = s[i];
      currLength = 1;
      currStartIndex = i;
    }
  }

  if (currLength >= 3) {
    intervals.push([currStartIndex, s.length - 1]);
  }

  return intervals.sort(([s1], [s2]) => s1 - s2);
};
