const express=require("express")


const petdetailsmodel = require("../models/petmodel");

const router = express.Router();


router.get("/_petdetails",async(req,res)=>{
    const data= await petdetailsmodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create_petdetails",async(req,res)=>{
    const data=new petdetailsmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update_petdetails",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await petdetailsmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_petdetails/:id",async(req,res)=>{
const id=req.params.id
const data=await petdetailsmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})



//dashboard
router.get("/count_petdetails",async(req,res)=>{
    try{
        const users=await petdetailsmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"Order count successfully",data:data})
    }

})

router.get("/order_petdetails/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const order = await petdetailsmodel.findById(id);

        if (!order) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: order });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});



module.exports = router;