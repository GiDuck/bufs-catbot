const { Info } = require("../models/info.js");

const getColleges = () => {
  return Info.find(
    { parent: "학과정보찾기" },
    { _id: false, level: false, parent: false, isTerminal: false, value: false }
  );
};

const getDepartments = colleageName => {
  return Info.find(
    { parent: colleageName },
    { _id: false, level: false, parent: false, value: false }
  );
};

const getMajors = depName => {
  return Info.find(
    { parent: depName },
    { _id: false, level: false, parent: false, value: false }
  );
};

const getMajorInfo = majorName => {
  return Info.findOne(
    { name: majorName, isTerminal: true },
    { _id: false, level: false, parent: false, isTerminal: false }
  );
};

const getAgents = () => {
  return Info.find(
    { parent: "기관정보찾기" },
    { _id: false, level: false, parent: false, value: false }
  );
};

const getAgentInfo = agentName => {
  return Info.findOne(
    { name: agentName, isTerminal: true },
    { _id: false, level: false, parent: false, isTerminal: false }
  );
};

const getFavoriteInfoList = () => {
  return Info.find(
    { parent: "자주찾는정보" },
    { _id: false, level: false, parent: false, value: false }
  );
};

const getFavoriteInfo = infoName => {
  return Info.findOne(
    { name: infoName, isTerminal: true },
    { _id: false, level: false, parent: false, isTerminal: false }
  );
};

module.exports = {
  getColleges,
  getDepartments,
  getMajors,
  getMajorInfo,
  getAgents,
  getAgentInfo,
  getFavoriteInfoList,
  getFavoriteInfo
};
