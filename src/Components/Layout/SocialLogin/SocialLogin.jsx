import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle} from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const googleUser=result.user
            console.log(googleUser)
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
             <div className="divider">OR</div>
             <h2 className='text-sm text-center mt-5 text-slate-950'>Sign in With</h2>
           <div className='text-center'>
           <button onClick={handleGoogleSignIn} className= "text-sky-500">
               <FaGoogle></FaGoogle>
            </button> 
           </div>
        </div>
    );
};

export default SocialLogin;