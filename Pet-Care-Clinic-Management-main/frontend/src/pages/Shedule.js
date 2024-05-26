/*import React from 'react';
import axios from 'axios';
import Footer from '../components/footer';
import Nav from '../components/Nav';

const Schedule = () => {
  return (
    <div>
      <Nav />
      <h1 className="page-title">Create Your Schedule</h1>
      <div style={{ maxWidth: '900px', margin: '50px auto', padding: '20px', borderRadius: '8px'}}>
        
        <form action="#" method="POST" style={{border: '2px solid #000', padding:' 20px'}}>
          <label htmlFor="employeeName">Employee Name:</label>
          <input type="text" id="employeeName" name="employeeName" required /><br/><br/>

          <label htmlFor="shiftDate">Shift Date:</label>
          <input type="date" id="shiftDate" name="shiftDate" required /><br/><br/>

          <label htmlFor="shiftTime">Shift Time:</label>
          <input type="time" id="shiftTime" name="shiftTime" required /><br/><br/>

       

          <input type="submit" value="Submit" style={{ backgroundColor: '#ffaa00', color: 'white', padding: '10px 40px', border: 'none', borderRadius: '5px', cursor: 'pointer',fontstyle:'bold',fontSize:'20px', marginLeft: '350px' }} />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;*/
import React, { useState } from 'react';
import axios from 'axios';


const Schedule = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    shiftDate: '',
    shiftTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/schedule/create', formData);
      console.log('Schedule created:', response.data);
      // Redirect or show success message
    } catch (error) {
      console.error('Error creating schedule:', error);
    }
  };

  return (
    <div>
   
      <h1 className="page-title">Create Your Schedule</h1>
      <div style={{ maxWidth: '900px', margin: '50px auto', padding: '20px', borderRadius: '8px'}}>
        <form onSubmit={handleSubmit} style={{border: '2px solid #000', padding:' 20px'}}>
          <label htmlFor="employeeName">Employee Name:</label>
          <input type="text" id="employeeName" name="employeeName" value={formData.employeeName} onChange={handleChange} required /><br/><br/>

          <label htmlFor="shiftDate">Shift Date:</label>
          <input type="date" id="shiftDate" name="shiftDate" value={formData.shiftDate} onChange={handleChange} required /><br/><br/>

          <label htmlFor="shiftTime">Shift Time:</label>
          <input type="time" id="shiftTime" name="shiftTime" value={formData.shiftTime} onChange={handleChange} required /><br/><br/>

          <input type="submit" value="Submit" style={{ backgroundColor: '#ffaa00', color: 'white', padding: '10px 40px', border: 'none', borderRadius: '5px', cursor: 'pointer',fontstyle:'bold',fontSize:'20px', marginLeft: '350px' }} />
        </form>
      </div>
    
    </div>
  );
};

export default Schedule;


