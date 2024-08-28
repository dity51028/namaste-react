import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Header from './src/components/Header.jsx';
import Body from './src/components/Body.jsx';
import About from './src/components/About.jsx';
import Contact from './src/components/Contact.jsx';
import Error from './src/components/Error.jsx';



const AppALayout = () => {
  return(
    <div className='app'>
      <Header/>
      <Outlet/> 
    </div>
  )

}

const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<AppALayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }

    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute}/>)