/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
const mostPopularCreator = function (creators, ids, views) {
  const highestByCreator = new Map();
  const viewsByCreator = new Map();
  let mostPopular = [];

  for (let i = 0; i < views.length; i++) {
    const creator = creators[i];
    const id = ids[i];
    const view = views[i];
    const total = (viewsByCreator.get(creator) ?? 0) + view;

    viewsByCreator.set(creator, total);

    if (highestByCreator.has(creator)) {
      const highest = highestByCreator.get(creator);

      if (view > highest.view) {
        highestByCreator.set(creator, { id, view });
      } else if (view === highest.view) {
        if (id < highest.id) {
          highestByCreator.set(creator, { id, view });
        }
      }
    } else {
      highestByCreator.set(creator, { id, view });
    }

    if (mostPopular.length === 0) {
      mostPopular.push({ creator, total });
    } else if (total > mostPopular[0].total) {
      mostPopular = [{ creator, total }];
    } else if (total === mostPopular[0].total && creator !== mostPopular[0].creator) {
      mostPopular.push({ creator, total });
    }
  }

  return mostPopular.map(({ creator }) => [creator, highestByCreator.get(creator).id]);
};
