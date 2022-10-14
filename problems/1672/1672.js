/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  return Math.max(...accounts.map((customer) => customer.reduce((total, a) => (total += a))));
};
