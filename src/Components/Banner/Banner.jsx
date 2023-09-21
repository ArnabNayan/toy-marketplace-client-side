import React from 'react';

const Banner = () => {
    return (
     <>
           <div
                className="bg-cover backdrop-brightness-20 bg-center h-64 lg:h-screen w-full "
                style={{
                    backgroundImage:
                        "url('https://thumbs.dreamstime.com/b/toy-bear-bandaged-head-rewound-basis-banner-associated-health-children-children-health-toy-bear-139316108.jpg')",
                }}
            >  
            <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">
                
                

               <div className='lg:pt-40 pt-10'> 
               <h1 className='flex justify-center text-xl lg:text-7xl lg:ms-8 text-indigo-400 font-medium '>Welcome to Kidsfun </h1>
                <h1 className='flex justify-center text-base lg:text-6xl lg:ms-8 lg:mt-5 text-slate-400 font-serif'>Get The Best Toy For Your Kid </h1></div>
                <p className='text-lg lg:text-3xl text-blue-300  lg:mt-5 font-serif lg:ms-8 flex justify-center'>Make playtime enjoyable with our  finest toys and games</p>
                </div>
            </div>
    </>
    );
};

export default Banner;