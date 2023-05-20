import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const AddToy = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
           <h2 className="text-center text-3xl">Add a Toy</h2> 
           <form className='bg-red-100 mt-14'>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-black font-bold">Name</span>
          </label>
          <input type="text"name="name"defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg  text-black font-bold">Seller Name</span>
          </label>
          <input type="name" name="name"defaultValue={user?.displaySellerName} placeholder="sellername"className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg  text-black font-bold">Seller Email</span>
          </label>
          <input type="email"name="email" placeholder="email"defaultValue={user?.selleremail} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-lg text-black font-bold">Subcategory</span>
          </label>
        
          <select
            id="subCategory"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Sub-category</option>
            <option value="avengers">Avengers</option>
            <option value="transformers">Transformers</option>
            <option value="marvel">Marvel</option>
          </select>
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-black font-bold">Price</span>
          </label>
          <input type="number" name="price"placeholder="price"className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-black font-bold">Available Quantity</span>
          </label>
          <input type="number" name="quantity"placeholder="quantity"className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-lg text-black font-bold">Rating</span>
          </label>
          <input type="number" name="Rating"placeholder="Rating"className="input input-bordered" />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-black font-bold">Photo URL</span>
          </label>
          <input type="photo" name="photo"placeholder="photo"className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-black font-bold">Detail description</span>
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
         
        </div>
    
    
     </div>
        <div className="form-control mt-6 w-1/2 mx-auto">
        
          <input className="btn btn-secondary btn-block text-lg" type="submit" value="Add a Toy"/>
        </div>
           </form>
     
    </div>

    );
};

export default AddToy;