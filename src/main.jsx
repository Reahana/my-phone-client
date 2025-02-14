import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './compments/Main.jsx';
import Phones from './compments/Phones.jsx';
import Phone from './compments/Phone.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
   
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader:()=> fetch ('http://localhost:5000/phones/')
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
