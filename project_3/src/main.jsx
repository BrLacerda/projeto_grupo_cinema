import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Filmes from './routes/Filmes';

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
        path: "/filmes",
        element: <Filmes />

      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
