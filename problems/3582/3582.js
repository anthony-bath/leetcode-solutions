String.prototype.toTitleCase = function () {
  return `${this.charAt(0).toUpperCase()}${this.substring(1).toLowerCase()}`;
};

/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function (caption) {
  const words = caption.trim().split(' ');

  return `#${words[0].toLowerCase()}${words
    .slice(1)
    .map((w) => w.toTitleCase())
    .join('')}`.substring(0, 100);
};
