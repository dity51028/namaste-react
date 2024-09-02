import logo from './../../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useSatus from '../utils/useStatus'

const Header = () => {
  const [state, setstate] = useState("Login");
  const onlineSts = useSatus();
  
    return (
      <div className='flex justify-between w-full h-28 bg-pink-200 shadow-lg'>
        <div >
          <img className='w-48 rounded-full' 
          src={logo}/>
        </div>
        <div className='flex items-center'>
          <ul className='flex text-purple-700'>
            <li className='pr-4 bg-pink-400 rounded-full flex justify-center text-pink-900'>Online Status : {onlineSts?"✅":"🔴"}</li>
            <li className='px-4'><Link to='/'>Home</Link></li>
            <li className='pr-4'><Link to='/about'>About</Link></li>
            <li className='pr-4'><Link to='/grocery'>Grocery</Link></li>
            <li className='pr-4'><Link to='contact'>Contact Us</Link></li>
            <li className='pr-4'>Cart</li>
            <button className='pr-4' 
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