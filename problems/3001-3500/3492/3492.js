/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
const maxContainers = function (n, w, maxWeight) {
  const count = n * n;
  const weight = count * w;

  if (weight <= maxWeight) return count;

  return count - Math.ceil((weight - maxWeight) / w);
};
