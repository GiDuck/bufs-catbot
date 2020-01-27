const { Info }  = require ("../models/info.js"); 

const getColleges = () => {
    console.log("getColleges")
    Info.findAll({parent: "학과정보찾기"}).then(colleges=>{
        console.log(colleges);
    }).catch(err => {
        console.log("error", err);
    });
}

module.exports =  ({ getColleges });
