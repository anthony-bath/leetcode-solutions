const { abs } = Math;

/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
const closestCost = function (baseCosts, toppingCosts, target) {
  const cache = new Set();
  let best = Infinity;

  function updateBest(spent) {
    const diff = abs(spent - target);
    const bestDiff = abs(best - target);

    if (diff < bestDiff || (diff === bestDiff && spent < best)) {
      best = spent;
    }
  }

  function backtrack(toppingIndex, spent) {
    if (spent >= target || toppingIndex === toppingCosts.length) {
      updateBest(spent);
      return;
    }

    const remaining = target - spent;
    const key = `${toppingIndex}-${remaining}`;

    if (cache.has(key)) {
      return;
    }

    cache.add(key);

    for (let quantity = 0; quantity <= 2; quantity++) {
      backtrack(toppingIndex + 1, spent + quantity * toppingCosts[toppingIndex]);
    }
  }

  for (const base of baseCosts) {
    backtrack(0, base);
  }

  return best;
};
