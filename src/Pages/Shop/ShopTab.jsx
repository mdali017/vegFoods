import React from 'react';
import ProductCard from '../Shared/ProductCard/ProductCard';

const ShopTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 w-[1140px] mx-auto'>
                {
                    items.map(item => <ProductCard
                        key={item._id}
                        FproductAll={item}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ShopTab;