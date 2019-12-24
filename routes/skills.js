const {TemplateBuilder, getResponseModel} = require ("../models/response.js"); 

var express = require('express');
var router = express.Router();


/* GET response test */
router.get('/', function(req, res, next) {
  res.send('respond success');
});

router.post('/home', function(req, res) {

  console.log(req.param);
  const template = new TemplateBuilder()
  .simpleText("안녕 난 냥냥봇이야")
  .build();

  res.status(200).send(getResponseModel(template));
});


module.exports = router;
