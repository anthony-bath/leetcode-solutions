const { ceil } = Math;

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
  function canFinish(k) {
    let hours = 0;

    for (const p of piles) {
      hours += ceil(p / k);

      if (hours > h) return false;
    }

    return hours <= h;
  }

  let [lo, hi] = [1, Math.max(...piles)];

  while (lo < hi) {
    const mid = (lo + hi) >> 1;

    if (canFinish(mid)) hi = mid;
    else lo = mid + 1;
  }

  return lo;
};
