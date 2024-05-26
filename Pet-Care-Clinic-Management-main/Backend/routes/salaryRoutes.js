/*const express = require('express');
const Employee = require('../models/salaryModel');

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { employeeName,month,basicSalary,allowance,deduction,totalSalary} = req.body;
    const newSalary= new Salary({
      employeeName,
      month,
      basicSalary,
      allowance,
      deduction,
      totalSalary,
      

    });
    await newSalary.save();
    res.status(201).json(newSalary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Read all Todos
router.get('/', async (req, res) => {
  try {
    const salary = await salary.find();
    res.status(200).json(salary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update Todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {  employeeName,month,basicSalary,allowance,deduction,totalSalary } = req.body;
    const updatedSalary = await Salary.findByIdAndUpdate(
      id,
      { employeeName,month,basicSalary,allowance,deduction,totalSalary },
      { new: true }
    );
    res.status(200).json(updatedSalary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete Todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Salary.findByIdAndDelete(id);
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;*/
/****const express = require('express');
const Salary = require('../models/salaryModel'); // Changed from Employee to Salary

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { employeeName, month, basicSalary, allowance, deduction, totalSalary } = req.body;
    const newSalary = new Salary({
      employeeName,
      month,
      basicSalary,
      allowance,
      deduction,
      totalSalary,
    });
    await newSalary.save();
    res.status(201).json(newSalary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const salaryList = await Salary.find(); // Changed from salary to Salary
    res.status(200).json(salaryList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});*////

/*router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeName, month, basicSalary, allowance, deduction, totalSalary } = req.body;
    const updatedSalary = await Salary.findByIdAndUpdate(
      id,
      { employeeName, month, basicSalary, allowance, deduction, totalSalary },
      { new: true }
    );
    res.status(200).json(updatedSalary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});*///////
/*const updateSalary = async(req,res,next)=>{
  const { id } = req.params;
  const { employeeName, month, basicSalary, allowance, deduction, totalSalary } = req.body;;

  let salaries;
  try{
    salaries = await Salary.findByIdAndUpdate(id,
    {employeeName:employeeName,month:month,basicSalary:basicSalary,allowance:allowance,deduction:deduction,totalSalary:totalSalary});
    salaries= await Salary.save();
  }catch(err){
    console.log(err);
  }
  if (!salaries){
    return res.status(404).jason({message:"Unable to update salary details"});
  }
  return res.status(200).jason({salaries});
};

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Salary.findByIdAndDelete(id);
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;*////
const express = require('express');
const Salary = require('../models/salaryModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { employeeName, month, basicSalary, allowance, deduction, totalSalary } = req.body;
    const newSalary = new Salary({
      employeeName,
      month,
      basicSalary,
      allowance,
      deduction,
      totalSalary,
    });
    await newSalary.save();
    res.status(201).json(newSalary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const salaryList = await Salary.find();
    res.status(200).json(salaryList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

//update salary
router.get('/:_id', async (request, response) => {
  try{

      const { _id } = request.params;

      const salary = await Salary.findById(_id);

   return response.status(200).json(salary);
   
  }catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });   
  }
});

router.put('/:_id', async (request, response) => {
  try{
      if(
          !request.body.employeeName||
          !request.body.month||
          !request.body.basicSalary||
          !request.body.allowance||
          !request.body.deduction||
          !request.body.totalSalary
      ){
          return response.status(400).send({
              message: 'Send all required fields: employeeName, month, basicSalary, allowance, deduction,totalSalary',
          });
      }

      const { _id } = request.params;

      const result = await Salary.findByIdAndUpdate(_id, request.body);

      if (!result) {
          return response.status(404).json({ message: 'Salary Statement not found' });
      }

      return response.status(200).json({ message: 'Salary Statement update successfully' });

  }catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });   
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Salary.findByIdAndDelete(id);
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
