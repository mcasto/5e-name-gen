const constructChain = require("./ConstructChain");

let chainCache = {};

module.exports = (type, nameSet) => {
  let chain;

  if ((chain = chainCache[type])) {
    return chain;
  } else {
    let list;

    if ((list = nameSet[type])) {
      if ((chain = constructChain(list))) {
        chainCache[type] = chain;
        return chain;
      }
    }
  }

  return false;
};
