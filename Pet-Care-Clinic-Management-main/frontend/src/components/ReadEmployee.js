/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3000/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>All Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.firstname},{employee.lastname},{employee.address},{employee.phoneNumber},{employee.birthDate},{employee.email},{employee.hireDate},{employee.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadEmployee;*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const [searchTerm, setSearchTerm] = useState('');
const ReadEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3000/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
  `${employee.firstname} ${employee.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div>
       <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
      <h2>All Employees</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th>Hire Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.address}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.email}</td>
              <td>{employee.hireDate}</td>
              <td>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadEmployee;*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadEmployee = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3000/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstname} ${employee.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <h2>All Employees</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th>Hire Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.address}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.email}</td>
              <td>{employee.hireDate}</td>
              <td>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadEmployee;*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchEmployee from './SearchEmployee';

const ReadEmployee = () => {
  
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3000/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
 

  return (
    <div>
     <SearchEmployee />
      <h2>All Employees</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Birth Date</th>               
            <th>Email</th>
            <th>Hire Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.address}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.email}</td>
              <td>{employee.hireDate}</td>
              <td>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadEmployee;*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/allemployees.css';

const ReadEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery,setSearchQuery]= useState('');
  const [noResults,setNoResults]=useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:3000/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error(err);
    }
  };


  const handleSearch = ()=>{
    fetchHandler().then((data)=>{
      const filteredEmployees = data.employees.filter((employee)=>
    Object.values(employee).some((field)=>
  field.toString().toLowerCase().includes(searchQuery.toLowerCase())))
  setEmployees(filteredEmployees);
  setNoResults(filteredEmployees.length===0);
    });
  }

  return (
    <div>
      <h2>All Employees</h2>
      <input
       onChange={(e)=> setSearchQuery(e.target.value)}
       type="text"
       name="search"
       placeholder="search Users Details"
      />
      <button onClick={handleSearch}>Search</button>
      {noResults?(
        <div>
          <p>No Users Found</p>
          </div>
      ):(
      <table className="employees">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th>Hire Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.address}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.email}</td>
              <td>{employee.hireDate}</td>
              <td>
                <button className ="delete" onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
           
          ))}
        </tbody>
      )}
      </table>
    </div>
  );
};

export default ReadEmployee;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/allemployees.css';

const ReadEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:4000/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  const fetchHandler = async () => {
    try {
      const res = await axios.get('http://localhost:4000/employees');
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async () => {
    try {
      const data = await fetchHandler();
      const filteredEmployees = data.filter((employee) =>
        Object.values(employee).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setEmployees(filteredEmployees);
      setNoResults(filteredEmployees.length === 0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>All Employees</h2>
      <p><input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Employees Details"
        style={{width:'500px'}}/>
      <button onClick={handleSearch} style={{width:'10%',marginLeft:'10px'}}>Search</button></p>
      {noResults ? (
        <div>
          <p>No Users Found</p>
        </div>
      ) : (
        <table className="employees">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Birth Date</th>
              <th>Email</th>
              <th>Hire Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.address}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.birthDate}</td>
                <td>{employee.email}</td>
                <td>{employee.hireDate}</td>
                <td>
                  <button className="delete" onClick={() => handleDelete(employee._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReadEmployee;
