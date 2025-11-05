/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const folders = path.replace(/\/+/g, '/').split('/');
  let current = new Directory('/');

  for (const folder of folders) {
    if (folder === '.' || folder === '') continue;

    if (folder === '..') {
      current = current.parent ? current.parent : current;
    } else {
      current = new Directory(folder, current);
    }
  }

  return current.path();
};

class Directory {
  constructor(name, parent = null) {
    this.name = name;
    this.parent = parent;
  }

  path() {
    if (!this.parent) return this.name;

    const parentPath = this.parent.path();
    const separator = this.parent.parent ? '/' : '';

    return `${parentPath}${separator}${this.name}`;
  }
}
