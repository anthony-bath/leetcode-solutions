/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const swaps = new Map();
  const inverse = new Map();

  for (let i = 0; i < s.length; i++) {
    const source = s[i];
    const target = t[i];

    if (!swaps.has(source) && !inverse.has(target)) {
      swaps.set(source, target);
      inverse.set(target, source);
      continue;
    }

    if (swaps.get(source) !== target || inverse.get(target) !== source) {
      return false;
    }
  }

  return true;
};
