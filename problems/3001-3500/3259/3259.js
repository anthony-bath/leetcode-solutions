/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
const maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
  const n = energyDrinkA.length;
  let dpA = energyDrinkA[0];
  let dpB = energyDrinkB[0];

  for (let i = 1; i < n; i++) {
    const tempA = dpA;
    dpA = Math.max(dpA + energyDrinkA[i], dpB);
    dpB = Math.max(dpB + energyDrinkB[i], tempA);
  }

  return Math.max(dpA, dpB);
};
