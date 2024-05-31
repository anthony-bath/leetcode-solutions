/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const record = [];

  for (const op of operations) {
    switch (op) {
      case 'C':
        record.pop();
        break;

      case 'D':
        record.push(record[record.length - 1] * 2);
        break;

      case '+':
        record.push(record[record.length - 1] + record[record.length - 2]);
        break;

      default:
        record.push(Number(op));
    }
  }

  return record.reduce((total, val) => val + total, 0);
};
