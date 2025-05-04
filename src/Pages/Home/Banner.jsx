import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className="md:bg-[url('../../src/assets/bird5.jpeg')] bg-[url('../../src/assets/bird7.jpeg')] bg-cover bg-center h-[400px] w-full object-cover text-white flex items-center justify-center" >
            <div className="text-center space-y-6 max-w-3xl px-4 bg-transparent backdrop-blur-[2px]">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Welcome To Our <motion.span
                        animate={{ color: ['#3355ff', '#33ff4c', '#b233ff'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >BlogWide</motion.span>
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="md:text-gray-600 text-gray-300 text-lg "
                >
                    Explore thousands of blogs or write your own. From tech to travel, lifestyle to learning — BlogWide connects readers with real stories and ideas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex justify-center gap-4"
                >
                    <Link to='/allBlogs'>
                        <button className="bg-white text-black md:px-6 md:py-2 px-3 py-1 font-semibold rounded-full hover:bg-black hover:text-white transition">
                            Start Reading
                        </button>
                    </Link>
                    <Link to='/addBlog'>
                        <button className="bg-transparent border border-white md:px-6 md:py-2 px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
                            Write a Blog
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;