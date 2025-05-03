import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import userIcon from '../../assets/male.png'
import AuthContext from '../../context/AuthContext';

const PostBlogDetails = () => {
    const blogDetails = useLoaderData()
    const { user } = useContext(AuthContext)
    const { headline, imgUrl, description, category, author, publishDate, readTime, tags, readingLevel, language } = blogDetails

    return (
        <div>
            {/* lg:w-14/16 */}
            <div className="card bg-base-100  lg:w-4/6 mx-auto  shadow-sm ">
                <figure className="px-5 pt-5">
                    <img
                        src={imgUrl}
                        alt="Shoes"
                        // lg:w-6/8 lg:h-[600px]
                        className="rounded-xl lg:w-full lg:h-[700px] object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{headline}</h2>
                    <div className='flex justify-center items-center gap-2'>
                        <img className="md:w-10 md:h-10 w-10 h-10 rounded-full object-cover" src={userIcon} alt="" />
                        <p className='text-xl'> {author}</p>
                    </div>
                    <p>{description}</p>
                    <h1>Publish Date: {publishDate}</h1>
                    <p>Blog Type: {category}</p>
                    <h2 className='md:flex gap-2 grid '>
                        {
                            tags.map((tag, index) => <button key={index} className='btn btn-outline btn-info'>{tag}</button>)
                        }
                    </h2>
                    <p>Average Read Time: {readTime}</p>
                    <p>Reading Level: {readingLevel}</p>
                    <p>Language: {language}</p>
                    <div className="card-actions" >
                        <Link to={`/blogs/update/${blogDetails._id}`}>
                            <button className="btn btn-dash btn-success">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostBlogDetails;