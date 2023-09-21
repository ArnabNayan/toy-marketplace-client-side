import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>
        logOut()
        .then(result=>{})
        .catch(error=>console.error(error))
    
    return (
        <>
            <nav className="navbar  fixed z-10  bg-indigo-950 bg-opacity-20 max-w-screen-xl font-bold text-amber-700  flex flex-col sm:flex-row justify-between items-center px-2 py-2">
                <div className='lg:flex-1'>
                    <div>
                        <img className='w-16 h-16  rounded-full' src="https://www.shutterstock.com/shutterstock/photos/1093873355/display_1500/stock-vector-kids-fun-logo-vector-1093873355.jpg" alt="" />
                    </div>
                    
                    <div>
                    <a className="btn btn-ghost normal-case text-4xl font-serif text-indigo-400">Kids<span className='text-indigo-400'>fun</span></a><br />
                    <span className='text-lg font-serif ml-5 text-slate-200'> Toys and games</span>
                   
                    </div> 
                   
                </div>
                <div className='text-slate-900 flex flex-col lg:flex-row gap-6 lg:me-12  text-xl'>
                    <Link className='text-slate-200 font-serif' to='/'>Home</Link>
                    
                    <Link className='text-slate-200 font-serif' to='/blog'>Blog</Link>
                    <Link className='text-slate-200 font-serif' to='/alltoys'>All Toys</Link>
                    <Link className='text-slate-200 font-serif' to='/aboutus'>About Us</Link>
                    <Link className='text-slate-200 font-serif' to='/contact'>Contact</Link>
                   
                 <Link className='text-slate-200 font-serif' to='/login'>Login</Link>

                    {
                        user?.email && <>
                        <Link className='text-slate-200 font-serif' to='/addtoy'>Add a toy</Link>
                     <Link className='text-slate-200 font-serif' to='/mytoys'>My Toys</Link>
                       <button className='text-slate-200 font-serif' onClick={handleLogOut}>Sign Out</button>  
                        <img className="w-14 rounded-full "src="/images/client3.png" /> </> 
                      
                    }
                </div> 

            </nav>
        </>
    );
};

export default Header;