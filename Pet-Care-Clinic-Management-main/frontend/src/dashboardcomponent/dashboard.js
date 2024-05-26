import { useEffect, useState } from 'react'
import axios from "axios"
import './repoart.css'

function DashboardRepoart(){
    const [countlist,setcountlist]=useState([]);
    const [customerlist,setcustomerlist]=useState([]);


//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:4000/count_petdetails")
   const { count } = data.data;
   setcountlist(count);//get count
   setcustomerlist(data.data.data);//get table data
 
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])





    
return(
    <div className='repoart'>
  <h3>Total Pet List :</h3>
            {countlist !== null ? (
                <p>Total Pets: {countlist}
               
              
                </p>
                
            ) : (
                <p>Loading...
                     </p>
          
               
            )}

<h3> Summary Of Pet Details  :</h3>
 

    

<table>
    <thead>
        <tr>
            <th>Pet Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {customerlist.map((e, index) => {

            
            let ageMessage;
            let weightmessage;
          
            if (e.page < 6) {
                ageMessage = "distemper,parvovirus.";
            } else if (e.page > 6) {
                ageMessage = "DHP .";
            } else {
                ageMessage = "within normal range.";
            }

           if(e.weight<10){
            weightmessage="use vitamin,body fat"
           }else if(e.weight>10){
            weightmessage="ideal body weight"
           }else  {
            weightmessage = "within normal range.";
            }




            return (
                <tr key={index}>
                    <td>{e.pname }</td>
                    <td>{e.page }  ={ageMessage}</td>
                    <td>{e.weight} ={weightmessage}</td>
                    <td>{e.dis }</td>
                </tr>
            );
        })}
    </tbody>
</table>

                        
            
              

                     
                    
                
                
          
           

    </div>
)




}
export default DashboardRepoart;