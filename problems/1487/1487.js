/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = function (names) {
  const lookup = new Map();
  const result = [];

  for (const name of names) {
    if (!lookup.has(name)) {
      lookup.set(name, 1);
      result.push(name);
    } else {
      let nextNum = lookup.get(name);
      let nextName = `${name}(${nextNum})`;

      while (lookup.has(nextName)) {
        nextNum += 1;
        nextName = `${name}(${nextNum})`;
      }

      lookup.set(name, nextNum + 1);
      lookup.set(nextName, 1);
      result.push(nextName);
    }
  }

  return result;
};
