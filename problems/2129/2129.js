/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function (title) {
  const words = title.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length <= 2) {
      words[i] = word.toLowerCase();
    } else {
      words[i] = `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`;
    }
  }

  return words.join(' ');
};
