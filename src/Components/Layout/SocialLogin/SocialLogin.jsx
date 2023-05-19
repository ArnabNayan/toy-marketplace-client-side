import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle} from "react-icons/fa";

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const googleUser=result.user
            console.log(googleUser)
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
           <button className= "text-sky-500">
               <FaGoogle></FaGoogle>
            </button> 
           </div>
        </div>
    );
};

export default SocialLogin;