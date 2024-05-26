const express = require('express');
const Employee = require('../models/Employeemodel');

const router = express.Router();

// Get Employee Profile
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update Employee Profile
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstname,
      lastname,
      address,
      phoneNumber,
      birthDate,
      email,
      hireDate,
      password,
    } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        address,
        phoneNumber,
        birthDate,
        email,
        hireDate,
        password,
      },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(updatedEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
