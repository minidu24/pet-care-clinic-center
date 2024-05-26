import AdminLoginBtn from "../components/AdminLoginButton"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
 

  return (<div>
    <AdminLoginBtn/>
    <form className="login" >
      <h3> Admin Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        required
      />
      <label>Password:</label>
      <input 
        type="password" 
        required
      />

      <button onClick={()=>navigate("/admindashboard")}>Log in</button>
      
    </form>
    </div>
  )
}

export default Login