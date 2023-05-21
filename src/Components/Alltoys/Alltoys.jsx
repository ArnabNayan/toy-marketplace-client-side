import React, { useEffect, useState } from 'react';
import AllToy from './AllToy';

const Alltoys = () => {
    const [alltoyes,setAlltoyes]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(result=>{
            setAlltoyes(result)
        })
    },[])
    return (
        <div className="overflow-x-auto w-full">
          <h2 className='text-3xl text-indigo-950 font-bold text-center mt-14'>All Toys Page</h2>
  <table className="table w-full mt-14 bg ">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
       
        <th>Name</th> 
        <th>Selleremail</th>
        <th>Subcategory</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Available Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
     {
      alltoyes.map(alltoy=><AllToy key={alltoy._id}alltoy={alltoy}></AllToy>)
     }     
    </tbody>
  </table>
</div>
    );
};

export default Alltoys;