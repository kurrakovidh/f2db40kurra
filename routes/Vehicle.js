var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Vehicle', { title: 'Search Results Vehicle' });
});
var express = require('express');
const Vehicle_controlers= require('../controllers/Vehicle');
var router = express.Router();
/* GET costumes */
router.get('/', Vehicle_controlers.Vehicle_view_all_Page );
module.exports = router;