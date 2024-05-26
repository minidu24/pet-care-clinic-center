import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './regitserdetails.css'
import {useReactToPrint} from "react-to-print";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function DisplayPetdetails(){
    const componentPDF=useRef();
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchkey,setsearchkey]=useState('');
    const navigate = useNavigate();
//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:4000/_petdetails")
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
    const data=await axios.delete("http://localhost:4000/delete_petdetails/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("deleted Successfully!")
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
        customer.pname.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowdiscounts(filteredData);
}

    return(<div><button style={{marginLeft:"1300px",marginTop:"20px"}} onClick={()=>navigate("/registerdetails")}>Register Details</button>
    <button style={{marginLeft:"1300px",marginTop:"20px"}} onClick={()=>navigate("/register")}>Register</button>
        <div className="showorders">
             <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              
 <tr>
              <th>Pet Name</th>
              <th>Pet Age </th>
              <th>Weight</th>
              <th>Breed</th>
              <th>Description</th>
              <th>Action</th>
              </tr>
     
  

              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.pname}</td> 
                            <td> {e1.page}</td> 
                            <td> {e1.weight}</td> 
                            <td> {e1.breed}</td> 
                            <td> {e1.dis}</td> 
                         
                           
                            <td>
                              <a href={`/updatepetdetails/${e1._id}`}>Edit Details</a>
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
        </div>
    )
}
export default DisplayPetdetails;