import React from 'react';
import categoryImg1 from '../../../assets/Image/Category/category-1.jpg'
import categoryImg2 from '../../../assets/Image/Category/category-2.jpg'
import categoryImg3 from '../../../assets/Image/Category/category-3.jpg'
import categoryImg4 from '../../../assets/Image/Category/category-4.jpg'
import categoryImg5 from '../../../assets/Image/Category/category.jpg'

const CategorySection = () => {
    return (
        <div className='w-[1140px] mx-auto grid grid-cols-3 gap-10'>
            <div>
                <div className='mb-10'>
                    <div className='w-[320px] h-[250px] bg-red-800'>
                        <img src={categoryImg1} alt="" />
                        <div className='  -mt-7   '>
                            <h1 className=' text-2xl  text-white '>Vegatables</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[320px] h-[250px] '>
                        <img src={categoryImg2} alt="" />
                        <div className='  -mt-7   '>
                            <h1 className=' text-2xl  text-white '>Fruits</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='w-[320px] text-center absolute h-[270px] '>
                        <h1 className=' mb-4 text-2xl text-green-700 uppercase mt-10'>Vegetables</h1>
                        <p className=''>Protect the health of every home</p>
                        <button className='btn btn-primary btn-outline mt-4'>Shop Now</button>
                        
                    </div>
                </div>
                <div className=' mt-10  '>
                    <div className='  '>
                        <img src={categoryImg5} alt="" />
                        <div className='  -mt-7   '>
                            <h1 className=' text-2xl  text-white '>Fruits</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div >
                    <div className='w-[320px] h-[250px] '>
                        <img src={categoryImg3} alt="" />
                        <div className='  -mt-7   '>
                            <h1 className=' text-2xl  text-white '>Juices</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[320px] mt-10 '>
                        <img src={categoryImg4} alt="" />
                        <div className='  -mt-7   '>
                            <h1 className=' text-2xl  text-white '>Dried</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;