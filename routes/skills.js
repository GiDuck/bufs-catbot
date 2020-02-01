const { TemplateBuilder, getResponseModel } = require("../models/response.js");
const { getColleges, getDepartments, getMajors, getMajorInfo } = require("../services/skills.js");

var express = require("express");
var router = express.Router();

/* GET response test */
router.get("/", function(req, res) {
  res.send("respond success");
});

router.post("/buttons", function(req, res) {
  const template = new TemplateBuilder()
    .simpleText("안녕 난 냥냥봇이야")
    .build();

  res.status(200).send(getResponseModel(template));
});

router.post("/colleges", async (req, res) => {
  const findData = await getColleges();
  const colleages = findData.map(data => data.name);

  const templateBuilder = new TemplateBuilder().simpleText(
    "단과대학 목록이라냥"
  );

  colleages.forEach(colleage => {
    templateBuilder.setQuickReplies(
      colleage,
      "block",
      colleage,
      "5e2ecfcc92690d0001fc676d",
      null
    );
  });
  const template = templateBuilder.build();
  res.status(200).send(getResponseModel(template));
});

router.post("/departments", async (req, res) => {
  const { userRequest } = req.body;
  const colleageName = userRequest.utterance;
  const findData = await getDepartments(colleageName);

  const templateBuilder = new TemplateBuilder().simpleText(
    `${colleageName} 아래의 학부들이라냥`
  );

  findData.forEach(department => {
    const { name=null, isTerminal=null } = department;
    console.log(name, isTerminal);
    const blockId = isTerminal? "5e3591ba8192ac0001953528" : "5e358c38b617ea0001306996";
    templateBuilder.setQuickReplies(
      name,
      "block",
      name,
      blockId,
      null
    );
  });

  
  const template = templateBuilder.build();
  res.status(200).send(getResponseModel(template));

});


router.post("/majors", async (req, res) => {
  const { userRequest } = req.body;
  const depName = userRequest.utterance;
  const findData = await getMajors(depName);
  const majors = findData.map(data => data.name);

  const templateBuilder = new TemplateBuilder().simpleText(
    `${depName} 아래의 학과들이라냥`
  );

  majors.forEach(major => {
    templateBuilder.setQuickReplies(
      major,
      "block",
      major,
      "5e3591ba8192ac0001953528",
      null
    );
  });
  const template = templateBuilder.build();
  res.status(200).send(getResponseModel(template));
});

router.post("/info/major", async (req, res) => {
  const { userRequest } = req.body;
  const majorName = userRequest.utterance;
  const findData = await getMajorInfo(majorName);
  const value = findData.value;
  const majorInfoObj = value[0];
  
  let responseText = "";
  for(const key in majorInfoObj){
    responseText += `${key}: ${majorInfoObj[key]} \n`
  }

  responseText += "이라냥";
  const templateBuilder = new TemplateBuilder().simpleText(
    responseText
  );

  const template = templateBuilder.build();
  res.status(200).send(getResponseModel(template));
});



module.exports = router;
