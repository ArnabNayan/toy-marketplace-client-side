import React from 'react';


const Gallery = () => {
    return (
       <>
          <h2 className='text-4xl mt-5 text-indigo-950 font-bold text-center'>Our Photo Gallery</h2> 
          <div className="h-96 carousel carousel-horizontal lg:carousel-vertical  rounded-box mt-8 bg-slate-300">
  <div className="carousel-item h-full gap-4">
    <img src="https://www.fnp.com/images/pr/x/v20200817204537/kids-avengers-action-figure-toy-spiderman-red_5.jpg" />
    <img src="https://cdn.shopify.com/s/files/1/0064/6679/7632/articles/Genuine-Marvel-Super-Heroes-Avengers-Endgame-Iron-Man-Hulk-Captain-America-Spider-Man-Action-Figure-Model_480x540_crop_center.png?v=1618590731" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGiHzf15VBY1iVggaUUzzAH84RBsNjCXCJw&usqp=CAU" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KzMAMaKjvm98UcFaWGUQ9e7UNDehk0J_Jg&usqp=CAU" />
  </div> 
  <div className="carousel-item h-full mt-7 gap-4">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutw-5VkVEKZoALox9C9-7aitH53zEkRr5gg&usqp=CAU" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLeu4n6U9XAraVumxYPdBNg3R_A1qp6IX1A&usqp=CAU" />
  <img src="https://i1.fnp.com/images/pr/l/v20200817204535/kids-avengers-action-figure-toy-spiderman-red_1.jpg" />
  <img src="https://i.ebayimg.com/images/g/Q6cAAOSwRKhjvjCu/s-l1600.png" />
  </div> 
  <div className="carousel-item h-full mt-7 gap-4">
  <img src="https://m.media-amazon.com/images/I/610PMc2t+lL._AC._SR360,460.jpg" />
  <img src="https://m.media-amazon.com/images/I/411wMdcE27L._AC_.jpg" />
  <img src="https://m.media-amazon.com/images/I/41V6kMej9cL._AC_SY350_.jpg" />
  <img src="https://m.media-amazon.com/images/I/811K7khoBLL._AC_SY355_.jpg" />
    
  </div> 
  
</div>
       </>
  );
};

    
 

export default Gallery;