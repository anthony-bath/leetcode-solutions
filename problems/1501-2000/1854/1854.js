const MIN_YEAR = 1950;
const MAX_YEAR = 2050;

/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = function (logs) {
  const pop = new Array(1 + MAX_YEAR - MIN_YEAR).fill(0);

  for (const [birth, death] of logs) {
    pop[birth - MIN_YEAR]++;
    pop[death - MIN_YEAR]--;
  }

  let maxYear = 0;

  for (let i = 1; i < pop.length; i++) {
    pop[i] += pop[i - 1];

    if (pop[i] > pop[maxYear]) maxYear = i;
  }

  return maxYear + MIN_YEAR;
};
