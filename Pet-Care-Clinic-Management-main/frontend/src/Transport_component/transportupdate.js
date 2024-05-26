import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './updateservice.css'

function UpdateTransport(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
      owner_name:"",
      t_pet_name:"",
      address:"",
      phone:"",
      description:""
        
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/user_transport/${id}`);
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
          const response = await fetch(`http://localhost:4000/update_transport`, {
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
        <div className='service-update'>


     <lable>Product id::</lable>
    <input type="text" id="owner_name" name="owner_name" onChange={handleInputChange} value={updatediscount?.owner_name }/><br></br>
    <lable>Product Name:</lable>
    <input type="text" id="t_pet_name" name="t_pet_name" onChange={handleInputChange} value={updatediscount?.t_pet_name }/><br></br>
    <lable>Unit Price:</lable>
    <input type="text" id="address" name="address" onChange={handleInputChange} value={updatediscount?.address }/><br></br>
    <lable>Contact Details:</lable>
    <input type="text" id="phone" name="phone" onChange={handleInputChange} value={updatediscount?.phone }/><br></br>
    <lable>description:</lable>
    <input type="text" id="description" name="description" onChange={handleInputChange} value={updatediscount?.description }/><br></br>

  



  
    <button onClick={handleUpdate}>Update </button><br></br> <br></br> 

 
        </div>
    )
}
export default UpdateTransport;