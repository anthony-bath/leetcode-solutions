/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
const minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  let currentEnergy = initialEnergy;
  let hoursTrained = 0;

  for (const opp of energy) {
    if (currentEnergy > opp) {
      currentEnergy -= opp;
    } else {
      hoursTrained += opp - currentEnergy + 1;
      currentEnergy = 1;
    }
  }

  let currentXp = initialExperience;

  for (const opp of experience) {
    if (currentXp > opp) {
      currentXp += opp;
    } else {
      hoursTrained += opp - currentXp + 1;
      currentXp = 2 * opp + 1;
    }
  }

  return hoursTrained;
};
