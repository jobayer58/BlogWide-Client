import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        const locationSet = location.pathname;
        const locationTitle = locationSet === '/' ? 'Home' : locationSet.split('/')[1];
        document.title = `BlogWide | ${locationTitle.charAt(0).toUpperCase() + locationTitle.slice(1)}`;
    }, [location]);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;