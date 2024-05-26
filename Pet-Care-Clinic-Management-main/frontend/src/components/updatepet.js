import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './updateservice.css'

function Updatepet(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
      select_doctor:"",
      select_method:"",
      t_pet_name:"",
      date:""
        
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/user_pet/${id}`);
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
          const response = await fetch(`http://localhost:4000/update_pet`, {
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


<lable>Select Doctor:</lable>
    <select id="select_doctor" name="select_doctor"  onChange={handleInputChange} value={updatediscount?.select_doctor }>
        <option>Doctor 1</option>
        <option>Doctor 2</option>
        <option>Doctor 3</option>
    </select><br></br><br></br>
    <lable>Method:</lable>
    <select id="select_method" name="select_method"  onChange={handleInputChange} value={updatediscount?.select_method }>
        <option>Whatsapp Call</option>
        <option>Normal Call</option>
        <option>Meeting</option>
    </select><br></br><br></br>
    
    <lable>Pet Name:</lable>
    <input type="text" id="t_pet_name" name="t_pet_name"  onChange={handleInputChange} value={updatediscount?.t_pet_name }/><br></br>
    <lable>Date:</lable>
    <input type="date" id="date" name="date"  onChange={handleInputChange} value={updatediscount?.date }/><br></br> 
  



  
    <button onClick={handleUpdate}>Update </button><br></br> <br></br> 
   
 
        </div>
    )
}
export default Updatepet;