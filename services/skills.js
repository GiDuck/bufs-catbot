const { Info }  = require ("../models/info.js"); 

const getColleges = () => {
    return Info.find({parent: "학과정보찾기"});
}

module.exports =  ({ getColleges });
