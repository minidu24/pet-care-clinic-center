import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './userupdate.css'

function UpdateAccount(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
      fname:"",
      lname:"",
      email:"",
      password:"",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/order_user/${id}`);
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
          const response = await fetch(`http://localhost:4000/update_user`, {
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
           alert("Order updated successfully");

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
    <input type="text" id="fname" name="fname"   onChange={handleInputChange} value={updateorder?.fname }/><br></br>
    <lable>Last Name :</lable>
    <input type="text" id="lname" name="lname"   onChange={handleInputChange} value={updateorder?.lname }/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email"  onChange={handleInputChange} value={updateorder?.email }/><br></br> 
    <lable>Paasword:</lable>
    <input type="text" id="password" name="password"   onChange={handleInputChange} value={updateorder?.password }/><br></br> 
    
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 
  
 
        </div>
    )
}
export default UpdateAccount;