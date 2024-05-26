import React from 'react';
import Footer from '../components/footer';
import ReadLeave from '../components/ReadLeave';
import AdminNavbar from '../components/StaffAdminNav';

function AllRequests(){
    return (
      <div> 
        <AdminNavbar/>
        <ReadLeave/>
        <Footer/>
      </div>
      
    );
  }
  
  export default AllRequests;