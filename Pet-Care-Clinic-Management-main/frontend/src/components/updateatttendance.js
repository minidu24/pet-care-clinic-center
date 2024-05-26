import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const UpdateAttendance = () => {
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [absent, setAbsent] = useState(false);
  const [present, setPresent] = useState(false);

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/attendances/${id}`, {
        date,
        employeeName,
        absent,
        present,
      });
      console.log(res.data);
      setId('');
      setDate('');
      setEmployeeName('');
      setAbsent(false);
      setPresent(false);
    } catch (err) {
      console.error(err);
    }
  };*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/attendances/${id}`, {
        date,
        employeeName,
        absent,
        present,
      });
      console.log(res.data);
      setId('');
      setDate('');
      setEmployeeName('');
      setAbsent(false);
      setPresent(false);
    } catch (err) {
      console.error('Error submitting attendance:', err);
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
      }
    }
  };
  

  return (
    <div>
            <Link to="/attendance">
      <i
  className="fa fa-arrow-left"
  style={{ color: 'black', fontSize: '50px' }}
></i>

          </Link>
      <h2>Update Attendance</h2>
      <div style={{ maxWidth: '85%', margin: '0 auto' }}>
    
      <form onSubmit={handleSubmit} style={{border: '2px solid #000', padding:' 20px'}}>
      
        <div style={{ marginBottom: '10px' }}>
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            
            style={{ marginLeft: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Absent:</label>
          <input
            type="checkbox"
            checked={absent}
            onChange={(e) => setAbsent(e.target.checked)}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>Present:</label>
          <input
            type="checkbox"
            checked={present}
            onChange={(e) => setPresent(e.target.checked)}
          />
        </div>
        <button type="submit" style={{ marginLeft: '10px',width:'20%' }}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateAttendance;
