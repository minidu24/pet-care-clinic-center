import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import '../styles/allemployees.css';
import { Link } from 'react-router-dom';
import{useReactToPrint} from "react-to-print";

const ReadAttendance = () => {
  const [attendances, setAttendances] = useState([]);
 

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await axios.get('http://localhost:4000/attendances');
        setAttendances(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAttendances();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/attendances/${id}`);
      setAttendances(attendances.filter((attendance) => attendance._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=>ComponentsRef.current,
    DocumentTitle:"Attendance Report",
    onafterprint:()=>alert("Attendance Report Successfully Downloaded")
  })
const [searchQuery,setSearchQuery]=useState("");
const [noResults,setNoResults]=useState(false);

/*const handleSearch =()=>{
  fetchAttendances().then((data)=>{
    const filteredRecords = data.attendances.filter((attendances)=>
    Object.values(attendances).some((field)=>
  field.toString().toLowerCase().includes(searchQuery.toLowerCase()))
  )
  setAttendances(filteredRecords);
  setNoResults(filteredRecords.length===0);
   });
}*/
const handleSearch = async () => {
  try {
    const res = await axios.get('http://localhost:3000/attendances');
    const filteredRecords = res.data.attendances.filter((attendance) =>
      Object.values(attendance).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setAttendances(filteredRecords);
    setNoResults(filteredRecords.length === 0);
  } catch (err) {
    console.error(err);
  }
};

  /*const handleUpdate = async (id, updatedAttendance) => {
    try {
      const response = await axios.put(`http://localhost:3000/attendances/${id}`, updatedAttendance);
      const updatedAttendance = response.data; // Assuming the API returns the updated employee data
  
      setAttendances(attendances.map((attendance) =>
        attendance._id === id ? updatedAttendance : attendance
      ));
    } catch (err) {
      console.error(err);
    }
  };*/
  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:3000/attendances/${id}`, updatedData);
      const updatedAttendance = response.data; // Assuming the API returns the updated employee data
    
      setAttendances(attendances.map((attendance) =>
        attendance._id === id ? updatedAttendance : attendance
      ));
    } catch (err) {
      console.error(err);
    }
  };
  
  
  

  return (
    
<div>
  
<h2 style={{ marginRight: '10px' }}>All Records  (
  <i className="fa fa-download" aria-hidden="true" style={{ color: 'black', fontSize: '30px' }} onClick={handlePrint}></i>)
</h2>

          <div ref={ComponentsRef}>
      <table className="employees">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance) => (
            <tr key={attendance._id}>
              <td>{attendance.employeeName}</td>
              <td>{attendance.date}</td>
              <td>{attendance.present?'True':'False'}</td>
              <td>{attendance.absent?'True':'False'}</td>
             
              <td>
                <Link  to='/updateattendance'>
                <button className ="update" onClick={() => handleUpdate(attendance._id)}>Update</button></Link>
                <button className ="delete" onClick={() => handleDelete(attendance._id)} >Delete</button>
              </td>
            </tr>
           
          ))}
        </tbody>
        
      </table>
      </div>
        
    
  
    </div>
  );
};

export default ReadAttendance;



