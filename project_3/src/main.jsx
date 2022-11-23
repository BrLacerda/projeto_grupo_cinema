import React from 'react';
import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from './routes/Home';
import About from './routes/About';

import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
<<<<<<< HEAD
        element: <Home />,        
=======
        element: <Home />
        
>>>>>>> cd6e411c6c8c6340bb2fcc6d3933689acd4bf1e9
      },
      {
        path: "/about",
        element: <About />

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
