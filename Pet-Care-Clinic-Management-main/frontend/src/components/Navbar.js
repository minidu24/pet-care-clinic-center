import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import Peticon from "./icon";
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container" style={{display:'flex'}}>
        <Link to="/" className='petshopicon'style={{marginRight:"1200px",marginBottom:"-30px"}}>
          <h1><Peticon/></h1>
        </Link>
        <nav style={{marginLeft:"500px"}}>
      <Link to="/" className='links'>Home</Link>
      <Link to="/help" className='links'>Help</Link>
      <Link to="/" className='links'>Contact</Link>
      <Link to="/" className='links'>About Us</Link>
          {user && (
            <div>
              
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login" className='loglinks' style={{ 
                        fontSize:'20px',
                        color: 'white', 
                        height:'49px',
                        width:'300px',
                        backgroundColor: '#ffaa00',
                        left: '0',
                        borderRadius: '5px' 
                          }}>   Login   </Link>

              <Link to="/signup" className='loglinks' style={{ 
                    fontSize:'20px',
                    color: 'white', 
                    height:'49px',
                    width:'200px',
                    backgroundColor: '#ffe55d',
                    left: '0',
                    borderRadius: '5px' 
                    }}> Signup   </Link>
            </div>
          )}
        </nav>
      </div>
      <hr style={{marginTop:"20px"}} className="top-boarder"/>
    </header>
  )
}

export default Navbar