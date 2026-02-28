/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s.length <= 1) return false;

  if (s === goal) {
    // just need one duplicate character
    const chars = new Set();

    for (const char of s) {
      if (chars.has(char)) return true;
      chars.add(char);
    }

    return false;
  }

  const diffIndexes = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diffIndexes.push(i);
    if (diffIndexes.length > 2) return false;
  }

  return (
    diffIndexes.length === 2 &&
    s[diffIndexes[0]] === goal[diffIndexes[1]] &&
    goal[diffIndexes[0]] === s[diffIndexes[1]]
  );
};
