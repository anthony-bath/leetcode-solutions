/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = function (rings) {
  let ringsByRod = new Map();

  for (let i = 0; i < rings.length; i += 2) {
    const ring = rings[i];
    const rod = rings[i + 1];

    const next = ringsByRod.get(rod) ?? new Set();
    next.add(ring);

    ringsByRod.set(rod, next);
  }

  return [...ringsByRod.keys()].filter((rod) => ringsByRod.get(rod).size === 3).length;
};
