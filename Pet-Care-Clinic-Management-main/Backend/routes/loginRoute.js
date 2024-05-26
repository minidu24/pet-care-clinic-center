// loginRoute.js

/*const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employeemodel');

const router = express.Router();

const SECRET_KEY = 'your_secret_key';

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await Employee.findOne({ email });

    if (!employee || employee.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ employeeId: employee._id }, SECRET_KEY);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;*/
// loginRoute.js

// loginRoute.js

// routes/profile.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employeemodel');
const passport = require('passport');

// Get current user's profile
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    // Assuming req.user.id contains the authenticated user's ID
    const employee = await Employee.findById(req.user.id);
    if (!employee) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;



