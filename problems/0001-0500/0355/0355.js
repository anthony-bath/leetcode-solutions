class Twitter {
  tweets;
  follows;
  postId;

  constructor() {
    this.tweets = new Map();
    this.follows = new Map();
    this.postId = 1;
  }

  postTweet(userId, tweetId) {
    if (!this.tweets.has(userId)) {
      this.tweets.set(userId, []);
    }

    this.tweets.get(userId).unshift({ tweetId, postId: this.postId++ });

    if (this.tweets.get(userId).length > 10) {
      this.tweets.get(userId).pop();
    }
  }

  getNewsFeed(userId) {
    const userTweets = this.tweets.get(userId) ?? [];
    const followees = this.follows.get(userId) ?? [];
    const followeeTweets = [];

    for (const followee of followees) {
      for (const tweet of this.tweets.get(followee) ?? []) {
        followeeTweets.push(tweet);
      }
    }

    return userTweets
      .concat(followeeTweets)
      .sort((a, b) => b.postId - a.postId)
      .slice(0, 10)
      .map((t) => t.tweetId);
  }

  follow(followerId, followeeId) {
    if (followerId === followeeId) return;

    if (!this.follows.has(followerId)) {
      this.follows.set(followerId, new Set());
    }

    this.follows.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (followerId === followeeId) return;
    if (!this.follows.has(followerId)) return;

    this.follows.get(followerId).delete(followeeId);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
