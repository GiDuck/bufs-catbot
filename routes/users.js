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
  .setQuickReplies({label: '안녕', action:"message", messageText: '나는 부산외대 냥이라냥', extra: 'extra'})
  .setQuickReplies({label: '안녕2', action:"message", messageText: '나는 부산외대 냥이라냥22', extra: 'extra'})
  .build();

  console.log(template);

  const responseBody = getResponseModel(template);
  console.log(getResponseModel(template));

  res.status(200).send(responseBody);
});


module.exports = router;
