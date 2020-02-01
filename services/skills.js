const { Info } = require("../models/info.js");

const getColleges = () => {
  return Info.find(
    { parent: "학과정보찾기" },
    { _id: false, level: false, parent: false, isTerminal: false, value: false }
  );
};


const getDepartments = (colleageName) => {
    return Info.find(
      { parent: colleageName },
      { _id: false, level: false, parent: false, isTerminal: false, value: false }
    );
};
  

const getMajors = (depName) => {
    return Info.find(
      { parent: depName },
      { _id: false, level: false, parent: false, isTerminal: false, value: false }
    );
};

const getMajorInfo = (majorName) => {
    return Info.find(
      { name: majorName, isTerminal: true },
      { _id: false, level: false, parent: false, isTerminal: false, value: false }
    );
};
module.exports = { getColleges, getDepartments, getMajors, getMajorInfo };
