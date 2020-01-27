const { Info }  = require ("../models/info.js"); 

const getColleges = (req, res) => {
    console.log("getColleges")
    Info.find({parent: "학과정보찾기"}), null, ((err, colleges)=>{
        console.log(err);
        console.log(colleges);
    });
}

module.exports =  ({ getColleges });
