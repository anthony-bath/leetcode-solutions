/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function (candies, num_people) {
  const distribution = Array(num_people).fill(0);
  let amount = 1;
  let receiver = 0;

  while (amount < candies) {
    distribution[receiver] += amount;

    candies -= amount;
    amount++;
    receiver = (receiver + 1) % num_people;
  }

  if (candies) {
    distribution[receiver] += candies;
  }

  return distribution;
};
