const { Info } = require("../models/info.js");

const getColleges = () => {
  return Info.find(
    { parent: "학과정보찾기" },
    { _id: false, level: false, parent: false, isTerminal: false, value: false }
  );
};


const getDepartments = (depName) => {
    return Info.find(
      { parent: depName },
      { _id: false, level: false, parent: false, isTerminal: false, value: false }
    );
  };
  
module.exports = { getColleges, getDepartments };
