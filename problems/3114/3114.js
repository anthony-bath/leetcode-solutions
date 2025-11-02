/**
 * @param {string} s
 * @return {string}
 */
const findLatestTime = function (s) {
  const output = [];
  const parts = s.split('');

  for (let i = 0; i < parts.length; i++) {
    switch (i) {
      case 0:
        if (parts[0] === '?') {
          if (parts[1] === '?' || parts[1] === '1' || parts[1] === '0') {
            output.push(1);
          } else {
            output.push(0);
          }
        } else {
          output.push(Number(parts[0]));
        }
        break;
      case 1:
        if (parts[1] === '?') {
          output.push(output[0] === 0 ? 9 : 1);
        } else {
          output.push(parts[1]);
        }
        break;
      case 2:
        output.push(':');
        break;
      case 3:
        output.push(parts[3] === '?' ? 5 : parts[3]);
        break;
      case 4:
        output.push(parts[4] === '?' ? 9 : parts[4]);
        break;
    }
  }

  return output.join('');
};
