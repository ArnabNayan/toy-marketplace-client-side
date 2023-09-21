import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';
import ExtraFeatures from '../ExtraFeatures/ExtraFeatures';
// import ShopByCategory from '../Categoris/ShopByCategory';
import ShopbyAge from '../ExtraFeatures/ShopbyAge/ShopbyAge';
import ReactVideoPlayer from '../ExtraFeatures/ReactVideoPlayer/ReactVideoPlayer';
import Customer from '../ExtraFeatures/Customer/Customer';
import Flashsell from '../ExtraFeatures/Flashsell/Flashsell';
import LearnUs from '../ExtraFeatures/LearnUs/LearnUs';



const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Gallery></Gallery>
      
         <Flashsell/>
         <LearnUs/>
         {/* <ShopByCategory></ShopByCategory> */}
         <Features></Features>
         <ShopbyAge></ShopbyAge>
         <ReactVideoPlayer></ReactVideoPlayer>
         
         <ExtraFeatures></ExtraFeatures>
         <Customer></Customer>
        </div>
    );
};

export default Home;