import React from 'react';
import DealImg from '../../../assets/Image/Slider/bg_3.jpg'
import './DealsSection.css'

const DealsSection = () => {
    return (
        <div className='mt-20 h-[605px] bg-fixed deal-item'>
            <div className=''>
                {/* <img src={DealImg} alt="" /> */}
                <div className='md:ml-[750px] pt-60'>
                    <h3 className='text-[#82ae46] text-xl mb-5'>Best Price For You</h3>
                    <h1 className='text-4xl uppercase font-bold mb-4'>Deal of the day</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia</p>
                    <h2 className='mt-4 text-xl font-semibold mb-4'>Spinach</h2>
                    <h4>$10 <span className='text-[#82ae46] '>now $5 only</span> </h4>
                    <button className='btn btn-outline  mt-4'>Order Fast</button>
                </div>
            </div>
        </div>
    );
};

export default DealsSection;