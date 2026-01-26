/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const transactionsByName = new Map();
  const parsedTransactions = [];
  let id = 0;

  for (const transaction of transactions) {
    const [name, time, amount, city] = transaction.split(',');
    const nameTransactions = transactionsByName.get(name) ?? [];
    const parsed = {
      id: id++,
      name,
      time: Number(time),
      amount: Number(amount),
      city,
      data: transaction,
    };

    parsedTransactions.push(parsed);
    nameTransactions.push(parsed);
    transactionsByName.set(name, nameTransactions);
  }

  const result = [];
  const used = new Set();

  for (const transaction of parsedTransactions) {
    if (used.has(transaction.id)) continue;

    const nameTransactions = transactionsByName.get(transaction.name);
    const matches = nameTransactions.filter(
      (t) =>
        t.id !== transaction.id &&
        t.city !== transaction.city &&
        Math.abs(t.time - transaction.time) <= 60
    );

    if (matches.length > 0) {
      result.push(transaction.data);
      used.add(transaction.id);

      for (const match of matches) {
        if (used.has(match.id)) continue;
        result.push(match.data);
        used.add(match.id);
      }
    } else if (transaction.amount > 1000) {
      result.push(transaction.data);
      used.add(transaction.id);
    }
  }

  return result;
};
