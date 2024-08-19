import React from 'react';
import ReactDOM from 'react-dom/client'


import Header from './src/components/Header.jsx';
import Body from './src/components/Body.jsx';





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