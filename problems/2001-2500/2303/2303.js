/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let tax = 0;
  let prevBracket = 0;

  for (const [upper, percent] of brackets) {
    if (income <= prevBracket) break;

    const taxableAmount = Math.min(upper - prevBracket, income - prevBracket);
    tax += taxableAmount * (percent / 100);
    prevBracket = upper;
  }

  return tax;
};
