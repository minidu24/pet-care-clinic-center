const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.put('/user/profile', async (req, res) => {
  try {
    const { firstName, lastName, address, phoneNumber, birthDate, email, hireDate } = req.body;
    const userId = req.user._id; // Assuming you have user authentication and req.user contains user data
    const updatedEmployee = await Employee.findByIdAndUpdate(
      userId,
      { $set: { firstname: firstName, lastname: lastName, address, phoneNumber, birthDate, email, hireDate } },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
