import React from 'react';
import Banner from '../Banner/Banner';
import SupportSection from '../SupportSection/SupportSection';
import CategorySection from '../CategorySection/CategorySection';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import DealsSection from '../DealsSection/DealsSection';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
import SubcribeSection from '../SubcribeSection/SubcribeSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>VEGFOODS || Home</title>
            </Helmet>
            <Banner></Banner>
            <SupportSection></SupportSection>
            <CategorySection></CategorySection>
            <FeatureProducts></FeatureProducts>
            <DealsSection></DealsSection>
            <Testimonials></Testimonials>
            <SubcribeSection></SubcribeSection>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;