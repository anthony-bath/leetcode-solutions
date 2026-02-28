/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  const uniques = new Set();

  for (const email of emails) {
    let [local, domain] = email.split('@');

    [local] = local.split('+');
    local = local.replaceAll('.', '');

    uniques.add(`${local}@${domain}`);
  }

  return uniques.size;
};
