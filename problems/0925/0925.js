/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function (name, typed) {
  if (typed.length < name.length) return false;

  let nameIndex = 0;
  let typeIndex = 0;

  while (typeIndex < typed.length) {
    if (name[nameIndex] === typed[typeIndex]) {
      nameIndex++;
      typeIndex++;
    } else if (name[nameIndex - 1] === typed[typeIndex]) {
      typeIndex += 1;
    } else {
      return false;
    }
  }

  return name.length === nameIndex;
};
