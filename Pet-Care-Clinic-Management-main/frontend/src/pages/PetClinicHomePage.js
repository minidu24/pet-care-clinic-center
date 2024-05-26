import { Link } from 'react-router-dom'
import './PetClinicHome.css'
const PetClinicHome = () => {
    return (
    <div  style={{backgroundColor:"white",marginBottom:"-100px"}} >
      <div className="petclinichome">
        <div className="txt1">Taking care <br />for your Beloved Pet !
        <p>Human-canine bounding is the relationship <br />between dogs and human.</p>
  
        <a href="/" style={{ 
            color: 'white', 
            height:'100px',
            width:'200px',
            backgroundColor: '#ffaa00',
            left: '0',
            borderRadius: '5px' 
          }}>Explain More..</a>
        </div>
        
      <img src={require('../image/icon.jpg')} style={{width:"500px", height:"500px"}} alt='home' className='img'/>

      
      </div>
      <div className="topic" >
            Service Category..
            <div className="box">
            <Link to="/petshop"><div className="rectangle" style={{width:"130px",height:"210px",marginBottom:"100px"}}>
                     <div className="title" style={{marginLeft:"0px",width:"500px"}}> Pet Shop</div> 
                </div></Link>  
                
                <Link to="/addpet"><div className="rectangle2"style={{marginTop:"10px"}} >
                    <div className="title" >Telemedicine Booking</div> 
                </div> </Link>
                   
                <Link to="/transport_add"><div className="rectangle3" style={{marginTop:"10px"}}  >
                <   div className="title"> Transport Booking</div> 
                </div></Link>
               
                <Link to="/AppointmentBooking"><div className="rectangle4" style={{marginTop:"10px"}}  > 
                    <div className="title"> Appointment Booking</div> 
                </div> </Link>
                
             </div>
            
        </div>
      </div>  
    );
  }
   
  export default PetClinicHome;