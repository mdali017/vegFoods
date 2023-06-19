import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const FeatureProducts = () => {
    const [Fproducts, setFproducts] = useState();

    useEffect( () => {
         fetch('products.json')
         .then(res => res.json())
         .then(data => {
            const featureProducts = data.filter(item => item.price < 1)
            setFproducts(featureProducts)
         })
    }, [])

    return (
        <>
            <div className='mt-20 mb-16'>
                <SectionTitle topH={"Feature Products"} head={"Our Products"} topB={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"}></SectionTitle>
            </div>
            <div className='grid grid-cols-3 gap-10 w-[1140px] mx-auto'>
                {
                    Fproducts.map(Fproduct => <ProductCard 
                        key={Fproduct.id}
                        Fproduct={Fproduct}
                        ></ProductCard>)
                }
            </div>
        </>
    );
};

export default FeatureProducts;