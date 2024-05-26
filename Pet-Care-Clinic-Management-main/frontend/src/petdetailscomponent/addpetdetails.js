import { useState } from "react";
import axios from "axios";
import './register.css'


function AddPetdetails(){
    const [order,setorder]=useState({
    pname:"",
    page:"",
    weight:"",
    breed:"",
    dis:"",
 
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
       const data=await axios.post("http://localhost:4000/create_petdetails",order)
          console.log(data)
          alert("add pet details!")
         
     
    }


    return(
        <div className="add-order">
        
<h2>Pet Details Form</h2>
    <form onSubmit={handlesubmit}>
    <lable>Pet Name:</lable>
    <input type="text" id="pname" name="pname" onChange={handleonchange} required/><br></br>
    <lable>Pet Age :</lable>
    <input type="text" id="page" name="page" onChange={handleonchange} required/><br></br>
    <lable>Weight:</lable>
    <input type="text" id="weight" name="weight" onChange={handleonchange} required/><br></br> 
    <lable>Breed:</lable>
    <input type="text" id="breed" name="breed" onChange={handleonchange} required/><br></br> 
    <p><b>for only doctors...</b></p>
    <lable>Give Discription:</lable>
    <input type="text" id="dis" name="dis" onChange={handleonchange} required/><br></br>
    <button id="btnpet">Save</button>

    </form><br></br> 
   
        </div>
    )
}
export default AddPetdetails;