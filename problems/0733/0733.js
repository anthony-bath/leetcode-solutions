/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;

  const match = image[sr][sc];

  function fill(r, c) {
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;
    if (image[r][c] !== match) return;

    image[r][c] = color;

    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, c - 1);
    fill(r, c + 1);
  }

  fill(sr, sc);
  return image;
};
