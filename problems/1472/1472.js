class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.position = 0;
  }

  visit(url) {
    this.history = this.history.slice(0, this.position + 1);
    this.history.push(url);
    this.position += 1;
  }

  back(steps) {
    this.position = Math.max(0, this.position - steps);
    return this.history[this.position];
  }

  forward(steps) {
    this.position = Math.min(this.history.length - 1, this.position + steps);
    return this.history[this.position];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
