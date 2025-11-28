/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
const categorizeBox = function (length, width, height, mass) {
  const volume = length * width * height;
  const isHeavy = mass >= 100;
  const isBulky = [length, width, height].some((d) => d >= 10 ** 4) || volume >= 10 ** 9;

  if (isBulky && isHeavy) {
    return 'Both';
  } else if (isBulky) {
    return 'Bulky';
  } else if (isHeavy) {
    return 'Heavy';
  }

  return 'Neither';
};
