import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/Image/Slider/bg_2.jpg'
import vegetableImg from '../../../assets/Image/OurItemPage/vegetables.jpg'
import fruitsImg from '../../../assets/Image/OurItemPage/fruits.jpg'
import FeatureProducts from '../../Home/FeatureProducts/FeatureProducts';
import { Parallax } from 'react-parallax';
import useMenu from '../../../hooks/useMenu';
import { Helmet } from 'react-helmet-async';
import MenuCategory from '../MenuCategory/MenuCategory';

const OurItemPage = () => {
    const [Fproduct, loading] = useMenu();
    const allproducts = Fproduct.slice(0, 6);
    const Vegetables = Fproduct.filter(item => item.categoryName === "Vegetables");
    const vegetables = Vegetables.slice(0, 9)
    const Fruits = Fproduct.filter(item => item.categoryName === "Fruits");
    
    return (
        <div>
            <Helmet>
                <title>VEGFOODS | Our Items</title>
            </Helmet>
            <Cover img={img} title={"Our Items"}></Cover>

            {/* MenuCategory Using for allproducts  */}
            <MenuCategory items={allproducts} title={"allproducts"}></MenuCategory>

            {/* MenuCategory Using for Our  */}
            <Cover img={vegetableImg} title={"Vegetable"}></Cover>
            <MenuCategory items={vegetables} title={"Vegetable"}></MenuCategory>
            <Cover img={fruitsImg} title={"Fruits"}></Cover>
            <MenuCategory items={Fruits} title={"Fruits"}></MenuCategory>
        </div>
    );
};

export default OurItemPage;