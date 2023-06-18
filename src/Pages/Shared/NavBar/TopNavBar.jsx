import React from 'react';
import { FaPhoneAlt, FaTelegram } from 'react-icons/fa';

const TopNavBar = () => {
    return (
        <div>
            <div className='bg-[#82AE46] h-10 pl-16'>
                <div className="grid grid-flow-col gap-4 items-center">
                <a className="link link-hover flex mt-3"><FaPhoneAlt ></FaPhoneAlt> <span className='ml-4 -mt-2 '>+2 392 3929 210</span></a>
                        <a className="link link-hover flex mt-3"><FaTelegram ></FaTelegram> <span className='ml-4 -mt-2 '>	info@yourdomain.com</span></a>
                    <a className="link link-hover text-sm -mb-2">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</a>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;