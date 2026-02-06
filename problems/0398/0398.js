class Solution {
  constructor(nums) {
    const data = new Map();

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const next = data.get(num) || [];
      next.push(i);
      data.set(num, next);
    }

    this.data = data;
  }

  pick(target) {
    const indices = this.data.get(target);
    return indices[Math.floor(Math.random() * indices.length)];
  }
}
