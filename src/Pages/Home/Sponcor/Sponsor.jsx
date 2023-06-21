import React from 'react';
import Marquee from "react-fast-marquee";
import SponsorImg1 from '../../../assets/Image/Sponsor/partner-1.png'
import SponsorImg2 from '../../../assets/Image/Sponsor/partner-2.png'
import SponsorImg3 from '../../../assets/Image/Sponsor/partner-3.png'
import SponsorImg4 from '../../../assets/Image/Sponsor/partner-4.png'
import SponsorImg5 from '../../../assets/Image/Sponsor/partner-5.png'

const Sponsor = () => {
    return (
        <div>
            <Marquee>
                <div className='flex gap-10 mt-20'>
                    <img src={SponsorImg1} width={180} alt="" />
                    <img src={SponsorImg2} width={180} alt="" />
                    <img src={SponsorImg3} width={180} alt="" />
                    <img src={SponsorImg4} width={180} alt="" />
                    <img src={SponsorImg5} width={180} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Sponsor;