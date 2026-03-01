/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function (colors) {
  let max = -1;

  for (let left = 0; left < colors.length - 1; left++) {
    for (let right = colors.length - 1; right > left; right--) {
      if (colors[left] !== colors[right]) {
        max = Math.max(max, right - left);
      }
    }
  }

  return max;
};
