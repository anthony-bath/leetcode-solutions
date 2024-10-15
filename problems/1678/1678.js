/**
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
};
