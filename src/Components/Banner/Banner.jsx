import React from 'react';

const Banner = () => {
    return (
     <>
           <div
                className="bg-cover backdrop-brightness-20 bg-center h-screen w-full"
                style={{
                    backgroundImage:
                        "url('https://www.lego.com/cdn/cs/set/assets/bltcc14d63e84cdc719/01_76190_Banner_tall_d.jpg?fit=crop&format=jpg&quality=80&width=1600&height=700&dpr=1')",
                }}
            >  
            <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">
                
                

               <div className='pt-40'> 
               <h1 className='flex justify-start text-3xl lg:text-6xl ms-8 text-orange-500 font-bold '>Welcome to Kidsfun </h1>
                <h1 className='flex justify-start text-3xl lg:text-4xl ms-8 mt-10 text-blue-200 font-bold '>Get The Best Toy For <br /> Your Kid </h1></div>
                <p className='text-xl text-yellow-400  mt-5 font-serif ms-8'>Make playtime enjoyable with our  finest toys and games</p>
                </div>
            </div>
    </>
    );
};

export default Banner;