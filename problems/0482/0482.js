/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const raw = s.replaceAll('-', '').toUpperCase().split('').reverse().join('');

  if (raw.length === 0) return '';

  const parts = raw.match(new RegExp(`.{1,${k}}`, 'g'));

  return parts.join('-').split('').reverse().join('');
};
