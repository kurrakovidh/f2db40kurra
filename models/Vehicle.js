const mongoose = require("mongoose")
const VehicleSchema = mongoose.Schema({
Vehicle_name: {
    type:String,
    required:true
},

Vehicle_Cost:{
    type:Number,
    min:1,max:100000000
},

Vehicle_model:{ 
    type:String,
    required:true
}
})
module.exports = mongoose.model("Vehicle",VehicleSchema)