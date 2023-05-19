import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';
import ExtraFeatures from '../ExtraFeatures/ExtraFeatures';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Gallery></Gallery>
         <Features></Features>
         <ExtraFeatures></ExtraFeatures>
        </div>
    );
};

export default Home;