import React, { useEffect, useState } from 'react';
import AllBlogsCard from './AllBlogsCard';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([])
    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            const queryParams = new URLSearchParams();
            if (category !== 'All') queryParams.append('category', category);
            if (search) queryParams.append('search', search);

            const res = await fetch(`https://blog-wide-server.vercel.app/blogs?${queryParams.toString()}`);
            const data = await res.json();
            setBlogs(data);
        };

        fetchBlogs();
    }, [category, search]);

    return (
        <div className='py-10'>
            {/* category filter */}
            <div className='py-4 md:flex justify-between lg:mx-10 md:mx-5 mx-4 space-y-4 md:space-y-0'>
                <div className=''>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} defaultValue='Blog Type' name='JobType' className="select md:w-48 ">
                        <option value="All">All</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Technology">Technology</option>
                        <option value="Education">Education</option>
                    </select>
                </div>
                <div>
                    <label className="input lg:w-96 md:w-72">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-10 md:mx-5 mx-4 items-stretch'>
                {
                    blogs.map(blog => <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;