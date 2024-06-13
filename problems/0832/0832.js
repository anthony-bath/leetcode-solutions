/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = function (image) {
  return image.map((row) => row.reverse().map((b) => (b ? 0 : 1)));
};
