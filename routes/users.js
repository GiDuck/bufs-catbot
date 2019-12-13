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

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [{
        simpleText: {
          text: "냥!"
        }},
        
      ],
      quickReplies: [{label: '안녕', action:"message", messageText: '나는 부산외대 냥이라냥'}]
      
    }
  };

  res.status(200).send(responseBody);
});


module.exports = router;
