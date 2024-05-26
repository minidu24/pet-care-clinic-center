

import React from 'react';


function AdminDashboard() {
  return (
    <div>
      
      <span className="text" style={{marginLeft:'340px'}}>Hello Admin, Get Your Features Here</span>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px',width:'100%',marginLeft:'-20px' }}>
      
      <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0',  borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={require('../image/petowner.png')} alt='Item2' style={{width:'100%',height:'120px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}}>
            <h4 >Patient Management</h4>
            <p> <h4><a className="forget" href="/" style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
      
        <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0', borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={require('../image/appointment.png')} alt='Item2' style={{width:'100%',height:'120px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}}>
            <h4 style={{marginLeft:'25px'}}>Appointments</h4>
            <p><h4> <a className="forget" href="/details"style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0', borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={require('../image/telemed.png')} alt='Item2' style={{width:'100%',height:'120px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}}>
            <h4 style={{marginLeft:'28px'}}>Telemedicine</h4>
            <p> <h4><a className="forget" href="/addpet/petdetails"style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0', borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={require('../image/inventory.png')} alt='Item2' style={{width:'100%',height:'118px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}}>
            <h4 style={{marginLeft:'39px'}}>Inventory</h4>
            <p> <h4><a className="forget" href="/" style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0', borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={require('../image/payment.png')} alt='Item2' style={{width:'100%',height:'120px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}}>
            <h4>Payment & Income </h4>
            <p><h4> <a className="forget" href="/orderdetails" style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0', borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={require('../image/healthrecord.png')} alt='Item2' style={{width:'100%',height:'120px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}}>
            <h4  style={{marginLeft:'24px'}}>Health Records </h4>
            <p> <h4><a className="forget" href="/displaydetails" style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0', borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={require('../image/petshop.png')} alt='Item2' style={{width:'100%',height:'120px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}} >
            <h4 style={{marginLeft:'44px'}}>Petshop </h4>
            <p><h4> <a className="forget" href="/petshop/AdminveiwAdd" style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '200px', margin: 'auto',backgroundColor:'#FFFAA0', borderRadius: '18px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',overflow: 'hidden',  transition: 'transform 0.3s ease',transform: 'translateY(-5px)' }}>
          <div className="card-image" >
         
            <img src={require('../image/staff.png')} alt='Item2' style={{width:'100%',height:'120px'}} />
          </div>
          <div className="card-content" style={{marginTop:'-50px'}}>
            <h4 style={{marginLeft:'14px'}}>Staff Management</h4>
            <p> <h4><a className="forget" href="/allemployees" style={{marginLeft:'60px'}}>Click</a></h4></p>
          </div>
        </div>
    
      </div>
      
    </div>
  );
}

export default AdminDashboard;



