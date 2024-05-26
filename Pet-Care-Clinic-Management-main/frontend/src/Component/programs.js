import { useState } from "react";
import axios from "axios";
import './add service.css'


function Programs(){
    const [order,setorder]=useState({
        name:"",
        date:"",
        time:""
        
       
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
       const data=await axios.post("http://localhost:4000/create",order)
          console.log(data)
          alert("your details added now!")
         
     
    }


    return(
        <div class="body">
        <div className="add-service">
    
<h2>Programs Form</h2>
    <form onSubmit={handlesubmit}>
    <lable>Program Name:</lable>
    <input type="text" id="name" name="name" onChange={handleonchange}/><br></br>
    <lable>Date:</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br>
    <lable>Time:</lable>
    <input type="time" id="time" name="time" onChange={handleonchange}/><br></br>
     <br></br> <br></br> <br></br> 
  


    <button>Add</button>
    </form><br></br> 
   
        </div>
        </div>
    )
}
export default Programs;