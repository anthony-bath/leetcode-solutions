/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function (cpdomains) {
  const lookup = new Map();

  for (const entry of cpdomains) {
    const spaceIndex = entry.indexOf(' ');
    const count = Number(entry.substring(0, spaceIndex));
    const fullDomain = entry.substring(spaceIndex + 1);

    // Process all subdomains by finding dot positions
    let startIndex = 0;
    while (startIndex <= fullDomain.length) {
      const domain = fullDomain.substring(startIndex);
      lookup.set(domain, (lookup.get(domain) || 0) + count);

      const dotIndex = fullDomain.indexOf('.', startIndex);
      if (dotIndex === -1) break;
      startIndex = dotIndex + 1;
    }
  }

  return Array.from(lookup, ([domain, count]) => `${count} ${domain}`);
};
