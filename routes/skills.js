const { TemplateBuilder, getResponseModel } = require ("../models/response.js"); 
const { getColleges } = require ("../services/skills.js"); 

var express = require('express');
var router = express.Router();


/* GET response test */
router.get('/', function(req, res, next) {
  res.send('respond success');
});

router.post('/buttons', function(req, res) {

  const template = new TemplateBuilder()
  .simpleText("안녕 난 냥냥봇이야")
  .build();

  res.status(200).send(getResponseModel(template));
});


router.post('/colleges', function(req, res) {
  
  
  console.log(JSON.stringify(req.params));
  getColleges();
  //res.status(200).send();


  // const template = new TemplateBuilder()
  // .simpleText("안녕 난 냥냥봇이야")
  // .build();

  // res.status(200).send(getResponseModel(template));
});

router.post('/departments', function(req, res) {
  
  console.log(JSON.stringify(req.params));
  //res.status(200).send();


  // const template = new TemplateBuilder()
  // .simpleText("안녕 난 냥냥봇이야")
  // .build();

  // res.status(200).send(getResponseModel(template));
});


router.post('/department', function(req, res) {
  
  console.log(JSON.stringify(req.params));
  //res.status(200).send();


  // const template = new TemplateBuilder()
  // .simpleText("안녕 난 냥냥봇이야")
  // .build();

  // res.status(200).send(getResponseModel(template));
});



module.exports = router;
