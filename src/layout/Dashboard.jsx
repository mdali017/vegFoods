import React from 'react';
import { FaBars, FaCalendarAlt, FaCoffee, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/user-home'> <FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/payment'> <FaWallet></FaWallet> Payment History </NavLink></li>
                    <li>
                        <NavLink to='/dashboard/mycart'> <FaShoppingCart></FaShoppingCart> My Cart  <span className="badge badge-secondary">+{cart?.length || 0}</span> </NavLink>
                        </li>
                    <div className="divider"></div>
                    <li> <NavLink to='/'> <FaHome></FaHome> Home</NavLink> </li>
                    <li> <NavLink to='/our-item'> <FaBars></FaBars> Menu </NavLink></li>
                    <li> <NavLink to='/our-item'> <FaCoffee></FaCoffee> Our Item</NavLink> </li>
                    <li> <NavLink to='/our-item'><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;