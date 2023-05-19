import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const[error,setError]=useState('');
  const {signUp}=useContext(AuthContext);

  const handleSignUp=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;
    console.log(name,email,password,photo)
    setError('')
    
    if(password.length<6){
      setError('Your password must be at least 6 characters')
      return
  }

    signUp(email,password)
    .then(result=>{
      const createdUser=result.user;
      console.log(createdUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 lg:ml-20">
             <img className='h-3/4 w-full' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt="" />
           
          </div>
       
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center text-orange-500">Register now!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name"name="name" className="input input-bordered" />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL"name="photo"className="input input-bordered"required />
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-warning" type="submit"value="Register" />
              </div>
              </form>
              <p className='text-center mt-4'>Already have an account?<Link className='text-lg text-indigo-700 font-bold' to='/login'>Login</Link></p>
              <p className='text-red-500 text-lg'>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;