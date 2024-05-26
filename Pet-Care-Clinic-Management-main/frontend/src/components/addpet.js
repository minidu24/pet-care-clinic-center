import { useState } from "react";
import axios from "axios";
import './add service.css'


function AddPet(){
    const [order,setorder]=useState({
     


        select_doctor:"",
        select_method:"",
        t_pet_name:"",
        date:""
       
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setorder((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8090/create_pet",order)
          console.log(data)
          alert("your details added now!")
         
     
    }


    return(
        <div className="add-service">
    
<h2>Add Pet Details</h2>
    <form onSubmit={handlesubmit}>
    <lable>Select Doctor:</lable>
    <select id="select_doctor" name="select_doctor" onChange={handleonchange}>
        <option>Doctor 1</option>
        <option>Doctor 2</option>
        <option>Doctor 3</option>
    </select>
    <lable>Method:</lable>
    <select id="select_method" name="select_method" onChange={handleonchange}>
        <option>Whatsapp Call</option>
        <option>Normal Call</option>
        <option>Meeting</option>
    </select>
    
    <lable>Pet Name:</lable>
    <input type="text" id="t_pet_name" name="t_pet_name" onChange={handleonchange}/><br></br>
    <lable>Date:</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br> 
   
     <br></br> <br></br> <br></br> 
  


    <button>Add Details</button>
    </form><br></br> 
   
        </div>
    )
}
export default AddPet;