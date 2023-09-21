import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const AllToyDetails = () => {
   
    const {name}=useParams()
    const [detailToys,setDetailToys]=useState({})
    useEffect(()=>{
        fetch(`https://b7a11-toy-marketplace-server-side-arnab-nayan.vercel.app/toys/${encodeURIComponent(name)}`)
        .then(res=>res.json())
        .then(data=>{
            setDetailToys(data[0])
        })
    
    },[name])
    return (
        <>
             {/* <h1>{detailToys.name}</h1>
             <p>Seller Name: {detailToys.sellername}</p>
      <p>Seller Email: {detailToys.selleremail}</p>
      <p>Seller Email: {detailToys.subCategory}</p> */}

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col gap-20 lg:flex-row">
    
    <div>
    <img className='mt-5 h-96 w-96' src={detailToys.photo} />
    <h1 className="text-3xl mt-5 text-orange-800 font-bold text-center">{detailToys.name}</h1>
    <p className="py-2 text-xl text-black font-semibold text-center">{detailToys.description}</p>
  
    </div>
    
   
 
    <div className='mb-36'>
  
      <p className="text-xl text-black font-semibold py-2">SellerName:{detailToys.sellername}</p>
      <p className="text-xl text-black font-semibold py-2">Email:{detailToys.selleremail}</p>
      <p className="text-xl text-black font-semibold py-2">Quantity:{detailToys.quantity}</p>
      <p className="py-2 text-xl text-black font-semibold">Price:{detailToys.price}</p>
    <p className="py-2 text-xl text-black font-semibold">Rating:{detailToys.rating}</p>    
 
    
    </div>
  </div>
</div>

        </>

        
    );
};

export default AllToyDetails;