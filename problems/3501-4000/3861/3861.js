/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
const minimumIndex = function (capacity, itemSize) {
  let best = Infinity;
  let idx = null;

  for (let i = 0; i < capacity.length; i++) {
    if (capacity[i] < itemSize) continue;
    if (capacity[i] > best) continue;
    if (capacity[i] < best) {
      idx = i;
      best = capacity[i];
    }
  }

  return idx ?? -1;
};
