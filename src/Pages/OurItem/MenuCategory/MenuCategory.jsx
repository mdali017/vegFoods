import React from 'react';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const MenuCategory = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 w-[1140px] mx-auto mt-10 '>
                {
                   items.map(Fproduct => <ProductCard
                        key={Fproduct._id}
                        FproductAll={Fproduct}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center mt-10 mb-10'>
                <button className='btn btn-warning btn-outline'>See More</button>
            </div>
        </div>
    );
};

export default MenuCategory;