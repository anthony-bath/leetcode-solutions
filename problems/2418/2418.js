/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  return names
    .map((name, i) => ({ name, height: heights[i] }))
    .sort((a, b) => b.height - a.height)
    .map((person) => person.name);
};
