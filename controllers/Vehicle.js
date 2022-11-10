var Vehicle = require('../models/Vehicle');
// List of all Costumes
exports.Vehicle_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Vehicle list');
};
// for a specific Costume.
exports.Vehicle_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Vehicle detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Vehicle_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Vehicle create POST');
};
// Handle Costume delete form on DELETE.
exports.Vehicle_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Vehicle delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Vehicle_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Vehicle update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.Vehicle_list = async function(req, res) {
    try{
    theVehicle = await Vehicle.find();
    res.send(theVehicle);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Vehicle_view_all_Page = async function(req, res) {
    try{
    theVehicle = await Vehicle.find();
    res.render('Vehicle', { title: 'Vehicle Search Results', results: theVehicle });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Vehicle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Vehicle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Vehicle_name = req.body.Vehicle_name;
    document.Vehicle_Cost = req.body.Vehicle_Cost;
    document.Vehicle_model = req.body.Vehicle_model;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}