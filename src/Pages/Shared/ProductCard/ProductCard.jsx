import React from 'react';

const ProductCard = ({ FproductAll }) => {
    // console.log(FproductAll, 4)
    const { image, vegetableName, price } = FproductAll;
    return (
        <div>
            <div className=' w-[285px] h-[328px] border'>
                <img src={image} alt="" />
                <div className='text-center'>
                    <h1 className='text-2xl mt-4 mb-3'>{vegetableName}</h1>
                    <h2>Price: $<span className='text-green-400 '>{price}</span></h2>
                    <button className='btn btn-primary btn-sm mt-3'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;