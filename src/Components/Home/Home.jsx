import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';
import ExtraFeatures from '../ExtraFeatures/ExtraFeatures';
import ShopByCategory from '../Categoris/ShopByCategory';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Gallery></Gallery>
         <ShopByCategory></ShopByCategory>
         <Features></Features>
         <ExtraFeatures></ExtraFeatures>
        </div>
    );
};

export default Home;