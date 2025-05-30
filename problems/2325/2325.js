/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function (key, message) {
  let position = 1;
  const map = new Map([[' ', ' ']]);

  for (const char of key) {
    if (map.has(char)) continue;
    map.set(char, String.fromCharCode(96 + position++));

    if (map.size === 27) break;
  }

  let result = '';

  for (const char of message) {
    result += map.get(char);
  }

  return result;
};
