// UpdateTodo.js
/*import React, { useState } from 'react';
import axios from 'axios';

const UpdateEmployee = () => {
  const [id, setId] = useState('');
  const [firstname, setfirstname] = useState('');
  const [ lastname, setlastname] = useState('');
  const [address, setaddress] = useState('');
  const [ phoneNumber, setphoneNumber] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [email, setemail] = useState('');
  const [hireDate, sethireDate] = useState('');
  const [password, setpassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/employees/${id}`, {
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
      setId('');
      setfirstname('');
      setlastname('');
      setaddress('');
      setphoneNumber('');
      setbirthDate('');
      setemail('');
      sethireDate('');
      setpassword('');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <input
          type="date"
          placeholder="Birth Date"
          value={birthDate}
          onChange={(e) => setbirthDate(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="date"
          placeholder="Hire Date"
          value={hireDate}
          onChange={(e) => sethireDate(e.target.value)}
        />
            <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
    
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;*/
import React, { useState } from 'react';
import axios from 'axios';

const UpdateEmployee = () => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/employees/${id}`, {
        firstName,
        lastName,
        address,
        phoneNumber,
        birthDate,
        email,
        hireDate,
        password,
      });
      console.log(res.data);
      setId('');
      setFirstName('');
      setLastName('');
      setAddress('');
      setPhoneNumber('');
      setBirthDate('');
      setEmail('');
      setHireDate('');
      setPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="date"
          placeholder="Birth Date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          placeholder="Hire Date"
          value={hireDate}
          onChange={(e) => setHireDate(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
