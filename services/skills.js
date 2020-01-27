const Info  = require ("../models/info.js"); 

export const getColleges = () => {
    Info.findAll({parent: "학과정보찾기"}).then(colleges=>{
        console.log(colleges);
    });
}