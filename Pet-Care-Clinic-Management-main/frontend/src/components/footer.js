import Peticon from "./icon";

const footer = () => {
    return ( 
      <div className="hr"> <hr className="top-boarder"/>
      <div className="footer">
  
      <div className="peticon">
           <div className="t1"> <Peticon/><br/>TakeCare Your Pet....<br/> 
           <br/>
            <div className="address">
            273/1,Negambo Road,<br/></div>
           Kurunagala.<br/><br/>

         Open Hours:<br/>

         Mon to Sat: 9.30am - 7.30pm<br/>
         Sun: 9.30am - 7pm

            </div>
          
          
          </div>
          <div className="fotcontent"> 
           <h2 className="quest"><u>Quick Links...</u></h2>
           <ul className="pages">
            <li>Home</li>
            <li>AboutUs</li>
            <li>Services</li>
            <li>Contacts</li>
            <li>Pet Care</li>
           </ul>
           
           </div>
           <div className="fotcontent"> 

           <h2 className="quest"><u>Have A Question?</u></h2>
           <div className="question">
            <div className="phone">
           <img src={require('../image/phone.png')} alt='home' className='quiz'/>
           <label className="numb">:+94 75 1785 584</label><br/></div>
           <div className="phone">
           <img src={require('../image/whatsapp.png')} alt='home' className='quiz1'/>
           <label className="numb">:+94 75 177 7784</label></div>
               </div>
           
           </div>
           <div className="fotcontent"> 
           <div className="fotcontent-container"> 
           <div className="follow">
            <h2 className="quest"><u>Follow Us </u></h2>
               <div className="contact"> 
                  <img src={require('../image/facebook.png')} alt='home' className='phoneicon'/>
                  <img src={require('../image/instagram.png')} alt='home' className='phoneicon'/>
                  
                 
               
               </div>
            
            </div>
           
            </div>
           </div>
         
       

        
      </div>
      </div>
        
      );
}
 
export default footer;