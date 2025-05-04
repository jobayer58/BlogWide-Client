import React, { useContext } from 'react';
import Banner from './Banner';
import PostBlog from './PostBlog';
import AuthContext from '../../context/AuthContext';
import NewsLetter from './NewsLetter';
import TopWriter from './TopWriter';
import AboutUs from './AboutUs';

const Home = () => {
    const {loading} =useContext(AuthContext)

    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'><span className="loading loading-ring loading-xl"></span></div>
    }

    return (
        <div>
            <Banner></Banner>
            <PostBlog></PostBlog>
            <NewsLetter></NewsLetter>
            <TopWriter></TopWriter>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;