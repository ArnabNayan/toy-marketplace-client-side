import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Toy = ({toy}) => {
    // eslint-disable-next-line react/prop-types
  const {name,photo,price,rating}=toy
    return (
        <div className="hero bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                      <h1 className="text-3xl font-bold">{name}</h1>
                      <p className='py-4'>Price:{price}</p>
                      <p>Rating:{rating}</p>
                      <Link to={`/details/${encodeURIComponent(name)}`}><button className="btn btn-secondary mt-4">View Details</button></Link>
                    </div>
                  </div>
                </div>
    );
};

export default Toy;