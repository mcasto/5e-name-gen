const { shuffle, camelCase, trim } = require("lodash");
const names = require("../assets/names.json");
const parseTemplate = require("./ParseTemplate");
const generateName = require("./GenerateName");

let nameSet = {};

module.exports = ({ race = "", gender = "" }) => {
  race = camelCase(race);
  gender = gender.toLowerCase();

  const raceList = Object.keys(names);
  if (!raceList.includes(race)) {
    race = shuffle(raceList)[0];
  }

  if (gender !== "male" && gender !== "female") {
    gender = shuffle(["male", "female"])[0];
  }

  const raceInfo = names[race];

  const template = shuffle(raceInfo.templates)[0];

  const { firstRace, lastRace } = parseTemplate(template, race);

  if (!names[firstRace]) console.log({ firstRace, race, gender });
  const firstCandidates = names[firstRace][gender];
  const lastCandidates = lastRace ? names[lastRace].last : [];

  const firstType = `${race}-${gender}-first`;
  const lastType = `${race}-${gender}-last`;

  nameSet[firstType] = firstCandidates;
  nameSet[lastType] = lastCandidates;

  const firstName = generateName(firstType, nameSet);
  const lastName = generateName(lastType, nameSet);

  return {
    race,
    gender,
    name: trim(`${firstName} ${lastName}`),
  };
};
