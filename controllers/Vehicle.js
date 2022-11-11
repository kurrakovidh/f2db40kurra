var Vehicle = require('../models/Vehicle');
// List of all Costumes
exports.Vehicle_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle list');
};
// for a specific Costume. 
exports.vehicle_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Vehicle.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Costume create on POST.
exports.Vehicle_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle create POST');
};
// Handle Costume delete form on DELETE.
exports.Vehicle_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT. 
exports.Vehicle_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Vehicle.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Vehicle_name)  
               toUpdate.Vehicle_name = req.body.Vehicle_name; 
        if(req.body.Vehicle_Cost) toUpdate.Vehicle_Cost = req.body.Vehicle_Cost; 
        if(req.body.Vehicle_model) toUpdate.Vehicle_model = req.body.Vehicle_model; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS

// List of all Vehicles
exports.Vehicle_list = async function (req, res) {
    try {
        theVehicles = await Vehicle.find();
        res.send(theVehicles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Vehicle_view_all_Page = async function (req, res) {
    try {
        theVehicle = await Vehicle.find();
        res.render('Vehicle', { title: 'Vehicle Search Results', results: theVehicle });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST.
exports.Vehicle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vehicle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Vehicle_name = req.body.Vehicle_name;
    document.Vehicle_Cost = req.body.Vehicle_Cost;
    document.Vehicle_model = req.body.Vehicle_model;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}