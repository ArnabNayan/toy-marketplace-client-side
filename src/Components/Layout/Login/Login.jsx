import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 lg:ml-20">
             <img className='h-2/4 w-3/4' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt="" />
           
          </div>
       
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center text-orange-500">Login now!</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-warning" type="submit"value="Login" />
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;