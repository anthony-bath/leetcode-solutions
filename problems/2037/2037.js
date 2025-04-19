const { abs } = Math;

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let moves = 0;

  for (let n = 0; n < seats.length; n++) {
    moves += abs(seats[n] - students[n]);
  }

  return moves;
};
