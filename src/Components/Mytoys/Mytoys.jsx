import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Mytoystable from './Mytoystable';
import Swal from 'sweetalert2';

const Mytoys = () => {
    const {user}=useContext(AuthContext)
    const [toys,setToys]=useState([])
    

  

    useEffect(()=>{
        fetch(`https://b7a11-toy-marketplace-server-side-arnab-nayan.vercel.app/toys/?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
        
    },[user])

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b7a11-toy-marketplace-server-side-arnab-nayan.vercel.app/toys/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount >= 0) {
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              );
              
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    });
  };

 
    return (
        <div className="overflow-x-auto w-full">
          <h2 className='text-3xl text-indigo-950 font-bold text-center mt-14'>My Selected Toys</h2>
  <table className="table w-full mt-14  ">

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
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
     {
      toys.map(toy=><Mytoystable key={toy._id}toy={toy}handleDelete={handleDelete}></Mytoystable>)
     }     
    </tbody>
  </table>
</div>
    );
};

export default Mytoys;