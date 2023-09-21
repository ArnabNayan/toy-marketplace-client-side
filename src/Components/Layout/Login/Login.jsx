import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const {logIn}=useContext(AuthContext)
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
  const handleSignIn=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)

    logIn(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      navigate(from,{replace:true})

    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 lg:ml-20">
             <img className='h-1/2 w-full' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt="" />
           
          </div>
       
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center text-orange-500">Login now!</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-warning" type="submit"value="Login" />
              </div>
              </form>
              <p className='text-center mt-4'>New to toymarket?<Link className='text-lg text-indigo-700 font-bold' to='/register'>Register</Link></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;