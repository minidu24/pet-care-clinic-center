
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setaddress] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [email, setemail] = useState('');
  const [hireDate, sethireDate] = useState('');
 
 
  
  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedAddress = localStorage.getItem('address');
    const storedPhone = localStorage.getItem('phoneNumber');
    const storedBOD = localStorage.getItem('birthDate');
    const storedEmail = localStorage.getItem('email');
    const storedHD = localStorage.getItem('hireDate');
   
    if (storedFirstName && storedLastName) {
      setFirstName(storedFirstName);
      setLastName(storedLastName);
      setaddress(storedAddress);
      setphoneNumber(storedPhone);
      setbirthDate(storedBOD);
      setemail( storedEmail);
      sethireDate(storedHD);


    } else {
      // Fetch the logged-in user's name from the backend if not stored locally
      axios
        .get('http://localhost:4000/user/name', { withCredentials: true })
        .then((response) => {
          const { firstName, lastName } = response.data;
          setFirstName(firstName);
          setLastName(lastName);
          setaddress(address);
          setphoneNumber(phoneNumber);
          setbirthDate(birthDate);
          setemail(email);
          sethireDate(hireDate);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('address', address);
          localStorage.setItem('phoneNumber', phoneNumber);
          localStorage.setItem('birthDate', birthDate);
          localStorage.setItem('email', email);
          localStorage.setItem('hireDate', hireDate);
       
          
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);
  
  // Now you can use firstName and lastName in your component
  
  return (
   
        <div>
         
          <h2 style={{textAlign:'center'}}>User Profile</h2>
         
     <img src={require('../image/profile.jpg')} alt='Item2' style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%',marginLeft:'630px' }} />


<br/><br/>
            <div class="card" style={{marginLeft:'400px',border: '2px solid #000',width:'40%'}}>
            <label htmlFor="firstname" className="firstname">First Name:</label><br/>
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          value={firstName}
          style={{width:'90%'}}
        /><br/>
      <label htmlFor="lastname" className="lastname">Last Name:</label><br/>
        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          value={lastName}
          style={{width:'90%'}}
        /><br/>
       <label htmlFor="address" className="address">Address:</label><br/>
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={address}
          style={{width:'90%'}}
        /><br/>
      <label htmlFor="phone-number" className="phone-number">Phone Number:</label><br/>
        <input
          name="phone-number"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          style={{width:'90%'}}
        /><br/>
      <label htmlFor="birth-date" className="bith-date">Birth Date:</label><br/>
        <input
          name="birth-date"
          type="text"
          placeholder="Birth Date"
          value={birthDate}
          style={{width:'90%'}}
        /><br/>
      <label htmlFor="email">Email:</label>  <br/>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          style={{width:'90%'}}
        /><br/>
      <label htmlFor="hire-date" className="hire-date">Hire Date:</label><br/>
        <input
          name="hire-date"
          type="text"
          placeholder="Hire Date"
          value={hireDate}
          style={{width:'90%'}}
        
        /><br/>
         <Link to={`/profile/:id`}>
              <button style={{width:'90%'}}>Update</button><br/></Link>
     <div/>
    
        </div>
        
    </div>



  );
};

export default Profile;


