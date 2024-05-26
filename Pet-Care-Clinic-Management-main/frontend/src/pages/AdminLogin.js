
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/admin/login', { email, password })
      .then((response) => {
        const { message } = response.data;
        if (message === 'Login successful') {
          navigate('/admindashboard');
        } else {
          setError('Invalid email or password');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('An error occurred. Please try again.');
      });
  };

  return (
    <div>
      
      <div style={{ alignItems: 'flex-start', marginTop: '0px' }} className="container">
        <div className="login_container">
        <span className="text3" style={{ fontSize: '60px', fontWeight: 'bold', marginLeft: '350px', marginTop: '-190px', fontFamily: 'serif' }}>Sign in to Admin</span>

<span className="text4" style={{ fontSize: '60px', fontWeight: 'bold', marginLeft: '10px', marginTop: '130px', fontFamily: 'serif' }}>Account</span>
<br />
<br/>

          <form className="form-container" onSubmit={handleSubmit} style={{marginLeft:'500px'}}>
            <label htmlFor="username" style={{ fontSize: '20px' }}>User Name</label>
            <br />
            <input
              id="username"
              name="username"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{width:'50%'}}
              required
            />
            <br />
            <br/>
            <label className="pasword" htmlFor="password" style={{ fontSize: '20px' }}>Password</label>
            <br/>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{width:'50%'}}
              required
            />
            <p> {error && <p className="error-message">{error}</p>}  
            <br/> 
            </p>
            <button className="button2" type="submit" style={{ width: '130px',marginLeft:'120px',marginTop:'-10px' }}>Login</button>
          </form>
        </div>
       
      </div>
      
    </div>
  );
};

export default Adminlogin;
