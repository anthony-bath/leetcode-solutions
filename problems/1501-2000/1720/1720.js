/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function (encoded, first) {
  const output = [first];

  for (let i = 0; i < encoded.length; i++) {
    output.push(output[i] ^ encoded[i]);
  }

  return output;
};
