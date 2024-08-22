import logo from './../../assets/logo.png'
import { useState } from 'react'

const Header = () => {
  const [state, setstate] = useState("Login")
  
    return (
      <div className='header'>
        <div>
          <img className='logo' 
          src={logo}/>
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" 
            onClick={()=>state === 'Login'? 
            setstate('Logout') : 
            setstate('Login')}>
            {state}</button>
          </ul>
        </div>
      </div>
    )
  }
export default Header;  