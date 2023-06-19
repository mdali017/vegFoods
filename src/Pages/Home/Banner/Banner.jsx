import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import sliderImg1 from '../../../assets/Image/Slider/bg_2.jpg'
import sliderImg2 from '../../../assets/Image/Slider/bg_1.jpg'
import sliderImg3 from '../../../assets/Image/Slider/bg_3.jpg'

const Banner = () => {

    return (
        <div>
            <Carousel autoPlay>
                <div>
                    <img src={sliderImg1} />
                    <p className="legend">Legend 1</p>
                    {/* <button className='btn btn-primary relative '>View Details</button> */}
                </div>
                <div>
                    <img src={sliderImg2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={sliderImg3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;