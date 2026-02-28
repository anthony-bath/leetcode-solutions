/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  if (s.includes('@')) {
    return maskEmail(s);
  }

  return maskPhone(s);
};

function maskEmail(address) {
  let [name, domain] = address.split('@');
  name = name.toLowerCase();

  return `${name[0]}*****${name.at(-1)}@${domain.toLowerCase()}`;
}

function maskPhone(number) {
  const digits = number.replace(/[^\d]/g, '');
  const len = digits.length;

  const local = digits.substring(len - 10);
  const country = digits.length > 10 ? digits.substring(0, len - 10) : '';

  const prefix = country ? `+${'*'.repeat(country.length)}-` : '';
  const suffix = local.substring(6);

  return `${prefix}***-***-${suffix}`;
}
