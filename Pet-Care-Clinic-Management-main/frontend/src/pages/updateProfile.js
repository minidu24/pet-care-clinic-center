/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/footer';


function UpdateProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [hireDate, setHireDate] = useState('');

  useEffect(() => {
    // Fetch user data from the backend
    axios
      .get('http://localhost:3000/user', { withCredentials: true })
      .then((response) => {
        const { data } = response;
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setAddress(data.address);
        setPhoneNumber(data.phoneNumber);
        setBirthDate(data.birthDate);
        setEmail(data.email);
        setHireDate(data.hireDate);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleUpdateProfile = () => {
    const updatedData = {
      firstName,
      lastName,
      address,
      phoneNumber,
      birthDate,
      email,
      hireDate,
    };

    axios
      .put('http://localhost:3000/user/name', updatedData, { withCredentials: true })
      .then((response) => {
        console.log('Profile updated successfully');
        // Handle success (e.g., show a success message)
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div>
      <Nav />
      <h2 style={{ textAlign: 'center' }}>User Profile</h2>
    
      <form onSubmit={handleUpdateProfile}>
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
              <button style={{width:'90%'}}>Update</button><br/>
     <div/>
    
        <button type="submit">Update Profile</button>
      </form>
      <Footer />
    </div>
    
  );
}

export default UpdateProfile;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UpdateProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [hireDate, setHireDate] = useState('');

  useEffect(() => {
    // Fetch user data from the backend
    axios
      .get('http://localhost:4000/user', { withCredentials: true })
      .then((response) => {
        const { data } = response;
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setAddress(data.address);
        setPhoneNumber(data.phoneNumber);
        setBirthDate(data.birthDate);
        setEmail(data.email);
        setHireDate(data.hireDate);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleUpdateProfile = () => {
    const updatedData = {
      firstName,
      lastName,
      address,
      phoneNumber,
      birthDate,
      email,
      hireDate,
    };

    axios
      .put('http://localhost:4000/user/name', updatedData, { withCredentials: true })
      .then((response) => {
        console.log('Profile updated successfully');
        // Handle success (e.g., show a success message)
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div>
     
      <h2 style={{ textAlign: 'center' }}>User Profile</h2>
      {/* Your profile form */}
      <form onSubmit={handleUpdateProfile}>
        <label htmlFor="firstname" className="firstname">First Name:</label><br/>
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} // Add onChange handler
          style={{ width: '90%' }}
        /><br/>
        {/* Repeat the same pattern for other input fields */}
        {/* Example for the last name */}
        <label htmlFor="lastname" className="lastname">Last Name:</label><br/>
        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} // Add onChange handler
          style={{ width: '90%' }}
        /><br/>
        {/* Add other input fields here */}
        <button type="submit" style={{ width: '90%' }}>Update Profile</button>
      </form>
     
    </div>
  );
}

export default UpdateProfile;
