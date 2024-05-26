import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './regitserdetails.css'
import {useReactToPrint} from "react-to-print";
import Swal from 'sweetalert2'
function RegisterDetails(){
    const componentPDF=useRef();
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:4000/_user")
    console.log(data.data.success)
    if(data.data.success){
        setshowdiscounts(data.data.data)
    }
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])

const handleDeleteValidation = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        // Call handleClick function here
        await handledelete(id);
  
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
      }
    });
  }
//delete
const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:4000/delete_user/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Order item deleted Successfully!")
    }
}
//generatePDF
const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"show services ",
    onAfterPrint:()=>alert("data save in pdf")
})
//serach
const handlesearch = (e) => {

    filterdata(searchkey);
}
const filterdata = (searchKey) => {
    const filteredData = showdiscounts.filter(customer =>
        customer.fname.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowdiscounts(filteredData);
}

    return(
        <div className="showorders">
             <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              
 <tr>
              <th>First Name</th>
              <th>Last Name </th>
              <th>Email Address</th>
              <th>Password</th>
              <th>Action</th>
              </tr>
     


              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.fname}</td> 
                            <td> {e1.lname}</td> 
                            <td> {e1.email}</td> 
                            <td> {e1.password}</td> 
                            
                         
                           
                            <td>
                              <a href={`/updateuser/${e1._id}`}>Edit Details</a>
                              <button onClick={()=>handleDeleteValidation(e1._id)}>Delete Details</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>
  <button onClick={generatePDF}>Download Repoart</button>
        </div>
    )
}
export default RegisterDetails;