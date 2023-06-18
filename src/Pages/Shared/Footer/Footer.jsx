import React from 'react';
import Container from '../../../components/Container/Container';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <div className='bg-base-200 pl-16'>
                <footer className="footer p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  text-base-content">
                    <div>
                        <h1 className='text-xl font-semibold mb-5 uppercase text-green-600'>VegFoods</h1>
                        <p>Far far away, behind the word <br /> mountains, far from the <br /> countries Vokalia and <br /> Consonantia</p>
                        <div className="grid grid-flow-col gap-4 mt-9">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
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
                <footer className="footer footer-center p-4  text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </div>
        </Container>
    );
};

export default Footer;