import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/footer';
import AdminNavbar from '../components/StaffAdminNav';
import ReadSalary from '../components/readsalary';


const SalaryAssignment = () => {
const [employeeName, setEmployeeName] = useState('');  
const [month, setMonth] = useState(''); 
  const [basicSalary, setBasicSalary] = useState('');
  const [allowance, setAllowance] = useState('');
  const [deduction, setDeduction] = useState('');
  const [totalSalary, setTotalSalary] = useState(0);

  const handleBasicSalaryChange = (e) => {
    const value = parseFloat(e.target.value);
    setBasicSalary(value);
  };

  const handleAllowanceChange = (e) => {
    const value = parseFloat(e.target.value);
    setAllowance(value);
  };

  const handleDeductionChange = (e) => {
    const value = parseFloat(e.target.value);
    setDeduction(value);
  };

  const calculateTotalSalary = () => {
    const total = basicSalary + allowance - deduction;
    setTotalSalary(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/salaries', {
        employeeName,
        month,
        basicSalary,
        allowance,
        deduction,
        totalSalary,
      });
      console.log(res.data);
      setEmployeeName('');
      setMonth('');
      setBasicSalary('');
      setAllowance('');
      setDeduction('');
      setTotalSalary('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      < AdminNavbar/>
      <h1 className="page-title">Assign Salary</h1>
      <div>
        <form className="form-container" onSubmit={handleSubmit} style={{border: '2px solid #000', padding:' 20px'}}>
          <label htmlFor="Ename" className="form-label">Employee Name:</label>
          <input
            name="Ename"
            type="text"
            className="form-input"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(e) =>setEmployeeName(e.target.value)}
          />
          <div>
          <label htmlFor="Month">Month:</label>
        <input
          type="text"
          id="month"
          placeholder="Month"
          value={month}
          onChange={(e) =>setMonth(e.target.value)}
        />
      </div>
          <div>
        <label htmlFor="basicSalary">Basic Salary:</label>
        <input
          type="Number"
          id="basicSalary"
          placeholder="lkr"
          value={basicSalary}
          onChange={handleBasicSalaryChange}
        />
      </div>
          
      <div>
        <label htmlFor="allowance">Allowance:</label>
        <input
          type="Number"
          id="allowance"
          placeholder="lkr"
          value={allowance}
          onChange={handleAllowanceChange}
        />
      </div>

      <div>
        <label htmlFor="deduction">Deduction:</label>
        <input
          type="Number"
          id="deduction"
          placeholder="lkr"
          value={deduction}
          onChange={handleDeductionChange}
        />
      </div>

      <div>
        <label htmlFor="deduction">Total Salary:</label>
        <input
          type="Number"
         id="deduction"
          placeholder="lkr"
          value={totalSalary}
          onChange={calculateTotalSalary} 
        />
      </div>

          <button type="submit" className="form-button" style={{ marginLeft: '400px',width:'20%',fontstyle:'bold',fontSize:'20px'}}>Submit</button>
        </form>
      </div>
      <h3 className="history-title">History</h3>
<ReadSalary/>
      <Footer/>
    </div>
  );
};

export default SalaryAssignment;