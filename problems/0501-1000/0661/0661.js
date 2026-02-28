const { floor } = Math;

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = function (img) {
  const H = img.length;
  const W = img[0].length;
  const out = Array(H)
    .fill()
    .map((_) => Array(W));

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let count = 1;
      let sum = img[y][x];

      if (y > 0) {
        count += 1;
        sum += img[y - 1][x];

        if (x > 0) {
          count += 1;
          sum += img[y - 1][x - 1];
        }

        if (x < W - 1) {
          count += 1;
          sum += img[y - 1][x + 1];
        }
      }

      if (x > 0) {
        count += 1;
        sum += img[y][x - 1];
      }

      if (x < W - 1) {
        count += 1;
        sum += img[y][x + 1];
      }

      if (y < H - 1) {
        count += 1;
        sum += img[y + 1][x];

        if (x > 0) {
          count += 1;
          sum += img[y + 1][x - 1];
        }

        if (x < W - 1) {
          count += 1;
          sum += img[y + 1][x + 1];
        }
      }

      out[y][x] = floor(sum / count);
    }
  }

  return out;
};
