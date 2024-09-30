/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let count = 0;

  outer: for (let i = 0; i < mat.length; i++) {
    if (mat[i].filter((c) => c === 1).length !== 1) continue;

    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] !== 1) continue;

      if (mat.filter((row) => row[j] === 1).length === 1) {
        count++;
        continue outer;
      }
    }
  }

  return count;
};
