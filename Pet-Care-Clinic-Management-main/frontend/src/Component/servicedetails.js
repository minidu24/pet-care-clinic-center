import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import {useReactToPrint} from "react-to-print";
import './servicedetails.css'



function Servicedetails(){
    const componentPDF=useRef();
    const [showcustomer,setshowcustomer]=useState([]);
    const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:4000/")
    console.log(data.data.success)
    if(data.data.success){
        setshowcustomer(data.data.data)
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
    const data=await axios.delete("http://localhost:4000/delete/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("catering service deleted Successfully!")
    }
}
//generatePDF
const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"showd  services ",
    onAfterPrint:()=>alert("data save in pdf")
})
//serach
const handlesearch = (e) => {

    filterdata(searchkey);
}
const filterdata = (searchKey) => {
    const filteredData = showcustomer.filter(customer =>
        customer.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowcustomer(filteredData);
}

    return(
    <div className='tableBackground'>
        <div className="showoservices">
        <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>     
              <tr>
              <th>Name</th>
              <th>Email </th>
              <th>Contact Details</th>
              <th>Doctor Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
              </tr>
     

              <tbody>
                  { 
                     showcustomer.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.name}</td> 
                            <td> {e1.email}</td> 
                            <td> {e1.contact}</td> 
                            <td> {e1.doctor}</td> 
                            <td> {e1.date}</td> 
                            <td> {e1.time}</td> 
                            
                            <td className='dback'>
                              <a href={`/update_service/${e1._id}`}>Edit Details</a>
                              <a href={"#"}>Payment</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete </button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>
  <br></br>
  <button onClick={generatePDF}>Download Report</button>
        </div>
        </div>
    )
}
export default Servicedetails;