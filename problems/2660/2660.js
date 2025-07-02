/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
const isWinner = function (player1, player2) {
  let [p1Score, p2Score] = [0, 0];

  for (let i = 0; i < player1.length; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      p1Score += 2 * player1[i];
    } else {
      p1Score += player1[i];
    }

    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      p2Score += 2 * player2[i];
    } else {
      p2Score += player2[i];
    }
  }

  if (p1Score > p2Score) return 1;
  if (p2Score > p1Score) return 2;

  return 0;
};
