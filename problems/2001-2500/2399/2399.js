/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
const checkDistances = function (s, distance) {
  const locations = Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;
    const current = locations[code];

    if (current !== -1) {
      if (i - current - 1 !== distance[code]) {
        return false;
      }
    } else {
      locations[code] = i;
    }
  }

  return true;
};
