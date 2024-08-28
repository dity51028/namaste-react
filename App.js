import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Header from './src/components/Header.jsx';
import Body from './src/components/Body.jsx';
import About from './src/components/About.jsx';
import Contact from './src/components/Contact.jsx';
import Error from './src/components/Error.jsx';



const AppALayout = () => {
  return(
    <div className='app'>
      <Header/>
      <Body/>   
    </div>
  )

}

const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<AppALayout/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute}/>)