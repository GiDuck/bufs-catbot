const { TemplateBuilder, getResponseModel } = require("../models/response.js");
const { getColleges, getDepartments, getMajors, getMajorInfo, getAgents, getAgentInfo } = require("../services/skills.js");

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

router.post("/agents", async (req, res) => {
  const { userRequest } = req.body;
  const findData = await getAgents();
  const agents = findData.map(data => data.name);

  const templateBuilder = new TemplateBuilder().simpleText(
    `부산외대의 기관들이라냥`
  );

  agents.forEach(agent => {
    templateBuilder.setQuickReplies(
      agent,
      "block",
      agent,
      "5e36686eb617ea0001306b0d",
      null
    );
  });
  const template = templateBuilder.build();
  res.status(200).send(getResponseModel(template));
});

router.post("/info/agent", async (req, res) => {
  const { userRequest } = req.body;
  const agentName = userRequest.utterance;
  const findData = await getAgentInfo(agentName);
  const value = findData.value;
  const agentInfoObj = value[0];
  
  let responseText = "";
  for(const key in agentInfoObj){
    responseText += `${key}: ${agentInfoObj[key]} \n`
  }

  responseText += "이라냥";
  const templateBuilder = new TemplateBuilder().simpleText(
    responseText
  );

  const template = templateBuilder.build();
  res.status(200).send(getResponseModel(template));
});


module.exports = router;
