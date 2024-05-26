const mongoose=require("mongoose")
const programschema=mongoose.Schema({
    name:String,
    date:date,
    time:time,
    

    

},{
    timestamps:true

})

const programsmodel=mongoose.model("program", programschema)

module.exports=programsmodel