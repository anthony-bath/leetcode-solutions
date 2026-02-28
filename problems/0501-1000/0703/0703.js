class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = [];

    for (const num of nums) {
      this.add(num);
    }
  }

  add(val) {
    if (this.minHeap.length < this.k) {
      this.minHeap.push(val);
      this.bubbleUp();
    } else if (val > this.minHeap[0]) {
      this.minHeap[0] = val;
      this.bubbleDown();
    }

    return this.minHeap[0];
  }

  bubbleUp() {
    let index = this.minHeap.length - 1;

    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.minHeap[index] >= this.minHeap[parentIndex]) break;

      [this.minHeap[index], this.minHeap[parentIndex]] = [
        this.minHeap[parentIndex],
        this.minHeap[index],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[smallest]) {
        smallest = left;
      }

      if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.minHeap[index], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[index]];
      index = smallest;
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
