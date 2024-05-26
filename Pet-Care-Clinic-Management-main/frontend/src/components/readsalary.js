/*import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import '../styles/allemployees.css';
import { Link } from 'react-router-dom';
import{useReactToPrint} from "react-to-print";

const ReadSalary = () => {
  const [salary, setSalary] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        const res = await axios.get('http://localhost:3000/salaries');
        setSalary(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSalary();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/salaries/${id}`);
      setSalary(salary.filter((esalary) => esalary._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  /*const handleUpdate = async (id, updatedSalary) => {
    try {
      const response = await axios.put(`http://localhost:3000/salaries/${id}`, updatedSalary);
      const updatedSalary = response.data; // Assuming the API returns the updated employee data
  
      setSalary(salary.map((esalary) =>
        esalary._id === id ? updatedSalary : salary
      ));
    } catch (err) {
      console.error(err);
    }
  };*/
  /*const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=>ComponentsRef.current,
    DocumentTitle:"Salary Statement",
    onafterprint:()=>alert("Attendance Report Successfully Downloaded")
  })

  const handleSearch = async () => {
    try {
      await fetchSalary();
      const filteredsalary = leaves.filter((leave) =>
        Object.values(leave).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSalary(filteredsalary);
      setNoResults(filteredsalary.length === 0);
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div>
      <h2>Salary Statements (<i className="fa fa-download" aria-hidden="true" style={{ color: 'black', fontSize: '30px' }} onClick={handlePrint}></i>)</h2>
      <p><input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Employees Details"
        style={{width:'500px'}}/>
      <button onClick={handleSearch} style={{width:'10%',marginLeft:'10px'}}>Search</button></p>
      {noResults ? (
        <div>
          <p>No Users Found</p>
        </div>
      ) : (
      <div ref={ComponentsRef}>
       <table className="salary">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Month</th>
            <th>Basic Salary</th>
            <th>Allowance</th>
            <th>Deduction</th>
            <th>Total Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {salary.map((esalary) => (
            <tr key={esalary._id}>
              <td>{esalary.employeeName}</td>
              <td>{esalary.month}</td>
              <td>{esalary.basicSalary}</td>
              <td>{esalary.allowance}</td>
              <td>{esalary.deduction}</td>
              <td>{esalary.totalSalary}</td>
            
              <td>
                <button className ="delete" onClick={() => handleDelete(esalary._id)}>Delete</button>
                <Link to="/salary/${_id}">  <button className ="update" >Update</button></Link>
                <button className ="pay" style={{background:'green'}}>Pay</button>
              </td>
            </tr>
           
          ))}
        </tbody>
        
      </table>
    </div>
    )}
    </div>
  );
};

export default ReadSalary;*/
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import '../styles/allemployees.css';

const ReadSalary = () => {
  const [salary, setSalary] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const fetchSalary = async () => {
    try {
      const res = await axios.get('http://localhost:4000/salaries');
      setSalary(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSalary();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/salaries/${id}`);
      setSalary(salary.filter((esalary) => esalary._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: 'Salary Statement',
    onafterprint: () => alert('Attendance Report Successfully Downloaded'),
  });

  const handleSearch = async () => {
    try {
      await fetchSalary();
      const filteredSalary = salary.filter((esalary) =>
        Object.values(esalary).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSalary(filteredSalary);
      setNoResults(filteredSalary.length === 0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>
        Salary Statements (
        <i
          className="fa fa-download"
          aria-hidden="true"
          style={{ color: 'black', fontSize: '30px' }}
          onClick={handlePrint}
        ></i>
        )
      </h2>
      <p>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Employees Details"
          style={{ width: '500px' }}
        />
        <button onClick={handleSearch} style={{ width: '10%', marginLeft: '10px' }}>
          Search
        </button>
      </p>
      {noResults ? (
        <div>
          <p>No Users Found</p>
        </div>
      ) : (
        <div ref={ComponentsRef}>
          <table className="salary">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Month</th>
                <th>Basic Salary</th>
                <th>Allowance</th>
                <th>Deduction</th>
                <th>Total Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {salary.map((esalary) => (
                <tr key={esalary._id}>
                  <td>{esalary.employeeName}</td>
                  <td>{esalary.month}</td>
                  <td>{esalary.basicSalary}</td>
                  <td>{esalary.allowance}</td>
                  <td>{esalary.deduction}</td>
                  <td>{esalary.totalSalary}</td>

                  <td>
                    <button className="delete" onClick={() => handleDelete(esalary._id)}>
                      Delete
                    </button>
                    <Link to={`/salary/${esalary._id}`}>
                      <button className="update">Update</button>
                    </Link>
                    <button className="pay" style={{ background: 'green' }}>
                      Pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReadSalary;
