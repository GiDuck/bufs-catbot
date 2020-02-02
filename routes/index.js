var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contact", async (req, res) => {
  res.render('contact', { title: '교내 번호 찾기' });
});
module.exports = router;
