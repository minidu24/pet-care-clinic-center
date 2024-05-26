import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './updateservice.css'

function UpdateService(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
      name:"",
        email:"",
        contact:"",
        doctor:"",
        date:"",
        time:""
        
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/user/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdatediscount(data.data);
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);



      const handleInputChange = (e) => {
        setupdatediscount({
          ...updatediscount,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:4000/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updatediscount._id,
              ...updatediscount,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('service updated successfully');
           alert("updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
      <div className='Background'>
        <div className='service-update'>

      <div className='service-form'>
    <lable>Patient Name:</lable>
    <input type="text" id="name" name="name" onChange={handleInputChange} value={updatediscount?.name }/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleInputChange} value={updatediscount?.email }/><br></br>
    <lable>Contact :</lable>
    <input type="text" id="contact" name="contact" onChange={handleInputChange} value={updatediscount?.contact}/><br></br> 
    <lable>Doctor:</lable>
    <select  id="doctor" name="doctor" onChange={handleInputChange} value={updatediscount?.doctor}>
        <option>Doctor1</option>
        <option>Doctor2</option>
        <option>Doctor3</option>
    </select>
    <lable>Date:</lable>
    <input type="date" id="date" name="date" onChange={handleInputChange} value={updatediscount?.date}/><br></br>
    <lable>Time:</lable>
    <input type="time" id="time" name="time" onChange={handleInputChange} value={updatediscount?.time}/><br></br>



  
    <button onClick={handleUpdate}>Update Serice</button><br></br> <br></br> 
    </div>
    
        </div>
        </div>
    )
}
export default UpdateService;