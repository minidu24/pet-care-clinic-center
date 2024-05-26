const express=require("express")

const receptionistmodel=require("../models/receptionistmodels")

const router=express.Router();

router.get("/",async(req,res)=>{
    const data= await receptionistmodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create",async(req,res)=>{
    const data=new receptionistmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await receptionistmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete/:id",async(req,res)=>{
const id=req.params.id
const data=await receptionistmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})





router.get("/user/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const discount = await receptionistmodel.findById(id);

        if (!discount) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: discount });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});
router.get("/count",async(req,res)=>{
    try{
        const users=await receptionistmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"distributor count successfully",data:data})
    }

})


//sending message to email
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(bodyParser.json());

// Define your endpoint for sending emails
router.post('/send-email', async (req, res) => {
  try {
    const { email } = req.body;

   console.log(email+"==========================");

    // Create a Nodemailer appointment
    let appointment = nodemailer.createAppointment({
      service: 'gmail',
      auth: {
        user: 'shehansalitha1999@gmail.com',
        pass: 'zelr tlrf yfzo fltp'
      }
    });

    // Send a thank you email
    await appointment.sendMail({
      from: 'shehansalitha1999@gmail.com',
      to: email,
      subject: 'Thank You for Your Appointment!',
      text: 'Thank you for placing your order with us!'
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;