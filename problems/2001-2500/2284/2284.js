/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
const largestWordCount = function (messages, senders) {
  const map = new Map();

  for (let i = 0; i < messages.length; i++) {
    const sender = senders[i];

    map.set(sender, (map.get(sender) ?? 0) + messages[i].split(' ').length);
  }

  let max = 0;
  let name = null;

  for (const [sender, count] of map) {
    if (count > max || (count === max && sender > name)) {
      name = sender;
      max = count;
    }
  }

  return name;
};
