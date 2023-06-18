import React from 'react';
import Container from '../../../components/Container/Container';
import { FaBeer, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container className='bg-base-200'>
            <div>
                <footer className="footer p-10  text-base-content">
                    <div>
                        <h1 className='text-xl font-semibold uppercase text-green-600'>VegFoods</h1>
                        <p>Far far away, behind the word <br /> mountains, far from the <br /> countries Vokalia and <br /> Consonantia</p>
                    </div>
                    <div>
                        <span className="footer-title">Menu</span>
                        <a className="link link-hover">Shop</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Journal</a>
                        <a className="link link-hover">Contact Us</a>
                    </div>
                    <div>
                        <span className="footer-title">Help</span>
                        <a className="link link-hover">Shipping Information</a>
                        <a className="link link-hover">Returns & Exchange</a>
                        <a className="link link-hover">Terms & Conditions</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </div>
                    <div>
                        <span className="footer-title">Have a Questions?</span>
                        <a className="link link-hover flex mt-2"><FaMapMarkerAlt className='text-2xl'></FaMapMarkerAlt><span className='ml-4 -mt-1'>203 Fake St. Mountain <br /> View, San Francisco, <br /> California, USA</span></a>
                        <a className="link link-hover flex mt-3"><FaPhoneAlt className='text-2xl'></FaPhoneAlt> <span className='ml-4 font-bold text-[18px]'>+2 392 3929 210</span></a>
                        <a className="link link-hover flex mt-3"><FaEnvelope className='text-2xl'></FaEnvelope> <span className='ml-4 font-bold text-[18px]'>	info@yourdomain.com</span></a>
                    </div>
                </footer>
            </div>
        </Container>
    );
};

export default Footer;