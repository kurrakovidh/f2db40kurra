var Vehicle = require('../models/Vehicle');
// List of all Vehicle
exports.Vehicle_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle list');
};
// for a specific Vehicle. 
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
// Handle Vehicle create on POST.
exports.Vehicle_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle create POST');
};
// Handle Vehicle delete form on DELETE.
exports.Vehicle_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicle delete DELETE ' + req.params.id);
};
// Handle Vehicle update form on PUT. 
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

// List of all Vehicle
exports.Vehicle_list = async function (req, res) {
    try {
        theVehicle = await Vehicle.find();
        res.send(theVehicle);
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
// Handle Vehicle create on POST.
exports.Vehicle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vehicle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Vehicle_Vehicle":"goat", "cost":12, "size":"large"}
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
//Handle Vehicle delete on DELETE. 
exports.Vehicle_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Vehicle.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
// Handle a show one view with id specified by query 
exports.Vehicle_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Vehicle.findById( req.query.id) 
        res.render('Vehicledetail',  
{ title: 'Vehicle Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // Handle building the view for creating a Vehicle. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Vehicle_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Vehiclecreate', { title: 'Vehicle Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for updating a Vehicle. 
// query provides the id 
exports.Vehicle_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Vehicle.findById(req.query.id) 
        res.render('Vehicleupdate', { title: 'Vehicle Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.Vehicle_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Vehicle.findById(req.query.id) 
        res.render('Vehicledelete', { title: 'Vehicle Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 