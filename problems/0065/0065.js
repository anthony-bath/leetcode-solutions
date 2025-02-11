/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (!/\d/.test(s)) return false;
  if (s.split('.').length > 2) return false;
  if (s.split(/[eE]/).length > 2) return false;

  const expressions = [
    /^[-+]?\d+$/,
    /^[-+]?\d{0,}\.\d{0,}$/,
    /^[-+]?\d+[eE][-+]?\d+$/,
    /^[-+]?\d{0,}\.\d+[eE][-+]?\d+$/,
    /^[-+]?\d+\.[eE][-+]?\d+$/,
    /^[-+]?\d{0,}\.\d+[eE][-+]?\d{0,}\.\d+$/,
  ];

  return expressions.some((expr) => expr.test(s));
};
