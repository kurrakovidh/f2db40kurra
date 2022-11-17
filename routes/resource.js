var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Vehicle_controller = require('../controllers/Vehicle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Vehicle ROUTES ///
// POST request for creating a Vehicle.
router.post('/Vehicle', Vehicle_controller.Vehicle_create_post);
// DELETE request to delete Vehicle.
router.delete('/Vehicle/:id', Vehicle_controller.Vehicle_delete);
// PUT request to update Vehicle.
router.put('/Vehicle/:id', Vehicle_controller.Vehicle_update_put);
// GET request for one Vehicle.
router.get('/Vehicle/:id', Vehicle_controller.vehicle_detail);
// GET request for list of all Vehicle items.
router.get('/Vehicle', Vehicle_controller.Vehicle_list);

module.exports = router;