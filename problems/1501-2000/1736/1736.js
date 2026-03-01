/**
 * @param {string} time
 * @return {string}
 */
const maximumTime = function (time) {
  const skip = /[:\d]/;
  const result = time.split('');

  for (let position = 0; position < time.length; position++) {
    if (skip.test(result[position])) {
      continue;
    }

    result[position] = maxByPosition(result, position);
  }

  return result.join('');
};

function maxByPosition(time, position) {
  switch (position) {
    case 0:
      if (time[1] > 3) return '1';
      return '2';
    case 1:
      if (time[0] == '2') return '3';
      else return '9';
    case 3:
      return '5';
    case 4:
      return '9';
  }
}
