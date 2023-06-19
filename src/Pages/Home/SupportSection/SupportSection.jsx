import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import icons1 from '../../../assets/Image/Icons/shipped.png'
import icons2 from '../../../assets/Image/Icons/medal.png'
import icons3 from '../../../assets/Image/Icons/healthy-heart.png'
import icons4 from '../../../assets/Image/Icons/customer-service.png'

const SupportSection = () => {
    return (
        <div className='w-[1110px] pt-20 pb-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            <div className='w-25 '>
                <div className='text-7xl border w-[100px] rounded-full mb-5 hover:bg-blue-600 hover:text-white'>
                    <img src={icons1} alt="" />
                </div>
                <h1>FREE SHIPPING</h1>
                <h4 className='text-[#6c757d] text-sm mt-3'>ON ORDER OVER $100</h4>
            </div>
            <div className='w-25 '>
                <div className='text-7xl border w-[100px] rounded-full mb-5 hover:bg-blue-600 hover:text-white'>
                <img src={icons2} alt="" />
                </div>
                <h1>ALWAYS FRESH</h1>
                <h4 className='text-[#6c757d] text-sm mt-3'>PRODUCT WELL PACKAGE</h4>
            </div>
            <div className='w-25 '>
                <div className='text-7xl border w-[100px] rounded-full mb-5 hover:bg-blue-600 '>
                <img src={icons3} className='hover:text-white'  alt="" />
                </div>
                <h1>SUPERIOR QUALITY</h1>
                <h4 className='text-[#6c757d] text-sm mt-3'>QUALITY PRODUCTS</h4>
            </div>
            <div className='w-25 '>
                <div className='text-7xl border w-[100px] rounded-full mb-5 hover:bg-blue-600 hover:text-white'>
                <img src={icons4} alt="" />
                </div>
                <h1>SUPPORT</h1>
                <h4 className='text-[#6c757d] text-sm mt-3'>24/7 SUPPORT</h4>
            </div>
        </div>
    );
};

export default SupportSection;