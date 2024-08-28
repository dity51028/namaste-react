import logo from './../../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='contact'>Contact Us</Link></li>
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