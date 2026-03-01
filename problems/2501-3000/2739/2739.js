const { min } = Math;

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
const distanceTraveled = function (mainTank, additionalTank) {
  return 10 * (mainTank + min(~~((mainTank - 1) / 4), additionalTank));
};
