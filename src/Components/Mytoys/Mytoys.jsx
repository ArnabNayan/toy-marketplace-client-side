import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Mytoys = () => {
    const {user}=useContext(AuthContext)
    const [toys,setToys]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/toys/?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
        
    },[user])

    return (
        <div className="overflow-x-auto w-full">
          <h2 className='text-3xl text-indigo-950 font-bold text-center mt-14'>My Selected Toys:{toys.length}</h2>
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
       
        <th>Name</th>
        <th>Seller Name</th>
        <th>Seller email</th>
        <th>Subcategory</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Available Quantity</th>
        <th>Action</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  {
    toys.map(toy=>{
        <tr>
            <th scope='row'>1</th>
           <td>1</td>
                <td>hello</td>
                <td>gello</td>
                <td>khau</td>
                <td>jau</td>
                <td>khau</td>
                <td>jau</td>
                <td>khau</td>
                <td>jau</td>
      </tr>
    })
  }
      
    </tbody>
    
    
    
  </table>
</div>
    );
};

export default Mytoys;