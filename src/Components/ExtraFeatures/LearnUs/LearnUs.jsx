import React from 'react';

const LearnUs = () => {
    return (
        <div className=' bg-slate-50 '>
           <div className='flex flex-col md:flex-row justify-around'>
            <div>
            <a href="https://storyset.com/business"> <img className='h-full' src="/images/Business challenge.gif" alt="" /> </a>
           
            </div>
            <div>
            <h2 className='text-4xl text-indigo-950 font-bold text-center p-14 border-b-2 border-blue-400'>Learn About Our Work And <br/> Dynamic Business</h2>
            <div className='flex flex-col md:flex-row justify-between mt-5 gap-2 '>
            <h2 className='text-xl text-slate-500 font-bold text-center bg-blue-300 rounded-xl p-5'>Genuine Products</h2> 
            <h2 className='text-xl text-slate-500 font-bold text-center bg-blue-300 p-5 rounded-xl'>Product Variety</h2> 
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-5'>
            <h2 className='text-xl text-slate-500 font-bold text-center bg-blue-300 rounded-xl p-5'>Attractive Offers</h2> 
            <h2 className='text-xl text-slate-500 font-bold text-center bg-blue-300 rounded-xl p-5'>Free Ship From $19</h2> 
            </div>
            </div>
            </div> 
        </div>
    );
};

export default LearnUs;