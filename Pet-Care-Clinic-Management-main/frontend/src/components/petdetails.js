import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import {useReactToPrint} from "react-to-print";
import './servicedetails.css'


function Petdetails(){
    const componentPDF=useRef();
    const [showcustomer,setshowcustomer]=useState([]);
    const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:4000/_pet")
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
    const data=await axios.delete("http://localhost:4000/delete_pet/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert(" deleted Successfully!")
    }
}
//generatePDF
const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"show Payments ",
    onAfterPrint:()=>alert("data save in pdf")
})
//serach
const handlesearch = (e) => {

    filterdata(searchkey);
}
const filterdata = (searchKey) => {
    const filteredData = showcustomer.filter(customer =>
        customer.pet_name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowcustomer(filteredData);
}

    return(
        <div className="showoservices">
        <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>     
              <tr>
              <th>Doctor Name</th>
              <th>Method  </th>  
              <th>Pet Name</th>
              <th>Date</th>
              <th>Action</th>
              </tr>
   
        

  
              <tbody>
                  { 
                     showcustomer.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.select_doctor}</td> 
                            <td> {e1.select_method}</td> 
                            <td> {e1.t_pet_name}</td> 
                            <td> {e1.date}</td> 
                       
                            
                            <td className='dback'>
                              <a href={`/update_pet/${e1._id}`}>Edit Details</a>
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
  <button onClick={generatePDF}>Download Repoart</button>
        </div>
 
    )
}
export default Petdetails;