/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function (p1, p2, p3, p4) {
  const distance = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
  const lengths = new Set();
  const points = [p1, p2, p3, p4];

  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      lengths.add(distance(points[i], points[j]));
    }
  }

  return !lengths.has(0) && lengths.size === 2;
};
