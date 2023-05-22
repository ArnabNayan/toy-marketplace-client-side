import React, { useState } from 'react';



// eslint-disable-next-line react/prop-types
const AllToy = ({alltoy}) => {
    // eslint-disable-next-line react/prop-types
    const {name,subCategory,selleremail,quantity,rating,price,photo,status}=alltoy;
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
   

return (
  <>
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
              <img src={photo} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold hello">{name}</div>
          </div>
        </div>
      </td>
      <td>{selleremail}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-secondary">
          View details
        </button>
      </td>
    </tr>

    
 
  </>
);
};

export default AllToy;




// return (
//   <>
 
//   <tr>
//   <th>
//     <label>
//       <input type="checkbox" className="checkbox" />
//     </label>
//   </th>
//   <td>
//     <div className="flex items-center space-x-3">
//       <div className="avatar">
//         <div className="rounded w-28 h-28">
//           <img src={photo} />
//         </div>
//       </div>
//       <div>
//         <div className="font-bold">{name}</div>
//       </div>
//     </div>
//   </td>
  
//   <td>{selleremail}</td>
  
//   <td>{subCategory}</td>
//   <td>{price}</td>
//   <td>{rating}</td>
//   <td>{quantity}</td>

//   <td><button className="btn btn-secondary">View details</button></td>
// </tr>



// </>
// );
// };
