const { Info } = require("../models/info.js");

const _findByParentName = (parentName, queryOpts = {}, projectionOpts = {}) => {
  return Info.find(
    { parent: parentName, ...queryOpts },
    { _id: false, level: false, parent: false, ...projectionOpts }
  );
};

const _findOneByParentName = (
  parentName,
  queryOpts = {},
  projectionOpts = {}
) => {
  return Info.findOne(
    { parent: parentName, ...queryOpts },
    { _id: false, level: false, parent: false, ...projectionOpts }
  );
};

const getColleges = () => {
  return _findByParentName("학과정보찾기", null, {
    isTerminal: false,
    value: false
  });
};

const getDepartments = colleageName => {
  return _findByParentName(colleageName, null, { value: false });
};

const getMajors = depName => {
  return _findByParentName(depName, null, { value: false });
};

const getMajorInfo = majorName => {
  return _findOneByParentName(majorName, null, { isTerminal: false });
};

const getAgents = () => {
  return _findByParentName("기관정보찾기", null, { value: false });
};

const getAgentInfo = agentName => {
  return _findOneByParentName(agentName, null, { isTerminal: false });
};

const getFavoriteInfoList = () => {
  return _findByParentName("자주찾는정보", null, { value: false });
}

const getFavoriteInfo = infoName => {
  return _findOneByParentName(infoName, null, { isTerminal: false });
}

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
