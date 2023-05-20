import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from '../Toy/Toy';

const ShopByCategory = () => {
  const categories = [
    {
      title: 'Avengers Toys',
      toys: [
        {
          picture: 'https://static.thcdn.com/productimg/300/300/12127953-1884673519935062.jpg',
          name: 'Iron Man',
          price: '300 tk',
          rating: 4.5,
        },
        {
          picture: 'https://m.media-amazon.com/images/S/aplus-media/sota/ffa860e4-24db-41ec-80be-0daf43480911.__CR0,0,300,300_PT0_SX300_V1___.jpg',
          name: 'Thor',
          price: '350 tk',
          rating: 4.0,
        },
      ],
    },
    {
      title: 'Transformers Toys',
      toys: [
        {
          picture: 'https://cdn.shopify.com/s/files/1/0144/1058/0022/products/transformers-optimus-prime-toys-movie-nitro-series-action-figure-collection-movies-figuresworldstore-anime-figures_404_300x300.jpg?v=1571716373',
          name: 'Optimas Prime',
          price: '430 tk',
          rating: 4.2,
        },
        {
          picture: 'https://static.thcdn.com/productimg/300/300/13496795-1444981999894557.jpg',
          name: 'Ironhide',
          price: '180 tk',
          rating: 4.8,
        },
      ],
    },
    {
      title: 'Marvel Toys',
      toys: [
        {
          picture: 'https://static.thcdn.com/productimg/300/300/12589904-9584770498425364.jpg',
          name: 'Spider-Man',
          price: '200 tk',
          rating: 4.7,
        },
        {
          picture: 'https://cdn.shopify.com/s/files/1/0009/1707/8060/products/Retro-Loki-Pack-pack_300x300.jpg?v=1646805754',
          name: 'Loki',
          price: '250 tk',
          rating: 4.6,
        },
      ],
    },
  ];
   const [toys,setToy]=useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(()=>{
    fetch('http://localhost:5000/alltoys')
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
    })
  },[])

  const handleTabSelect = (index) => {
    setSelectedCategory(index);
  };
  return (
    <div className='text-center'>
      <h2 className='text-5xl text-indigo-950 font-bold text-center mt-14'>Action Figure Toys</h2>

      <Tabs className='mt-10 ' selectedIndex={selectedCategory} onSelect={handleTabSelect}>
        <TabList className='text-indigo-500 text-2xl '>
          {categories.map((category) => (
            <Tab key={category.title}>{category.title}</Tab>
          ))}
        </TabList>
    
        {
        categories.map((category) => (
          <TabPanel key={category.title}>
             <div className='grid grid-cols-2 mt-5'>
            {category.toys.map((toy) => (
              <div key={toy.name}>
                <div className="hero bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src={toy.picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                      <h1 className="text-5xl font-bold">{toy.name}</h1>
                      <p className='py-4'>Price:{toy.price}</p>
                      <p>Rating:{toy.rating}</p>
                      <button className="btn btn-secondary mt-4">View Details</button>
                    </div>
                  </div>
                </div>
              
              </div>
            ))}
              </div>
          </TabPanel>
        ))}
      
      </Tabs>
      <div className='mt-5 row'> 
      {
        toys?.map(toy=>{
          <Toy toy={toy}></Toy>
        })

        }
      

      </div>
    </div>
  );
};


export default ShopByCategory;