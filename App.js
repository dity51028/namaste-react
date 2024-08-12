import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from './assets/logo.png'
import biriyani from './assets/biriyani.jpeg'

const Header = () => {
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

        </ul>
      </div>
    </div>
  )
}

const CardContainer = () =>{
  return(
    <div className='card-container'>
      
        <img className='img' src={biriyani}/>
        <h3>Aminia</h3>
        <h4>North Indian, Biriyani</h4>
        <h6>30min</h6>
        <h6>500 for two</h6>
      
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div>Search</div>
      <div className='res-container'>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
        <CardContainer/>
      </div>
      

    </div>
  )
}

const AppALayout = () => {
  return(
    <div className='app'>
    
      <Header/>
      <Body/>
      /**footer */
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppALayout/>)