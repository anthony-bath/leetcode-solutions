/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (operations) {
  let X = 0;

  for (const op of operations) {
    if (op.includes('++')) {
      X++;
    } else {
      X--;
    }
  }

  return X;
};
