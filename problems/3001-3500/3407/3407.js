/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const hasMatch = function (s, p) {
  const [left, right] = p.split('*');

  const li = s.indexOf(left);

  if (li === -1) return false;
  const next = left === '' ? 0 : li + left.length;

  const ri = s.substring(next).indexOf(right);

  return ri !== -1;
};
