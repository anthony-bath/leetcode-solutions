const lookup = new Map();

function encode(url) {
  const short = `https://tinyurl.com/${lookup.size}`;
  lookup.set(short, url);
  return short;
}

function decode(url) {
  return lookup.get(url);
}
