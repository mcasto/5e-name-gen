const incrChain = require("./IncChain");
const scaleChain = require("./ScaleChain");

module.exports = (list) => {
  let chain = {};

  for (let i = 0; i < list.length; i++) {
    let names = list[i].split(/\s+/);
    chain = incrChain(chain, "parts", names.length);

    for (let j = 0; j < names.length; j++) {
      let name = names[j];
      chain = incrChain(chain, "nameLen", name.length);

      let c = name.substr(0, 1);
      chain = incrChain(chain, "initial", c);

      let string = name.substr(1);
      let lastC = c;

      while (string.length > 0) {
        let c = string.substr(0, 1);
        chain = incrChain(chain, lastC, c);

        string = string.substr(1);
        lastC = c;
      }
    }
  }

  return scaleChain(chain);
};
