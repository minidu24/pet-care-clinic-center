// CreateTodo.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useSnackbar } from 'notistack';

const CreateEmployee= () => {
  const [firstname, setfirstname] = useState('');
  const [ lastname, setlastname] = useState('');
  const [address, setaddress] = useState('');
  const [ phoneNumber, setphoneNumber] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [email, setemail] = useState('');
  const [hireDate, sethireDate] = useState('');
  const [password, setpassword] = useState('');
  const {enqueueSnackbar} =useSnackbar();
  const [formSubmitted, setFormSubmitted] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/employees', {
        firstname,
      lastname,
      address,
      phoneNumber,
      birthDate,
      email,
      hireDate,
      //position,
      password,
      });
      console.log(res.data);
      setfirstname('');
      setlastname('');
      setaddress('');
      setphoneNumber('');
      setbirthDate('');
      setemail('');
      sethireDate('');
      setpassword('');
      console.log('Form submitted successfully');
      enqueueSnackbar('Success', { variant: 'success' });
      setFormSubmitted(true);
      
    } catch (err) {
      console.error(err);
      
    }
  };

  return (

    <div>
      <Link to="/">
      <i
  className="fa fa-arrow-left"
  style={{ color: 'black', fontSize: '50px' }}
></i>

          </Link>
       <h2>Register Employee</h2>
      <form onSubmit={handleSubmit} style={{border: '2px solid #000', padding:' 20px'}}>
      <label htmlFor="firstname" className="firstname">First Name:</label><br/>
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        /><br/>
      <label htmlFor="lastname" className="lastname">Last Name:</label><br/>
        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        /><br/>
       <label htmlFor="address" className="address">Address:</label><br/>
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        /><br/>
      <label htmlFor="phone-number" className="phone-number">Phone Number:</label><br/>
        <input
          name="phone-number"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        /><br/>
      <label htmlFor="birth-date" className="bith-date">Birth Date:</label><br/>
        <input
          name="birth-date"
          type="date"
          placeholder="Birth Date"
          value={birthDate}
          onChange={(e) => setbirthDate(e.target.value)}
        /><br/>
      <label htmlFor="email">Email:</label>  <br/>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        /><br/>
      <label htmlFor="hire-date" className="hire-date">Hire Date:</label><br/>
        <input
          name="hire-date"
          type="date"
          placeholder="Hire Date"
          value={hireDate}
          onChange={(e) => sethireDate(e.target.value)}
        /><br/>
      <label htmlFor="password">Password:</label><br/>
            <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
       <br/>
       <br/>
       

        <button type="submit" style={{ marginLeft: '500px',width:'20%',fontstyle:'bold',fontSize:'20px' }}>Sign Up</button>
        {formSubmitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
      </form>
      
    </div>
  
  );
};

export default CreateEmployee;

