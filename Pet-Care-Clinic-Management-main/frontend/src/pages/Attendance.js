import React, { useState } from 'react';
import axios from 'axios';
import ReadAttendance from '../components/ReadAttendance';
import AdminNavbar from '../components/StaffAdminNav';
import Footer from '../components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSnackbar } from 'notistack';

const AttendanceForm = () => {
  const [date, setDate] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [absent, setAbsent] = useState(false);
  const [present, setPresent] = useState(false);
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/attendances', {
        date,
        employeeName,
        absent,
        present,
      });
      console.log(res.data);
      setDate('');
      setEmployeeName('');
      setAbsent(false);
      setPresent(false);
     
      setFormSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
        < AdminNavbar/>
    <div style={{ maxWidth: '85%', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px' }}>Mark Attendance</h2>
      <form onSubmit={handleSubmit} style={{border: '2px solid #000', padding:' 20px'}}>
      
        <div style={{ marginBottom: '10px' }}>
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            style={{ marginLeft: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
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
        {formSubmitted && <p style={{ color: 'green' }}>Attendance Marked successfully!</p>}
      </form>
      
 
      <ReadAttendance/>
    </div>
    <Footer/>
    </div>
  );
};

export default AttendanceForm;


