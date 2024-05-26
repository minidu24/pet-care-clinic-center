const mongoose=require("mongoose")

const petschema=mongoose.Schema({
    select_doctor:String,
    select_method:String,
    t_pet_name:String,
    date:String
    

},{
    timestamps:true

})

const petmodel=mongoose.model("pet_details",petschema)
module.exports = petmodel;