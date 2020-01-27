const { Info }  = require ("../models/info.js"); 

const getColleges = (req, res) => {
    console.log("getColleges")
    Info.find({parent: "학과정보찾기"}).then(colleges=>{
        console.log("학과정보찾기")
        console.log(colleges);
    });
}

module.exports =  ({ getColleges });
