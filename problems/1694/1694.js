/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = function (number) {
  const digits = [...number.matchAll(/\d/g)];
  const groups = [];

  while (digits.length > 4) {
    groups.push(digits.splice(0, 3).join(''));
  }

  switch (digits.length) {
    case 2:
    case 3:
      groups.push(digits.join(''));
      break;

    case 4:
      groups.push(digits.slice(0, 2).join(''));
      groups.push(digits.slice(2).join(''));
  }

  return groups.join('-');
};
