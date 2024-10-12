/**
 * @param {number} size
 */
class OrderedStream {
  pointer;
  stream;

  constructor(size) {
    this.pointer = 0;
    this.stream = Array(size).fill();
  }

  insert(id, value) {
    this.stream[id - 1] = value;
    let current = this.pointer;

    while (this.stream[this.pointer]) {
      this.pointer += 1;
    }

    return this.stream.slice(current, this.pointer);
  }
}
