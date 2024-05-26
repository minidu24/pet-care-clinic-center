const mongoose=require("mongoose")
const pedetailsschema=mongoose.Schema({
    
    pname:String,
    page:String,
    weight:String,
    breed:String,
    dis:String,
 
     
 
   

},{
    timestamps:true

})

const petdetailsmodel=mongoose.model("pets_details",pedetailsschema)

module.exports = petdetailsmodel;
