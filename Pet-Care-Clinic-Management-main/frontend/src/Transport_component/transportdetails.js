import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import {useReactToPrint} from "react-to-print";
import './servicedetails.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function Transportdetails(){
    const componentPDF=useRef();
    const [showcustomer,setshowcustomer]=useState([]);
    const [searchkey,setsearchkey]=useState('');
    const navigate = useNavigate();
//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:4000/_transport")
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
    const data=await axios.delete("http://localhost:4000/delete_transport/"+id)
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
        customer.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowcustomer(filteredData);
}

    return(<div><button style={{marginLeft:"1300px",marginTop:"20px"}} onClick={()=>navigate("/addpet/petdetails")}>Telemedicine Details</button>
        <div className="showoservices">
        <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table className="addtable">     
              <tr className="addtable">
              <th className="addtable">Owner Name</th>
              <th className="addtable">Pet Name  </th>
              <th className="addtable">Address</th>
              <th className="addtable">Contact Details</th>
              <th className="addtable">Description</th>
              <th className="addtable">Action</th>
              </tr>
  
         
              <tbody className="addtable">
                  { 
                     showcustomer.map((e1)=>{
                      return(
                          <tr className="addtable"> 
                            <td className="addtable"> {e1.owner_name}</td> 
                            <td className="addtable"> {e1.t_pet_name}</td> 
                            <td className="addtable"> {e1.address}</td> 
                            <td className="addtable"> {e1.phone}</td> 
                            <td className="addtable"> {e1.description}</td> 
                            
                            <td className="addtable">
                              <Link to={`/update_transport/${e1._id}` } style={{fontSize:"15px",marginLeft:"25px",backgroundColor:"red",textDecoration:"none"}} className='Adminbtn'>Edit Details</Link>
                              <button  className='Adminbtn' style={{fontSize:"15px",marginRight:"0px",width:"65px"}} onClick={()=>handleDeleteValidation(e1._id)}>Delete </button>
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
        </div>
 
    )
}
export default Transportdetails