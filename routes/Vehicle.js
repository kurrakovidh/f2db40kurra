
var express = require('express');
const Vehicle_controllers= require('../controllers/Vehicle');
var router = express.Router();
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET Vehicle */
router.get('/', Vehicle_controllers.Vehicle_view_all_Page );
module.exports = router;
/* GET detail Vehicle page */ 
router.get('/detail',secured, Vehicle_controllers.Vehicle_view_one_Page); 
/* GET create Vehicle page */ 
router.get('/create',secured, Vehicle_controllers.Vehicle_create_Page); 
/* GET create update page */ 
router.get('/update',secured, Vehicle_controllers.Vehicle_update_Page); 
/* GET delete Vehicle page */ 
router.get('/delete',secured, Vehicle_controllers.Vehicle_delete_Page); 
