const generator = require("./utilities/NameGenerator");

module.exports.nameGen = generator;

module.exports.nameList = ({ race = "", gender = "", num = 10 }) => {
  let nameList = [];

  for (let listCount = 0; listCount < num; listCount++) {
    nameList.push(generator(race, gender));
  }

  return nameList;
};
