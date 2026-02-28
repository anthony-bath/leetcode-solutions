class MagicDictionary {
  buildDict(dictionary) {
    this.dictionary = dictionary;
  }

  search(searchWord) {
    for (const word of this.dictionary) {
      if (word.length !== searchWord.length) continue;

      let distance = 0;

      for (let i = 0; i < searchWord.length; i++) {
        if (word[i] !== searchWord[i]) {
          distance += 1;

          if (distance > 1) break;
        }
      }

      if (distance === 1) return true;
    }

    return false;
  }
}
