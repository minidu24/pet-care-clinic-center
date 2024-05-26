import React from 'react';

import ReadEmployee from '../components/ReadEmployee';
import AdminNavbar from '../components/StaffAdminNav';


function AllEmployees(){
    return (
      <div> 
        < AdminNavbar/>
        <ReadEmployee/>
         
      </div>
      
    );
  }
  
  export default AllEmployees;

