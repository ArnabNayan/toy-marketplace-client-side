import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar bg-slate-100 font-bold text-amber-700  flex flex-col sm:flex-row justify-between items-center px-4 py-2">
                <div className='lg:flex-1'>
                    <div>
                        <img className='w-28 h-24 rounded-full' src="https://www.shutterstock.com/shutterstock/photos/1093873355/display_1500/stock-vector-kids-fun-logo-vector-1093873355.jpg" alt="" />
                    </div>
                    
                    <div>
                    <a className="btn btn-ghost normal-case text-4xl font-bold text-red-600">Kids<span className='text-lime-700'>fun</span></a><br />
                    <span className='text-lg font-bold ml-5 text-sky-500'> Toys and games</span>
                   
                    </div> 
                   
                </div>
                <div className='text-slate-900 flex flex-col lg:flex-row gap-5 lg:me-96  text-xl'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/alltoys'>All Toys</Link>
                    <Link to='/mytoys'>My Toys</Link>
                    <Link to='/addtoy'>Add a toy</Link>
                </div> 
               
                <div className="flex-none gap-2">
                   
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className='w-14 rounded-full'>
                                <img src="/images/client3.png" />
                            </div>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;