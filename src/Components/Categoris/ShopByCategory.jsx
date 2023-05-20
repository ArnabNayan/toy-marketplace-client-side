import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const ShopByCategory = () => {
  // const categories = [
  //   {
  //     title: 'Avengers Toys',
  //     toys: [
  //       {
  //         picture: 'https://static.thcdn.com/productimg/300/300/12127953-1884673519935062.jpg',
  //         name: 'Iron Man',
  //         price: '300 tk',
  //         rating: 4.5,
  //       },
  //       {
  //         picture: 'https://m.media-amazon.com/images/S/aplus-media/sota/ffa860e4-24db-41ec-80be-0daf43480911.__CR0,0,300,300_PT0_SX300_V1___.jpg',
  //         name: 'Thor',
  //         price: '350 tk',
  //         rating: 4.0,
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Transformers Toys',
  //     toys: [
  //       {
  //         picture: 'https://cdn.shopify.com/s/files/1/0144/1058/0022/products/transformers-optimus-prime-toys-movie-nitro-series-action-figure-collection-movies-figuresworldstore-anime-figures_404_300x300.jpg?v=1571716373',
  //         name: 'Optimas Prime',
  //         price: '430 tk',
  //         rating: 4.2,
  //       },
  //       {
  //         picture: 'https://static.thcdn.com/productimg/300/300/13496795-1444981999894557.jpg',
  //         name: 'Ironhide',
  //         price: '180 tk',
  //         rating: 4.8,
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Marvel Toys',
  //     toys: [
  //       {
  //         picture: 'https://static.thcdn.com/productimg/300/300/12589904-9584770498425364.jpg',
  //         name: 'Spider-Man',
  //         price: '200 tk',
  //         rating: 4.7,
  //       },
  //       {
  //         picture: 'https://cdn.shopify.com/s/files/1/0009/1707/8060/products/Retro-Loki-Pack-pack_300x300.jpg?v=1646805754',
  //         name: 'Loki',
  //         price: '250 tk',
  //         rating: 4.6,
  //       },
  //     ],
  //   },
  // ];
   const [toys,setToys]=useState([]);
  const [activeTab,setActiveTab] = useState("Avengers");

  useEffect(()=>{
    fetch('http://localhost:5000/alltoys')
    .then(res=>res.json())
    .then(result=>{
      setToys(result)
    })
  },[activeTab])

  const handleTabSelect = (tabName) => {
   setActiveTab(tabName)
  };
  return (
    <div className='text-center'>
      <h2 className='text-5xl text-indigo-950 font-bold text-center mt-14'>Action Figure Toys</h2>
      <div className='tab-container text-center'>
        <div className='text-center mx-auto w-100'>
          <div className='tabs d-flex gap-4 items-center justify-center mt-10 bordered'>
             <div onClick={()=>handleTabSelect("Avengers")}
             className={`text-2xl text-black font-bold tab tab2 Avengers ${
              activeTab == "Avengers" ? " bg-warning text-black" : ""
             }`}>
                Avengers
             </div>
             <div onClick={()=>handleTabSelect("Transformers")}
             className={`text-2xl text-black font-bold tab tab2 Transformers ${
              activeTab == "Transformers" ? " bg-warning text-black" : ""
             }`}>
                 Transformers
             </div>
             <div onClick={()=>handleTabSelect("Marvel")}
             className={`text-2xl text-black font-bold tab tab2 Marvel ${
              activeTab == "Marvel" ? " bg-warning text-black" : ""
             }`}>
                 Marvel  
             </div>
          </div>

        </div>
      </div>
      <div className='mt-5 grid grid-cols-1 lg:grid-cols-2'> 
      {
       // eslint-disable-next-line react/jsx-key
       toys?.map(toy=><Toy key={toy._id} toy={toy}></Toy>)

        }
      

      </div>
    </div>
  );
};


export default ShopByCategory;