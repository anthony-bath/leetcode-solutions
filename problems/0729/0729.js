class Tree {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
  }

  insert(start, end) {
    let current = this;

    while (current) {
      if (end <= current.start) {
        if (current.left === null) {
          current.left = new Tree(start, end);
          return true;
        }

        current = current.left;
      } else if (start >= current.end) {
        if (current.right === null) {
          current.right = new Tree(start, end);
          return true;
        }

        current = current.right;
      } else {
        return false;
      }
    }
  }
}

class MyCalendar {
  constructor() {
    this.root = null;
  }

  book(startTime, endTime) {
    if (this.root === null) {
      this.root = new Tree(startTime, endTime);
      return true;
    }

    return this.root.insert(startTime, endTime);
  }
}
