const order = {
  electronics: 0,
  grocery: 1,
  pharmacy: 2,
  restaurant: 3,
};

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
const validateCoupons = function (code, businessLine, isActive) {
  const result = [];
  const lines = Object.keys(order);

  for (let i = 0; i < code.length; i++) {
    if (!code[i] || /[^a-zA-Z0-9_]/.test(code[i])) continue;
    if (!lines.includes(businessLine[i])) continue;
    if (!isActive[i]) continue;

    result.push({ code: code[i], line: businessLine[i] });
  }

  return result.sort(byLineThenCode).map((c) => c.code);
};

function byLineThenCode(a, b) {
  if (order[a.line] === order[b.line]) {
    if (a.code < b.code) {
      return -1;
    } else {
      return 1;
    }
  }

  return order[a.line] - order[b.line];
}
