module.exports = (chain) => {
  let tableLen = {};

  for (let key in chain) {
    tableLen[key] = 0;

    for (let token in chain[key]) {
      const count = chain[key][token];
      const weighted = Math.floor(Math.pow(count, 1.3));

      chain[key][token] = weighted;
      tableLen[key] += weighted;
    }
  }

  chain["tableLen"] = tableLen;

  return chain;
};
