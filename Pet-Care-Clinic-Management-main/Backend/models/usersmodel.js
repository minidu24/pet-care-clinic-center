
const mongoose=require("mongoose")
const orderschema=mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    phone:String,
    address:String,
    city:String,
    postal:String,
    state:String,
   
   
  
   
   
   

},{
    timestamps:true

})

const ordermodel=mongoose.model("EmployeePayments",orderschema)
module.exports = ordermodel;