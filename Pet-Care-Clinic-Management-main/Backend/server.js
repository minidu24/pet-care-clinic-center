require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const petsellRoutes = require('./routes/petsell');
const userRoutes = require('./routes/user');
const PetBuyRoutes = require('./routes/Buypet');
const ItemRoutes = require('./routes/Items');
const petRoutes = require("./routes/petroutes");
const transportRoutes = require("./routes/transportroutes");
const PaymentRoutes = require("./routes/paymentroutes");
const UsersRoutes = require("./routes/usersroutes");
const registerRoutes = require("./routes/registerroutes");
const petdetailsRoutes = require("./routes/petdetailsroutes");
const receptionistroute=require("./routes/receptionistroutes");

const nodemailer = require('nodemailer');
const employeeRoutes = require('./routes/Employeeroute');
const attendanceRoutes = require('./routes/attendanceRoutes');
const leaveRoute =  require('./routes/leaveRoute');
const employee = require('./models/Employeemodel');
const crypto = require('crypto'); 
const salaryRoute = require('./routes/salaryRoutes');
const bodyParser = require('body-parser');
const adminlogin = require('./routes/adminloginroute');

// express app
const app = express();

app.use(bodyParser.json());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/test', (req, res) => {
  res.send('Hello world');
});

// Allow all origins for CORS
app.use(cors());

// routes
app.use('/api/petsell', petsellRoutes);
app.use('/api/user', userRoutes);
app.use('/api/buypet', PetBuyRoutes);
app.use('/api/Items', ItemRoutes);
app.use("/", petRoutes);
app.use("/", transportRoutes);

app.use("/", PaymentRoutes);
app.use("/", UsersRoutes);

app.use("/", registerRoutes);
app.use("/", petdetailsRoutes);
app.use("/",receptionistroute)


app.use('/employees', employeeRoutes);

app.use('/leave',leaveRoute);
app.use('/attendances', attendanceRoutes);
app.use('/salaries', salaryRoute);
app.use('/admin',adminlogin);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });



  
/*app.post("/",(req,res)=>{
    const{email,password}=  req.body;
    EmployeeModel.findOne({email:email})
     .then(user => {
         if(user){
          if(user.password === password){
            res.json("Success")
          }else{
            res.json("the password is incorrect")
          }
         } else{
          res.json("No record exicited")
         }
     })

})*/
app.post("/", (req, res) => {
  const { email, password } = req.body;
  employee.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "Success", firstName: user.firstname,lastName:user.lastname ,address:user.address,phoneNumber:user.phoneNumber,birthDate:user.birthDate,email:user.email,hireDate:user.hireDate});
        } else {
          res.json({ message: "Incorrect password" });
        }
      } else {
        res.json({ message: "No record found" });
      }
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).json({ message: "An error occurred. Please try again." });
    });
});

/*
router.get('/:_id', async (request, response) => {
  try{

      const { _id } = request.params;

      const user = await employee.findById(_id);

   return response.status(200).json(user);
   
  }catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });   
  }
});

router.put('/:_id', (req, res) => {
  const { firstName, lastName, address, phoneNumber, birthDate, email, hireDate } = req.body;

  // Assuming you have a User model or database interaction
  // Update user profile in your database
  employee.findByIdAndUpdate(
    req.user.id, // Assuming req.user.id contains the user's ID
    { $set: { firstName, lastName, address, phoneNumber, birthDate, email, hireDate } },
    { new: true },
    (err, user) => {
      if (err) {
        console.error('Error updating user profile:', err);
        return res.status(500).send('Error updating user profile');
      }
      res.status(200).send('Profile updated successfully');
    }
  );
});*/

// Assuming you have a user ID available in the request, modify the route accordingly
/*app.get("/profile/:id", (req, res) => {
  const userId = req.params.id;
  EmployeeModel.findById(userId)
    .then(user => {
      if (user) {
        res.json({ user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).json({ message: "An error occurred. Please try again." });
    });
});*/
// Forgot Password Endpoint
/*app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  // Check if the email exists in the database
  try {
    const user = await employee.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No account found with this email' });
    }

    // Generate a random token (you might use a more secure method in production)
    const token = Math.random().toString(36).substr(2);

    // Update user's reset token in the database
    user.resetToken = token;
    await user.save();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'it22251428@my.sliit.lk', // Your Gmail email address
        pass: '200275902533', // Your Gmail email password or App password
      },
    });

    // Define the email message
    const mailOptions = {
      from: 'it22251428@my.sliit.lk',
      to: email,
      subject: 'Password Reset',
      text: `Click this link to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to send reset email' });
      }
      return res.status(200).json({ message: 'Reset email sent successfully' });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});*/

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email exists in the database
    const user = await employee.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No account found with this email' });
    }

    // Generate a secure random token
    const token = crypto.randomBytes(20).toString('hex');

    // Update user's reset token in the database
    user.resetToken = token;
    await user.save();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'it22251428@my.sliit.lk', // Your Gmail email address
        pass: '200275902533', // Your Gmail email password or App password
      },
    });

    // Define the email message
    const mailOptions = {
      from: 'it22251428@my.sliit.lk',
      to: email,
      subject: 'Password Reset',
      text: `Click this link to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    // Send the email and handle errors
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending reset email:', error);
        return res.status(500).json({ message: 'Failed to send reset email' });
      }
      return res.status(200).json({ message: 'Reset email sent successfully' });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});
