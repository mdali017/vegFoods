import React from 'react';
import Banner from '../Banner/Banner';
import SupportSection from '../SupportSection/SupportSection';
import CategorySection from '../CategorySection/CategorySection';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import DealsSection from '../DealsSection/DealsSection';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SupportSection></SupportSection>
            <CategorySection></CategorySection>
            <FeatureProducts></FeatureProducts>
            <DealsSection></DealsSection>
            <Testimonials></Testimonials>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;