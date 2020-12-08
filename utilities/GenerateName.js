const markovChain = require("./MarkovChain");
const markovName = require("./MarkovName");

module.exports = (type, nameSet) => {
  let chain;

  if ((chain = markovChain(type, nameSet))) {
    return markovName(chain);
  }

  return "";
};
