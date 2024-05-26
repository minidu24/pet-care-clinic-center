const express=require("express")


const petmodel = require("../models/petmodels");

const router = express.Router();

router.get("/_pet",async(req,res)=>{
    const data= await petmodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create_pet",async(req,res)=>{
    const data=new petmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update_pet",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await petmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_pet/:id",async(req,res)=>{
const id=req.params.id
const data=await petmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})





router.get("/user_pet/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const discount = await petmodel.findById(id);

        if (!discount) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: discount });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});
router.get("/count_pet",async(req,res)=>{
    try{
        const users=await cateringmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"distributor count successfully",data:data})
    }

})
module.exports = router;