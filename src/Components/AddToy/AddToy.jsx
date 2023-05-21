import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'

const AddToy = () => {
    const {user}=useContext(AuthContext)
    const handleAddToy=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.title.value;
        const selleremail=user?.email;
        const sellername=form.sellername.value;
        const subCategory=form.subCategory.value;
        const price=form.price.value;
        const quantity=form.quantity.value;
        const rating=form.rating.value;
        const photo=form.photo.value;
        const description=form.description.value;
        const newToys={name,sellername,selleremail,subCategory,price, quantity,rating,photo,description}
        console.log(newToys)

        fetch("http://localhost:5000/addtoy",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(newToys)
        })
        .then(res=>res.json())
        .then(result=>{
          console.log(result);
          if(result.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'User added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    }
    return (
        <div>
           <h2 className="text-3xl text-indigo-950 font-bold text-center mt-10">Add a Toy</h2> 
           <form onSubmit={handleAddToy} className='bg-red-100 mt-14'>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-black font-bold">Name</span>
          </label>
          <input type="text"name="title" placeholder="title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg  text-black font-bold">Seller Name</span>
          </label>
          <input type="name" name="sellername"placeholder="sellername"className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg  text-black font-bold">Seller Email</span>
          </label>
          <input type="email"name="email" placeholder="email"defaultValue={user?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-lg text-black font-bold">Subcategory</span>
          </label>
        
          <select
            id="subCategory"
            name="subCategory"
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
          <input type="number" name="rating"placeholder="Rating"className="input input-bordered" />
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
            name="description"
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