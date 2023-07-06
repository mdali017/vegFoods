import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    // console.log(location)


    const noHeaderAndFooter = location.pathname.includes('/login') || location.pathname.includes('/register');

    return (
        <div>
            {noHeaderAndFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderAndFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;