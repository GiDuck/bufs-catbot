const { Info }  = require ("../models/info.js"); 

const getColleges = () => {
    Info.findAll({parent: "학과정보찾기"}).then(colleges=>{
        console.log(colleges);
    }).catch(err => {
        console.log(err);
    });
}

module.exports =  ({ getColleges });
