import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './orderdetails.css'
import {useReactToPrint} from "react-to-print";
import { useNavigate } from "react-router-dom";
function UserDetails(){
    const componentPDF=useRef();
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchkey,setsearchkey]=useState('');
    const navigate = useNavigate();
//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:4000/_users")
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

//delete
const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:4000/delete_users/"+id)
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
        customer.first_name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowdiscounts(filteredData);
}

    return(
        <div><button style={{marginLeft:"1300px",marginTop:"20px"}} onClick={()=>navigate("/paymentdetails")}>Payment Details</button>
        <div className="showorders">
             <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>City</th>
              <th>Postal Code</th>
               <th>State</th>
              <th>Action</th>
             

              </tr>

     
              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.first_name}</td> 
                            <td> {e1.last_name}</td> 
                            <td> {e1.email}</td> 
                            <td> {e1.phone}</td> 
                            <td> {e1.address}</td> 
                            <td> {e1.city}</td> 
                            <td> {e1.postal}</td>
                            <td> {e1.state}</td> 
                         
                           
                            <td>
                              <a href={`/updateorder/${e1._id}`}>Edit Details</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete </button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>
  <button onClick={generatePDF}>Download Repoart</button>
        </div></div>
        
    )
}
export default UserDetails;