import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import userIcon from '../../assets/male.png'
import AuthContext from '../../context/AuthContext';
import Comment from './Comment';
import CommentsCard from './CommentsCard';

const PostBlogDetails = () => {
    const blogDetails = useLoaderData()
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])
    const { headline, imgUrl, description, category, author, publishDate, readTime, tags, readingLevel, language, _id } = blogDetails
    const tagList = Array.isArray(tags) ? tags : tags.split(',');

    const fetchComments = async () => {
        const res = await fetch(`https://blog-wide-server.vercel.app/comment/${blogDetails._id}`);
        const data = await res.json();
        setComments(data);
    };

    useEffect(() => {
        fetchComments();
    }, [blogDetails._id]);

    return (
        <div key={_id}>
            <div className="card bg-base-100  lg:w-4/6 mx-auto  shadow-sm ">
                <figure className="px-5 pt-5">
                    <img
                        src={imgUrl}
                        alt="Shoes"
                        className="rounded-xl lg:w-full lg:h-[700px] object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{headline}</h2>
                    <div className='flex justify-center items-center gap-2'>
                        <img
                            className="md:w-10 md:h-10 w-10 h-10 rounded-full object-cover"
                            src={blogDetails.userImage ? blogDetails.userImage : userIcon}
                            alt="Author"
                        />
                        <p className='text-xl'> {author}</p>
                    </div>
                    <p>{description}</p>
                    <h1>Publish Date: {publishDate}</h1>
                    <p>Blog Type: {category}</p>
                    <h2 className='md:flex gap-2 grid '>
                        {
                            tagList.map((tag, index) => <button key={index} className='btn btn-outline btn-info'>{tag}</button>)
                        }
                    </h2>
                    <p>Average Read Time: {readTime}</p>
                    <p>Reading Level: {readingLevel}</p>
                    <p>Language: {language}</p>
                    <div className="card-actions" >
                        {user?.email === blogDetails?.userEmail ? (
                            <Link to={`/blogs/update/${blogDetails._id}`}>
                                <button className="btn btn-dash btn-success">Update</button>
                            </Link>
                        ) : (
                            <button className="btn btn-dash btn-disabled  cursor-not-allowed" disabled>
                                Update
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div>
                {user?.email !== blogDetails?.userEmail && (
                    <Comment blogId={_id} fetchComments={fetchComments} />
                )}
            </div>
            <div>
                <h1 className='text-center font-semibold md:text-3xl text-3xl py-4'>Total Comments:({comments.length})</h1>
                <div className="grid md:grid-cols-3 gap-6 px-10 py-8">
                    {
                        comments.map(com => <CommentsCard key={com._id} com={com}></CommentsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostBlogDetails;