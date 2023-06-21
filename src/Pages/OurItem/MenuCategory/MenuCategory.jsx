import React from 'react';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items, title}) => {
    console.log(title, 7)
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
                {/* <Link to='/shop'><button className='btn btn-warning btn-outline'>See More</button></Link> */}
                <Link to={`/shop/${title}`}><button className='btn btn-warning btn-outline'>See More</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;