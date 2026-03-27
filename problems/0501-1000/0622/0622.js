class Node {
  constructor(next, prev, val) {
    this.next = next;
    this.prev = prev;
    this.val = val;
  }
}

class MyCircularQueue {
  constructor(k) {
    this.head = null;
    this.tail = null;
    this.size = k;
    this.count = 0;
  }

  Front() {
    if (this.isEmpty()) return -1;
    return this.head.val;
  }

  Rear() {
    if (this.isEmpty()) return -1;
    return this.tail.val;
  }

  enQueue(val) {
    if (this.isFull()) return false;

    const node = new Node(null, this.tail, val);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.count += 1;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;

    if (this.count === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.count -= 1;
    return true;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
