
const express=require("express")


const transportmodel = require("../models/transportmodel");

const router = express.Router();

router.get("/_transport",async(req,res)=>{
    const data= await transportmodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create_transport",async(req,res)=>{
    const data=new transportmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update_transport",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await transportmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_transport/:id",async(req,res)=>{

const id=req.params.id
const data=await transportmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})





router.get("/user_transport/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const discount = await transportmodel.findById(id);

        if (!discount) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: discount });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});
router.get("/count_transport",async(req,res)=>{
    try{
        const users=await transportmodel.find({});

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

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shehansalitha1999@gmail.com',
        pass: 'zelr tlrf yfzo fltp'
      }
    });

    // Send a thank you email
    await transporter.sendMail({
      from: 'shehansalitha1999@gmail.com',
      to: email,
      subject: 'Thank You for Your Transportation!',
      text: 'Thank you for placing your order with us!'
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;