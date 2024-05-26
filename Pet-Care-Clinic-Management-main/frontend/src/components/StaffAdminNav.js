import Peticon from "./icon";



const AdminNavbar = () => {
  return (
    <div styles={{marginTop:'20px'}}>
    <nav  className="navbar">
    
     
      <div className="links">
      <a href="/admindashboard">Dashboard</a>
      <a href="/allemployees">Employees</a>
      <a href="/leaveRequets">Requests</a>
      <a href="/attendance">Attendance</a>
  
      <a href="/salary">Salary</a>
      
      <a href="/">Schedules</a>

       
      </div>
      
    </nav>
   <hr className="top-boarder"/></div>
    
  );
}
 
export default AdminNavbar;