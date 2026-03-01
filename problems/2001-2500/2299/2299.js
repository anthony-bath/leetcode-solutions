/**
 * @param {string} password
 * @return {boolean}
 */
const strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/\d/.test(password)) return false;
  if (!/[\!\@\#\$\%\^\&\*\(\)\-\+]/.test(password)) return false;
  if (/(.{1})\1/.test(password)) return false;

  return true;
};
