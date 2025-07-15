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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 items-stretch'>
                {
                    blogs.map(blog =>
                        <div key={blog._id} className="h-full flex">
                            <PostBlogCard blog={blog} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PostBlog;
