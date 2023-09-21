import React from 'react';

const Features = () => {
    return (
        <div className='mt-5'>
          <h2 className='text-center text-4xl font-bold text-indigo-950'>About Us</h2>
           <h2 className='text-xl text-indigo-400 font-bold text-center'>We give your children happy moment<br /> with the best toys</h2>
           <div className='grid grid-cols-1 lg:grid-cols-4 ms-16 lg:ms-12 mt-10'>
           <div className="card w-3/4 bg-base-100 shadow-xl">
  <figure><img className='hover:scale-110' src="https://png.pngtree.com/png-vector/20200407/ourmid/pngtree-shopping-bags-in-circle-for-online-store-png-image_2177917.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center font-bold text-black">Online Store</h2>
    <p className='text-slate-700'>Easily Shopping from Online</p>
  </div>
</div>
           <div className="card w-3/4 bg-base-100 shadow-xl mt-5">
  <figure><img className='hover:scale-110' src="https://e0.pxfuel.com/wallpapers/153/216/desktop-wallpaper-avengers-assemble-comics-hq-avengers-assemble-2019-avengers-assemble-logo-thumbnail.jpg" alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-center font-bold text-black">Great Selection</h2>
    <p className='text-slate-700'>Nice and Beautiful toys</p>
  </div>
</div>
           <div className="card w-3/4 bg-base-100 shadow-xl mt-5">
  <figure><img className='hover:scale-110' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53sKo2V_1IGBgz7_XFEs9j5-8SOiFqTpz8w&usqp=CAU" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center font-bold text-black">Support</h2>
    <p className='text-slate-700'>Call us anytime</p>
  </div>
</div>
           <div className="card w-3/4 bg-base-100 shadow-xl mt-5">
  <figure><img className='hover:scale-110' src="https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center font-bold text-black">Quick Delivary</h2>
    <p className='text-slate-700'>Fastest delivary ever</p>
  </div>
</div>
</div> 
        </div>
    );
};

export default Features;