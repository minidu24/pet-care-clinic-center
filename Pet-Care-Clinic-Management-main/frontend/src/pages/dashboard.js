import React , { useState,useEffect }from 'react';

import axios from 'axios';
import '../styles/dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Link } from 'react-router-dom';
function Dashboard() {
  const [firstName, setFirstName] = useState('');
  

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    if (storedFirstName) {
      setFirstName(storedFirstName);
    } else {
      // Fetch the logged-in user's first name from the backend if not stored locally
      axios
        .get('http://localhost:4000/user/firstname', { withCredentials: true })
        .then((response) => {
          setFirstName(response.data.firstName);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  
  }, []);
    return (
      <div> 
        <div class="container">
        <span className="text">Hello <span style={{ color: 'blue' }}>{firstName}</span>, Get Your Features Here</span>
  
        <div className="rectangle-container1">
          <div className="rectangle">
            <i className="fas fa-user"></i>
            <span className="text1">Profile</span><br />
            <Link to="/profile">
            <button className="button">Click</button>
          </Link>
           
          </div>
          <div className="rectangle">
            <i className="far fa-calendar-alt"></i>
            <span className="text1">Appointments</span><br />
            <Link to="/profile">
            <button className="button">Click</button></Link>
          </div>
          <div className="rectangle">
            <i className="fas fa-sign-out-alt"></i>
            <span className="text1">Time Off</span><br />
            <Link to="/timeoff">
            <button className="button">Click</button></Link>
          </div>
        </div>
        
        <div className="rectangle-container2">
          <div className="rectangle">
            <i className="far fa-clock"></i>
            <span className="text1">Schedules</span><br />
            <button className="button" style={{width:'105px'}}>Click</button>
          </div>
          <div className="rectangle">
            <i className="far fa-question-circle"></i>

            <span className="text1">Help</span><br />
            <Link to="/help">
            <button className="button">Click</button></Link>
          </div>
        </div>
      </div>
     
      </div>
      
    );
  }
  
  export default Dashboard;
