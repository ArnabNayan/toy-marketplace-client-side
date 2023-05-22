import React, { useEffect, useState } from 'react';
import AllToy from './AllToy';

const Alltoys = () => {
  const [alltoyes, setAlltoyes] = useState([])
  const [searchText, setSearchText] = useState("")
  const [seeAllToys, setSeeAllToys] = useState(false);
  const handleSeeAll = () => {
    setSeeAllToys(true);
  };

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json())
      .then(result => {
        setAlltoyes(result)
      })
  }, [])


  const handleSearch = () => {

    fetch(`http://localhost:5000/toys/${searchText}`)
      .then(res => res.json())
      .then(data => {
        setAlltoyes(data)
      })

  }
  return (
    <div className="overflow-x-auto w-full">
      <h2 className='text-3xl text-indigo-950 font-bold text-center mt-14'>All Toys Page</h2>
      <div className='search-box p-2 text-center flex mt-10'>
        <div><input onChange={(event) => setSearchText(event.target.value)} placeholder="Search…" type="text" className='input input-bordered lg:ms-96 ps-32' />{""}</div>
        <div> <button onClick={handleSearch} className='btn btn-secondary  px-10 mx-12'>search</button></div>

      </div>
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
            alltoyes?.slice(0, seeAllToys ? 30 : 20).map(alltoy => <AllToy key={alltoy._id} alltoy={alltoy}></AllToy>)
          }


        </tbody>

      </table>
      {
        !seeAllToys && (<p><button onClick={handleSeeAll} className='btn btn-secondary flex mx-auto'>See More</button></p>)
      }
    </div>
  );
};

export default Alltoys;