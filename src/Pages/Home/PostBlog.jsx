import React, { useEffect, useState } from 'react';
import PostBlogCard from './PostBlogCard';

const PostBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://blog-wide-server.vercel.app/homeBlogs')
            .then(res => res.json())
            .then(data => {
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 6);
                setBlogs(selected)
            })
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