const { Info } = require("../models/info.js");

/**

  Skills에서 들어오는 요청을 받는 Service 겸 Repository 역할을 하는 컴포넌트
  

 */

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
    { name: infoName },
    { _id: false, level: false, parent: false, isTerminal: false }
  );
};

const getFacilities = parentName => {
  return Info.find(
    { parent: parentName },
    { _id: false, level: false, parent: false, value: false }
  );
};

const getFacilityInfo = facName => {
  return Info.findOne(
    { name: facName },
    { _id: false, level: false, parent: false, isTerminal: false }
  );
};

const getDormitoy = () => {
  return Info.find(
    { parent: "기숙사" },
    { _id: false, level: false, parent: false, value: false }
  );
};


const getNotifications = () => {
  return Info.find(
    { parent: "공지사항" },
    { _id: false, level: false, parent: false, isTerminal: false }
  );
};

const getNotificationInfo = notiName => {
  return Info.findOne(
    { name: notiName },
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
  getFavoriteInfo,
  getFacilities,
  getFacilityInfo,
  getDormitoy,
  getNotifications,
  getNotificationInfo
};
