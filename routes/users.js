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
  .setQuickReplies('안녕', "message", '나는 부산외대 냥이라냥', 'extra')
  .setQuickReplies('안녕2', "message", '나는 부산외대 냥이라냥22', 'extra')
  .build();

  console.log(template);

  const responseBody = getResponseModel(template);
  console.log(JSON.stringify(responseBody));

  res.status(200).send(responseBody);
});


module.exports = router;
