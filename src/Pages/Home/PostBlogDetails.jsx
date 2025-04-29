import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostBlogDetails = () => {
    const blogDetails = useLoaderData()
    const { headline, imgUrl, description, category, author, publishDate, readTime, tags, readingLevel, language, isFeature } = blogDetails

    return (
        <div>
            <div className="card bg-base-100 lg:w-14/16 mx-auto  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={imgUrl}
                        alt="Shoes"
                        className="rounded-xl lg:w-6/8  lg:h-[600px] object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{headline}</h2>
                    <button className='btn'>Author Name: {author}</button>
                    <p>{description}</p>
                    <h1>{publishDate}</h1>
                    <h2 className='flex gap-2 '>
                        {
                            tags.map((tag,index) => <button key={index} className='btn btn-soft btn-primary'>{tag}</button>)
                        }
                    </h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostBlogDetails;