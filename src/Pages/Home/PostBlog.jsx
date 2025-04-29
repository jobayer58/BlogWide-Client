import React, { useEffect, useState } from 'react';
import PostBlogCard from './PostBlogCard';

const PostBlog = () => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/homeBlogs')
        .then(res =>  res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='py-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-10 md:mx-5 mx-4 items-stretch'>
                {
                    blogs.map(blog => 
                    <PostBlogCard
                    key={blog._id}
                    blog={blog}
                    ></PostBlogCard>)
                }
            </div>
        </div>
    );
};

export default PostBlog;