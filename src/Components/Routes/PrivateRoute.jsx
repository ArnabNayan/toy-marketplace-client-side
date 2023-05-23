import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation();
  
    if(loading){
     return <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoute;