import React from 'react';
import TopNavBar from './TopNavBar';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/our-item'>Our Item</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>Shop</summary>
                <ul className="p-2">
                    <li><a>Shop</a></li>
                    <li><a>Cart</a></li>
                    <li><a>Checkout</a></li>
                </ul>
            </details>
        </li>
        <li><a>About</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
        <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+99</div>
        </button>
        <li><a>Register</a></li>
    </>

    return (
        <div>
            <TopNavBar></TopNavBar>
            <div className="navbar fixed z-10 bg-base-100 max-w-screen-2xl top-0 pl-16 pr-16 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className='text-xl font-semibold mb-5 uppercase text-green-600'>VegFoods</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login <FaArrowRight></FaArrowRight> </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;