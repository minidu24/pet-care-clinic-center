const express = require('express');
const Employee = require('../models/Employeemodel');

const router = express.Router();

// Create Employee
router.post('/', async (req, res) => {
  try {
    const {  firstname, lastname,address,phoneNumber,birthDate,email,hireDate,password } = req.body;
    const newEmployee= new Employee({
      firstname,
      lastname,
      address,
      phoneNumber,
      birthDate,
      email,
      hireDate,
      //position,
      password,

    });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Read all Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update Employees
/*router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {  firstname, lastname,address,phoneNumber,birthDate,email,hireDate,password } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { firstname, lastname,address,phoneNumber,birthDate,email,hireDate,password },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});*/

//update employee details
/*const updateEmployee = async(req,res,next)=>{
  const { id } = req.params;
  const {  firstname, lastname,address,phoneNumber,birthDate,email,hireDate,password } = req.body;

  let employees;
  try{
    employees = await Employee.findByIdAndUpdate(id,
    {firstname:firstname,lastname:lastname,address:address,phoneNumber:phoneNumber,birthDate:birthDate,email:email,hireDate:hireDate,password:password});
    employees = await employees.save();
  }catch(err){
    console.log(err);
  }
  if (!employees){
    return res.status(404).jason({message:"Unable to update employee details"});
  }
  return res.status(200).jason({employees});
};*/

// Delete Employees
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;