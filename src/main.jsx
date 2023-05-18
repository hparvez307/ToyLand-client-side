import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './Main/Main.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


const router =  createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children:[

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <PrivateRoute><Blog></Blog></PrivateRoute> 
      }
     
    ]
  },
  {
    path: '*',
    element: <div>roorrrrrrrr</div>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  
<AuthProvider>
<React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>

</AuthProvider>

  
)
