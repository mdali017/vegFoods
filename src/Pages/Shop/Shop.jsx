import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import shopImg from '../../assets/Image/Shop/shop.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import ProductCard from '../Shared/ProductCard/ProductCard';
import ShopTab from './ShopTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Shop = () => {

    const categories = ['allproducts', 'Vegetable', 'Fruits', 'Juice', 'Dried']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    // const [tabIndex, setTabIndex] = useState(0);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [Fproduct] = useMenu();

    const allproducts = Fproduct;
    const Vegetables = Fproduct.filter(item => item.categoryName === "Vegetables");
    const Fruits = Fproduct.filter(item => item.categoryName === "Fruits");
    const Juice = Fproduct.filter(item => item.categoryName === "Juice");
    const Dried = Fproduct.filter(item => item.categoryName === "Dried");
    return (
        <div className='mx-auto'>
            <Helmet>
                <title>VEGFOODS | Shop</title>
            </Helmet>
            <Cover img={shopImg} title={"Shop"}></Cover>
            <Tabs className={"text-center mt-20 mb-20"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}  >
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Vegetables</Tab>
                    <Tab>Fruits</Tab>
                    <Tab>Juice</Tab>
                    <Tab>Dried</Tab>
                </TabList>
                <TabPanel>
                    {/* <div className='grid grid-cols-3 gap-10 w-[1140px] mx-auto'>
                        {
                            allproducts.map(item => <ProductCard
                                key={item._id}
                                FproductAll={item}
                            ></ProductCard>)
                        }
                    </div> */}

                    <ShopTab items={allproducts}></ShopTab>
                </TabPanel>
                <TabPanel>
                   <ShopTab items={Vegetables}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={Fruits}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={Juice}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={Dried}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;