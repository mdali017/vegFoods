import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => {
                console.log(data, 14)
                setTestimonials(data)
            })
    }, [])
    return (
        <>
            <div className='mt-20'>
                <SectionTitle
                    topH={"Testimony"}
                    head={"Our satisfied customer says"}
                ></SectionTitle>
                <p className='text-center'>Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts. Separated they live in</p>

            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div>
                    {
                        testimonials.map(testimonial => <SwiperSlide
                            key={testimonial._id}
                            testimonial={testimonial}
                        >

                            <div className='mt-10  p-16 '>
                                <FaQuoteRight></FaQuoteRight>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={testimonial.rating}
                                    readOnly
                                />
                                <p>{testimonial.details.slice(0, 150)}...</p>
                                <h3 className='text-xl text-green-800 mt-5'>{testimonial.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </div>


            </Swiper>
        </>
    );
};

export default Testimonials;