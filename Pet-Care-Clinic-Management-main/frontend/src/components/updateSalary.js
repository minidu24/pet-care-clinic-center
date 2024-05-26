
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const UpdateSalary = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [month, setMonth] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [allowance, setAllowance] = useState("");
  const [deduction, setDeduction] = useState("");
  const [totalSalary, setTotalSalary] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

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

  useEffect(() => {
    calculateTotalSalary(); // Calculate total salary initially
  }, [basicSalary, allowance, deduction]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/salaries/${id}`)
      .then((response) => {
        setEmployeeName(response.data.employeeName);
        setMonth(response.data.month);
        setBasicSalary(response.data.basicSalary);
        setAllowance(response.data.allowance);
        setDeduction(response.data.deduction);
        setTotalSalary(response.data.totalSalary);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditSalary = () => {
    const data = {
      employeeName,
      month,
      basicSalary,
      allowance,
      deduction,
      totalSalary,
    };

    axios
      .put(`http://localhost:4000/salaries/${id}`, data)
      .then(() => {
        enqueueSnackbar(" Salary Edited Successfully", {
          variant: "success",
        });
        navigate("/salary");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl my-4" style={{ color: "black" }}>
        Edit Salary Statement
      </h2>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Month:</label>
          <input
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Basic Salary:</label>
          <input
            type="text"
            value={basicSalary}
            onChange={handleBasicSalaryChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Allowance</label>
          <input
            type="text"
            value={allowance}
            onChange={handleAllowanceChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Deduction</label>
          <input
            type="text"
            value={deduction}
            onChange={handleDeductionChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">TotalSalary</label>
          <input
            type="text"
            value={totalSalary}
            onChange={ calculateTotalSalary}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8"
          onClick={handleEditSalary}
          style={{ backgroundColor: "#ffd700", width: "50%", marginLeft: "300px" }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateSalary;
