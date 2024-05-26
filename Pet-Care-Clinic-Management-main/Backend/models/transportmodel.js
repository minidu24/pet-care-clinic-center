const mongoose=require("mongoose")
const transportschem=mongoose.Schema({
  
    

    owner_name:String,
    email:String,
    t_pet_name:String,
    address:String,
    phone:String,
    description:String,
    

},{
    timestamps:true

})

const transportmodel=mongoose.model("Transport",transportschem)
module.exports = transportmodel;