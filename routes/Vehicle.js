var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Vehicle', { title: 'Search Results Vehicle' });
});
var express = require('express');
const Vehicle_controlers= require('../controllers/Vehicle');
var router = express.Router();
/* GET Vehicle */
router.get('/', Vehicle_controlers.Vehicle_view_all_Page );
/* GET detail Vehicle page */ 
router.get('/detail', Vehicle_controlers.Vehicle_view_one_Page); 
/* GET create Vehicle page */ 
router.get('/create', Vehicle_controlers.Vehicle_create_Page); 
/* GET create update page */ 
router.get('/update', Vehicle_controlers.Vehicle_update_Page); 
/* GET delete Vehicle page */ 
router.get('/delete', Vehicle_controlers.Vehicle_delete_Page); 
module.exports = router;