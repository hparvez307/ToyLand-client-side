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
        path: 'blog',
        element: <Blog></Blog>
      }
     
    ]
  },
  {
    path: '*',
    element: <div>roorrrrrrrr</div>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
