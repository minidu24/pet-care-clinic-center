const mongoose=require("mongoose")
const receptionistschema=mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    doctor:String,
    date:String,
    time:String

    

},{
    timestamps:true

})

const receptionistmodel=mongoose.model("receptionist",receptionistschema)

module.exports=receptionistmodel