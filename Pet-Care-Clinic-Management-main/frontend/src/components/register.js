import { useState } from "react";
import axios from "axios";
import './register.css'


function Register(){
    const [order,setorder]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
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
       const data=await axios.post("http://localhost:4000/create_user",order)
          console.log(data)
          alert("register success!")
         
     
    }


    return(
        <div className="add-order">
        
<h2>Registation Form</h2>
    <form onSubmit={handlesubmit}>
    <lable>First Name:</lable>
    <input type="text" id="fname" name="fname" onChange={handleonchange}/><br></br>
    <lable>Last Name :</lable>
    <input type="text" id="lname" name="lname" onChange={handleonchange}/><br></br>
    <lable>Email:</lable>
    <input type="email" id="email" name="email" onChange={handleonchange}/><br></br> 
    <lable>Paasword:</lable>
    <input type="text" id="password" name="password" onChange={handleonchange}/><br></br> 
    <button>Register</button>
    <a  href="login">Login</a>
    </form><br></br> 
   
        </div>
    )
}
export default Register;