import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const ShopByCategory = () => {

   const [toys,setToys]=useState([]);
  const [activeTab,setActiveTab] = useState("avengers");

  useEffect(()=>{
    fetch(`http://localhost:5000/toys/${activeTab}`)
    .then(res=>res.json())
    .then(result=>{
      setToys(result)
    })
  },[activeTab])

  const handleTabClick = (tabName) => {
   setActiveTab(tabName)
  };

  return (
    <div className='text-center'>
      <h2 className='text-5xl text-indigo-950 font-bold text-center mt-14'>Action Figure Toys</h2>
      <div className='tab-container text-center'>
        <div className='text-center mx-auto w-100'>
          <div className='tabs d-flex gap-4 items-center justify-center mt-10 bordered'>
             <div onClick={()=>handleTabClick("avengers")}
             className={`text-2xl text-black font-bold tab tab2 avengers ${
              activeTab =="avengers" ? " bg-warning text-black" : ""
             }`}>
                avengers
             </div>
             <div onClick={()=>handleTabClick("transformers")}
             className={`text-2xl text-black font-bold tab tab2 transformers ${
              activeTab =="transformers" ? " bg-warning text-black" : ""
             }`}>
                 transformers
             </div>
             <div onClick={()=>handleTabClick("marvel")}
             className={`text-2xl text-black font-bold tab tab2 marvel ${
              activeTab == "marvel" ? " bg-warning text-black" : ""
             }`}>
                 marvel  
             </div>
          </div>

        </div>
      </div>
      <div className='mt-5 grid grid-cols-1 lg:grid-cols-2'> 
      {
       // eslint-disable-next-line react/jsx-key
       toys?.slice(0,2).map(toy=><Toy key={toy._id} toy={toy}></Toy>)

        }
      

      </div>
    </div>
  );
};


export default ShopByCategory;