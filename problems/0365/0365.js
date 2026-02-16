/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
const canMeasureWater = function (x, y, target) {
  if (target > x + y) return false;

  const seen = new Set();

  function dfs(a, b) {
    if (a + b === target) return true;

    const key = `${a},${b}`;

    if (seen.has(key)) return false;
    seen.add(key);

    const neighbors = [
      [x, b], // fill a
      [a, y], // fill b
      [0, b], // empty a
      [a, 0], // empty b
    ];

    // pour x into y
    let amount = Math.min(a, y - b);
    neighbors.push([a - amount, b + amount]);

    // pour y into x
    amount = Math.min(b, x - a);
    neighbors.push([a + amount, b - amount]);

    for (const [na, nb] of neighbors) {
      if (dfs(na, nb)) return true;
    }

    return false;
  }

  return dfs(0, 0);
};
