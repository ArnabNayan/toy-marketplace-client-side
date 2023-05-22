import React, { useState } from 'react';
import Swal from 'sweetalert2';


// eslint-disable-next-line react/prop-types
const Mytoystable = ({toy,handleDelete}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,name,subCategory,selleremail,quantity,rating,price,photo,status}=toy;
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [toys,setToys]=useState([])
    const handleUpdate = () => {
      setIsFormOpen(true);
    };
  
    const handleSubmitForm = async (event) => {
      event.preventDefault();
      const form=event.target;
      const price=form.price.value;
      const quantity=form.quantity.value;
     
      const description=form.description.value;
      const updatedToys={price, quantity,description}
      console.log(updatedToys)
    
    
      try {
       
        const response = await fetch(`http://localhost:5000/toys/${_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedToys)
        });
    
        // Handle the response and update the state
        const data = await response.json();
        console.log(data);
    
        if (response.ok && data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Toy updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
    
          const updatedToy = { ...toy };
          // Update the state with the updated toy data
          setToys((prevToys) => {
            const index = prevToys.findIndex((t) => t._id === _id);
            if (index !== -1) {
              const newToys = [...prevToys];
              newToys[index] = updatedToy;
              return newToys;
            }
            return prevToys;
          });
        }
      } catch (error) {
        console.log(error);
       
      }
    
      setIsFormOpen(false); // Close the form
    };
   
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-28 h-28">
                <img src={photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        
        <td>{selleremail}</td>
        
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
    
{status === 'confirm' ? (
        <span className="font-bold text-secondary">Confirmed status</span>
      ) : (
        <>
          <td>
            <button onClick={handleUpdate} className="btn btn-success">
              Update
            </button>
          </td>
          <td>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
          </td>
        </>
      )}

      {isFormOpen && (
        <td colSpan="2">
          <form onSubmit={handleSubmitForm}>
            {/* Add input fields or controls for updating the data */}
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
            <span className="label-text text-lg text-black font-bold">Detail description</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
         
        </div>

            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsFormOpen(false)}>
              Cancel
            </button>
          </form>
        </td>
      )}
    </tr>
  );
};

export default Mytoystable;



