import React from 'react';
import Banner from '../Banner/Banner';
import SupportSection from '../SupportSection/SupportSection';
import CategorySection from '../CategorySection/CategorySection';
import FeatureProducts from '../FeatureProducts/FeatureProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SupportSection></SupportSection>
            <CategorySection></CategorySection>
            <FeatureProducts></FeatureProducts>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;