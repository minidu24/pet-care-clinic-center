import AdminLoginBtn from "../components/AdminLoginButton"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
 

  return (<div>
    <AdminLoginBtn/>
    <form className="login" >
      <h3>Reseption Login</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        
      />
      <label>Password:</label>
      <input 
        type="password" 
        
      />

      <button onClick={()=>navigate("/addpayment")}>Log in</button>
      
    </form>
    </div>
  )
}

export default Login