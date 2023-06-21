import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/Image/Slider/bg_2.jpg'
import FeatureProducts from '../../Home/FeatureProducts/FeatureProducts';
import { Parallax } from 'react-parallax';

const OurItemPage = () => {
    return (
        <div>
            <Cover img={img} title={"Our Items"}></Cover>
            <FeatureProducts></FeatureProducts>
            <Cover img={img} title={"Our Fruits"}></Cover>
            <FeatureProducts></FeatureProducts>
            <Cover img={img} title={"Our Vegetable"}></Cover>
            <FeatureProducts></FeatureProducts>
        </div>
    );
};

export default OurItemPage;