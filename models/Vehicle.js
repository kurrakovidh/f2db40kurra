const mongoose = require("mongoose")
const VehicleSchema = mongoose.Schema({
Vehicle_name: String,
Vehicle_Cost: Number,
Vehicle_model: String
})
module.exports = mongoose.model("Vehicle",VehicleSchema)