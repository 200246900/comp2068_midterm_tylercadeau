var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
/* GET Landing page. */
router.get('/index', function (req, res, next) {
    res.render('index', { title: 'Landing' });
});
/* GET people page. */
router.get('/people', function (req, res, next) {
    res.render('people', { title: 'People' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;
