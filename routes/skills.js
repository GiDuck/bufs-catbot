const { TemplateBuilder, getResponseModel } = require("../models/response.js");
const { getColleges } = require("../services/skills.js");

var express = require("express");
var router = express.Router();

/* GET response test */
router.get("/", function(req, res, next) {
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

router.post("/departments", function(req, res) {
  const { userRequest } = req.body;
  console.log(userRequest.utterance);
});

module.exports = router;
