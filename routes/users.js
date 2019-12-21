const {TemplateBuilder, getResponseModel} = require ("../models/response.js"); 

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/login/:id', function(req, res, next) {
  res.send('로그인 페이지입니다'+ req.params.id);
});
/* GET users listing. */

router.post('/sayHello', function(req, res) {
  console.log(req.body);
  console.log(TemplateBuilder);

  const template = new TemplateBuilder()
  .simpleText("안녕~~! 테스트임..")
  .build();

  res.status(200).send(getResponseModel(template));
});


module.exports = router;
