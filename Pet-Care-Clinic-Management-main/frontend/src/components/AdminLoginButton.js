import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();
    return ( 
        <div><button style={{marginLeft:"1350px",marginBottom:"10px"} } onClick={()=>navigate("/AdminLogin")}>Admin Login</button>
            <button style={{marginLeft:"1350px",marginRight:"20px"} } onClick={()=>navigate("/RiceptionistLogin")}>Riceptionist login</button></div>
     );
}
 
export default Button;