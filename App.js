import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from './assets/logo.png'
import biriyani from './assets/biriyani.jpeg'






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