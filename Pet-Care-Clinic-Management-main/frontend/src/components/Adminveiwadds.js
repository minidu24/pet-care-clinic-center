import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import{useReactToPrint} from "react-to-print";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const ReadAdds = () => {
  const [Adds, setAdds] = useState([]);
  const navigate = useNavigate();
  const GenaratePDF =useRef();
  const { dispatch } = useWorkoutsContext()
  const [showdiscounts,setshowdiscounts]=useState([]);
  useEffect(() => {
    const fetchAdds = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/buypet');
        setAdds(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAdds();
  }, []);
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
        
        await handledelete(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
      }
    });
  }
  
 

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

//delete
const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:4000/api/buypet/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Order item deleted Successfully!")
        window.location.reload();
    }
}

const [noResults,setNoResults]=useState(false);


  const [search,setSearch] =useState('')

 
  var rowNumber=0

  const Genaratereport =useReactToPrint({
    content : () =>GenaratePDF.current,
    documentTitle:"Advertisement Details",
    onAfterPrint:()=>alert("Report Genarated Successfully")
  });
 
  return (
    
<div>
  

<input onChange ={(e)=>setSearch(e.target.value)}
     type="text"
     name="search"
     placeholder="search records" style={{width:'30%',marginLeft:"500px"}}/>
    <center>  
     {noResults?(
         <div><p>No Records</p></div>):(
          <div ref={GenaratePDF} >
        <h1>Advertisement Details</h1> 
      <table className="addtable" >
        <thead >
          <tr className="addtable" >
          <th className="addtable" >Number</th>
            <th className="addtable" >UserID</th>
            <th className="addtable" >Animal</th>
            <th className="addtable" >Breed</th>
            <th className="addtable" >Price</th>
            <th className="addtable" >Contact</th>
            <th className="addtable" >Actions</th>
          </tr>
        </thead>
        <tbody className="addtable" >
          
          {Adds.filter((add)=>{
            return (search.toLowerCase() === '' ?add: add.Breed.toLowerCase().includes(search)
                    
          )
          }).map((add) => (
            <tr key={add._id} className="addtable" >
              <td className="addtable" >{++rowNumber}</td>
              <td className="addtable" >{add.user_id}</td>
              <td className="addtable" >{add.Animal}</td>
              <td className="addtable" >{add.Breed}</td>
              <td className="addtable" >Rs.{add.Price}.00</td>
              <td className="addtable" >0{add.Contact}</td>
             
              <td className="tablebtn"  style={{display:"flex"}}>
               
                <button style={{fontSize:"15px",marginLeft:"25px",backgroundColor:"red"}} className='Adminbtn'  onClick={() => handleDeleteValidation(add._id)}>Delete</button>
                <button className='Adminbtn' style={{fontSize:"15px",marginRight:"0px",width:"65px"}} onClick={()=>navigate(`/petshop/AdminveiwAdd/${add._id}`)}>Veiw</button>
              </td>
            </tr>
           
          ))}
        </tbody>
        
      </table>
      
     
      </div>
        )}
     <button className='genarateReport'  onClick={Genaratereport}>Report</button></center>
  
    </div>
  );
};

export default ReadAdds;



