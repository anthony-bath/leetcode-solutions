class AuthenticationManager {
  tokens;
  ttl;

  constructor(ttl) {
    this.tokens = new Map();
    this.ttl = ttl;
  }

  generate(tokenId, time) {
    this.tokens.set(tokenId, time + this.ttl);
  }

  renew(tokenId, time) {
    if (!this.tokens.has(tokenId)) return;
    if (time >= this.tokens.get(tokenId)) return;

    this.tokens.set(tokenId, time + this.ttl);
  }

  countUnexpiredTokens(time) {
    let count = 0;

    for (const expiration of this.tokens.values()) {
      if (expiration > time) count += 1;
    }

    return count;
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
