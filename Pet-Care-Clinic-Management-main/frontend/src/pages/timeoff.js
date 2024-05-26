/*import React from 'react';
import '../styles/timeoff.css';

import Nav from '../components/Nav';
import React, { useState } from 'react';
import axios from 'axios';

const CreateLeave= () => {
  const [employeename, setemployeename] = useState('');
  const [ position, setposition] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [reason, setreason] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/leave', {
      employeename,
      position,
      startDate,
      endDate,
      reason,
     
      });
      console.log(res.data);
      setemployeename('');
      setposition('');
      setstartDate('');
      setendDate('');
      setreason('');
      
      
    } catch (err) {
      console.error(err);
    }
  };


    return (
      <div>
        <Nav />
        <h1>Request Leave</h1>
        <div>
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="Ename">Employee Name:</label>
            <input  name="Ename"
          type="text"
          placeholder="First Name"
          value={employeename}
          onChange={(e) => setemployeename(e.target.value)}/>
            
            
            <label htmlFor="position">Position:</label>
            <input  name="position"
          type="text"
          placeholder="position"
          value={position}
          onChange={(e) => setposition(e.target.value)}/>
            <br/>
            
            <label htmlFor="start-date">Start-Date:</label>
            <input  name="start-date"
          type="date"
          placeholder="start-date"
          value={startDate}
          onChange={(e) => setstartDate(e.target.value)}/>
            
            <label htmlFor="end-date">End-Date:</label>
            <input  name="end-date"
          type="date"
          placeholder="end-date"
          value={endDate}
          onChange={(e) => setendDate(e.target.value)}/>
            <br/>
            
            <label htmlFor="reason">Reason:</label>
            <input  name="reason"
          type="text"
          placeholder="reason"
          value={endDate}
          onChange={(e) => setreason(e.target.value)}/>
            <br/>
            
            <input type="submit" />
          </form>
        </div>
        <h3>History</h3>
      </div>
    );
}

export default Timeoff;*/
/*import React, { useState } from 'react';
import '../styles/timeoff.css';
import axios from 'axios';
import Footer from '../components/footer';
import Nav from '../components/Nav';
import '../styles/timeoff.css';

const Timeoff = () => {
  const [employeename, setemployeename] = useState('');
  const [position, setposition] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [reason, setreason] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/leave', {
        employeename,
        position,
        startDate,
        endDate,
        reason,
      });
      console.log(res.data);
      setemployeename('');
      setposition('');
      setstartDate('');
      setendDate('');
      setreason('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Nav />
      <h1>Request Leave</h1>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="Ename" className="text">Employee Name:</label>
          <input
            name="Ename"
            type="text"
            placeholder="First Name"
            value={employeename}
            onChange={(e) => setemployeename(e.target.value)}
          />

          <label htmlFor="position"  className="text">Position:</label>
          <input
            name="position"
            type="text"
            placeholder="position"
            value={position}
            onChange={(e) => setposition(e.target.value)}
          />
          <br />

          <label htmlFor="start-date">Start-Date:</label>
          <input
            name="start-date"
            type="date"
            placeholder="start-date"
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
          />

          <label htmlFor="end-date">End-Date:</label>
          <input
            name="end-date"
            type="date"
            placeholder="end-date"
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
          />
          <br />

          <label htmlFor="reason"  className="text">Reason:</label>
          <input
            name="reason"
            type="text"
            placeholder="reason"
            value={reason}
            onChange={(e) => setreason(e.target.value)}
          />
          <br />

          <button type="submit1">Submit</button>
        </form>
      </div>
      <h3>History</h3>
      <Footer/>
    </div>
  );
};

export default Timeoff;*/

import React, { useState } from 'react';
import '../styles/timeoff.css';
import axios from 'axios';


import '../styles/timeoff.css';

const Timeoff = () => {
  const [employeename, setemployeename] = useState('');
  const [position, setposition] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [reason, setreason] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/leave', {
        employeename,
        position,
        startDate,
        endDate,
        reason,
      });
      console.log(res.data);
      setemployeename('');
      setposition('');
      setstartDate('');
      setendDate('');
      setreason('');
      setFormSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      
      <h1 className="page-title">Request Leave</h1>
      <div>
        <form className="form-container" onSubmit={handleSubmit} style={{border: '2px solid #000', padding:' 20px'}}>
          <label htmlFor="Ename" className="form-label">Employee Name:</label>
          <input
            name="Ename"
            type="text"
            className="form-input"
            placeholder="First Name"
            value={employeename}
            onChange={(e) => setemployeename(e.target.value)}
          />

          <label htmlFor="position"  className="form-label">Position:</label>
          <input
            name="position"
            type="text"
            className="form-input"
            placeholder="Position"
            value={position}
            onChange={(e) => setposition(e.target.value)}
          />
          <br />

          <label htmlFor="start-date" className="form-label">Start Date:</label>
          <input
            name="start-date"
            type="date"
            className="form-input"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
          />

          <label htmlFor="end-date" className="form-label">End Date:</label>
          <input
            name="end-date"
            type="date"
            className="form-input"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
          />
          <br />

          <label htmlFor="reason" className="form-label">Reason:</label>
          <input
            name="reason"
            type="text"
            className="form-input"
            placeholder="Reason"
            value={reason}
            onChange={(e) => setreason(e.target.value)}
          />
          <br />

          <button type="submit" className="form-button" style={{ marginLeft: '400px',width:'20%',fontstyle:'bold',fontSize:'20px'}}>Submit</button>
          {formSubmitted && <p style={{ color: 'green' }}>Timeoff request submitted successfully!</p>}
        </form>
      </div>
      
      
    </div>
  );
};

export default Timeoff;
