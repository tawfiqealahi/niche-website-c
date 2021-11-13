import React from 'react';
import About from '../About/About';
import Products from '../Products/Products';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <About></About>
            <Review></Review>
        </div>
    );
};

export default Home;