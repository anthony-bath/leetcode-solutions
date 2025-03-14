/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function (area) {
  let width = Math.ceil(Math.sqrt(area));

  while (width > 0) {
    if (area % width === 0) {
      const L = Math.max(area / width, width);
      const W = Math.min(area / width, width);

      return [L, W];
    }

    width--;
  }

  return [];
};
