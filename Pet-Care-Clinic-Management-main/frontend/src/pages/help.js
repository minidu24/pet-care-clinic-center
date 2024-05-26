import React from 'react';
import '../styles/help.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Help(){
    return (
      <div> 
        <div class="container">
        <span className="text">How can we help you?</span>
  
        <div className="rectangle-container1">
          <div className="rectangle">
            <i className="fas fa-phone"></i>
            <span className="text1">Phone Number</span><br />
            <a href="034756827894">034256384784</a>
          </div>
          <div className="rectangle">
            <i className="fas fa-envelope"></i>
            <span className="text1">Email</span><br />
            <a href="034756827894">puphub@gmail.com</a>
          </div>
         
        
        <div className="rectangle-container2">
          <div className="rectangle">
            <i className="fas fa-file-alt"></i>
            <span className="text1">Documents</span><br />
            <a href="034756827894">documnet.pdf</a>
          </div>
        
        </div>
      </div>
      </div>
     
      </div>
      
    );
  }
  
  export default Help;
