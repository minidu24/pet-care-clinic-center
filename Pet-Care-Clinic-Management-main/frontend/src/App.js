import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'


// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/footer.js'
import PetShopHome from './pages/petshophome.js'
import Buypet from './pages/buypet.js'
import Sellinfo from './components/sellinfo.js'
import VeiwAdds from './components/Adminveiwadds.js'
import AddDetails from './components/sell.js'
import AdminAdds from './components/AdminAdds.js'
import PetClinicHome from './pages/PetClinicHomePage.js'

import AddTransport from './Transport_component/addtransport';
import UpdateTransport from './Transport_component/transportupdate';

import AddPet from './Pet_Component/addpet';
import Petdetails from './Pet_Component/petdetails';
import Updatepet from './Pet_Component/updatepet';
import Transportdetails from './Transport_component/transportdetails';
//payment details
import AddPayment from './CustomerComponent/addpayment';
import AddUser from './components/adduser';
import OrderDetails from './components/paymentemployeedetails.js';
import UpdateUser from './components/UpdatePaymentEmployee.js';
import PaymentDetails from './CustomerComponent/paymentdetails';
import UpdatePayment from './CustomerComponent/UpdatePayment';

import Register from './Component/register';
import UpdateAccount from './Component/Updateregister';
import RegisterDetails from './Component/regitserdetails';
import AddPetdetails from './petdetailscomponent/addpetdetails';
import DisplayPetdetails from './petdetailscomponent/petdetailsss';
import UpdatePetdetails from './petdetailscomponent/petupdatess';
import DashboardRepoart from './dashboardcomponent/dashboard';


import ReseptionistLogin from './components/ReserptionistLogin.js'  
import Reseption from './pages/ResertionPage.js'

import AddService from './Component/addservice';
import Servicedetails from './Component/servicedetails';
import Programs from './Component/programs'
import UpdateService from './Component/update_service';


import AdminDashboard from './pages/adminDashboard';
import CreateEmployee from './components/CreateEmployee';
import Dashboard from './pages/dashboard'; // Corrected import
import Timeoff from './pages/timeoff'; // Corrected import
import Help from './pages/help'; // Corrected import
import AllEmployees from './pages/Allemployees';
import AllRequests from './pages/Allrequests';
import Profile from './pages/profile';
import Attendance from './pages/Attendance';
import UpdateAttendance from './components/updateatttendance';
import SalaryAssignment from './pages/employeeSalary';

import Schedule from './pages/Shedule';
import ScheduleList from './components/scheduleList';
import ScheduleEdit from './components/ScheduleEdit';
import UpdateSalary from './components/updateSalary';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/updateProfile';

import Adminlogin from './pages/AdminLogin';
function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
     
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/petshop/sellpet/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />

            
            <Route path="/petshop/petsell/" element={<Home />} />
            {<Route path="/" element={<PetClinicHome />} /> }
            {<Route path="/petshop" element={<PetShopHome />} /> }
           
            <Route path="/petshop/buypet" element={<Buypet />} />
          
           
            <Route path="/petshop/AdminveiwAdd" element={<VeiwAdds />}  />
              
            
            <Route path="/petshop/buypet/:id" element={<AddDetails />}  />    
            <Route path="/petshop/petsell/sellinfo/:workoutId" element={<Sellinfo />} />
            <Route path="/petshop/AdminveiwAdd/:AddId" element={<AdminAdds />} />
            
            <Route path='/addpet' element={<AddPet/>}></Route>
            <Route path='/addpet/petdetails' element={<Petdetails/>}></Route>
              <Route path='/update_pet/:id' element={<Updatepet/>}></Route>

              <Route path='/transport_add' element={<AddTransport/>}></Route>
              <Route path='/transportdetails' element={<Transportdetails/>}></Route>
              <Route path='/update_transport/:id' element={<UpdateTransport/>}></Route>

              <Route path='/adduserpayment' element={<AddUser/>}></Route>
              <Route path='/orderdetails' element={<OrderDetails/>}></Route>
              <Route path='/updateorder/:id' element={<UpdateUser/>}></Route>

              <Route path='/addpayment' element={<AddPayment/>}></Route>
              <Route path='/paymentdetails' element={<PaymentDetails/>}></Route>
              <Route path='/updateorder_payment/:id' element={<UpdatePayment/>}></Route>

              <Route path='/register' element={<Register/>}></Route>
              <Route path='/registerdetails' element={<RegisterDetails/>}></Route>
              <Route path='/updateuser/:id' element={<UpdateAccount/>}></Route>
              <Route path='/login' element={<Login/>}></Route>


              <Route path='/addpetdetails' element={<AddPetdetails/>}></Route>
              <Route path='/displaydetails' element={<DisplayPetdetails/>}></Route>
              <Route path='/updatepetdetails/:id' element={<UpdatePetdetails/>}></Route>


              <Route path='/EHRdasboard' element={<DashboardRepoart/>}></Route>

              
              <Route path='/RiceptionistLogin'element={<ReseptionistLogin/>}></Route>
              <Route path='/ReseptionDashboard' element={<Reseption/>}></Route>

              <Route path='/AppointmentBooking' element={<AddService/>}></Route>
              <Route path='/details' element={<Servicedetails/>}></Route>
              <Route path='/update_service/:id' element={<UpdateService/>}></Route>
              <Route path='/programs' element={<Programs/>}></Route>


        
              <Route path="/admindashboard" element={<AdminDashboard/>}/>
              <Route path="/CreateEmployee" element={<CreateEmployee />} />
              <Route path="/dashboard/" element={<Dashboard />} />
              <Route path="/timeoff" element={<Timeoff />} />
              <Route path="/help" element={<Help />} />
              <Route path="/allemployees" element={<AllEmployees/>}/>
              <Route path="/leaveRequets" element={<AllRequests/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/attendance" element={< Attendance/>}/>
              <Route path="/updateattendance" element={< UpdateAttendance/>}/>
              <Route path="/salary" element={< SalaryAssignment/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/schedulelist" element={<ScheduleList/>}/>
              <Route path="/scheduleedit" element={<ScheduleEdit/>}/>
              <Route path="/profile/:id" element={<UpdateProfile/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/salary/:id" element={<UpdateSalary/>} />
              
              <Route path="/adminlogin" element={<Adminlogin/>} />
          </Routes>
        </div>

        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;