const { startCase } = require("lodash");

module.exports = (template, race = "") => {
  let [first, last] = template.split(" ");
  let firstRace = startCase(first).split(" ")[0].toLowerCase();
  let lastRace = last ? startCase(last).split(" ")[0].toLowerCase() : false;
  firstRace = firstRace === "first" ? race : firstRace;
  lastRace = lastRace === "last" ? race : lastRace;

  return {
    firstRace,
    lastRace,
  };
};
