import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Layout/Login/Login.jsx';
import Register from './Components/Layout/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Errorpage from './Components/Errorpage/Errorpage.jsx';
import AddToy from './Components/AddToy/AddToy.jsx';
import Mytoys from './Components/Mytoys/Mytoys.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';
import Alltoys from './Components/Alltoys/Alltoys.jsx';
import AllToyDetails from './Components/AllToyDetails/AllToyDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"addtoy",
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:"mytoys",
        element:<PrivateRoute><Mytoys></Mytoys></PrivateRoute>
      },
      {
        path:"alltoys",
        element:<Alltoys></Alltoys>
      },
      {
        path:"details/:name",
        element:<PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>
       
      }
    ]  
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

