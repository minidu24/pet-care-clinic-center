const mongoose = require('mongoose');


const SalarySchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: Number,
    required: true,
  },
  allowance: {
    type: Number,
    required: true,
  },
  deduction: {
    type: Number,
    required: true,
  },
  totalSalary: {
    type: Number,
    required: true,
  },
 
});


const Salary = mongoose.model('Salary', SalarySchema);

module.exports = Salary;
