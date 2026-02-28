/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = function (s, goal) {
  if (s.length === 1) {
    return s === goal;
  }

  let rotations = 0;
  const letters = s.split('');

  while (rotations < s.length) {
    letters.unshift(letters.pop());

    if (letters.join('') === goal) return true;

    rotations++;
  }

  return false;
};
