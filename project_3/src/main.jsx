import React from 'react';
import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from './App';

import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
        
      },
      {
        path: "/about",
        element: <About />

      },
      {
        path: "/footer",
        element: <Footer />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
