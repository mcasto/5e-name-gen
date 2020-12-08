const selectLink = require("./SelectLink");

module.exports = (chain) => {
  let parts = selectLink(chain, "parts");
  let names = [];

  for (let i = 0; i < parts; i++) {
    const nameLen = selectLink(chain, "nameLen");
    let c = selectLink(chain, "initial");
    let name = c;
    let lastC = c;

    while (name.length < nameLen) {
      c = selectLink(chain, lastC);
      name += c;
      lastC = c;
    }

    names.push(name);
  }

  return names.join(" ");
};
