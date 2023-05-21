import React from 'react';


// eslint-disable-next-line react/prop-types
const Mytoystable = ({toy,handleDelete,handleConfirm}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,name,subCategory,selleremail,quantity,rating,price,photo,status}=toy;

   
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
       {
        status==='confirm'? <span className='font-bold text-secondary'>Confirmed status</span>:
         <td><button onClick={()=>handleConfirm(_id)}  className="btn btn-success">Update</button></td>
       }
        <td><button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button></td>
      </tr>
    );
};

export default Mytoystable;