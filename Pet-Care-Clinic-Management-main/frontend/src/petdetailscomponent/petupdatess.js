import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './userupdate.css'

function UpdatePetdetails(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
        pname:"",
        page:"",
        weight:"",
        breed:"",
        dis:""
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/order_petdetails/${id}`);
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
          const response = await fetch(`http://localhost:4000/update_petdetails`, {
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
<lable>Pet Name:</lable>
    <input type="text" id="pname" name="pname" onChange={handleInputChange} value={updateorder?.pname }/><br></br>
    <lable>Pet Age :</lable>
    <input type="text" id="page" name="page" onChange={handleInputChange} value={updateorder?.page }/><br></br>
    <lable>Weight:</lable>
    <input type="text" id="weight" name="weight"  onChange={handleInputChange} value={updateorder?.weight }/><br></br> 
    <lable>Breed:</lable>
    <input type="text" id="breed" name="breed"  onChange={handleInputChange} value={updateorder?.breed }/><br></br> 
    <p><b>for only doctors...</b></p>
    <lable>Give Discription:</lable>
    <input type="text" id="dis" name="dis"  onChange={handleInputChange} value={updateorder?.dis }/><br></br>
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 
  
 
        </div>
    )
}
export default UpdatePetdetails;