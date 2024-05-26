import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './orderupdate.css'

function UpdateUser(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
      first_name:"",
      last_name:"",
      email:"",
      phone:"",
      address:"",
      city:"",
      postal:"",
      state:"",
    
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/order_users/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdateorder(data.data);
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
        setupdateorder({
          ...updateorder,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:4000/update_users`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updateorder._id,
              ...updateorder,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('Order updated successfully');
           alert(" updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div className='order-update'>

<h2> Update Details</h2><br></br>

<lable>First Name:</lable>
    <input type="text" id="first_name" name="first_name"     onChange={handleInputChange} value={updateorder?.first_name}/><br></br>
    <lable>Last Name:</lable>
    <input type="text" id="last_name" name="last_name"     onChange={handleInputChange} value={updateorder?.last_name}/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email"     onChange={handleInputChange} value={updateorder?.email}/><br></br> 
    <lable>Contact Number:</lable>
    <input type="text" id="phone" name="phone"     onChange={handleInputChange} value={updateorder?.phone}/><br></br> 
    <lable>Address:</lable>
    <input type="text" id="address" name="address"     onChange={handleInputChange} value={updateorder?.address}/><br></br>
    <lable>City:</lable>
    <input type="text" id="city" name="city"     onChange={handleInputChange} value={updateorder?.city}/><br></br> 
 
    <lable>Postal Code:</lable>
    <input type="text" id="postal" name="postal"     onChange={handleInputChange} value={updateorder?.postal}/><br></br> 
   
    <lable>State:</lable>
    <input type="text" id="state" name="state"     onChange={handleInputChange} value={updateorder?.state}/><br></br> 

    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 

        </div>
    )
}
export default UpdateUser;