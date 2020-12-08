module.exports = (chain, key) => {
  const len = chain["tableLen"][key];
  const idx = Math.floor(Math.random() * len);

  let t = 0;
  for (let token in chain[key]) {
    t += chain[key][token];
    if (idx < t) return token;
  }

  return "'";
};
