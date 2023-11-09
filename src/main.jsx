import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Main from './pages/Main';
import RegistrationForm from './pages/RegistrationForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'registration',
        element: <RegistrationForm></RegistrationForm>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
