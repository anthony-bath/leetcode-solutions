/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  const cr = mat.length;
  const cc = mat[0].length;

  if (cr * cc !== r * c) return mat;

  const vals = mat.flat();
  const reshaped = Array(r)
    .fill()
    .map(() => Array(c).fill());

  let i = 0;

  for (let ri = 0; ri < r; ri++) {
    for (let ci = 0; ci < c; ci++) {
      reshaped[ri][ci] = vals[i++];
    }
  }

  return reshaped;
};
