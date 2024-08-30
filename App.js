import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Header from './src/components/Header.jsx';
import Body from './src/components/Body.jsx';
import About from './src/components/About.jsx';
import Contact from './src/components/Contact.jsx';
import Error from './src/components/Error.jsx';
import RestaurantMenu from './src/components/RestaurantMenu.jsx';
import Shimmer from './src/components/Shimmer.jsx';




const Grocery = lazy(() => import('./src/components/Grocery.jsx'))

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
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense> 
      }

    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute}/>)