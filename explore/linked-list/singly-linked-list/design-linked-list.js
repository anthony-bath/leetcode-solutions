const MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.nodes = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.nodes) {
    return -1;
  }

  let stepsTaken = 0;
  let current = this.head;

  while (stepsTaken < index) {
    current = current.next;
    stepsTaken++;
  }

  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const currentHead = this.head;
  const newNode = { val, next: currentHead };

  this.head = newNode;

  if (!this.tail) {
    this.tail = newNode;
  }

  this.nodes++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = { val, next: null };

  if (this.tail) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (!this.head) {
    this.head = newNode;
  }

  this.nodes++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.nodes) {
    return;
  }

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.nodes) {
    this.addAtTail(val);
    return;
  }

  let stepsTaken = 0;
  let current = this.head;

  while (stepsTaken < index - 1) {
    current = current.next;
    stepsTaken++;
  }

  const after = current.next;
  const newNode = { val, next: after };
  current.next = newNode;

  this.nodes++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.nodes) {
    return;
  }

  if (index === 0) {
    this.head = this.head.next;
    this.nodes--;
    return;
  }

  let stepsTaken = 0;
  let before = this.head;

  while (stepsTaken < index - 1) {
    before = before.next;
    stepsTaken++;
  }

  if (index === this.nodes - 1) {
    // deleting the tail
    this.tail = before;
    this.tail.next = null;
  } else {
    before.next = before.next.next;
  }

  this.nodes--;
};

/**
 * @returns {string}
 */
MyLinkedList.prototype.print = function () {
  let output = '';
  let current = this.head;

  while (current) {
    output += current.val;

    if (current.next) {
      output += '->';
    }

    current = current.next;
  }

  return output;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
